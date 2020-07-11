import React from 'react';
import { graphql } from 'gatsby';
import { createUseStyles } from 'react-jss';
import classnames from 'classnames';

import SEO from 'components/seo';
import SitewideHeader from 'components/SitewideHeader';
import LayoutControl from 'components/LayoutControl';
import PostHeader from 'components/blog/PostHeader';
import { postInnerStyles } from '../templates/BlogPost';

const useStyles = createUseStyles((theme) => ({
  content: postInnerStyles(theme),
}));

/* There should be a way to programatically create this page using the BlogPost template. It's
 * basically the same thing as a blog post, I just don't want it to be indexable by Google and
 * the content should not come from the blog posts directory.
 *
 * This page should be Disallowed in the robots.txt.
 */

const TermsAndConditions = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title;
  const classes = useStyles();

  const mockPost = {
    frontmatter: {
      title: 'Roadie Terms & Conditions',
      date: 'July 11, 20202',
    },

    html: data.site.siteMetadata.content.termsAndConditionsText,
  };

  return (
    <>
      <SEO title={`Terms and Conditions | ${siteTitle}`} />

      <LayoutControl>
        <SitewideHeader location={location} />
      </LayoutControl>

      <LayoutControl>
        <PostHeader post={mockPost} />
        <article
          className={classnames('typography-content', classes.content)}
          dangerouslySetInnerHTML={{
            __html: mockPost.html,
          }}
        />
      </LayoutControl>
    </>
  );
};

export default TermsAndConditions;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title

        content {
          termsAndConditionsText
        }
      }
    }
  }
`;
