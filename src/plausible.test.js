import { jest } from '@jest/globals';
import trackPlausibleEvent from './plausible';
import { currentlyExecutingGitBranch } from './environment';

jest.mock('./environment');

describe('trackPlausibleEvent', () => {
  let mockPlausible;

  beforeEach(() => {
    // Reset mocks before each test
    mockPlausible = jest.fn();
    global.window = { plausible: mockPlausible };
    currentlyExecutingGitBranch.mockReturnValue('main');
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should call window.plausible with event name and default options', () => {
    trackPlausibleEvent('pageview');

    expect(mockPlausible).toHaveBeenCalledWith('pageview', {
      props: {
        branch: 'main',
      },
    });
  });

  it('should call window.plausible with event name and merged options', () => {
    const customOptions = {
      category: 'blog',
      callback: jest.fn(),
    };

    trackPlausibleEvent('click', customOptions);

    expect(mockPlausible).toHaveBeenCalledWith('click', {
      props: { category: 'blog', branch: 'main' },
      callback: expect.any(Function),
    });
  });

  it('should preserve existing path options while adding branch', () => {
    const customOptions = {
      url: '/custom-page',
    };

    trackPlausibleEvent('navigation', customOptions);

    expect(mockPlausible).toHaveBeenCalledWith('navigation', {
      props: { url: '/custom-page', branch: 'main' },
    });
  });

  it('should use the git branch from environment', () => {
    currentlyExecutingGitBranch.mockReturnValue('feature/new-feature');

    trackPlausibleEvent('pageview');

    expect(currentlyExecutingGitBranch).toHaveBeenCalled();
    expect(mockPlausible).toHaveBeenCalledWith('pageview', {
      props: { branch: 'feature/new-feature' },
    });
  });

  it('should not call window.plausible when it is undefined', () => {
    global.window = {};

    // This should not throw an error
    expect(() => trackPlausibleEvent('pageview')).not.toThrow();
  });

  it('should throw when window.plausible is null', () => {
    global.window = { plausible: null };

    // isUndefined only checks for undefined, not null, so this will throw
    expect(() => trackPlausibleEvent('pageview')).toThrow(TypeError);
  });

  it('should handle empty options object', () => {
    trackPlausibleEvent('empty-options', {});

    expect(mockPlausible).toHaveBeenCalledWith('empty-options', {
      props: { branch: 'main' },
    });
  });
});
