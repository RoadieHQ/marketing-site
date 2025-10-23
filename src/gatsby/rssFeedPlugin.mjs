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


const backstageWeeklyContent = (node) => {
  let body = get(node, 'body.childMarkdownRemark.html');
  const backstageChangelog = get(node, 'backstageChangelog.childMarkdownRemark.html');
  const ecosystemChangelog = get(node, 'ecosystemChangelog.childMarkdownRemark.html');

  if (backstageChangelog && backstageChangelog !== '') {
    body += `<h2>Backstage Changelog</h2>`;
    body += `<p>A quick look at changes that have been merged into Backstage in the past week.</p>`;
    body += backstageChangelog;
  }

  if (ecosystemChangelog && ecosystemChangelog !== '') {
    body += `<h2>EcosystemChangelog Changelog</h2>`;
    body += `<p>Learn which plugins have received new features, bugfixes and breaking changes in the past week.</p>`;
    body += ecosystemChangelog;
  }

  return body;
};

const backstageWeeklyFeed = {
  serialize: ({ query: { site, issues } }) => {
    return issues.edges.map(({ node }) => {
      return {
        title: `Backstage Weekly ${node.issueNumber} - ${node.title}`,
        date: node.publishDate,
        description: get(node, 'lead.childMarkdownRemark.rawMarkdownBody'),
        url: site.siteMetadata.siteUrl + node.slug,
        guid: site.siteMetadata.siteUrl + node.slug,
        custom_elements: [{
          'content:encoded': backstageWeeklyContent(node),
        }],
      };
    });
  },

  query: `
    query AllBackstageWeeklyForRss {
      issues: allContentfulBackstageWeekly(
        sort: {publishDate: DESC}
      ) {
        edges {
          node {
            lead {
              childMarkdownRemark {
                rawMarkdownBody
              }
            }
            issueNumber
            publishDate
            slug
            title
            body {
              childMarkdownRemark {
                html
              }
            }
            backstageChangelog {
              childMarkdownRemark {
                html
              }
            }
            ecosystemChangelog {
              childMarkdownRemark {
                html
              }
            }
          }
        }
      }
    }
  `,

  output: '/backstage-weekly/rss.xml',
  title: 'Backstage Weekly',
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

    feeds: [blogFeed, blogChangelogFeed, backstageWeeklyFeed],
  },
}];
