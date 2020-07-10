const React = require('react');
const fs = require('fs');

const { FORM_NAME } = require('./src/contactFormConstants');

const HEAD_CSS = fs.readFileSync('src/styles.css').toString();

// <form netlify... /> is here to trigger the netlify bot into making form submissions available
// for this website. If I put the tags on the form which actually performs the submission
// then it doesn't work. I believe that form is rendered too dynamically to trigger the netlify
// bot. This form doesn't do any actual work on the site for users.
const embeddedForm = (
  <form name={FORM_NAME} netlify="true" netlify-honeypot="bot-field" hidden key="form">
    <input type="email" name="email" />
  </form>
);

exports.onRenderBody = ({ setHeadComponents, setPostBodyComponents }) => {
  // Getting these into the head so the fonts start loading fast and we don't have a FoUC.
  // Have to use dangerouslySetInnerHTML to prevent escaping of quotation marks in the CSS.
  setHeadComponents([<style key="inline-styles" dangerouslySetInnerHTML={{ __html: HEAD_CSS }} />]);

  setPostBodyComponents([embeddedForm]);
};
