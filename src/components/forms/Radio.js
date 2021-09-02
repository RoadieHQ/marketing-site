import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles((theme) => ({
  root: {
    // fontSize: '2.25rem',
    // color: theme.palette.primary.main,
    display: 'grid',
    gridTemplateColumns: 'min-content auto',
    gridGap: '0.5em',
  },

  input: {
    opacity: 0,
    width: 0,
    height: 0,

    '&:checked + $radioControl': {
      background: `radial-gradient(${theme.palette.primary.main} 50%, rgba(255, 0, 0, 0) 40%)`,
    }
  },

  radioInput: {
    display: 'flex',
  },

  radioLabel: {
    lineHeight: 1,
  },

  radioControl: {
    display: 'block',
    width: '1.2em',
    height: '1.2em',
    borderRadius: '50%',
    border: `0.1em solid ${theme.palette.primary.main}`,
    transform: 'translateY(-0.3em)',
  },
}));

const Radio = ({ onChange, value, currentValue, label }) => {
  const classes = useStyles();

  const onValueChange = (e) => {
    onChange(e.target.value);
  };

  return (
    <label className={classes.root}>
      <span className={classes.radioInput}>
        <input
          type="radio"
          className={classes.input}
          value={value}
          checked={currentValue === value}
          onChange={onValueChange}
        />
        <span className={classes.radioControl} />
      </span>
      <span className={classes.radioLabel}>
        {label}
      </span>
    </label>
  );
};

export default Radio;
