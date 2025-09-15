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
  CHANGELOG_QUERY,
  BACKSTAGE_BITES_QUERY,
} = require('./src/queries/gatsbyNodeQueries');
const createLatestLegalNotices = require('./src/pageCreation/createLatestLegalNotices');
const createPagesFromQuery = require('./src/pageCreation/createPagesFromQuery');
const createListPagesFromQuery = require('./src/pageCreation/createListPagesFromQuery');
const transformPageFrontmatter = require('./src/pageCreation/transformPageFrontmatter');

exports.createPages = async ({ graphql, actions }) => {
  await createPagesFromQuery({
    templatePath: './src/templates/BlogPost.js',
    query: BLOGS_QUERY,
    resultName: 'blogs.edges',
    actions,
    graphql,
    processor: ({ node }, component) => {
      return {
        path: node.slug,
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
        npmjsPackage: node.frontmatter.npmjsPackage,
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
    templatePath: './src/templates/BackstageBite.js',
    query: BACKSTAGE_BITES_QUERY,
    resultName: 'videos.edges',
    actions,
    graphql,
    processor: ({ node }, component) => ({
      path: `/backstage-bites/${node.slug}/`,
      component,
      context: {
        slug: node.slug,
      },
    }),
  });

  await createPagesFromQuery({
    templatePath: './src/templates/CaseStudy.js',
    query: CASE_STUDIES_QUERY,
    resultName: 'caseStudies.edges',
    actions,
    graphql,
    processor: ({ node }, component) => {
      return {
        path: `/case-studies/${node.slug}/`,
        component,
        context: {
          slug: node.slug,
        },
      };
    },
  });

  await createListPagesFromQuery({
    templatePath: './src/templates/ChangelogList.js',
    query: CHANGELOG_QUERY,
    actions,
    graphql,
    basePath: '/changelog/',
    itemsPerPage: 20,
  });

  await createPagesFromQuery({
    templatePath: './src/templates/ChangeSet.js',
    query: CHANGELOG_QUERY,
    resultName: 'result.edges',
    actions,
    graphql,
    basePath: '/changelog/',
    processor: ({ node }, component) => {
      return {
        path: `/changelog/${node.slug}/`,
        component,
        context: {
          slug: node.slug,
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
