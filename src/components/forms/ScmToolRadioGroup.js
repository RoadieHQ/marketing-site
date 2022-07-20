import React from 'react';

import Radio from './Radio';
import Input from './Input';
import HelpText from './HelpText';
import { INPUT_COLORS } from '.';

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
  currentValue,
  label = 'Primary source code host',
  idPrefix = '',
  color = 'primary',
}) => {
  const { accent, border, placeholder, background, text, label: labelStyle } = INPUT_COLORS[color];
  const onInputChange = (e) => {
    onChange(e.target.value);
  };
  return (
    <>
      <label className={`block text-sm font-medium ${labelStyle}`} htmlFor="scm-tool">
        {label}
      </label>
      <select
        className={`block mt-1.5 appearance-none w-full py-3 px-4 block shadow-sm rounded-md ${background} ${text} ${accent} ${border} ${placeholder}`}
        id="scm-tool"
        value={currentValue}
        name="scm-select"
        onChange={onInputChange}
      >
        {SCM_TOOLS.map(({ value, label }) => (
          <option
            key={`sct-option-${value}`}
            value={value}
            name={`sct-option-${value}`}
            id={`${idPrefix}scm-${value}-input`}
          >
            {label}
          </option>
        ))}
      </select>
      {/* Netlify forms won't pick up controlled select values, so we sync it to a hidden input */}
      <div className="hidden">
        <label htmlFor="scm-tool-text">
          SCM Tool
          <Input name="SCM Tool" id="scm-tool-text" value={currentValue} />
        </label>
      </div>
    </>
  );
};

export default ScmToolRadioGroup;
