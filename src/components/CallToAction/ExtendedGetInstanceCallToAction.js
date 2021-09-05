import React, { useState } from 'react';
import { Button, TextField, Radio, Checkbox, TextLink as Link } from 'components';
import { createUseStyles } from 'react-jss';

import { FORM_NAMES } from '../../contactFormConstants';
import { encode } from '../actions/NetlifyFormCallToAction';

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

export const submitToNetlifyForms = async ({
  email,
  scmTool,
  subToNewsletter,
}) => {
  const resp = await fetch('/', {
    method: 'POST',
    body: encode({
      'form-name': FORM_NAMES.getInstanceExtended,
      email,
      subToNewsletter,
      scmTool,
    }),
  });

  return resp;
};

const ExtendedGetInstanceCallToAction = () => {
  const classes = useStyles();
  const [email, setEmail] = useState('');
  const [scmTool, setScmTool] = useState('github-enterprise-cloud');
  const [subToNewsletter, setSubToNewsletter] = useState(true);
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    console.log('submit', email, scmTool, subToNewsletter);

    const resp = await submitToNetlifyForms({
      email,
      scmTool,
      subToNewsletter,
    });

    if (resp.ok) {
      console.log('resp ok', resp);
      // DO NOT reset the email input here. It is already happening higher in the state chain.
    } else {
      console.log('error');
    }

    setSubmitting(false);
  };

  const disabled = submitting || !email || email === '';

  return (
    <form onSubmit={onSubmit}>
      <input type="hidden" name="form-name" value={FORM_NAMES.getInstanceExtended} />

      <div className={classes.fieldset}>
        <TextField
          label="Work email address *"
          type="email"
          name="email"
          id="form-email"
          onChange={setEmail}
          value={email}
          className={{ input: classes.emailInput }}
        />
      </div>

      <div className={classes.fieldset}>
        <div className={classes.radioWrapper}>
          <strong>
            Primary source code hosting tool
          </strong>
        </div>

        <div className={classes.radioWrapper}>
          <Radio
            value="github-enterprise-cloud"
            label="GitHub Enterprise (Cloud)"
            onChange={setScmTool}
            currentValue={scmTool}
          />
        </div>

        <div className={classes.radioWrapper}>
          <Radio
            label="GitHub Enterprise (on-prem)"
            value="github-enterprise-on-prem"
            currentValue={scmTool}
            onChange={setScmTool}
          />
        </div>

        <div className={classes.radioWrapper}>
          <Radio
            label="GitHub (Not sure)"
            value="github"
            currentValue={scmTool}
            onChange={setScmTool}
          />
        </div>

        <div className={classes.radioWrapper}>
          <Radio
            label="Bitbucket Cloud"
            value="bitbucket-cloud"
            currentValue={scmTool}
            onChange={setScmTool}
          />
        </div>

        <div className={classes.radioWrapper}>
          <Radio
            label="Bitbucket Server (on-prem)"
            value="bitbucket-server"
            currentValue={scmTool}
            onChange={setScmTool}
          />
        </div>

        <div className={classes.radioWrapper}>
          <Radio
            label="GitLab Cloud"
            value="gitlab-cloud"
            currentValue={scmTool}
            onChange={setScmTool}
          />
        </div>

        <div className={classes.radioWrapper}>
          <Radio
            label="GitLab On-prem"
            value="gitlab-on-prem"
            currentValue={scmTool}
            onChange={setScmTool}
          />
        </div>
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
        <Button color="primary" text="Start your trial" disabled={disabled} />
      </div>
    </form>
  );
};

export default ExtendedGetInstanceCallToAction;
