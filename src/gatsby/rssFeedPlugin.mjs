import get from 'lodash/get.js';

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
        sort: {date: DESC}
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

const blogChangelogFeed = {
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
    query AllChangelogBlogPosts {
      blogs: allContentfulBlogPost(
        sort: {date: DESC}
        filter: {tags: {eq: "changelog"}}
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
  output: '/blog-changelog/rss.xml',
  title: 'Roadie Changelog',
};

export default [{
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

    feeds: [blogFeed, blogChangelogFeed],
  },
}];
