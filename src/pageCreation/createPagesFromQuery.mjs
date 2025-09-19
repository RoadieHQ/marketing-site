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

  get(data, resultName).map((edge, index) =>
    createPage(processor(edge, component, get(data, resultName), index))
  );
};

export default createPagesFromQuery;
