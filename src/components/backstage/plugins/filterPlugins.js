import sortBy from 'lodash/sortBy';
import isEmpty from 'lodash/isEmpty';

const filterPlugins = ({
  plugins,
  query,
  sortOrder,
  category,
  npmDataLoadingState,
}) => {
  let filteredPlugins = [];
  if (query === '') {
    filteredPlugins = plugins;
  } else {
    filteredPlugins = plugins.filter(({ humanName, attributionText }) => {
      return (
        humanName.toLowerCase().includes(query.toLowerCase()) ||
        attributionText.toLowerCase().includes(query.toLowerCase())
      );
    });
  }

  if (!isEmpty(category)) {
    filteredPlugins = filteredPlugins.filter(({ category: pluginCategory }) => {
      return pluginCategory?.name === category.name;
    });
  }

  if (npmDataLoadingState === 'loaded') {
    if (sortOrder.value === 'name') {
      filteredPlugins = sortBy(filteredPlugins, ['humanName']);
    } else if (sortOrder.value === 'popularity') {
      filteredPlugins = sortBy(filteredPlugins, ['npmData.lastMonthDownloads']).reverse();
    } else if (sortOrder.value === 'recent') {
      filteredPlugins = sortBy(filteredPlugins, ['npmData.latestVersionPublishedTime']).reverse();
    }
  }

  return filteredPlugins;
};

export default filterPlugins;
