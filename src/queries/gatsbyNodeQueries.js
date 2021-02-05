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

module.exports.YAML_QUERY = `
{
  allYaml {
    edges {
      node {
        name
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

        frontmatter {
          name
        }
      }
    }
  }
}
`;
