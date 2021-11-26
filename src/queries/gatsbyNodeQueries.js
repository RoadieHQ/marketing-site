module.exports.BLOGS_QUERY = `
{
  blogs: allMarkdownRemark(
    sort: {
      fields: [frontmatter___date],
      order: DESC
    },
    limit: 1000,
    filter: {
      fileAbsolutePath: {regex: "/.+content/blog/.+/"}
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

module.exports.CASE_STUDIES_QUERY = `
{
  caseStudies: allMarkdownRemark(
    sort: {
      fields: [frontmatter___date],
      order: DESC
    },
    limit: 1000,
    filter: {
      fileAbsolutePath: {regex: "/.+content/case-studies/.+/"}
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
  tagsGroup: allMarkdownRemark(limit: 2000) {
    group(field: frontmatter___tags) {
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
