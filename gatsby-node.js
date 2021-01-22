const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);
const kebabCase = require('lodash/kebabCase');

const BLOGS_QUERY = `
{
  allMarkdownRemark(
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

const YAML_QUERY = `
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

const PAGES_QUERY = `
{
  pages: allMarkdownRemark(
    sort: {
      fields: [frontmatter___date],
      order: DESC
    },
    limit: 1000,
    filter: {
      fileAbsolutePath: {regex: "/.+/content/pages/.+/"}
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

const TAGS_QUERY = `
{
  tagsGroup: allMarkdownRemark(limit: 2000) {
    group(field: frontmatter___tags) {
      fieldValue
    }
  }
}
`;

const pluginDescriptionCreatePageOptions = async ({ graphql }) => {
  const component = path.resolve(`./src/templates/Plugin.js`);
  const { data, errors } = await graphql(YAML_QUERY);

  if (errors) {
    throw errors;
  }

  const pluginDescriptions = data.allYaml.edges;

  return pluginDescriptions.map(({ node: { name } }) => ({
    path: `/backstage/plugins/${name}/`,
    component,
    context: {
      name,
    },
  }));
};

const blogPostCreatePageOptions = async ({ graphql }) => {
  const component = path.resolve(`./src/templates/BlogPost.js`);
  const { errors, data } = await graphql(BLOGS_QUERY);

  if (errors) {
    throw errors;
  }

  const posts = data.allMarkdownRemark.edges;
  return posts.map(({ node }, index) => {
    const previous = index === posts.length - 1 ? null : posts[index + 1].node;
    const next = index === 0 ? null : posts[index - 1].node;

    return {
      path: node.fields.slug,
      component,
      context: {
        slug: node.fields.slug,
        previous,
        next,
      },
    };
  });
};

const pagesCreatePageOptions = async ({ graphql }) => {
  const component = path.resolve('./src/templates/Page.js');
  const { errors, data } = await graphql(PAGES_QUERY);

  if (errors) {
    throw errors;
  }

  const pages = data.pages.edges;
  return pages.map(({ node }) => ({
    path: node.fields.slug,
    component,
    context: {
      slug: node.fields.slug,
    },
  }));
};

const tagsCreatePagesOptions = async ({ graphql }) => {
  const component = path.resolve('./src/templates/Tag.js');

  const { errors, data } = await graphql(TAGS_QUERY);

  if (errors) {
    throw errors;
  }

  const tags = data.tagsGroup.group;
  return tags.map(({ fieldValue }) => ({
    path: `/tags/${kebabCase(fieldValue)}/`,
    component,
    context: {
      tag: fieldValue,
    },
  }));
};

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const blogCreatePageOptions = await blogPostCreatePageOptions({ graphql });
  blogCreatePageOptions.forEach((options) => {
    createPage(options);
  });

  const yamlCreatePageOptions = await pluginDescriptionCreatePageOptions({ graphql });
  yamlCreatePageOptions.forEach((options) => {
    createPage(options);
  });

  const _pagesCreatePageOptions = await pagesCreatePageOptions({ graphql });
  _pagesCreatePageOptions.forEach((options) => {
    createPage(options);
  });

  const _tagsCreatePagesOptions = await tagsCreatePagesOptions({ graphql });
  _tagsCreatePagesOptions.forEach((options) => {
    createPage(options);
  });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode });

    if (/blog/.test(node.fileAbsolutePath)) {
      createNodeField({
        name: `slug`,
        node,
        value: `/blog${value}`,
      });
    } else {
      createNodeField({
        name: `slug`,
        node,
        value,
      });
    }
  }
};
