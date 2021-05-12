import React from 'react';
import { Link } from 'gatsby';
import { createUseStyles } from 'react-jss';

import DatePublished from '../DatePublished';
import Tags from '../Tags';

const useStyles = createUseStyles((theme) => ({
  root: {
    marginBottom: '4em',
  },

  header: {
    marginBottom: '0.5em',
  },

  h3: {
    fontSize: '2rem',
    marginBottom: '0.2em',
  },

  titleLink: {
    color: theme.palette.primary.main,
    textDecoration: 'none',

    '&:hover': {
      color: theme.palette.primary.main,
      textDecoration: 'underline',
    },
  },

  byline: {
    marginBottom: 8,
  },

  datePublishedWrapper: {
    marginRight: 8,
  },

  summary: theme.preMadeStyles.content,

  [`@media (min-width: ${theme.breakpoints.values.md}px)`]: {
    h3: {
      fontSize: '2.7rem',
      marginBottom: '0.2em',
    },
  },
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

        <div className={classes.byline}>
          <span className={classes.datePublishedWrapper}>
            <DatePublished frontmatter={post.frontmatter} relative={true} />

            {post.frontmatter.author && (
              <span> by {post.frontmatter.author.name}</span>
            )}
          </span>

          <Tags tags={post.frontmatter.tags} />
        </div>
      </header>

      <section className={classes.summary}>
        <p dangerouslySetInnerHTML={{ __html: summary }} />
      </section>
    </article>
  );
};

export default PostSummary;
