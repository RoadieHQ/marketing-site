const testPackage = require('./npmPackage.stub.json');

const { stripNpmPackage } = require('./storeBackstagePluginNpmPackageNames');

describe('#stripNpmPackage', () => {
  it('should have a name', () => {
    expect(stripNpmPackage(testPackage).name).toEqual(testPackage.name);
  });

  it('should have a license', () => {
    expect(stripNpmPackage(testPackage).license).toEqual(testPackage.license);
  });

  it('should have the latest version number', () => {
    expect(stripNpmPackage(testPackage).latestVersion).toEqual(testPackage['dist-tags'].latest);
  });

  it('should count the number of versions', () => {
    expect(stripNpmPackage(testPackage).numberOfVersions).toEqual(16);
  });

  it('should include the maintainers', () => {
    expect(stripNpmPackage(testPackage).maintainers).toEqual(testPackage.maintainers);
  });

  it('should include the repository info', () => {
    expect(stripNpmPackage(testPackage).repository).toEqual(testPackage.repository);
  });

  it('should remove most of the time info', () => {
    expect(Object.keys(stripNpmPackage(testPackage).time).length).toEqual(3);
  });

  it('should include the backstage role info', () => {
    const latestTestVersion = testPackage.versions[testPackage['dist-tags'].latest];
    expect(stripNpmPackage(testPackage).backstage).toEqual(latestTestVersion.backstage);
  });

  it('should not include the versions object', () => {
    expect(stripNpmPackage(testPackage).versions).toBeUndefined;
  });
});
