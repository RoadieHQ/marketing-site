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
    // console.log('creating page for ', entry);
    try {
      const pageData = processor(edge, component, entry, index);
      // console.log('passing data to page', pageData);
      return createPage(pageData)
    } catch (error) {
      console.error('Unable to create page for', entry, error);
    }
  });
};

export default createPagesFromQuery;
