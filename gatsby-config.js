const has = require('lodash/has');
const get = require('lodash/get');
const agoliaQueries = require('./src/queries/agolia');
const rssFeedPlugin = require('./src/gatsby/rssFeedPlugin');
const theme = require('./src/theme');

const SITE_TITLE = 'Roadie';

const skipAlgoliaIndexing =
  has(process.env, 'GITHUB_ACTIONS') ||
  // Set this environment variable to the string 'true' if you want to emulate a production
  // build but skip indexing.
  get(process.env, 'ALGOLIA_SKIP_INDEXING', 'false') === 'true' ||
  // This environment variable exists in netlify builds.
  // https://docs.netlify.com/configure-builds/environment-variables/#build-metadata
  get(process.env, 'CONTEXT', 'false') === 'production';

const skipWebpackAnalyzer = has(process.env, 'GITHUB_ACTIONS') || has(process.env, 'NETLIFY');

const getSentryEnvironment = () => {
  if (get(process.env, 'NODE_ENV') === 'production') return 'production';
  if (get(process.env, 'CONTEXT') === 'production') return 'production';
  if (get(process.env, 'CONTEXT') === 'deploy-preview') return 'preview';
  if (get(process.env, 'CONTEXT') === 'branch-deploy') return 'preview';
  return 'development';
};

const getContentfulEnvironment = () => {
  if (has(process.env, 'GITHUB_ACTIONS')) return 'github-actions';
  return 'master';
};

const getContentfulHost = () => {
  if (has(process.env, 'GITHUB_ACTIONS')) return 'cdn.contentful.com';
  // Good for local development
  return 'preview.contentful.com';
};


// Only environment variables prefixed with GATSBY_ are available in the runtime. Here we turn
// a server side variable into a runtime one. This variable is later used to determine which
// branch of a split testing experiment we are on.
process.env.GATSBY_GIT_BRANCH_NAME = process.env.BRANCH;

module.exports = {
  siteMetadata: {
    title: SITE_TITLE,
    description: 'Hosted, managed, enterprise Backstage',
    siteUrl: 'https://roadie.io',
    demoUrl: 'https://demo.roadie.so',
    sourceCodeUrl: 'https://github.com/RoadieHQ/marketing-site/blob/main',
    social: {
      twitter: 'RoadieHQ',
      github: 'RoadieHQ',
    },
  },

  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content`,
        name: 'content',
        // Ignore stuff like Vim swp files, .DS_Store etc.
        ignore: ['**/.*', '**/template.md'],
      },
    },

    {
      resolve: `gatsby-plugin-algolia`,
      options: {
        appId: process.env.GATSBY_ALGOLIA_APP_ID,
        apiKey: process.env.ALGOLIA_ADMIN_KEY,
        queries: agoliaQueries,
        // Indexing will be run by netlify on deployment.
        skipIndexing: skipAlgoliaIndexing,
      },
    },

    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              // I've also disabled margin-left:auto because there are some situations where we
              // need images to be against the left edge. Docs are a good example of this.
              //
              // This can't be moved into the content block in this theming object because the
              // Gatsby remark images plugin will add inline styles into the element which override
              // anything we try to set.
              wrapperStyle: 'margin-left:unset; margin-right:unset',
              withWebp: true,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },

          'gatsby-remark-autolink-headers',
          `gatsby-remark-external-links`,
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },

    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: SITE_TITLE,
        short_name: SITE_TITLE,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: theme.COLORS_PRIMARY_500,
        display: `minimal-ui`,
        icon: 'content/assets/logos/roadie/roadie-r-round.svg',
      },
    },
    `gatsby-plugin-react-helmet`,

    {
      resolve: 'gatsby-plugin-module-resolver',
      options: {
        root: './src',
        aliases: {
          components: './components',
        },
      },
    },

    {
      resolve: 'gatsby-plugin-advanced-sitemap',
      options: {
        exclude: [/\/?contentful\/?.+/],
      },
    },

    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /\.inline\.svg/,
        },
      },
    },

    `gatsby-plugin-force-trailing-slashes`,
    'gatsby-plugin-twitter',
    'gatsby-plugin-netlify',
    'gatsby-plugin-image',
    'gatsby-plugin-postcss',

    {
      resolve: 'gatsby-plugin-webpack-bundle-analyser-v2',
      options: {
        disable: skipWebpackAnalyzer,
      },
    },

    ...rssFeedPlugin,

    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-166771003-3',
      },
    },

    {
      resolve: 'gatsby-plugin-google-tagmanager',
      options: {
        id: 'GTM-WFBJD3P',
        includeInDevelopment: true,
      },
    },

    {
      resolve: '@sentry/gatsby',
      options: {
        // DSNs are safe to keep public.
        // https://docs.sentry.io/product/sentry-basics/dsn-explainer/#dsn-utilization
        dsn: 'https://1798396e863a4fc0b412438bac2c8528@o416326.ingest.sentry.io/5823815',
        sampleRate: 0.7,
        environment: getSentryEnvironment(),
      },
    },

    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `hcqpbvoqhwhm`,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        host: getContentfulHost(),
        environment: getContentfulEnvironment(),
      },
    },
  ],
};
