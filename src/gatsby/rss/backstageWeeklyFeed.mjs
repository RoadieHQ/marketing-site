import get from 'lodash/get.js';
import htmlForFeeds from './htmlForFeeds.mjs';

const backstageWeeklyContent = (node) => {
  let content = '';
  const body = get(node, 'body.childMarkdownRemark.rawMarkdownBody');
  const backstageChangelog = get(node, 'backstageChangelog.childMarkdownRemark.rawMarkdownBody');
  const ecosystemChangelog = get(node, 'ecosystemChangelog.childMarkdownRemark.rawMarkdownBody');

  if (body && body !== '') {
    content += htmlForFeeds(body);
  }

  if (backstageChangelog && backstageChangelog !== '') {
    content += `<h2>Backstage Changelog</h2>`;
    content += `<p>A quick look at changes that have been merged into Backstage in the past week.</p>`;
    content += htmlForFeeds(backstageChangelog);
  }

  if (ecosystemChangelog && ecosystemChangelog !== '') {
    content += `<h2>EcosystemChangelog Changelog</h2>`;
    content += `<p>Learn which plugins have received new features, bugfixes and breaking changes in the past week.</p>`;
    content += htmlForFeeds(ecosystemChangelog);
  }

  return content;
};

const query = `
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
              rawMarkdownBody
            }
          }
          backstageChangelog {
            childMarkdownRemark {
              rawMarkdownBody
            }
          }
          ecosystemChangelog {
            childMarkdownRemark {
              rawMarkdownBody
            }
          }
        }
      }
    }
  }
`;

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

  query,
  output: '/backstage-weekly/rss.xml',
  title: 'Backstage Weekly',
};

export default backstageWeeklyFeed;
