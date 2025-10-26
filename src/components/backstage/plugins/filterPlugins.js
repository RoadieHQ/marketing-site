import sortBy from 'lodash/sortBy';
import isEmpty from 'lodash/isEmpty';

const filterPlugins = ({
  plugins,
  query,
  sortOrder,
  category,
  packageDataLoadingState,
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

  if (packageDataLoadingState === 'loaded') {
    if (sortOrder.value === 'name') {
      filteredPlugins = sortBy(filteredPlugins, ['humanName']);
    } else if (sortOrder.value === 'popularity') {
      filteredPlugins = sortBy(filteredPlugins, ['packageData.downloadCount']).reverse();
    } else if (sortOrder.value === 'recent') {
      filteredPlugins = sortBy(filteredPlugins, ['packageData.latestVersionPublishedTime']).reverse();
    }
  }

  return filteredPlugins;
};

export default filterPlugins;
