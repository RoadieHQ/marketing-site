import React from 'react';

import { SCM_TOOLS } from 'components/forms/ScmToolRadioGroup';
import Radio from './Radio';

const ScmToolRadioGroup = ({
  onChange,
  currentValue,
  label = 'Primary source code hosting tool',
  idPrefix = '',
}) => (
  <>
    <div className="mb-1">
      <strong>
        {label}
      </strong>
    </div>

    {SCM_TOOLS.map(({ value, label }) => (
      <div className="mb-1" key={value}>
        <Radio
          value={value}
          label={label}
          onChange={onChange}
          currentValue={currentValue}
          name="scm"
          id={`${idPrefix}scm-${value}-input`}
        />
      </div>
    ))}
  </>
);

export default ScmToolRadioGroup;
