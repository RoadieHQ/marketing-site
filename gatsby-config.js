const has = require('lodash/has');
const get = require('lodash/get');
const agoliaQueries = require('./src/queries/agolia');
const rssFeedPlugin = require('./src/gatsby/rssFeedPlugin');
const theme = require('./src/theme');
const GATSBY_PLUGIN_CSP_DIRECTIVES = require('./src/gatsby/cspDirectives');

// EXAMPLE NETLIFY ENV VARS:
//
// Main deploys from GitHub:
//   - CONTEXT: production
//   - SITE_NAME: roadie
//   - PULL_REQUEST: false
//   - DEPLOY_PRIME_URL: https://main--roadie.netlify.app
// Branch deploys from GitHub:
//   - CONTEXT: deploy-preview
//   - SITE_NAME: roadie
//   - PULL_REQUEST: true
//   - DEPLOY_PRIME_URL: https://deploy-preview-[NNNN]--roadie.netlify.app
// Preview builds from Contentful:
//   - CONTEXT: production
//   - SITE_NAME: roadie-preview
//   - PULL_REQUEST: false
//   - DEPLOY_PRIME_URL: https://main--roadie-preview.netlify.app

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
  if (get(process.env, 'NODE_ENV') === 'test') return 'development';
  const context = get(process.env, 'CONTEXT');

  if (context === 'production') return 'production';
  if (context === 'deploy-preview') return 'preview';
  if (context === 'branch-deploy') return 'preview';
  return 'development';
};

const getContentfulHost = () => {
  if (has(process.env, 'GITHUB_ACTIONS')) return 'cdn.contentful.com';

  // This is an environment variable set by the Netlify build process.
  const netlifySiteName = get(process.env, 'SITE_NAME');
  if (netlifySiteName === 'roadie-preview') return 'preview.contentful.com';
  if (netlifySiteName === 'roadie') return 'cdn.contentful.com';

  // Good for local development
  return 'preview.contentful.com';
};

const getSiteUrl = () => {
  const netlifySiteName = get(process.env, 'SITE_NAME');
  const context = get(process.env, 'CONTEXT');
  if (netlifySiteName === 'roadie-preview') return 'https://preview.roadie.io';
  if (context === 'deploy-preview') return get(process.env, 'DEPLOY_PRIME_URL');
  return 'https://roadie.io';
};

const shouldCrawl = () => {
  const ctx = get(process.env, 'CONTEXT');
  const netlifySiteName = get(process.env, 'SITE_NAME');
  return netlifySiteName === 'roadie' && ctx !== 'deploy-preview';
};

const getContentfulOptions = () => {
  return {
    spaceId: `hcqpbvoqhwhm`,
    // Learn about environment variables: https://gatsby.dev/env-vars
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
    host: getContentfulHost(),
    environment: 'master',
  };
};

// These paths are blocked from search engine indexing and search engine access.
const DISLALLOW_LIST = [
  '/purchase/',
  '/purchase/success/',
  '/tailwind/404/',
  '/installation-pending/',

  // These are partials which eventually get embedded into other pages.
  '/docs/details/create-proxy/structure/header/',
  '/docs/getting-started/adding-a-catalog-item/structure/header/',
  '/docs/details/create-proxy/basic/',

  // These are partials which eventually get embedded into other pages.
  '/docs/getting-started/adding-a-catalog-item/bitbucket/',
  '/docs/getting-started/adding-a-catalog-item/github/',
  '/docs/getting-started/adding-a-catalog-item/gitlab/',
  '/docs/getting-started/adding-a-catalog-item/roadie-api/',
  '/docs/getting-started/adding-a-catalog-item/aws-s3/',
  '/docs/getting-started/adding-a-catalog-item/azure-devops/',
  '/docs/getting-started/adding-a-catalog-item/roadie-cli/',
];

// Only environment variables prefixed with GATSBY_ are available in the runtime. Here we turn
// a server side variable into a runtime one. This variable is later used to determine which
// branch of a split testing experiment we are on.
process.env.GATSBY_GIT_BRANCH_NAME = process.env.BRANCH;
process.env.GATSBY_NETLIFY_SITE_NAME = process.env.SITE_NAME;
process.env.GATSBY_SITE_RECAPTCHA_KEY = process.env.SITE_RECAPTCHA_KEY;

module.exports = {
  siteMetadata: {
    title: SITE_TITLE,
    description: 'Hosted, managed, enterprise Backstage',
    siteUrl: getSiteUrl(),
    sourceCodeUrl: 'https://github.com/RoadieHQ/marketing-site/blob/main',
    social: {
      twitter: 'RoadieHQ',
      github: 'RoadieHQ',
      linkedin: 'https://www.linkedin.com/company/43197350',
    },
  },

  trailingSlash: 'always',

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
            resolve: 'gatsby-remark-embed-video',
            options: {
              width: 800,
              ratio: 1.77, // Optional: Defaults to 16/9 = 1.77
              height: 400, // Optional: Overrides optional.ratio
              related: false, //Optional: Will remove related videos from the end of an embedded YouTube video.
              noIframeBorder: true, //Optional: Disable insertion of <style> border: 0
              loadingStrategy: 'lazy', //Optional: Enable support for lazy-load offscreen iframes. Default is disabled.
              urlOverrides: [
                {
                  id: 'youtube',
                  embedURL: (videoId) => `https://www.youtube-nocookie.com/embed/${videoId}`,
                },
              ], //Optional: Override URL of a service provider, e.g to enable youtube-nocookie support
              containerClass: 'embedVideo-container', //Optional: Custom CSS class for iframe container, for multiple classes separate them by space
              iframeId: false, //Optional: if true, iframe's id will be set to what is provided after 'video:' (YouTube IFrame player API requires iframe id)
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
        theme_color: theme.COLORS_PRIMARY_600,
        display: `minimal-ui`,
        icon: 'content/assets/logos/roadie/roadie-racks.svg',
        // The request for the manifest was failing with a 401 on preview.roadie.io because
        // of the basic authentication layer applpied to that site by Netlify. We use basic
        // auth on the preview site to keep it hidden from search engines and (to a less
        // important extent) people.
        crossOrigin: `use-credentials`,
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
      resolve: 'gatsby-plugin-sitemap',
      options: {
        excludes: DISLALLOW_LIST,
      },
    },

    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: getSiteUrl(),
        sitemap: `${getSiteUrl()}/sitemap-index.xml`,
        policy: [
          {
            userAgent: '*',
            disallow: shouldCrawl() ? DISLALLOW_LIST : '/',
          },
        ],
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

    'gatsby-plugin-twitter',
    'gatsby-plugin-netlify',
    'gatsby-plugin-image',
    'gatsby-plugin-postcss',

    {
      resolve: 'gatsby-plugin-csp',
      options: {
        // The default is true.
        disableOnDev: true,
        // This plugin does correctly add hashes to the 'style-src' directive. However, it doesn't
        // seem to identify all of the required hashes, so the unsafe-inline keyword is still
        // required. The 'unsafe-inline' keyword is ignored by browsers if any hashes are found,
        // so we need to turn off hash inclusion to have it recognised.
        mergeStyleHashes: false,
        // Same thing with script hashes.
        mergeScriptHashes: false,
        directives: GATSBY_PLUGIN_CSP_DIRECTIVES,
      },
    },

    {
      resolve: 'gatsby-plugin-webpack-bundle-analyser-v2',
      options: {
        disable: skipWebpackAnalyzer,
      },
    },

    ...rssFeedPlugin,

    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: ['G-FJ7VX25TGT'],
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
      options: getContentfulOptions(),
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Montserrat:ital,wght@0,700`, `Source+Sans+3:ital,wght@0,400;0,700;1,400`],
        display: 'swap',
      },
    },
  ],
};
