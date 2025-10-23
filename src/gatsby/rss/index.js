import blogFeed from './blogFeed';
import backstageWeeklyFeed from './backstageWeeklyFeed';
import blogChangelogFeed from './blogChangelogFeed';

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
