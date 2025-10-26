export const BLOGS_QUERY = `
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

export const BACKSTAGE_WEEKLY_QUERY = `
{
  issues: allContentfulBackstageWeekly(sort: {publishDate: DESC}) {
    edges {
      node {
        slug
      }
    }
  }
}
`;

export const BACKSTAGE_BITES_QUERY = `
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

export const CASE_STUDIES_QUERY = `
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

export const PLUGINS_QUERY = `
{
  plugins: allContentfulBackstagePlugin(
    limit: 1000
  ) {
    edges {
      node {
        slug
        packages {
          type
          npmPackageName
          registry
        }
      }
    }
  }
}
`;

export const TAGS_QUERY = `
{
  tagsGroup: allContentfulBlogPost {
    group(field: {tags: SELECT}) {
      fieldValue
    }
  }
}
`;

export const LEGAL_NOTICES_QUERY = `
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

export const DOCS_QUERY = `
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

export const CHANGELOG_QUERY = `
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

export const SCAFFOLDER_ACTIONS_QUERY = `
{
  actions: allContentfulBackstageScaffolderAction(
    limit: 1000
  ) {
    edges {
      node {
        slug
        containedInPackage {
          npmPackageName
        }
      }
    }
  }
}
`;
