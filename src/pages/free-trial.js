import React from 'react';
import { graphql } from 'gatsby';
import { createUseStyles } from 'react-jss';
import classnames from 'classnames';
import {
  SEO,
  StickyFooter,
  InterstitialTitle,
} from 'components';
import { ExtendedGetInstanceCallToAction } from 'components/CallToAction';
import { Testimonial } from 'components/home';

const SEO_TITLE = 'Get a free trial';

const useStyles = createUseStyles((theme) => ({
  main: {},
  column: {},
  leftColumn: {},
  formInner: {},

  formWrapper: {
    marginLeft: '2em',
    marginRight: '2em',
  },

  formTitle: {
    marginBottom: '2em',
    marginTop: '2em',
  },

  [`@media (min-width: ${theme.breakpoints.values.md}px)`]: {
    main: {
      display: 'flex',
      height: '100%',
    },

    column: {
      flex: 1,
      height: '100%',
      paddingTop: '10em',
    },

    leftColumn: {
      backgroundColor: '#E9F7FF',
      display: 'flex',
      justifyContent: 'center',
      paddingTop: '15em',
    },

    formInner: {
      border: '1px solid #222',
      padding: '2em',
    },

  },
}));

const Home = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title;
  const classes = useStyles();

  return (
    <>
      <SEO title={`${SEO_TITLE} | ${siteTitle}`} description="Some descriotion" />
      <StickyFooter location={location} maxWidthBreakpoint="none" headerBottomMargin={0}>
        <div className={classes.main}>
          <div className={classes.column}>
            <div className={classes.formWrapper}>
              <div className={classes.formInner}>
                <div className={classes.formTitle}>
                  <h1>Get a free trial</h1>
                </div>

                <ExtendedGetInstanceCallToAction />
              </div>
            </div>
          </div>

          <div className={classnames(classes.column, classes.leftColumn)}>
            <Testimonial />
          </div>
        </div>
      </StickyFooter>
    </>
  );
};

export default Home;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        social {
          twitter
        }
      }
    }
  }
`;
