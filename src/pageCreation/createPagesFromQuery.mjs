import path from 'path';
import get from 'lodash/get.js';

const createPagesFromQuery = async ({
  graphql,
  templatePath,
  query,
  processor,
  actions: { createPage },
  resultName = 'result.edges',
}) => {
  const component = path.resolve(templatePath);
  const { data, errors } = await graphql(query);

  if (errors) {
    throw errors;
  }

  get(data, resultName).map((edge, index) => {
    const entry = get(data, resultName);
    const pageData = processor(edge, component, entry, index);
    return createPage(pageData)
  });
};

export default createPagesFromQuery;
