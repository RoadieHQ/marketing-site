import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },

  input: {
    opacity: 0,
    width: 0,
    height: 0,

    '&:checked + $radioControl': {
      background: `radial-gradient(${theme.palette.primary.main} 35%, rgba(255, 0, 0, 0) 40%)`,
    }
  },

  radioInput: {
    display: 'flex',
    marginRight: 8,
  },

  radioLabel: {
    lineHeight: 1,
  },

  radioControl: {
    display: 'block',
    width: 20,
    height: 20,
    borderRadius: '50%',
    boxShadow: 'inset 0 0 3px #222',
  },
}));

const Radio = ({ onChange, value, currentValue, label, ...rest }) => {
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
          {...rest}
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
