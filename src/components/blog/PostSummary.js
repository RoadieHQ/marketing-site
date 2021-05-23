import React from 'react';
import { createUseStyles } from 'react-jss';
import { TextLink } from 'components';

import DatePublished from '../DatePublished';
import Tags from '../Tags';

const useStyles = createUseStyles((theme) => ({
  header: {
    marginBottom: '0.5em',
  },

  h3: {
    fontSize: '2rem',
    marginBottom: '0.2em',
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
    <>
      <header className={classes.header}>
        <h3 className={classes.h3}>
          <TextLink to={post.fields.slug} color="primary">
            {title}
          </TextLink>
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
    </>
  );
};

export default PostSummary;
