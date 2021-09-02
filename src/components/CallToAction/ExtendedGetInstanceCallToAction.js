import React, { useState } from 'react';
import { Button, TextField, Radio, TextLink as Link } from 'components';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles(() => ({
  fieldset: {
    marginBottom: '2em',
  },

  radioWrapper: {
    marginBottom: '0.4em',
  },
}));

const ExtendedGetInstanceCallToAction = () => {
  const classes = useStyles();
  const [email, setEmail] = useState('');
  const [scmTool, setScmTool] = useState('github-enterprise-cloud');
  const [subToNewsletter, setSubToNewsletter] = useState(true);

  const onSubmit = () => {
    console.log('submit', email, scmTool);
  };

  const onInputChange = (e) => {
    setEmail(e.target.value);
  };

  return (
    <form onSubmit={onSubmit}>
      <div className={classes.fieldset}>
        <TextField
          label="Work email address"
          type="email"
          name="email"
          id="form-email"
          onChange={onInputChange}
          value={email}
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
            label="GitHub Enterprise (On-prem)"
            value="github-enterprise-on-prem"
            currentValue={scmTool}
            onChange={setScmTool}
          />
        </div>

        <div className={classes.radioWrapper}>
          <Radio
            label="GitHub"
            value="github"
            currentValue={scmTool}
            onChange={setScmTool}
          />
        </div>
      </div>

      <div className={classes.fieldset}>
        <label>
          <input
            name="sub-to-newsletter"
            type="checkbox"
            checked={subToNewsletter}
            onChange={(e) => {
              setSubToNewsletter(e.target.value);
            }}
          />
          {' '} Subscribe me to the Backstage Weekly newsletter.
        </label>
      </div>

      <div className={classes.fieldset}>
        <p>By submitting this form, you automatically agree our <Link color="primary" to="/legal-notices/evaluation-licence/">Evaluation License</Link> and acknowledge you have read our <Link color="primary" to="/legal-notices/privacy-policy/">Privacy Policy</Link>.</p>
      </div>

      <div className={classes.fieldset}>
        <Button color="primary" />
      </div>
    </form>
  );
};

export default ExtendedGetInstanceCallToAction;
