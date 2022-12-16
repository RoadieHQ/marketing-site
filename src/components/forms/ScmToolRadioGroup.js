import React from 'react';

import Radio from './Radio';
import HelpText from './HelpText';

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

const ScmToolRadioGroup = ({
  onChange,
  currentValue,
  label = 'Primary source code hosting tool',
  idPrefix = '',
}) => (
  <fieldset className="sm:col-span-2 mt-4">
    <legend className="block text-lg text-blueroadie font-medium">{label}</legend>

    <div className="mt-4 grid grid-cols-1 gap-y-4">
      {SCM_TOOLS.map(({ value, label }) => (
        <Radio
          key={value}
          value={value}
          label={label}
          onChange={onChange}
          currentValue={currentValue}
          name="scm"
          id={`${idPrefix}scm-${value}-input`}
        />
      ))}
      <HelpText message="Roadie only supports GitHub for now. Submit the form to be notified when we support your tool." />
    </div>
  </fieldset>
);

export default ScmToolRadioGroup;
