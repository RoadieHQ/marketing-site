const { createFilePath } = require(`gatsby-source-filesystem`);
const kebabCase = require('lodash/kebabCase');
const has = require('lodash/has');
const {
  BLOGS_QUERY,
  PLUGINS_QUERY,
  TAGS_QUERY,
  LEGAL_NOTICES_QUERY,
  DOCS_QUERY,
  CASE_STUDIES_QUERY,
  CONTENTFUL_BLOGS_QUERY,
} = require('./src/queries/gatsbyNodeQueries');
const createLatestLegalNotices = require('./src/pageCreation/createLatestLegalNotices');
const createPagesFromQuery = require('./src/pageCreation/createPagesFromQuery');
const transformPageFrontmatter = require('./src/pageCreation/transformPageFrontmatter');

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
    templatePath: './src/templates/contentful/BlogPost.js',
    query: CONTENTFUL_BLOGS_QUERY,
    resultName: 'blogs.edges',
    actions,
    graphql,
    processor: ({ node }, component) => {
      console.log('creating page', node);
      return {
        path: `/contentful${node.slug}`,
        component,
        context: {
          slug: node.slug,
        },
      };
    },
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
    templatePath: './src/templates/Plugin.js',
    query: PLUGINS_QUERY,
    resultName: 'plugins.edges',
    actions,
    graphql,
    processor: ({ node }, component) => ({
      path: node.fields.slug,
      component,
      context: {
        slug: node.fields.slug,
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
      path: node.fields.slug,
      component,
      context: {
        slug: node.fields.slug,
      },
    }),
  });

  await createPagesFromQuery({
    templatePath: './src/templates/Doc.js',
    query: DOCS_QUERY,
    resultName: 'docs.edges',
    actions,
    graphql,
    processor: ({ node }, component) => ({
      path: node.fields.slug,
      component,
      context: {
        slug: node.fields.slug,
      },
    }),
  });

  await createPagesFromQuery({
    templatePath: './src/templates/CaseStudy.js',
    query: CASE_STUDIES_QUERY,
    resultName: 'caseStudies.edges',
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

  await createLatestLegalNotices({
    graphql,
    actions,
  });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  // has(node, 'fileAbsolutePath') prevents this code from running on nodes which come
  // from the Contentful CMS, rather than the local filesystem.
  if (node.internal.type === `MarkdownRemark` && has(node, 'fileAbsolutePath')) {
    node = transformPageFrontmatter({ node });
    const value = createFilePath({ node, getNode });

    createNodeField({
      name: `slug`,
      node,
      value,
    });
  }
};
