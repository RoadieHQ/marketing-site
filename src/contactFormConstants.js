// This is loaded in a NodeJS process.
// DO NOT put this file in the src/pages directory. Gatsby will complain because it doesn't export
// a React component.
//
// These unique names allow us to figure out what a user was looking for when they submit
// their email address. They show up in Netlify as emails sorted into different lists.
exports.FORM_NAMES = {
  subscribeToNewsletter: 'subscribe-to-newsletter',
  getInstance: 'submit-get-instance-form',
  getInstanceSplitTesting: 'get-instance-split-testing',
};
