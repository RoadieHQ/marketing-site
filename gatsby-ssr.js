const React = require('react');
const fs = require('fs');

const HEAD_CSS = fs.readFileSync('src/stylesheets/head-loaded-styles.css').toString();

exports.onRenderBody = ({ setHeadComponents }) => {
  // Getting these into the head so the fonts start loading fast and we don't have a FoUC.
  // Have to use dangerouslySetInnerHTML to prevent escaping of quotation marks in the CSS.
  setHeadComponents([<style key="inline-styles" dangerouslySetInnerHTML={{ __html: HEAD_CSS }} />]);
};
