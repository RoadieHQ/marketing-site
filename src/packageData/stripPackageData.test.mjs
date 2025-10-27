import testPackage from './npmPackage.stub.json';

import stripNpmPackageData from './stripNpmPackageData';

describe('#stripNpmPackageData', () => {
  it('should have a name', () => {
    expect(stripNpmPackageData(testPackage).name).toEqual(testPackage.name);
  });

  it('should have a license', () => {
    expect(stripNpmPackageData(testPackage).license).toEqual(testPackage.license);
  });

  it('should have the latest version number', () => {
    expect(stripNpmPackageData(testPackage).latestVersion).toEqual(testPackage['dist-tags'].latest);
  });

  it('should count the number of versions', () => {
    expect(stripNpmPackageData(testPackage).numberOfVersions).toEqual(16);
  });

  it('should include the maintainers', () => {
    expect(stripNpmPackageData(testPackage).maintainers).toEqual(testPackage.maintainers);
  });

  it('should include the repository info', () => {
    expect(stripNpmPackageData(testPackage).repository).toEqual(testPackage.repository);
  });

  it('should remove most of the time info', () => {
    expect(Object.keys(stripNpmPackageData(testPackage).time).length).toEqual(3);
  });

  it('should include the backstage role info', () => {
    const latestTestVersion = testPackage.versions[testPackage['dist-tags'].latest];
    expect(stripNpmPackageData(testPackage).backstage).toEqual(latestTestVersion.backstage);
  });

  it('should not include the versions object', () => {
    expect(stripNpmPackageData(testPackage).versions).toBeUndefined();
  });
});
