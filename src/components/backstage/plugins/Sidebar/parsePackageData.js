import get from 'lodash/get';
import pick from 'lodash/pick';
import formatDistanceToNowStrict from 'date-fns/formatDistanceToNowStrict';

const parsePackageData = (packageData) => {
  const latestVersionPublishedTime = get(packageData, `time['${packageData.latestVersion}']`);
  const firstPublishedTime = get(packageData, 'time.created');
  const lastSyncedTime = packageData.roadieLastUpdated;

  let latestVersionPublishedAgo, firstPublishedAgo, lastSyncedAgo;
  if (latestVersionPublishedTime) {
    latestVersionPublishedAgo = `${formatDistanceToNowStrict(
      Date.parse(latestVersionPublishedTime)
    )} ago`;
  }
  if (firstPublishedTime) {
    firstPublishedAgo = `${formatDistanceToNowStrict(Date.parse(packageData.time.created))} ago`;
  }
  if (lastSyncedTime) {
    lastSyncedAgo = `${formatDistanceToNowStrict(Date.parse(lastSyncedTime))} ago`;
  }

  let maintainersHelpText = `Maintainer images come from Gravatar.`;
  if (packageData.maintainers && packageData.numberOfMaintainers > packageData.maintainers.length) {
    const extraMaintainers = packageData.numberOfMaintainers - packageData.maintainers.length;
    maintainersHelpText += `...along with ${extraMaintainers} others. `;
  }

  const numberOfVersions = packageData.numberOfVersions?.toLocaleString();
  const downloadCount = packageData.downloadCount?.toLocaleString();

  return {
    ...pick(packageData, ['latestVersion', 'license', 'maintainers', 'downloadCountPeriod']),
    lastSyncedTime,
    lastSyncedAgo,
    latestVersionPublishedTime,
    latestVersionPublishedAgo,
    firstPublishedTime,
    firstPublishedAgo,
    downloadCount,
    numberOfVersions,
    maintainersHelpText,
  };
};

export default parsePackageData;
