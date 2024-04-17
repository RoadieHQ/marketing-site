// DO NOT put this file in the src/pages directory. Gatsby will complain because it doesn't export
// a React component.
//
// These unique names allow us to figure out what a user was looking for when they submit
// their email address. They show up in Netlify as emails sorted into different lists.
export const FORM_NAMES = {
  subscribeToNewsletter: 'subscribe-to-newsletter',
  getInstance: 'submit-get-instance-form',
  getInstanceExtended: 'submit-extended-get-instance-form',
  requestDemo: 'submit-extended-get-demo-form',
  tryRoadieHomepage: 'submit-try-roadie-homepage'
};

export const HONEYPOT_FIELD_NAME = 'honeybot-field';

export const SCM_TOOLS = [{
  value: 'github-cloud',
  label: 'GitHub Cloud',
  supported: true,
}, {
  value: 'github-on-prem',
  label: 'GitHub On-prem',
  supported: true,
}, {
  value: 'gitlab-cloud',
  label: 'GitLab Cloud',
  supported: false,
}, {
  value: 'gitlab-on-prem',
  label: 'GitLab On-prem',
  supported: false,
}, {
  value: 'bitbucket-cloud',
  label: 'Bitbucket Cloud',
  supported: true,
}, {
  value: 'bitbucket-server',
  label: 'Bitbucket Server',
  supported: true,
}, {
  value: 'azure-devops',
  label: 'Azure DevOps',
  supported: true,
}, {
  value: 'other',
  label: 'Other',
  supported: false,
}];

export const SCM_SUPPORT_HELP_TEXT = 'Roadie has limited support for non-GitHub SCMs. Are you ok with beta testing?';
export const SCM_NO_GITLAB_TEXT = "Roadie does not support GitLab yet. Submit the form and we'll notify you.";

export const SCM_SUPPORT_FAQ_TEXT = `We support everything except GitLab. Request a demo to learn more.`;
