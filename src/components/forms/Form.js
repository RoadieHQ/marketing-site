import React from 'react';

import { currentlyExecutingGitBranch } from '../../environment';

const Form = ({
  buttonText,
  name,
  children,
  ...rest
}) => (
  <form
    method="post"
    data-netlify="true"
    data-netlify-honeypot="honeypot-field"
    name={name}
    {...rest}
  >
    <input type="hidden" name="form-name" value={name} />
    <input type="hidden" name="submit-button-label" value={buttonText} />
    <input type="hidden" name="deployed-branch" value={currentlyExecutingGitBranch()} />
    {children}
  </form>
);

export default Form;
