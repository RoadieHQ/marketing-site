const get = require('lodash/get');

const blogFeed = {
  serialize: ({ query: { site, blogs } }) => {
    return blogs.edges.map(({ node }) => {
      return {
        title: node.title,
        date: node.date,
        description: get(node, 'description.childMarkdownRemark.rawMarkdownBody'),
        url: site.siteMetadata.siteUrl + node.slug,
        guid: site.siteMetadata.siteUrl + node.slug,
        custom_elements: [{
          'content:encoded': get(node, 'body.childMarkdownRemark.html'),
        }],
      };
    });
  },

  query: `
    query AllBlogPostsForRss {
      blogs: allContentfulBlogPost(
        sort: {fields: date, order: DESC}
        filter: {tags: {ne: "newsletter"}}
      ) {
        edges {
          node {
            date
            slug
            title

            body {
              childMarkdownRemark {
                html
              }
            }

            description {
              childMarkdownRemark {
                rawMarkdownBody
              }
            }
          }
        }
      }
    }
  `,

  output: '/blog/rss.xml',
  title: 'Roadie Blog',
};

const changelogFeed = {
  serialize: ({ query: { site, changeSets } }) => {
    return changeSets.edges.map(({ node }) => {
      return {
        title: node.title,
        date: node.releasedAt,
        description: get(node, 'description.childMarkdownRemark.rawMarkdownBody'),
        url: site.siteMetadata.siteUrl + `/changelog/${node.slug}/`,
        guid: site.siteMetadata.siteUrl + `/changelog/${node.slug}/`,
        custom_elements: [{
          'content:encoded': get(node, 'description.childMarkdownRemark.html'),
        }],
      };
    });
  },

  query: `
    query ChangelogForRss {
      changeSets: allContentfulChangeSet(
        sort: {fields: releasedAt, order: DESC}
      ) {
        edges {
          node {
            title
            slug
            releasedAt
            description {
              childMarkdownRemark {
                html
                rawMarkdownBody
              }
            }
          }
        }
      }
    }
  `,

  output: '/changelog/rss.xml',
  title: 'Roadie Changelog',
};

module.exports = [{
  resolve: 'gatsby-plugin-feed',
  options: {
    query: `
      {
        site {
          siteMetadata {
            title
            description
            siteUrl
            site_url: siteUrl
          }
        }
      }
    `,

    feeds: [blogFeed, changelogFeed],
  },
}];
