import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles((theme) => ({
  root: {
    marginBottom: '2em',
  },

  date: {
    marginTop: 0,
    marginBottom: 0,
  },

  h1: {
    fontWeight: theme.typography.bold.fontWeight,
    fontSize: '2.75rem',
    color: theme.palette.grey[900],
    marginBottom: 0,
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
      <p className={classes.date}>{post.frontmatter.date}</p>
    </header>
  );
};

export default PostHeader;
