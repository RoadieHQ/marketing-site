import React, { useState } from 'react';
import { Button, TextField, Radio, Checkbox, TextLink as Link } from 'components';
import { createUseStyles } from 'react-jss';

import { FORM_NAMES } from '../../contactFormConstants';
import { currentlyExecutingGitBranch } from '../../environment';

const useStyles = createUseStyles(() => ({
  fieldset: {
    marginBottom: '2em',
  },

  radioWrapper: {
    marginBottom: '0.4em',
  },

  emailInput: {
    width: '100%',
  },
}));

const SCM_TOOLS = [{
  value: 'github-enterprise-cloud',
  label: 'GitHub Enterprise (Cloud)',
}, {
  value: 'github-enterprise-on-prem',
  label: 'GitHub Enterprise (On-prem)',
}, {
  value: 'github',
  label: 'GitHub (Not sure)',
}, {
  value: 'gitlab-cloud',
  label: 'Gitlab Cloud',
}, {
  value: 'gitlab-on-prem',
  label: 'Gitlab On-prem',
}, {
  value: 'bitbucket-cloud',
  label: 'Bitbucket Cloud',
}, {
  value: 'bitbucket-server',
  label: 'Bitbucket Server',
}];

export const submitToNetlifyForms = async ({
  email,
  scmTool,
  subToNewsletter,
  netlifyFormName,
  submitButtonLabel = 'NOT_SUPPLIED',
}) => {
  const branch = currentlyExecutingGitBranch();

  const formData = new FormData();
  formData.append('form-name', netlifyFormName);
  formData.append('email', email);
  formData.append('scm', scmTool);
  formData.append('sub-to-newsletter', subToNewsletter);
  formData.append('deployed-branch', branch);
  formData.append('submit-button-label', submitButtonLabel);

  let resp;
  try {
    resp = await fetch('/', {
      method: 'POST',
      body: formData,
    });
  } catch (error) {
    console.error('Submission failed', error, resp);
  }

  return resp;
};

const ExtendedGetInstanceCallToAction = () => {
  const classes = useStyles();
  const [email, setEmail] = useState('');
  const [scmTool, setScmTool] = useState('github-enterprise-cloud');
  const [subToNewsletter, setSubToNewsletter] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const netlifyFormName = FORM_NAMES.getInstanceExtended;
  const buttonText = 'Start your trial';

  const onSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    console.log('submit', email, scmTool, subToNewsletter);

    const resp = await submitToNetlifyForms({
      email,
      scmTool,
      subToNewsletter,
      netlifyFormName,
      submitButtonLabel: buttonText,
    });

    if (resp.ok) {
      console.log('resp ok', resp);
      // DO NOT reset the email input here. It is already happening higher in the state chain.
    } else {
      console.log('error', resp);
    }

    setSubmitting(false);
  };

  const disabled = submitting || !email || email === '';

  return (
    <form
      onSubmit={onSubmit}
      name={netlifyFormName}
      method="post"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
    >
      <input type="hidden" name="form-name" value={netlifyFormName} />
      <input type="hidden" name="submit-button-label" value={buttonText} />
      <input type="hidden" name="deployed-branch" value={currentlyExecutingGitBranch()} />

      <div className={classes.fieldset}>
        <TextField
          label="Work email address *"
          type="email"
          name="email"
          id="form-email"
          onChange={setEmail}
          value={email}
          className={{ input: classes.emailInput }}
          helpText="Your account details will be sent to this address"
        />
      </div>

      <div className={classes.fieldset}>
        <div className={classes.radioWrapper}>
          <strong>
            Primary source code hosting tool
          </strong>
        </div>

        {SCM_TOOLS.map(({ value, label }) => (
          <div className={classes.radioWrapper} key={value}>
            <Radio
              value={value}
              label={label}
              onChange={setScmTool}
              currentValue={scmTool}
              name="scm"
              id={value}
            />
          </div>
        ))}
      </div>

      <div className={classes.fieldset}>
        <Checkbox
          name="sub-to-newsletter"
          label="Subscribe me to the Backstage Weekly newsletter."
          checked={subToNewsletter}
          onChange={setSubToNewsletter}
        />
      </div>

      <div className={classes.fieldset}>
        <p>By submitting this form, you automatically agree to our <Link color="primary" to="/legal-notices/evaluation-licence/">Evaluation License</Link> and acknowledge you have read our <Link color="primary" to="/legal-notices/privacy-policy/">Privacy Policy</Link>.</p>
      </div>

      <div className={classes.fieldset}>
        <Button color="primary" text={buttonText} disabled={disabled} />
      </div>
    </form>
  );
};

export default ExtendedGetInstanceCallToAction;
