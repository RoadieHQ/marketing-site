// A lot of the code is copied from the gatsby-transformer-yaml
// This tutorial was also massively helpful.
// https://freddydumont.com/blog/How-to-source-images-and-data-from-JSON-files-in-Gatsby

const jsYaml = require(`js-yaml`);
const isArray = require(`lodash/isArray`);
const isPlainObject = require(`lodash/isPlainObject`);
const upperFirst = require(`lodash/upperFirst`);
const isFunction = require(`lodash/isFunction`);
const isString = require(`lodash/isString`);
const camelCase = require(`lodash/camelCase`);
const path = require(`path`);

async function onCreateNode(
  { node, actions, loadNodeContent, createNodeId, createContentDigest },
  pluginOptions
) {
  function getType({ node, object, isArray }) {
    if (pluginOptions && isFunction(pluginOptions.typeName)) {
      return pluginOptions.typeName({ node, object, isArray });
    } else if (pluginOptions && isString(pluginOptions.typeName)) {
      return pluginOptions.typeName;
    } else if (node.internal.type !== `File`) {
      return upperFirst(camelCase(`${node.internal.type} Yaml`));
    } else if (isArray) {
      return upperFirst(camelCase(`${node.name} Yaml`));
    } else {
      return upperFirst(camelCase(`${path.basename(node.dir)} Yaml`));
    }
  }

  function transformObject(obj, id, type) {
    const logoAbsolutePath = path.resolve(__dirname, '..', '..', obj.logo.fileSystemPath);
    const { name, ext } = path.parse(logoAbsolutePath);
    const logo = {
      name,
      ext,
      absolutePath: logoAbsolutePath,
      extension: ext.substring(1),
    };

    const logoNode = {
      ...logo,
      id: createNodeId(`logo-${name}`),
      internal: {
        type: 'LogoImage',
        contentDigest: createContentDigest(logo),
      },
    };

    const coverAbsolutePath = path.resolve(__dirname, '..', '..', obj.coverImage.fileSystemPath);
    const cover = {
      name,
      ext,
      absolutePath: coverAbsolutePath,
      extension: ext.substring(1),
    };

    const coverNode = {
      ...cover,
      id: createNodeId(`cover-image-${name}`),
      internal: {
        type: 'CoverImage',
        contentDigest: createContentDigest(cover),
      },
    };

    const yamlNode = {
      ...obj,
      id,
      children: [],
      parent: node.id,
      internal: {
        contentDigest: createContentDigest(obj),
        type,
      },
    };

    createNode(yamlNode);
    createParentChildLink({ parent: node, child: yamlNode });
    createNode(logoNode);
    createParentChildLink({ parent: yamlNode, child: logoNode });
    createNode(coverNode);
    createParentChildLink({ parent: yamlNode, child: coverNode });
  }

  const { createNode, createParentChildLink } = actions;

  if (node.internal.mediaType !== `text/yaml`) {
    return;
  }

  const content = await loadNodeContent(node);
  const parsedContent = jsYaml.load(content);

  if (isArray(parsedContent)) {
    parsedContent.forEach((obj, i) => {
      transformObject(
        obj,
        obj.id ? obj.id : createNodeId(`${node.id} [${i}] >>> YAML`),
        getType({ node, object: obj, isArray: true })
      );
    });
  } else if (isPlainObject(parsedContent)) {
    transformObject(
      parsedContent,
      parsedContent.id ? parsedContent.id : createNodeId(`${node.id} >>> YAML`),
      getType({ node, object: parsedContent, isArray: false })
    );
  }
}

exports.onCreateNode = onCreateNode;
