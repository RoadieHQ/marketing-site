import React, { useState } from 'react';
import { graphql } from 'gatsby';
import { createUseStyles } from 'react-jss';
import classnames from 'classnames';
import {
  SEO,
  StickyFooter,
} from 'components';
import { ExtendedGetInstanceCallToAction } from 'components/CallToAction';
import { Testimonial } from 'components/home';
import FormSubmissionModal from 'components/actions/FormSubmissionModal';

const SEO_TITLE = 'Get a free trial';

const useStyles = createUseStyles((theme) => ({
  main: {},
  column: {},
  testimonialColumn: {},
  formInner: {},

  formWrapper: {
    marginLeft: 16,
    marginRight: 16,
  },

  formTitle: {
    marginBottom: '2em',
    marginTop: '2em',
  },

  [`@media (min-width: ${theme.breakpoints.values.md}px)`]: {
    main: {
      display: 'flex',
      height: '100%',
      flexDirection: 'row-reverse',
    },

    column: {
      paddingTop: '1em',
    },

    formColumn: {
      flexGrow: 1,
    },

    testimonialColumn: {
      justifyContent: 'center',
      paddingTop: '3em',
      backgroundColor: '#E9F7FF',
    },

    testimonialWrapper: {
      padding: '2em',
    },

    formInner: {
      paddingRight: '2em',
    },
  },
}));

const Home = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title;
  const classes = useStyles();
  const [modalOpen, setModalOpen] = useState(false);

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <SEO title={`${SEO_TITLE} | ${siteTitle}`} description="Some descriotion" />

      <FormSubmissionModal
        titleText="Thank you!"
        bodyText={
          <>
            <p className={classes.p}>
              Our Roadies will get busy creating your Backstage experience.
            </p>
            <p className={classes.p}>
              Once it&apos;s ready, you&apos;ll receive an email at the address provided.
            </p>
          </>
        }
        followOn="GET_DEMO_SURVEY"
        handleCloseModal={handleCloseModal}
        siteMetadata={data.site.siteMetadata}
        modalOpen={modalOpen}
      />

      <StickyFooter location={location} maxWidthBreakpoint="none" headerBottomMargin={0}>
        <div className={classes.main}>
          <div className={classnames(classes.column, classes.formColumn)}>
            <div className={classes.formWrapper}>
              <div className={classes.formInner}>
                <div className={classes.formTitle}>
                  <h1>Get a free trial</h1>
                </div>

                <ExtendedGetInstanceCallToAction
                  onSuccess={() => {
                    setModalOpen(true);
                  }}
                />
              </div>
            </div>
          </div>

          <div className={classnames(classes.column, classes.testimonialColumn)}>
            <div className={classes.testimonialWrapper}>
              <Testimonial />
            </div>
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
