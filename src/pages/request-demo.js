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
import { SCM_TOOLS } from '../contactFormConstants';

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

const SubmissionSuccessModal = ({ email, scmTool, classes, ...rest }) => {
  if (SCM_TOOLS.filter(({ supported }) => supported).map(({ value }) => value).includes(scmTool)) {
    return (
      <FormSubmissionModal
        titleText="Your Backstage experience is on the way"
        bodyText={
          <div className={classes.content}>
            <p>
              Once it&apos;s ready, you&apos;ll receive an email at {email}. It typically takes a day or two to get everything ready.
            </p>
          </div>
        }
        followOn="NEWSLETTER_AND_TWITTER"
        {...rest}
      />
    );
  }

  return (
    <FormSubmissionModal
      titleText="Oops! We're not ready for you yet."
      titleEmoji={null}
      bodyText={
        <div className={classes.content}>
          <p>
            Roadie only supports GitHub Cloud for now.
          </p>
          <p>
            We are working to support more tools in the near future,
            and you will be among the first to know when we support yours.
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
  const [email, setEmail] = useState('');
  const [scmTool, setScmTool] = useState(SCM_TOOLS[0].value);

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <SEO
        title={`${SEO_TITLE} | ${siteTitle}`}
        description="Get a SaaS Backstage experience from Roadie. We handle hosting and maintenance and let you get back to your customers."
      />

      <SubmissionSuccessModal
        email={email}
        scmTool={scmTool}
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
                  email={email}
                  setEmail={setEmail}
                  scmTool={scmTool}
                  setScmTool={setScmTool}
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
