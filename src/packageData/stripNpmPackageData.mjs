import pick from 'lodash/pick.js';

// NPM package data can be quite large, with thousands of versions and maintainers listed,
// README files repeated over and over for each version etc. We don't want to store this
// data because the storage overhead would be large, and it would take too long to fetch the
// blobs of data to the browser. So, we strip out any properties we don't need before we
// store the data.
const stripNpmPackageData = (data) => {
  const latestVersionNumber = data['dist-tags'].latest;
  return {
    ...pick(data, [
      '_id',
      '_rev',
      'name',
      'license',
      'repository',
      'homepage',
      'description',
      'bugs',
    ]),
    ...pick(data.versions[latestVersionNumber], ['backstage']),
    time: pick(data.time, ['created', 'modified', latestVersionNumber]),
    // There can be many many maintainers. I've seen 200+ in many examples.
    // One suggested enhancement here would be to filter the list to maintainers who have
    // a profile photo on Gravatar. That way we would see nice people's faces when we render
    // the list of maintainers in the website.
    maintainers: data.maintainers.slice(0, 15),
    numberOfMaintainers: data.maintainers.length,
    numberOfVersions: Object.keys(data.versions).length,
    latestVersion: data['dist-tags'].latest,
    registry: 'npm',
  };
};

export default stripNpmPackageData;
