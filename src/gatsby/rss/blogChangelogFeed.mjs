import get from 'lodash/get.js';
import htmlForFeeds from './htmlForFeeds.mjs';

const blogChangelogContent = (node) => {
  let content = '';
  const body = get(node, 'body.childMarkdownRemark.rawMarkdownBody');

  if (body && body !== '') {
    content += htmlForFeeds(body);
  }

  return content;
};

const query = `
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
              rawMarkdownBody
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
`;

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
          'content:encoded': blogChangelogContent(node),
        }],
      };
    });
  },

  query,
  output: '/blog-changelog/rss.xml',
  title: 'Roadie Changelog',
};

export default blogChangelogFeed;
