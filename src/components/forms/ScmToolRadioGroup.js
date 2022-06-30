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
    <legend className="block text-sm font-medium text-gray-700">{label}</legend>

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

export const ScmToolSelect = ({
  onChange,
  currentValue = 'xx',
  label = 'Primary source code host',
  idPrefix = '',
}) => (
  <>
    <legend className="block text-sm font-medium text-gray-700">{label}</legend>
    <select
      className="block mt-1.5 appearance-none w-full py-3 px-4 block shadow-sm focus:ring-primary-500 focus:border-primary-500 border-gray-300 rounded-md placeholder:text-gray-400"
      id="grid-state"
      value={currentValue}
      onChange={onChange}
    >
      {SCM_TOOLS.map(({ value, label }) => (
        <option
          key={value}
          value={value}
          name="scm"
          id={`${idPrefix}scm-${value}-input`}
        >
          {label}
        </option>
      ))}
    </select>
  </>
);

export default ScmToolRadioGroup;
