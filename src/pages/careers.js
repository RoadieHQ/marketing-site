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
        "Roadie is an early stage startup. We haven't got it all figured out yet. Help define the future.",
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
      text: 'Work remotely. Choose your own hours and get ample time off.',
    },
  ],
];

const OPEN_ROLES = [
  [
    {
      title() {
        return <Link to="/careers/frontend-engineer">Frontend Engineer</Link>;
      },
      text: `Become a top contributor to the open-source software that Roadie is built on.`,
    },
  ],

  [
    {
      title() {
        return <Link to="/careers/engineering-manager">Engineering Manager</Link>;
      },
      text: `Build a top-performing startup engineering team.`,
    },
  ],
];

const Careers = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title;
  const classes = useStyles();

  return (
    <>
      <SEO
        title={`Join a VC-backed startup | Careers at ${siteTitle}`}
        description={`
          Get in on the ground floor of a VC-backed startup. Drive the roadmap,
          influence the vision and build the culture.
        `}
      />

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

            <Lead text="Turn software development upside-down forever" />
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
