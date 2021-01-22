import React from 'react';
import { createUseStyles } from 'react-jss';
import isEmpty from 'lodash/isEmpty';
import kebabCase from 'lodash/kebabCase';
import { Link } from 'components';

const useStyles = createUseStyles((theme) => ({
  tag: {
    backgroundColor: theme.palette.grey[200],
    paddingTop: 2,
    paddingBottom: 2,
    paddingLeft: 8,
    paddingRight: 8,
    borderRadius: 4,
    marginRight: 8,
    marginBottom: 4,
    display: 'inline-block',
  },

  link: {
    textDecoration: 'none',
    color: theme.palette.text.secondary,
    outline: 'none',
    cursor: 'pointer',

    '&:hover': {
      color: theme.palette.text.primary,
    },

    '&:visited': {
      color: theme.palette.text.secondary,
    },
  },
}));

const Tags = ({ post: { frontmatter } }) => {
  const classes = useStyles();

  if (isEmpty(frontmatter.tags)) return null;

  return (
    <>
      {frontmatter.tags.map((tag) => {
        return (
          <span className={classes.tag} key={tag}>
            <Link to={`/tags/${kebabCase(tag)}/`} className={classes.link}>
              {tag.toLowerCase()}
            </Link>
          </span>
        );
      })}
    </>
  );
};

export default Tags;
