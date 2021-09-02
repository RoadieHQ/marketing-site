import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles((theme) => ({
  root: {
    display: 'inline-flex',
    cursor: 'pointer',
    position: 'relative',
  },
  
  input: {
    height: 20,
    width: 22,
    '-webkit-appearance': 'none',
    '-moz-appearance': 'none',
    '-o-appearance': 'none',
    appearance: 'none',
    boxShadow: 'inset 0 0 3px #222',
    borderRadius: 4,
    outline: 'none',
    transitionDuration: '0.3s',
    // backgroundColor: theme.palette.primary.main,
    cursor: 'pointer',
    marginRight: 8,

    '&:checked + span:before': {
      content: '"\u2713"',
      display: 'block',
      textAlign: 'center',
      color: theme.palette.primary.main,
      position: 'absolute',
      fontSize: '3rem',
      left: 2,
      top: -11,
    },
  },
}));

const Checkbox = ({ onChange, label, ...rest }) => {
  const classes = useStyles();

  const onChangeValue = (e) => {
    onChange(e.target.checked);
  };

  return (
    <label className={classes.root}>
      <input
        className={classes.input}
        type="checkbox"
        onChange={onChangeValue}
        {...rest}
      />
      <span>{label}</span>
    </label>
  );
};

export default Checkbox;
