import React, { useState } from 'react';
import { graphql } from 'gatsby';
import { createUseStyles } from 'react-jss';
import classnames from 'classnames';
import {
  SEO,
  StickyFooter,
} from 'components';
import { RequestDemoCallToAction } from 'components/CallToAction';
import { Testimonial } from 'components/home';
import FormSubmissionModal from 'components/actions/FormSubmissionModal';

const SEO_TITLE = 'Request a demo';

const useStyles = createUseStyles((theme) => ({
  content: theme.preMadeStyles.content,
  main: {},
  column: {
    width: '100%',
  },
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

const SubmissionSuccessModal = ({ classes, ...rest }) => {
  return (
    <FormSubmissionModal
      titleText="We'll be in touch"
      bodyText={
        <div className={classes.content}>
          <p>
            Thank you for requesting a Roadie Backstage demo. We will reach out to schedule a call via the email provided.
          </p>
        </div>
      }
      followOn="NEWSLETTER_AND_TWITTER"
      {...rest}
    />
  );
};

const Home = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title;
  const classes = useStyles();
  const [modalOpen, setModalOpen] = useState(false);

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <SEO
        title={`${SEO_TITLE} | ${siteTitle}`}
        description="Get a demo of the SaaS Backstage experience from Roadie."
      />

      <SubmissionSuccessModal
        handleCloseModal={handleCloseModal}
        modalOpen={modalOpen}
        classes={classes}
        siteMetadata={data.site.siteMetadata}
      />

      <StickyFooter location={location} maxWidthBreakpoint="none" headerBottomMargin={0}>
        <div className={classes.main}>
          <div className={classnames(classes.column, classes.formColumn)}>
            <div className={classes.formWrapper}>
              <div className={classes.formInner}>
                <div className={classes.formTitle}>
                  <h1>Request a demo</h1>
                </div>

                <RequestDemoCallToAction
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
