import React from 'react';
import { createUseStyles } from 'react-jss';

import Radio from './Radio';

export const SCM_TOOLS = [{
  value: 'github-cloud',
  label: 'GitHub Cloud',
  supported: true,
}, {
  value: 'github-on-prem',
  label: 'GitHub On-prem',
  supported: false,
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

const useStyles = createUseStyles(() => ({
  radioWrapper: {
    marginBottom: '0.4em',
  },
}));

const ScmToolRadioGroup = ({
  onChange,
  currentValue,
  label = 'Primary source code hosting tool',
  idPrefix = '',
}) => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.radioWrapper}>
        <strong>
          {label}
        </strong>
      </div>

      {SCM_TOOLS.map(({ value, label }) => (
        <div className={classes.radioWrapper} key={value}>
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
};

export default ScmToolRadioGroup;
