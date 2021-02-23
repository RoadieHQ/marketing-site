import React from 'react';
import { createUseStyles } from 'react-jss';
import isEmpty from 'lodash/isEmpty';

import DatePublished from './DatePublished';
import Tags from './Tags';

const useStyles = createUseStyles((theme) => ({
  root: {
    marginBottom: '2em',
  },

  h1: {
    fontWeight: theme.typography.bold.fontWeight,
    fontSize: '2.75rem',
    color: theme.palette.grey[900],
    marginBottom: 8,
    marginTop: 0,
  },

  tagsWrapper: {
    marginBottom: 8,
  },

  [`@media (min-width: ${theme.breakpoints.values.md}px)`]: {
    h1: {
      fontSize: '3.75rem',
    },
  },
}));

const ContentHeader = ({ frontmatter, showLastValidated = true, dateKey }) => {
  const classes = useStyles();

  return (
    <header className={classes.root}>
      <h1 className={classes.h1}>{frontmatter.title}</h1>

      {!isEmpty(frontmatter.tags) && (
        <div className={classes.tagsWrapper}>
          <Tags tags={frontmatter.tags} />
        </div>
      )}

      <DatePublished
        frontmatter={frontmatter}
        showLastValidated={showLastValidated}
        dateKey={dateKey}
      />
    </header>
  );
};

export default ContentHeader;
