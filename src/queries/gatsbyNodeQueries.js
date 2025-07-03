module.exports.BLOGS_QUERY = `
{
  blogs: allContentfulBlogPost(sort: {date: DESC}) {
    edges {
      node {
        slug
      }
    }
  }
}
`;

module.exports.BACKSTAGE_BITES_QUERY = `
{
  videos: allContentfulVideo {
    edges {
      node {
        slug
      }
    }
  }
}
`;

module.exports.CASE_STUDIES_QUERY = `
{
  caseStudies: allContentfulCaseStudy(
    sort: {
      date: DESC,
    },
    limit: 1000,
  ) {
    edges {
      node {
        slug
      }
    }
  }
}
`;


module.exports.PLUGINS_QUERY = `
{
  plugins: allMarkdownRemark(
    limit: 1000,
    filter: {
      fileAbsolutePath: {regex: "/.+/content/backstage/plugins/.+/"}
    }
  ) {
    edges {
      node {
        fields {
          slug
        }
      }
    }
  }
}
`;

module.exports.TAGS_QUERY = `
{
  tagsGroup: allContentfulBlogPost {
    group(field: {tags: SELECT}) {
      fieldValue
    }
  }
}
`;

module.exports.LEGAL_NOTICES_QUERY = `
{
  notices: allMarkdownRemark(
    limit: 1000,
    filter: {
      fileAbsolutePath: {regex: "/.+/content/legal-notices/.+/"}
    }
  ) {
    edges {
      node {
        fields {
          slug
        }
      }
    }
  }
}
`;

module.exports.DOCS_QUERY = `
{
  docs: allMarkdownRemark(
    limit: 1000,
    filter: {
      fileAbsolutePath: {regex: "/.+/content/docs/.+/"}
    }
  ) {
    edges {
      node {
        fields {
          slug
        }
      }
    }
  }
}
`;

module.exports.CHANGELOG_QUERY = `
{
  result: allContentfulChangeSet(
    sort: {releasedAt: DESC}
    limit: 1000
  ) {
    edges {
      node {
        slug
      }
    }
  }
}
`;
