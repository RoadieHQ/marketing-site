import path from 'path';
import get from 'lodash/get.js';

const createListPagesFromQuery = async ({
  graphql,
  templatePath,
  query,
  actions: { createPage },
  resultName = 'result.edges',
  basePath,
  itemsPerPage = 6,
}) => {
  const component = path.resolve(templatePath);
  const { data, errors } = await graphql(query);

  if (errors) {
    throw errors;
  }

  const items = get(data, resultName);
  const numPages = Math.ceil(items.length / itemsPerPage);

  Array.from({ length: numPages }).forEach((_, i) => {
    const path = i === 0 ? basePath : `${basePath}${i}/`;

    createPage({
      path,
      component,
      context: {
        limit: itemsPerPage,
        skip: i * itemsPerPage,
        numPages,
        currentPage: i + 1,
      },
    });
  });
};

export default createListPagesFromQuery;
