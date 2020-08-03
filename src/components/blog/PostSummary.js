import React from 'react';
import { Link } from 'gatsby';
import { createUseStyles } from 'react-jss';
import classnames from 'classnames';

const useStyles = createUseStyles((theme) => ({
  root: {
    marginBottom: '4rem',
  },

  header: {
    marginBottom: '0.5rem',
  },

  h3: {
    fontSize: '2rem',
    marginBottom: '0.2rem',
  },

  titleLink: {
    color: theme.palette.primary.main,
    textDecoration: 'none',

    '&:hover': {
      color: theme.palette.primary.main,
      textDecoration: 'underline',
    },
  },

  date: {
    fontSize: '0.875rem',
    marginTop: 0,
    marginBottom: 0,
  },

  summary: theme.preMadeStyles.content,
}));

const PostSummary = ({ post }) => {
  const title = post.frontmatter.title || post.fields.slug;
  const summary = post.frontmatter.description || post.excerpt;
  const classes = useStyles();

  return (
    <article className={classes.root}>
      <header className={classes.header}>
        <h3 className={classes.h3}>
          <Link to={post.fields.slug} className={classes.titleLink}>
            {title}
          </Link>
        </h3>
        <small className={classnames('typography-body', classes.date)}>
          {post.frontmatter.date}
        </small>
      </header>
      <section className={classnames('typography-content', classes.summary)}>
        <p dangerouslySetInnerHTML={{ __html: summary }} />
      </section>
    </article>
  );
};

export default PostSummary;
