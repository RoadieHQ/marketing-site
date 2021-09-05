import React from 'react';
import { createUseStyles } from 'react-jss';
import classnames from 'classnames';
import { HelpText } from 'components';

const useStyles = createUseStyles((theme) => ({
  input: {
    flex: 1,

    border: 'none',
    borderLeft: `2px solid ${theme.palette.primary.main}`,
    borderRadius: 0,

    backgroundColor: theme.palette.grey[100],
    color: theme.palette.secondary.dark,

    lineHeight: 2,
    fontSize: '2rem',
    padding: '0.5rem',
    marginBottom: 8,

    '&:focus': {
      borderRadius: 0,
      // Just change the color of the border so the cursor in the input doesn't move.
      borderLeftColor: 'transparent',
      outlineWidth: 2,
      outlineStyle: 'solid',
      outlineColor: theme.palette.primary.main,
      // Fixes issue in Firefox where outline is outside the input vs Chrome where it is inside.
      outlineOffset: -2,
    },

    '&::placeholder': {
      color: theme.palette.secondary.light,
      // Override Firefox's unusual default opacity; see https://github.com/twbs/bootstrap/pull/11526.
      opacity: 0.5,
    },
  },

  label: {
    fontWeight: 700,
  },

  [`@media (min-width: ${theme.breakpoints.values.md}px)`]: {
    input: {
      fontSize: '2rem',
      padding: '0.5rem 0.5rem',
      marginBottom: 0,
    },
  },
}));


const TextField = ({
  id,
  label,
  onChange,
  helpText,
  helpTextState,
  className = {},
  ...rest
}) => {
  const classes = useStyles();
  const htmlId = id ? id : Math.random().toString(36).slice(2);

  const onInputChange = (e) => {
    onChange(e.target.value);
  };

  return (
    <div>
      {label && (
        <div>
          <label htmlFor={htmlId} className={classes.label}>
            {label}
          </label>
        </div>
      )}

      <input
        id={htmlId}
        onChange={onInputChange}
        className={classnames(classes.input, className.input)}
        {...rest}
      />
      <HelpText message={helpText} state={helpTextState} />
    </div>
  );
};

export default TextField;
