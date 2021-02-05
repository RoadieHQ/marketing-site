const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);
const kebabCase = require('lodash/kebabCase');
const get = require('lodash/get');
const {
  BLOGS_QUERY,
  YAML_QUERY,
  TAGS_QUERY,
  LEGAL_NOTICES_QUERY,
} = require('./src/queries/gatsbyNodeQueries');

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

exports.createPages = async ({ graphql, actions }) => {
  await createPagesFromQuery({
    templatePath: './src/templates/BlogPost.js',
    query: BLOGS_QUERY,
    resultName: 'blogs.edges',
    actions,
    graphql,
    processor: ({ node }, component, allEdges, index) => {
      const previous = index === allEdges.length - 1 ? null : allEdges[index + 1].node;
      const next = index === 0 ? null : allEdges[index - 1].node;

      return {
        path: node.fields.slug,
        component,
        context: {
          slug: node.fields.slug,
          previous,
          next,
        },
      };
    },
  });

  await createPagesFromQuery({
    templatePath: './src/templates/Plugin.js',
    query: YAML_QUERY,
    resultName: 'allYaml.edges',
    actions,
    graphql,
    processor: ({ node: { name } }, component) => ({
      path: `/backstage/plugins/${name}/`,
      component,
      context: {
        name,
      },
    }),
  });

  await createPagesFromQuery({
    templatePath: './src/templates/Tag.js',
    query: TAGS_QUERY,
    resultName: 'tagsGroup.group',
    actions,
    graphql,
    processor: ({ fieldValue }, component) => ({
      path: `/tags/${kebabCase(fieldValue)}/`,
      component,
      context: {
        tag: fieldValue,
      },
    }),
  });

  await createPagesFromQuery({
    templatePath: './src/templates/LegalNotice.js',
    query: LEGAL_NOTICES_QUERY,
    resultName: 'notices.edges',
    actions,
    graphql,
    processor: ({ node }, component) => ({
      path: `/legal-notices/${node.frontmatter.name}/`,
      component,
      context: {
        name: node.frontmatter.name,
      },
    }),
  });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode });

    if (/blog/.test(node.fileAbsolutePath)) {
      createNodeField({
        name: `slug`,
        node,
        value: `/blog${value}`,
      });
    } else {
      createNodeField({
        name: `slug`,
        node,
        value,
      });
    }
  }
};
