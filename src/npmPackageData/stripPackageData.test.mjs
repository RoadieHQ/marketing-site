import testPackage from './npmPackage.stub.json';

import stripPackageData from './stripPackageData';

describe('#stripPackageData', () => {
  it('should have a name', () => {
    expect(stripPackageData(testPackage).name).toEqual(testPackage.name);
  });

  it('should have a license', () => {
    expect(stripPackageData(testPackage).license).toEqual(testPackage.license);
  });

  it('should have the latest version number', () => {
    expect(stripPackageData(testPackage).latestVersion).toEqual(testPackage['dist-tags'].latest);
  });

  it('should count the number of versions', () => {
    expect(stripPackageData(testPackage).numberOfVersions).toEqual(16);
  });

  it('should include the maintainers', () => {
    expect(stripPackageData(testPackage).maintainers).toEqual(testPackage.maintainers);
  });

  it('should include the repository info', () => {
    expect(stripPackageData(testPackage).repository).toEqual(testPackage.repository);
  });

  it('should remove most of the time info', () => {
    expect(Object.keys(stripPackageData(testPackage).time).length).toEqual(3);
  });

  it('should include the backstage role info', () => {
    const latestTestVersion = testPackage.versions[testPackage['dist-tags'].latest];
    expect(stripPackageData(testPackage).backstage).toEqual(latestTestVersion.backstage);
  });

  it('should not include the versions object', () => {
    expect(stripPackageData(testPackage).versions).toBeUndefined();
  });
});
