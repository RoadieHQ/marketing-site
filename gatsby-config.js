const fs = require('fs');
var { minify } = require('html-minifier');
const camelCase = require('lodash/camelCase');

const theme = require('./src/theme');

const loadHtml = (path) => minify(fs.readFileSync(path).toString());

const termsAndConditionsText = loadHtml('./manual-loaded-content/termsAndConditionsText.html');
const privacyPolicyText = loadHtml('./manual-loaded-content/privacyPolicyText.html');

const SITE_TITLE = 'Roadie';

module.exports = {
  siteMetadata: {
    title: SITE_TITLE,
    description: 'Hosted, managed, enterprise Backstage',
    siteUrl: 'https://roadie.io',
    social: {
      twitter: 'RoadieHQ',
      github: 'RoadieHQ',
    },

    content: {
      termsAndConditionsText,
      privacyPolicyText,
    },
  },

  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content`,
        name: `blog`,
        // Ignore stuff like Vim swp files, .DS_Store etc.
        ignore: ['**/.*'],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
        ignore: ['**/.*'],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/plugins/descriptions`,
        name: `pluginDescriptions`,
        ignore: ['**/template*', '**/.*'],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/plugins/notes`,
        name: `pluginNotes`,
        ignore: ['**/template*', '**/.*'],
      },
    },

    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },

    {
      resolve: 'gatsby-transformer-plugin-descriptions',
      options: {
        // Without this, the query would just be 'descriptionsYaml'. It's a bit too generic
        // and likely to clash as the site gets more complex.
        typeName: ({ node }) => `${camelCase(node.relativeDirectory)}Yaml`,
      },
    },

    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-166771003-3',
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: SITE_TITLE,
        short_name: SITE_TITLE,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: theme.palette.primary.main,
        display: `minimal-ui`,
        icon: `content/assets/roadie-r-764x764.png`,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: 'gatsby-plugin-jss',
      options: { theme },
    },
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
        // Excluded pages should also be Disallowed by the robots.txt
        exclude: ['/terms', '/privacy'],
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
