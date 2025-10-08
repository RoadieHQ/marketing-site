import React from 'react';
import isEmpty from 'lodash/isEmpty';
import { Field, Label } from '@headlessui/react';

import { INPUT_COLORS } from '.';
import { SCM_TOOLS, SCM_SUPPORT_HELP_TEXT, SCM_NO_GITLAB_TEXT } from '../../contactFormConstants';
import { HelpText, Select } from 'components';

export const ScmToolSelect = ({
  onChange,
  currentValue,
  label = 'Primary source code host',
  idPrefix = '',
  color = 'primary',
  helpText = SCM_SUPPORT_HELP_TEXT,
  showProductPrompts = true,
  name = 'scm',
}) => {
  const { label: labelStyle } = INPUT_COLORS[color];

  return (
    <Field>
      <Label className={`block text-lg font-medium ${labelStyle}`}>
        {label}
      </Label>

      <div className="mt-1.5">
        <Select
          value={currentValue}
          options={SCM_TOOLS}
          onChange={onChange}
          optionIdPrefix={[idPrefix, 'scm'].join('-')}
          name={name}
        />

    {/* We need an <input /> matching the name of the select box in the DOM at build time
        for Netlify forms to work. https://shorturl.at/qXx4D
        Listbox has a built in way of doing this (https://shorturl.at/RYOMH), but it seems
        to only add the hidden <input /> at run time, which means that the field value
        is never sent to Netlify forms. Hence, I'm adding it manually here, and keeping
        it in sync */}
        <input readOnly hidden type="hidden" name={name} value={currentValue.value} />
      </div>

      {!isEmpty(helpText) && !isEmpty(currentValue.value) && showProductPrompts && (
        <>
          {currentValue.value.includes('gitlab') && (
            <div className="mt-3">
              <HelpText message={SCM_NO_GITLAB_TEXT} />
            </div>
          )}
        </>
      )}
    </Field>
  );
};

export default ScmToolSelect;
