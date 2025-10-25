const filterActions = ({
  actions,
  query,
}) => {
  let filteredActions = actions;

  // Text search filter
  if (query !== '') {
    filteredActions = filteredActions.filter(({ actionId, description }) => {
      // Extract plain text from HTML for searching
      const descriptionText = description?.childMarkdownRemark?.html
        ? description.childMarkdownRemark.html.replace(/<[^>]*>/g, '')
        : '';

      const searchableActionId = actionId?.toLowerCase() || '';
      const searchableDescription = descriptionText.toLowerCase();
      const searchQuery = query.toLowerCase();

      return (
        searchableActionId.includes(searchQuery) ||
        searchableDescription.includes(searchQuery)
      );
    });
  }

  // Actions are already sorted by name in the GraphQL query
  return filteredActions;
};

export default filterActions;
