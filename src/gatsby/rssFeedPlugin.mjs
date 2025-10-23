import get from 'lodash/get.js';
import remark from 'remark';
import remarkHTML from 'remark-html';

const toHtml = remark().use(remarkHTML);

// We transform the rawMarkdownBody to HTML here, rather than querying 'html' in the 
// graphql query, because we want basic HTML in an RSS feed. If we query 'html' on the 
// graphql then plugins like gatsby-remark-autolink-headers will inject links and icons into
// the headers, and gatsby-remark-prismjs-copy-button will inject a copy button into the
// code blocks. These things won't work in RSS so let's keep them out,
const transformMarkdowntoHtml = (markdown) => {
  return toHtml.processSync(markdown).toString();
};

const blogContent = (node) => {
  let content = '';
  const body = get(node, 'body.childMarkdownRemark.rawMarkdownBody');

  if (body && body !== '') {
    content += transformMarkdowntoHtml(body);
  }

  return content;
};

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
          'content:encoded': blogContent,
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
  `,

  output: '/blog/rss.xml',
  title: 'Roadie Blog',
};


const blogChangelogContent = (node) => {
  let content = '';
  const body = get(node, 'body.childMarkdownRemark.rawMarkdownBody');

  if (body && body !== '') {
    content += transformMarkdowntoHtml(body);
  }

  return content;
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
          'content:encoded': blogChangelogContent(node),
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
  let content = '';
  const body = get(node, 'body.childMarkdownRemark.rawMarkdownBody');
  const backstageChangelog = get(node, 'backstageChangelog.childMarkdownRemark.rawMarkdownBody');
  const ecosystemChangelog = get(node, 'ecosystemChangelog.childMarkdownRemark.rawMarkdownBody');

  if (body && body !== '') {
    content += transformMarkdowntoHtml(body);
  }

  if (backstageChangelog && backstageChangelog !== '') {
    content += `<h2>Backstage Changelog</h2>`;
    content += `<p>A quick look at changes that have been merged into Backstage in the past week.</p>`;
    content += transformMarkdowntoHtml(backstageChangelog);
  }

  if (ecosystemChangelog && ecosystemChangelog !== '') {
    content += `<h2>EcosystemChangelog Changelog</h2>`;
    content += `<p>Learn which plugins have received new features, bugfixes and breaking changes in the past week.</p>`;
    content += transformMarkdowntoHtml(ecosystemChangelog);
  }

  return content;
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
                rawMarkdownBody
              }
            }
            backstageChangelog {
              childMarkdownRemark {
                html
                rawMarkdownBody
              }
            }
            ecosystemChangelog {
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
