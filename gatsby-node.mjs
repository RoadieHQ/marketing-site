import { createFilePath } from 'gatsby-source-filesystem';
import kebabCase from 'lodash/kebabCase.js';
import has from 'lodash/has.js';

import {
  BLOGS_QUERY,
  PLUGINS_QUERY,
  TAGS_QUERY,
  LEGAL_NOTICES_QUERY,
  DOCS_QUERY,
  CASE_STUDIES_QUERY,
  CHANGELOG_QUERY,
  BACKSTAGE_BITES_QUERY,
  BACKSTAGE_WEEKLY_QUERY,
  SCAFFOLDER_ACTIONS_QUERY,
} from './src/queries/gatsbyNodeQueries.mjs';
import {
  createLatestLegalNotices,
  createPagesFromQuery,
  createListPagesFromQuery,
  transformPageFrontmatter,
} from './src/pageCreation/index.mjs';
import storePackageNames from './src/packageData/storePackageNames.mjs';
import storePackageData from './src/packageData/storePackageData.mjs';
import listOfPackages from './src/packageData/listOfPackages.mjs';

export const createPages = async ({ graphql, actions }) => {
  // This function iterates over the backstage plugins in contentful, gets the name
  // of the NPM package associated with each one, and uploads all the names in a big array
  // to Netlify Blob storage. 
  //
  // We don't necessarily need this to happen every time we start the local dev server, so
  // a Netlify plugin that runs on deploy time might be a better place to do that. I've
  // never created a Netlify plugin before though so I'm leaving it here for the moment [DT].
  const npmPackages = await listOfPackages({ graphql });
  await storePackageNames(npmPackages);
  // Then we pull back in that list of names from the blob store and iterate over it to
  // fetch the detailed NPM data for each package. We do it this way, rather than fetching
  // the list of files from contentful inside storePackageData directly, because gatsby
  // graphql queries are evaluated at compile time, but storePackageData needs to run inside
  // a scheduled Netlify function where the graphql scaffolding is not available.
  await storePackageData();

  await createPagesFromQuery({
    templatePath: './src/templates/BackstageWeekly.js',
    query: BACKSTAGE_WEEKLY_QUERY,
    resultName: 'issues.edges',
    actions,
    graphql,
    processor: ({ node }, component) => {
      return {
      path: `/backstage-weekly${node.slug}`,
        component,
        context: {
          slug: node.slug,
        },
      };
    },
  });

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
      path: `/backstage/plugins/${node.slug}/`,
      component,
      context: {
        slug: node.slug,
      },
    }),
  });

  await createPagesFromQuery({
    templatePath: './src/templates/ScaffolderAction.js',
    query: SCAFFOLDER_ACTIONS_QUERY,
    resultName: 'actions.edges',
    actions,
    graphql,
    processor: ({ node }, component) => ({
      path: `/backstage/scaffolder-actions${node.slug}`,
      component,
      context: {
        slug: node.slug,
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

export const onCreateNode = ({ node, actions, getNode }) => {
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

export const onCreateWebpackConfig = ({ getConfig, actions, stage }) => {
  if (stage === 'build-javascript') {
    const config = getConfig();

    // This is the default webpack splitChunks config from the webpack docs.
    // https://webpack.js.org/plugins/split-chunks-plugin/
    // This is here to fix a problem where simply adding imports to a file could cause useEffect
    // and other standard client side hooks to never execute. This issues was likely in the
    // codebase for a long time, but was being hidden by @sentry/gatsby which was doing it's
    // own modification to the webpack config. We don't actually understand fully what the 
    // problem was, but directly specifying the webpack config seems to fix it.
    // The problem is described here: https://roadiehq.slack.com/archives/C03MRPZ2JAH/p1760959942141299
    config.optimization.splitChunks = {
      chunks: 'async',
      minSize: 20000,
      minRemainingSize: 0,
      minChunks: 1,
      maxAsyncRequests: 30,
      maxInitialRequests: 30,
      enforceSizeThreshold: 50000,
      cacheGroups: {
        defaultVendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
          reuseExistingChunk: true,
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true,
        },
      },
    };

    actions.replaceWebpackConfig(config);
  }
};
