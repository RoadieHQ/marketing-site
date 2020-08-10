import React from 'react';
import { graphql, Link } from 'gatsby';
import { createUseStyles } from 'react-jss';
import classnames from 'classnames';

import {
  SEO,
  SitewideFooter,
  LayoutControl,
  InterstitialTitle,
  SitewideHeader,
  TwoColumnPoints,
  Headline,
  Lead,
} from 'components';
import Mission from '../components/careers/Mission';

const useStyles = createUseStyles((theme) => ({
  hero: {
    textAlign: 'center',
  },

  spacing: {
    paddingBottom: 24,
    marginBottom: 40,
    paddingLeft: 16,
    paddingRight: 16,
  },

  content: theme.preMadeStyles.content,

  sitewideHeaderWrapper: {
    marginBottom: 40,
    paddingLeft: 16,
    paddingRight: 16,
  },
}));

export const VALUES = [
  [
    {
      title: '⏰ Sustainability',
      text:
        'Building a company is a marathon, not a sprint. We maintain a sustainable, family friendly pace.',
    },
    {
      title: '😻 Curiosity',
      text:
        'Get so close to your customers that they feel like your friends. Find that small tweak that can wow a user.',
    },
    {
      title: '👉 Over to you...',
      text:
        "Larder is an early stage startup. We haven't got it all figured out yet. Help define the future.",
    },
  ],

  [
    {
      title: '🤖 Autonomy',
      text:
        'Your ideas and opinions will be heard. You will have the freedom to lead projects. We want you to feel invested in your work and be proud of it.',
    },
    {
      title: '🦚 Freedom',
      text: 'Work from anywhere in the world. Choose your own hours and get ample time off.',
    },
  ],
];

const OPEN_ROLES = [
  [
    {
      title() {
        return <Link to="/careers/backend-engineer">Backend Engineer</Link>;
      },
      text: `Build and manage critical infrastructure to keep Roadie's customers online and productive.`,
    },
  ],

  [],
];

const Careers = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title;
  const classes = useStyles();

  return (
    <>
      <SEO title={`Careers | ${siteTitle}`} />

      <div className={classes.sitewideHeaderWrapper}>
        <LayoutControl maxWidthBreakpoint="lg">
          <SitewideHeader location={location} />
        </LayoutControl>
      </div>

      <main className={classes.content}>
        <div className={classnames(classes.spacing, classes.hero)}>
          <LayoutControl maxWidthBreakpoint="lg">
            <Headline>
              <span>Careers @ {siteTitle}</span>
            </Headline>

            <Lead text="Change the lives of engineers all over the world" />
          </LayoutControl>
        </div>

        <div className={classes.spacing}>
          <LayoutControl maxWidthBreakpoint="lg">
            <InterstitialTitle text="Our mission" />
            <Mission classes={classes} />
          </LayoutControl>
        </div>

        <div className={classes.spacing}>
          <LayoutControl maxWidthBreakpoint="lg">
            <InterstitialTitle text="Our values" />
            <TwoColumnPoints content={VALUES} />
          </LayoutControl>
        </div>

        <div className={classes.spacing}>
          <LayoutControl maxWidthBreakpoint="lg">
            <InterstitialTitle text="Open roles" />
            <TwoColumnPoints content={OPEN_ROLES} />
          </LayoutControl>
        </div>
      </main>

      <LayoutControl maxWidthBreakpoint="lg">
        <SitewideFooter />
      </LayoutControl>
    </>
  );
};

export default Careers;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
