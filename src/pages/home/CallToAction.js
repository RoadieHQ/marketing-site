import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles((theme) => ({
  input: {
    backgroundColor: '#eae5e7',
    padding: '1.5rem 1.25rem',
    border: 'none',
    borderLeft: '2px solid #145cc6',
    color: '#49475f',
    fontFamily: 'Moderat Mono, Courier New, monospace',
    lineHeight: 1,
    fontSize: '0.875rem',
    display: 'inline-block',
  },

  button: {
    height: 48,
    backgroundColor: '#fb3728',
  },
}));

const CallToAction = () => {
  const classes = useStyles();

  return (
    <div>
      <form>
        <input
          type="email"
          placeholder="Work email"
          className={classes.input}
        />
        <input type="submit" value="Talk to us" className={classes.button} />
      </form>
    </div>
  );
};

export default CallToAction;
