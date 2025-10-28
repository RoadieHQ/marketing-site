const filterActions = ({
  actions,
  query,
  availabilityFilter,
  category,
}) => {
  let filteredActions = actions;

  // Category filter
  if (category && category.name) {
    filteredActions = filteredActions.filter(({ category: actionCategory }) => {
      return actionCategory?.name === category.name;
    });
  }

  // Availability filter
  if (availabilityFilter && availabilityFilter.value === 'roadie') {
    filteredActions = filteredActions.filter(({ availableOnRoadie }) => {
      return availableOnRoadie === true;
    });
  }

  // Text search filter
  if (query !== '') {
    filteredActions = filteredActions.filter(({ actionId, humanName, description, containedInPackage }) => {
      // Extract plain text from HTML for searching
      const descriptionText = description?.childMarkdownRemark?.html
        ? description.childMarkdownRemark.html.replace(/<[^>]{0,1000}>/g, '')
        : '';

      const searchableActionId = actionId?.toLowerCase() || '';
      const searchableHumanName = humanName?.toLowerCase() || '';
      const searchableDescription = descriptionText.toLowerCase();
      const searchablePackageName = containedInPackage?.npmPackageName?.toLowerCase() || '';
      const searchQuery = query.toLowerCase();

      return (
        searchableActionId.includes(searchQuery) ||
        searchableHumanName.includes(searchQuery) ||
        searchableDescription.includes(searchQuery) ||
        searchablePackageName.includes(searchQuery)
      );
    });
  }

  // Actions are already sorted by name in the GraphQL query
  return filteredActions;
};

export default filterActions;
