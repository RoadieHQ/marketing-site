import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles(() => ({
  root: {
    marginBottom: '2rem',
  },

  date: {
    fontSize: '0.875rem',
    marginTop: 0,
    marginBottom: 0,
  },

  h1: {
    marginBottom: 0,
  },
}));

const PostHeader = ({ post }) => {
  const classes = useStyles();

  return (
    <header className={classes.root}>
      <h1 className={classes.h1}>{post.frontmatter.title}</h1>
      <p className={classes.date}>{post.frontmatter.date}</p>
    </header>
  );
};

export default PostHeader;
