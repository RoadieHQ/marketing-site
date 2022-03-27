import React from 'react';
import { Helmet } from 'react-helmet';

import { currentlyExecutingGitBranch } from '../../environment';
import Input from './Input';
import { HONEYPOT_FIELD_NAME } from '../../contactFormConstants';

const HoneypotField = ({ onChange, value }) => {
  if (!onChange) return null;

  return (
    <div className="hidden">
      <label htmlFor={HONEYPOT_FIELD_NAME}>
        Don’t fill this out if you’re human:
        <Input
          name={HONEYPOT_FIELD_NAME}
          id={HONEYPOT_FIELD_NAME}
          value={value}
          onChange={onChange}
        />
      </label>
    </div>
  );
};

const Form = ({
  buttonText,
  name,
  children,
  onHoneypotChange,
  honeypotValue,
  ...rest
}) => (
  <>
    <Helmet>
      <script src="https://www.google.com/recaptcha/api.js" async defer></script>
    </Helmet>

    <form
      method="post"
      data-netlify="true"
      data-netlify-honeypot={HONEYPOT_FIELD_NAME}
      data-netlify-recaptcha="true"
      name={name}
      {...rest}
    >
      <input type="hidden" name="form-name" value={name} />
      <input type="hidden" name="submit-button-label" value={buttonText} />
      <input type="hidden" name="deployed-branch" value={currentlyExecutingGitBranch()} />
      <HoneypotField onChange={onHoneypotChange} value={honeypotValue} />
      {children}
    </form>
  </>
);

export default Form;
