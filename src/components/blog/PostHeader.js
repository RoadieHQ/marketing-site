import React from 'react';
import { createUseStyles } from 'react-jss';

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

const PostHeader = ({ post }) => {
  const classes = useStyles();

  return (
    <header className={classes.root}>
      <h1 className={classes.h1}>{post.frontmatter.title}</h1>
      <div className={classes.tagsWrapper}>
        <Tags post={post} />
      </div>
      <DatePublished frontmatter={post.frontmatter} showLastValidated={true} />
    </header>
  );
};

export default PostHeader;
