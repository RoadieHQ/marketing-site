import get from 'lodash/get.js';
import htmlForFeeds from './htmlForFeeds.mjs';

const blogContent = (node) => {
  let content = '';
  const body = get(node, 'body.childMarkdownRemark.rawMarkdownBody');

  if (body && body !== '') {
    content += htmlForFeeds(body);
  }

  return content;
};

const query = `
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
          'content:encoded': blogContent(node),
        }],
      };
    });
  },

  query,
  output: '/blog/rss.xml',
  title: 'Roadie Blog',
};

export default blogFeed;
