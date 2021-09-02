import React, { useState } from 'react';
import { Button, TextField, Radio, Checkbox, TextLink as Link } from 'components';
import { createUseStyles } from 'react-jss';

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

const ExtendedGetInstanceCallToAction = () => {
  const classes = useStyles();
  const [email, setEmail] = useState('');
  const [scmTool, setScmTool] = useState('github-enterprise-cloud');
  const [subToNewsletter, setSubToNewsletter] = useState(true);

  const onSubmit = (e) => {
    e.preventDefault();
    console.log('submit', email, scmTool, subToNewsletter);
  };

  return (
    <form onSubmit={onSubmit}>
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
        <Button color="primary" text="Start your trial" />
      </div>
    </form>
  );
};

export default ExtendedGetInstanceCallToAction;
