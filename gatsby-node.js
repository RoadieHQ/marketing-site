const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);

const MARKDOWN_QUERY = `
{
  allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }, limit: 1000) {
    edges {
      node {
        fields {
          slug
        }
        frontmatter {
          title
        }
      }
    }
  }
}
`;

const YAML_QUERY = `
{
  allPluginsDescriptionsYaml {
    edges {
      node {
        name
      }
    }
  }
}
`;

const pluginDescriptionCreatePageOptions = async ({ graphql }) => {
  const pluginDescriptionTemplate = path.resolve(`./src/templates/Plugin.js`);
  const { data, errors } = await graphql(YAML_QUERY);

  if (errors) {
    throw errors;
  }

  const pluginDescriptions = data.allPluginsDescriptionsYaml.edges;

  return pluginDescriptions.map(({ node: { name } }) => ({
    path: `/backstage/plugins/${name}/`,
    component: pluginDescriptionTemplate,
    context: {
      name,
    },
  }));
};

const blogPostCreatePageOptions = async ({ graphql }) => {
  const blogPostTemplate = path.resolve(`./src/templates/BlogPost.js`);
  const result = await graphql(MARKDOWN_QUERY);

  if (result.errors) {
    throw result.errors;
  }

  const posts = result.data.allMarkdownRemark.edges;
  return posts.map((post, index) => {
    const previous = index === posts.length - 1 ? null : posts[index + 1].node;
    const next = index === 0 ? null : posts[index - 1].node;

    return {
      path: post.node.fields.slug,
      component: blogPostTemplate,
      context: {
        slug: post.node.fields.slug,
        previous,
        next,
      },
    };
  });
};

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const blogCreatePageOptions = await blogPostCreatePageOptions({ graphql });
  blogCreatePageOptions.forEach((options) => {
    createPage(options);
  });

  const createPageOptions = await pluginDescriptionCreatePageOptions({ graphql });
  createPageOptions.forEach((options) => {
    createPage(options);
  });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode });
    createNodeField({
      name: `slug`,
      node,
      value,
    });
  }
};
