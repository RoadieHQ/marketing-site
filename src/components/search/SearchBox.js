import React from 'react';
import { connectSearchBox } from 'react-instantsearch-dom';
import { FaSearch } from 'react-icons/fa';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles(() => ({
  root: {
    display: 'flex',
    flexDirection: 'row-reverse',
    alignItems: 'center',
    marginBottom: 0,
  },

  input: {
    outline: 'none',
    // border: ${({ hasFocus }) => (hasFocus ? "auto" : "none")};
    border: ({ hasFocus }) => (hasFocus ? 'auto' : 'none'),
    fontSize: '1em',
    transition: '100ms',
    borderRadius: '2px',
    // color: ${({ theme }) => theme.foreground};
    // ${({ hasFocus }) => (hasFocus ? open : closed)}

    '& ::placeholder': {
      // color: ${({ theme }) => theme.faded};
    },
  },

  icon: {
    width: '1em',
    margin: '0.3em',
    // color: ${({ theme }) => theme.foreground};
    pointerEvents: 'none',
  },
}));

export default connectSearchBox(({ refine, currentRefinement, onFocus, hasFocus }) => {
  const classes = useStyles({ hasFocus });

  return (
    <form className={classes.root}>
      <input
        type="text"
        placeholder="Search"
        aria-label="Search"
        onChange={(e) => refine(e.target.value)}
        value={currentRefinement}
        onFocus={onFocus}
      />
      <FaSearch className={classes.icon} />
    </form>
  );
});
