import React from 'react';
import { Link } from 'gatsby';
import { createUseStyles } from 'react-jss';

import { postInnerStyles } from '../../templates/BlogPost';

const useStyles = createUseStyles((theme) => ({
  root: {
    marginBottom: '4rem',
  },

  h3: {
    fontSize: '2rem',
    marginBottom: 0,
  },

  titleLink: {
    color: theme.palette.primary.dark,
    textDecoration: 'none',
  },

  date: {
    fontSize: '0.875rem',
    marginTop: 0,
    marginBottom: 0,
  },

  summary: postInnerStyles(theme),
}));

const PostSummary = ({ post }) => {
  const title = post.frontmatter.title || post.fields.slug;
  const summary = post.frontmatter.description || post.excerpt;
  const classes = useStyles();

  return (
    <article className={classes.root}>
      <header>
        <h3 className={classes.h3}>
          <Link to={post.fields.slug} className={classes.titleLink}>
            {title}
          </Link>
        </h3>
        <small className={classes.date}>{post.frontmatter.date}</small>
      </header>
      <section className={classes.summary}>
        <p dangerouslySetInnerHTML={{ __html: summary }} />
      </section>
    </article>
  );
};

export default PostSummary;
