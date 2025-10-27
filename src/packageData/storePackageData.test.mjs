import { jest, beforeAll, afterAll } from '@jest/globals';
import nock from 'nock';
import { ALL_PACKAGE_DATA_STORE_KEY } from './constants.mjs';

// Mock the dependencies before importing them
const mockStore = {
  setJSON: jest.fn().mockResolvedValue({ modified: '2025-01-01T00:00:00Z', etag: 'test-etag' }),
};

const mockRetrievePackageNames = jest.fn();
const mockGetRoadieStore = jest.fn(() => mockStore);

// Mock modules
jest.unstable_mockModule('./getRoadieStore.mjs', () => ({
  default: mockGetRoadieStore,
}));

jest.unstable_mockModule('./retrievePackageNames.mjs', () => ({
  default: mockRetrievePackageNames,
}));

// Import the module under test after mocking - wrapped to avoid top-level await
let storePackageData;
const loadModule = async () => {
  const module = await import('./storePackageData.mjs');
  storePackageData = module.default;
};

describe('#storePackageData', () => {
  beforeAll(async () => {
    await loadModule();
  });
  beforeEach(() => {
    // Reset all mocks before each test
    jest.clearAllMocks();
    nock.cleanAll();

    // Reset the mock implementations
    mockStore.setJSON.mockResolvedValue({ modified: '2025-01-01T00:00:00Z', etag: 'test-etag' });
    mockGetRoadieStore.mockReturnValue(mockStore);
  });

  afterEach(() => {
    // Ensure all nock interceptors are used
    if (!nock.isDone()) {
      nock.cleanAll();
    }
  });

  afterAll(() => {
    nock.restore();
  });

  describe('successful data retrieval and storage', () => {
    it('should fetch package data from NPM registry and stats from NPM API', async () => {
      const packageNames = [
        { packageName: '@backstage/plugin-test', registry: 'npm' },
        { packageName: 'regular-package', registry: 'npm' }
      ];
      mockRetrievePackageNames.mockResolvedValue(packageNames);

      // Mock NPM registry responses for package metadata
      const npmPackageData1 = {
        _id: '@backstage/plugin-test',
        name: '@backstage/plugin-test',
        'dist-tags': { latest: '1.0.0' },
        versions: {
          '1.0.0': {
            name: '@backstage/plugin-test',
            version: '1.0.0',
            backstage: { role: 'frontend-plugin' },
          },
        },
        time: {
          created: '2024-01-01T00:00:00Z',
          modified: '2024-06-01T00:00:00Z',
          '1.0.0': '2024-06-01T00:00:00Z',
        },
        maintainers: [{ name: 'test', email: 'test@example.com' }],
        license: 'Apache-2.0',
        repository: { type: 'git', url: 'https://github.com/backstage/backstage' },
      };

      const npmPackageData2 = {
        _id: 'regular-package',
        name: 'regular-package',
        'dist-tags': { latest: '2.0.0' },
        versions: {
          '2.0.0': {
            name: 'regular-package',
            version: '2.0.0',
          },
        },
        time: {
          created: '2024-01-01T00:00:00Z',
          modified: '2024-06-01T00:00:00Z',
          '2.0.0': '2024-06-01T00:00:00Z',
        },
        maintainers: [{ name: 'maintainer', email: 'maintainer@example.com' }],
        license: 'MIT',
      };

      // Note: fetch() in the actual code doesn't manually encode the URL
      // The package name is concatenated directly, but fetch handles encoding
      nock('https://registry.npmjs.org').get('/@backstage/plugin-test').reply(200, npmPackageData1);

      nock('https://registry.npmjs.org').get('/regular-package').reply(200, npmPackageData2);

      // Mock NPM API responses for download stats
      const statsData1 = {
        downloads: 12345,
        package: '@backstage/plugin-test',
        start: '2024-05-01',
        end: '2024-06-01',
      };

      const statsData2 = {
        downloads: 67890,
        package: 'regular-package',
        start: '2024-05-01',
        end: '2024-06-01',
      };

      nock('https://api.npmjs.org')
        .get('/downloads/point/last-month/@backstage/plugin-test')
        .reply(200, statsData1);

      nock('https://api.npmjs.org')
        .get('/downloads/point/last-month/regular-package')
        .reply(200, statsData2);

      const result = await storePackageData();

      // Verify the result
      expect(result).toEqual({ modified: '2025-01-01T00:00:00Z', etag: 'test-etag' });

      // Verify that retrievePackageNames was called
      expect(mockRetrievePackageNames).toHaveBeenCalledTimes(1);

      // Verify that getRoadieStore was called
      expect(mockGetRoadieStore).toHaveBeenCalledTimes(1);

      // Verify store.setJSON was called correctly
      // First call: storing all package data in one object
      expect(mockStore.setJSON).toHaveBeenCalledWith(
        ALL_PACKAGE_DATA_STORE_KEY,
        expect.objectContaining({
          '@backstage/plugin-test': expect.objectContaining({
            latestVersionPublishedTime: '2024-06-01T00:00:00Z',
            downloadCount: 12345,
            downloadCountPeriod: 'LAST_MONTH',
          }),
          'regular-package': expect.objectContaining({
            latestVersionPublishedTime: '2024-06-01T00:00:00Z',
            downloadCount: 67890,
            downloadCountPeriod: 'LAST_MONTH',
          }),
          roadieLastUpdated: expect.any(String),
        })
      );

      // Subsequent calls: storing each package individually with versioned keys
      expect(mockStore.setJSON).toHaveBeenCalledWith(
        '@backstage/plugin-test',
        expect.objectContaining({
          name: '@backstage/plugin-test',
          latestVersion: '1.0.0',
          downloadCount: 12345,
          downloadCountPeriod: 'LAST_MONTH',
          backstage: { role: 'frontend-plugin' },
          registry: 'npm',
          roadieLastUpdated: expect.any(String),
        })
      );

      expect(mockStore.setJSON).toHaveBeenCalledWith(
        'regular-package',
        expect.objectContaining({
          name: 'regular-package',
          latestVersion: '2.0.0',
          downloadCount: 67890,
          downloadCountPeriod: 'LAST_MONTH',
          registry: 'npm',
          roadieLastUpdated: expect.any(String),
        })
      );

      // Total calls: 1 for all packages + 2 individual packages = 3
      expect(mockStore.setJSON).toHaveBeenCalledTimes(3);

      // Verify all nock interceptors were used
      expect(nock.isDone()).toBe(true);
    });

    it('should handle packages with missing download stats', async () => {
      const packageNames = [{ packageName: '@backstage/plugin-no-stats', registry: 'npm' }];
      mockRetrievePackageNames.mockResolvedValue(packageNames);

      const npmPackageData = {
        _id: '@backstage/plugin-no-stats',
        name: '@backstage/plugin-no-stats',
        'dist-tags': { latest: '1.0.0' },
        versions: {
          '1.0.0': {
            name: '@backstage/plugin-no-stats',
            version: '1.0.0',
          },
        },
        time: {
          created: '2024-01-01T00:00:00Z',
          modified: '2024-06-01T00:00:00Z',
          '1.0.0': '2024-06-01T00:00:00Z',
        },
        maintainers: [{ name: 'test', email: 'test@example.com' }],
        license: 'Apache-2.0',
      };

      nock('https://registry.npmjs.org')
        .get('/@backstage/plugin-no-stats')
        .reply(200, npmPackageData);

      // Mock stats API returning an error or no data for this package
      nock('https://api.npmjs.org')
        .get('/downloads/point/last-month/@backstage/plugin-no-stats')
        .reply(200, { package: 'wrong-package-name', downloads: 0 });

      const result = await storePackageData();

      expect(result).toEqual({ modified: '2025-01-01T00:00:00Z', etag: 'test-etag' });

      // Verify the package was stored without download stats
      expect(mockStore.setJSON).toHaveBeenCalledWith(
        '@backstage/plugin-no-stats',
        expect.objectContaining({
          name: '@backstage/plugin-no-stats',
          latestVersion: '1.0.0',
          registry: 'npm',
          roadieLastUpdated: expect.any(String),
        })
      );

      // The stored data should not have downloadCount property
      const storedPackageData = mockStore.setJSON.mock.calls.find(
        (call) => call[0] === '@backstage/plugin-no-stats'
      )[1];
      expect(storedPackageData.downloadCount).toBeUndefined();
    });

    it('should strip unnecessary data from NPM packages', async () => {
      const packageNames = [{ packageName: 'minimal-package', registry: 'npm' }];
      mockRetrievePackageNames.mockResolvedValue(packageNames);

      const npmPackageData = {
        _id: 'minimal-package',
        _rev: 'rev-123',
        name: 'minimal-package',
        'dist-tags': { latest: '1.0.0', next: '1.1.0-beta' },
        versions: {
          '1.0.0': {
            name: 'minimal-package',
            version: '1.0.0',
            readme: 'This is a very long readme that should be stripped...',
            dist: { tarball: 'https://example.com/package.tgz' },
          },
          '0.9.0': {
            name: 'minimal-package',
            version: '0.9.0',
          },
        },
        time: {
          created: '2024-01-01T00:00:00Z',
          modified: '2024-06-01T00:00:00Z',
          '0.9.0': '2024-05-01T00:00:00Z',
          '1.0.0': '2024-06-01T00:00:00Z',
        },
        maintainers: Array.from({ length: 20 }, (_, i) => ({
          name: `maintainer${i}`,
          email: `maintainer${i}@example.com`,
        })),
        license: 'MIT',
        description: 'A test package',
      };

      nock('https://registry.npmjs.org').get('/minimal-package').reply(200, npmPackageData);

      nock('https://api.npmjs.org')
        .get('/downloads/point/last-month/minimal-package')
        .reply(200, { package: 'minimal-package', downloads: 100 });

      await storePackageData();

      // Verify the stored data has been stripped appropriately
      const storedPackageData = mockStore.setJSON.mock.calls.find(
        (call) => call[0] === 'minimal-package'
      )[1];

      // Should only have 3 time entries (created, modified, and latest version)
      expect(Object.keys(storedPackageData.time).length).toBe(3);
      expect(storedPackageData.time.created).toBeDefined();
      expect(storedPackageData.time.modified).toBeDefined();
      expect(storedPackageData.time['1.0.0']).toBeDefined();

      // Should only have first 15 maintainers
      expect(storedPackageData.maintainers.length).toBe(15);
      expect(storedPackageData.numberOfMaintainers).toBe(20);

      // Should have exactly 2 versions
      expect(storedPackageData.numberOfVersions).toBe(2);

      // Should not include the full versions object
      expect(storedPackageData.versions).toBeUndefined();

      // Should include description and license
      expect(storedPackageData.description).toBe('A test package');
      expect(storedPackageData.license).toBe('MIT');
    });
  });

  describe('edge cases and error scenarios', () => {
    it('should handle empty package list', async () => {
      mockRetrievePackageNames.mockResolvedValue([]);

      const result = await storePackageData();

      expect(result).toEqual({ modified: '2025-01-01T00:00:00Z', etag: 'test-etag' });

      // Should still call setJSON for the all-packages store
      // Note: when the array is empty, the reduce function creates an empty object {}
      expect(mockStore.setJSON).toHaveBeenCalledWith(ALL_PACKAGE_DATA_STORE_KEY, {});

      // Only one call (for the all-packages store, no individual packages)
      expect(mockStore.setJSON).toHaveBeenCalledTimes(1);
    });

    it('should handle non-array package list', async () => {
      // Simulate retrievePackageNames returning null or undefined
      mockRetrievePackageNames.mockResolvedValue(null);

      const result = await storePackageData();

      expect(result).toEqual({ modified: '2025-01-01T00:00:00Z', etag: 'test-etag' });

      // Should treat as empty array and continue
      expect(mockStore.setJSON).toHaveBeenCalledTimes(1);
    });

    it('should handle packages with minimal required fields only', async () => {
      const packageNames = [{ packageName: 'bare-minimum', registry: 'npm' }];
      mockRetrievePackageNames.mockResolvedValue(packageNames);

      const npmPackageData = {
        name: 'bare-minimum',
        'dist-tags': { latest: '1.0.0' },
        versions: {
          '1.0.0': {
            name: 'bare-minimum',
            version: '1.0.0',
          },
        },
        time: {
          created: '2024-01-01T00:00:00Z',
          modified: '2024-06-01T00:00:00Z',
          '1.0.0': '2024-06-01T00:00:00Z',
        },
        maintainers: [],
      };

      nock('https://registry.npmjs.org').get('/bare-minimum').reply(200, npmPackageData);

      nock('https://api.npmjs.org')
        .get('/downloads/point/last-month/bare-minimum')
        .reply(200, { package: 'bare-minimum', downloads: 5 });

      const result = await storePackageData();

      expect(result).toEqual({ modified: '2025-01-01T00:00:00Z', etag: 'test-etag' });

      // Verify it stored successfully
      expect(mockStore.setJSON).toHaveBeenCalledWith(
        'bare-minimum',
        expect.objectContaining({
          name: 'bare-minimum',
          latestVersion: '1.0.0',
          downloadCount: 5,
          downloadCountPeriod: 'LAST_MONTH',
          registry: 'npm',
        })
      );
    });

    it('should include roadieLastUpdated timestamp in all stored data', async () => {
      const packageNames = [{ packageName: 'timestamp-test', registry: 'npm' }];
      mockRetrievePackageNames.mockResolvedValue(packageNames);

      const npmPackageData = {
        name: 'timestamp-test',
        'dist-tags': { latest: '1.0.0' },
        versions: {
          '1.0.0': {
            name: 'timestamp-test',
            version: '1.0.0',
          },
        },
        time: {
          created: '2024-01-01T00:00:00Z',
          modified: '2024-06-01T00:00:00Z',
          '1.0.0': '2024-06-01T00:00:00Z',
        },
        maintainers: [{ name: 'test', email: 'test@example.com' }],
      };

      nock('https://registry.npmjs.org').get('/timestamp-test').reply(200, npmPackageData);

      nock('https://api.npmjs.org')
        .get('/downloads/point/last-month/timestamp-test')
        .reply(200, { package: 'timestamp-test', downloads: 10 });

      const beforeTimestamp = new Date().toISOString();
      await storePackageData();
      const afterTimestamp = new Date().toISOString();

      // Check the all-packages store call
      const allPackagesCall = mockStore.setJSON.mock.calls.find(
        (call) => call[0] === ALL_PACKAGE_DATA_STORE_KEY
      );
      expect(allPackagesCall[1].roadieLastUpdated).toBeDefined();
      const allPackagesTimestamp = allPackagesCall[1].roadieLastUpdated;
      expect(allPackagesTimestamp).toMatch(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/);
      expect(
        allPackagesTimestamp >= beforeTimestamp && allPackagesTimestamp <= afterTimestamp
      ).toBe(true);

      // Check the individual package store call
      const individualPackageCall = mockStore.setJSON.mock.calls.find(
        (call) => call[0] === 'timestamp-test'
      );
      expect(individualPackageCall[1].roadieLastUpdated).toBeDefined();
      const individualTimestamp = individualPackageCall[1].roadieLastUpdated;
      expect(individualTimestamp).toMatch(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/);
      expect(individualTimestamp >= beforeTimestamp && individualTimestamp <= afterTimestamp).toBe(
        true
      );
    });

    it('should handle multiple packages in parallel', async () => {
      const packageNames = [
        { packageName: 'package-1', registry: 'npm' },
        { packageName: 'package-2', registry: 'npm' },
        { packageName: 'package-3', registry: 'npm' }
      ];
      mockRetrievePackageNames.mockResolvedValue(packageNames);

      // Mock all NPM registry responses
      packageNames.forEach(({ packageName }, index) => {
        const npmPackageData = {
          name: packageName,
          'dist-tags': { latest: `${index + 1}.0.0` },
          versions: {
            [`${index + 1}.0.0`]: {
              name: packageName,
              version: `${index + 1}.0.0`,
            },
          },
          time: {
            created: '2024-01-01T00:00:00Z',
            modified: '2024-06-01T00:00:00Z',
            [`${index + 1}.0.0`]: '2024-06-01T00:00:00Z',
          },
          maintainers: [{ name: 'test', email: 'test@example.com' }],
        };

        nock('https://registry.npmjs.org').get(`/${packageName}`).reply(200, npmPackageData);

        nock('https://api.npmjs.org')
          .get(`/downloads/point/last-month/${packageName}`)
          .reply(200, { package: packageName, downloads: (index + 1) * 1000 });
      });

      const result = await storePackageData();

      expect(result).toEqual({ modified: '2025-01-01T00:00:00Z', etag: 'test-etag' });

      // Verify all packages were stored
      expect(mockStore.setJSON).toHaveBeenCalledTimes(4); // 1 for all + 3 individual

      packageNames.forEach(({ packageName }) => {
        expect(mockStore.setJSON).toHaveBeenCalledWith(
          packageName,
          expect.objectContaining({
            name: packageName,
            registry: 'npm',
          })
        );
      });

      expect(nock.isDone()).toBe(true);
    });
  });

  describe('error handling and resilience', () => {
    it('should handle HTTP 404 errors for individual packages gracefully', async () => {
      const packageNames = [
        { packageName: '@backstage/existing-package', registry: 'npm' },
        { packageName: 'non-existent-package', registry: 'npm' }
      ];
      mockRetrievePackageNames.mockResolvedValue(packageNames);

      // Mock successful package
      const npmPackageData = {
        name: '@backstage/existing-package',
        'dist-tags': { latest: '1.0.0' },
        versions: {
          '1.0.0': {
            name: '@backstage/existing-package',
            version: '1.0.0',
          },
        },
        time: {
          created: '2024-01-01T00:00:00Z',
          modified: '2024-06-01T00:00:00Z',
          '1.0.0': '2024-06-01T00:00:00Z',
        },
        maintainers: [{ name: 'test', email: 'test@example.com' }],
      };

      nock('https://registry.npmjs.org')
        .get('/@backstage/existing-package')
        .reply(200, npmPackageData);

      // Mock 404 for non-existent package
      nock('https://registry.npmjs.org')
        .get('/non-existent-package')
        .reply(404, { error: 'Not found' });

      nock('https://api.npmjs.org')
        .get('/downloads/point/last-month/@backstage/existing-package')
        .reply(200, { package: '@backstage/existing-package', downloads: 100 });

      nock('https://api.npmjs.org')
        .get('/downloads/point/last-month/non-existent-package')
        .reply(404, { error: 'Not found' });

      const result = await storePackageData();

      // Should still succeed with the valid package
      expect(result).toEqual({ modified: '2025-01-01T00:00:00Z', etag: 'test-etag' });

      // Should store the successful package
      expect(mockStore.setJSON).toHaveBeenCalledWith(
        '@backstage/existing-package',
        expect.objectContaining({
          name: '@backstage/existing-package',
          latestVersion: '1.0.0',
        })
      );

      // Should have stored: 1 for all-packages + 1 individual = 2 total
      expect(mockStore.setJSON).toHaveBeenCalledTimes(2);
    });

    it('should handle HTTP 429 rate limiting with retry', async () => {
      const packageNames = [{ packageName: 'rate-limited-package', registry: 'npm' }];
      mockRetrievePackageNames.mockResolvedValue(packageNames);

      const npmPackageData = {
        name: 'rate-limited-package',
        'dist-tags': { latest: '1.0.0' },
        versions: {
          '1.0.0': {
            name: 'rate-limited-package',
            version: '1.0.0',
          },
        },
        time: {
          created: '2024-01-01T00:00:00Z',
          modified: '2024-06-01T00:00:00Z',
          '1.0.0': '2024-06-01T00:00:00Z',
        },
        maintainers: [{ name: 'test', email: 'test@example.com' }],
      };

      // First attempt returns 429, second attempt succeeds
      nock('https://registry.npmjs.org')
        .get('/rate-limited-package')
        .reply(429, { error: 'Too Many Requests' })
        .get('/rate-limited-package')
        .reply(200, npmPackageData);

      nock('https://api.npmjs.org')
        .get('/downloads/point/last-month/rate-limited-package')
        .reply(200, { package: 'rate-limited-package', downloads: 50 });

      const result = await storePackageData();

      expect(result).toEqual({ modified: '2025-01-01T00:00:00Z', etag: 'test-etag' });

      // Should have successfully stored the package after retry
      expect(mockStore.setJSON).toHaveBeenCalledWith(
        'rate-limited-package',
        expect.objectContaining({
          name: 'rate-limited-package',
          latestVersion: '1.0.0',
          downloadCount: 50,
          downloadCountPeriod: 'LAST_MONTH',
        })
      );
    });

    it('should handle network errors and continue with successful packages', async () => {
      const packageNames = [
        { packageName: 'failing-package', registry: 'npm' },
        { packageName: 'successful-package', registry: 'npm' }
      ];
      mockRetrievePackageNames.mockResolvedValue(packageNames);

      // Mock network error for first package (all retries fail)
      nock('https://registry.npmjs.org')
        .get('/failing-package')
        .replyWithError('Network error')
        .get('/failing-package')
        .replyWithError('Network error')
        .get('/failing-package')
        .replyWithError('Network error');

      // Mock successful package
      const npmPackageData = {
        name: 'successful-package',
        'dist-tags': { latest: '1.0.0' },
        versions: {
          '1.0.0': {
            name: 'successful-package',
            version: '1.0.0',
          },
        },
        time: {
          created: '2024-01-01T00:00:00Z',
          modified: '2024-06-01T00:00:00Z',
          '1.0.0': '2024-06-01T00:00:00Z',
        },
        maintainers: [{ name: 'test', email: 'test@example.com' }],
      };

      nock('https://registry.npmjs.org').get('/successful-package').reply(200, npmPackageData);

      // Mock stats (both may fail for stats, which is acceptable)
      nock('https://api.npmjs.org')
        .get('/downloads/point/last-month/failing-package')
        .replyWithError('Network error')
        .get('/downloads/point/last-month/failing-package')
        .replyWithError('Network error')
        .get('/downloads/point/last-month/failing-package')
        .replyWithError('Network error');

      nock('https://api.npmjs.org')
        .get('/downloads/point/last-month/successful-package')
        .reply(200, { package: 'successful-package', downloads: 200 });

      const result = await storePackageData();

      // Should still succeed with the successful package
      expect(result).toEqual({ modified: '2025-01-01T00:00:00Z', etag: 'test-etag' });

      // Should only store the successful package
      expect(mockStore.setJSON).toHaveBeenCalledWith(
        'successful-package',
        expect.objectContaining({
          name: 'successful-package',
          latestVersion: '1.0.0',
          downloadCount: 200,
          downloadCountPeriod: 'LAST_MONTH',
        })
      );

      // Should have stored: 1 for all-packages + 1 individual = 2 total
      expect(mockStore.setJSON).toHaveBeenCalledTimes(2);
    }, 10000); // Increase timeout to 10s due to retry delays

    it('should handle HTTP 500 server errors with retry', async () => {
      const packageNames = [{ packageName: 'server-error-package', registry: 'npm' }];
      mockRetrievePackageNames.mockResolvedValue(packageNames);

      const npmPackageData = {
        name: 'server-error-package',
        'dist-tags': { latest: '1.0.0' },
        versions: {
          '1.0.0': {
            name: 'server-error-package',
            version: '1.0.0',
          },
        },
        time: {
          created: '2024-01-01T00:00:00Z',
          modified: '2024-06-01T00:00:00Z',
          '1.0.0': '2024-06-01T00:00:00Z',
        },
        maintainers: [{ name: 'test', email: 'test@example.com' }],
      };

      // First attempt returns 500, second attempt succeeds
      nock('https://registry.npmjs.org')
        .get('/server-error-package')
        .reply(500, { error: 'Internal Server Error' })
        .get('/server-error-package')
        .reply(200, npmPackageData);

      nock('https://api.npmjs.org')
        .get('/downloads/point/last-month/server-error-package')
        .reply(200, { package: 'server-error-package', downloads: 75 });

      const result = await storePackageData();

      expect(result).toEqual({ modified: '2025-01-01T00:00:00Z', etag: 'test-etag' });

      // Should have successfully stored the package after retry
      expect(mockStore.setJSON).toHaveBeenCalledWith(
        'server-error-package',
        expect.objectContaining({
          name: 'server-error-package',
          latestVersion: '1.0.0',
          downloadCount: 75,
          downloadCountPeriod: 'LAST_MONTH',
        })
      );
    });

    it('should continue even if all stats requests fail', async () => {
      const packageNames = [{ packageName: 'package-without-stats', registry: 'npm' }];
      mockRetrievePackageNames.mockResolvedValue(packageNames);

      const npmPackageData = {
        name: 'package-without-stats',
        'dist-tags': { latest: '1.0.0' },
        versions: {
          '1.0.0': {
            name: 'package-without-stats',
            version: '1.0.0',
          },
        },
        time: {
          created: '2024-01-01T00:00:00Z',
          modified: '2024-06-01T00:00:00Z',
          '1.0.0': '2024-06-01T00:00:00Z',
        },
        maintainers: [{ name: 'test', email: 'test@example.com' }],
      };

      nock('https://registry.npmjs.org').get('/package-without-stats').reply(200, npmPackageData);

      // Stats endpoint fails completely
      nock('https://api.npmjs.org')
        .get('/downloads/point/last-month/package-without-stats')
        .replyWithError('Stats service unavailable')
        .get('/downloads/point/last-month/package-without-stats')
        .replyWithError('Stats service unavailable')
        .get('/downloads/point/last-month/package-without-stats')
        .replyWithError('Stats service unavailable');

      const result = await storePackageData();

      expect(result).toEqual({ modified: '2025-01-01T00:00:00Z', etag: 'test-etag' });

      // Should store the package without download stats
      expect(mockStore.setJSON).toHaveBeenCalledWith(
        'package-without-stats',
        expect.objectContaining({
          name: 'package-without-stats',
          latestVersion: '1.0.0',
        })
      );

      // The package should not have downloadCount
      const storedPackageData = mockStore.setJSON.mock.calls.find(
        (call) => call[0] === 'package-without-stats'
      )[1];
      expect(storedPackageData.downloadCount).toBeUndefined();
    }, 10000); // Increase timeout to 10s due to retry delays
  });
});
