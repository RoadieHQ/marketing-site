// This is loaded in a NodeJS process.
// DO NOT put this file in the src/pages directory. Gatsby will complain because it doesn't export
// a React component.
//
// These unique names allow us to figure out what a user was looking for when they submit
// their email address. They show up in Netlify as emails sorted into different lists.
exports.FORM_NAMES = {
  subscribeToNewsletter: 'subscribe-to-newsletter',
  getInstance: 'submit-get-instance-form',
  getInstanceExtended: 'submit-extended-get-instance-form',
  requestDemo: 'submit-request-demo-form',
};

exports.SCM_TOOLS = [{
  value: 'github-cloud',
  label: 'GitHub Cloud',
  supported: true,
}, {
  value: 'github-on-prem',
  label: 'GitHub On-prem',
  supported: false,
}, {
  value: 'gitlab-cloud',
  label: 'Gitlab Cloud',
  supported: false,
}, {
  value: 'gitlab-on-prem',
  label: 'Gitlab On-prem',
  supported: false,
}, {
  value: 'bitbucket-cloud',
  label: 'Bitbucket Cloud',
  supported: false,
}, {
  value: 'bitbucket-server',
  label: 'Bitbucket Server',
  supported: false,
}, {
  value: 'other',
  label: 'Other',
  supported: false,
}];

