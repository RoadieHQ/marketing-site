import React from 'react';
import { connectSearchBox } from 'react-instantsearch-dom';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles((theme) => ({
  input: {
    fontSize: '1.2em',
    width: '100%',
    borderRadius: 0,
    padding: '0.1rem 0.5rem',
    backgroundColor: theme.palette.grey[100],
    color: theme.palette.secondary.dark,
    border: 'none',
    lineHeight: 2,

    '&::placeholder': {
      color: theme.palette.secondary.light,
      // Override Firefox's unusual default opacity; see https://github.com/twbs/bootstrap/pull/11526.
      opacity: 0.5,
    },

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
  },
}));

export default connectSearchBox(({ refine, currentRefinement, onFocus, hasFocus }) => {
  const classes = useStyles({ hasFocus });

  return (
    <form noValidate autoComplete="off">
      <input
        type="text"
        placeholder="Search docs"
        aria-label="Search docs"
        onChange={(e) => refine(e.target.value)}
        value={currentRefinement}
        onFocus={onFocus}
        className={classes.input}
      />
    </form>
  );
});
