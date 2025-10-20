import { createRequire } from 'module';
import { createFilePath } from 'gatsby-source-filesystem';
import has from 'lodash/has.js';
import {
  transformPageFrontmatter,
} from './src/pageCreation/index.mjs';

const require = createRequire(import.meta.url);

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

// This webpack configuration is necessary to prevent a bug with the classnames library.
// When source maps are disabled in production builds, importing classnames (even without
// using it) causes React useEffect hooks to never execute. This appears to be related to
// how webpack bundles the classnames UMD wrapper differently depending on the devtool
// setting. The Sentry plugin normally enables source maps, but if Sentry is ever removed,
// this ensures source maps remain enabled to prevent the bug.
export const onCreateWebpackConfig = ({ actions, stage }) => {
  console.log('#onCreateWebpackConfig', stage);

  if (stage === 'build-javascript') {
    actions.setWebpackConfig({
      devtool: 'hidden-source-map',
    });
  }

  actions.setWebpackConfig({
    resolve: {
      alias: {
        'classnames': require.resolve('classnames/index.js'),
      },
    },
  });

  if (stage === 'build-javascript' || stage === 'develop') {
    console.log('STAGE');
    actions.setWebpackConfig({
      optimization: {
        usedExports: true,
      },
    });
  }
};
