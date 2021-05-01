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

    feeds: [{
      serialize: ({ query: { site, allMarkdownRemark } }) => {
        return allMarkdownRemark.edges.map((edge) => ({
          title: edge.node.frontmatter.title,
          date: edge.node.frontmatter.date,
          description: edge.node.frontmatter.description,
          url: site.siteMetadata.siteUrl + edge.node.fields.slug,
          guid: site.siteMetadata.siteUrl + edge.node.fields.slug,
          custom_elements: [{
            'content:encoded': edge.node.html,
          }],
        }));
      },

      query: `
        query AllBlogPostsForRss {
          allMarkdownRemark(
            sort: { fields: [frontmatter___date], order: DESC }
            filter: { fileAbsolutePath: { regex: "/.+/blog/.+/" } }
          ) {
            edges {
              node {
                html

                fields {
                  slug
                }

                frontmatter {
                  date
                  title
                  description
                }
              }
            }
          }
        }
      `,

      output: '/blog/rss.xml',
      title: 'Roadie Blog and Newsletter',
    }],
  },
}];
