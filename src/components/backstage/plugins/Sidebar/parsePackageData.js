import get from 'lodash/get';
import pick from 'lodash/pick';
import formatDistanceToNowStrict from 'date-fns/formatDistanceToNowStrict';

const parsePackageData = (npmData) => {
  const latestVersionPublishedTime = get(npmData, `time['${npmData.latestVersion}']`);
  const firstPublishedTime = get(npmData, 'time.created');
  const lastSyncedTime = npmData.roadieLastUpdated;

  let latestVersionPublishedAgo, firstPublishedAgo, lastSyncedAgo;
  if (latestVersionPublishedTime) {
    latestVersionPublishedAgo = `${formatDistanceToNowStrict(
      Date.parse(latestVersionPublishedTime)
    )} ago`;
  }
  if (firstPublishedTime) {
    firstPublishedAgo = `${formatDistanceToNowStrict(Date.parse(npmData.time.created))} ago`;
  }
  if (lastSyncedTime) {
    lastSyncedAgo = `${formatDistanceToNowStrict(Date.parse(lastSyncedTime))} ago`;
  }

  let maintainersHelpText = `Maintainer images come from Gravatar.`;
  if (npmData.maintainers && npmData.numberOfMaintainers > npmData.maintainers.length) {
    const extraMaintainers = npmData.numberOfMaintainers - npmData.maintainers.length;
    maintainersHelpText += `...along with ${extraMaintainers} others. `;
  }

  const numberOfVersions = npmData.numberOfVersions?.toLocaleString();
  const downloadCount = npmData.downloadCount?.toLocaleString();

  return {
    ...pick(npmData, ['latestVersion', 'license', 'maintainers', 'downloadCountPeriod']),
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
