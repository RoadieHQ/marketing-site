const remark = require('remark');
const remarkHTML = require('remark-html');

const transformPageFrontmatter = ({ node }) => {
  if (node.frontmatter.gettingStarted) {
    for (const step of node.frontmatter.gettingStarted) {
      if (step.intro) {
        // This will infortunately ingore the options which are passed to gatsby-transformer-remark
        // in the gatsby-config.js file.
        step.intro = remark().use(remarkHTML).processSync(step.intro).toString();
      }
    }
  }

  if (node.frontmatter.intro) {
    node.frontmatter.intro = remark()
      .use(remarkHTML)
      .processSync(node.frontmatter.intro)
      .toString();
  }

  return node;
};

module.exports = transformPageFrontmatter;
