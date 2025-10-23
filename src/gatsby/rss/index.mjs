import blogFeed from './blogFeed.mjs';
import backstageWeeklyFeed from './backstageWeeklyFeed.mjs';
import blogChangelogFeed from './blogChangelogFeed.mjs';

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
