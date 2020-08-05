import React from 'react';
import { createUseStyles } from 'react-jss';
import classnames from 'classnames';

const useStyles = createUseStyles((theme) => ({
  root: {
    marginBottom: '2rem',
  },

  date: {
    fontSize: '0.875rem',
    marginTop: 0,
    marginBottom: 0,
  },

  h1: {
    fontWeight: theme.typography.bold.fontWeight,
    fontSize: '2.75rem',
    color: theme.palette.grey[900],
    marginBottom: 0,
  },
}));

const PostHeader = ({ post }) => {
  const classes = useStyles();

  return (
    <header className={classes.root}>
      <h1 className={classnames('typography-content', classes.h1)}>{post.frontmatter.title}</h1>
      <p className={classnames('typography-content', classes.date)}>{post.frontmatter.date}</p>
    </header>
  );
};

export default PostHeader;
