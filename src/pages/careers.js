import React from 'react';
import { graphql } from 'gatsby';
import { createUseStyles } from 'react-jss';

import {
  SEO,
  StickyFooter,
  LayoutControl,
  InterstitialTitle,
  TwoColumnPoints,
  Headline,
  Lead,
  Link,
} from 'components';
import Mission from '../components/careers/Mission';

const useStyles = createUseStyles((theme) => ({
  hero: {
    textAlign: 'center',
  },

  content: theme.preMadeStyles.content,

  mainWrapper: {
    display: 'flex',
    justifyContent: 'center',
  },
}));

const VALUES = [
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
        return <Link to="/careers/javascript-engineer/">JavaScript Engineer</Link>;
      },
      text: `Become a top contributor to the open-source software that Roadie is built on.`,
    },
  ],
  [
    {
      title() {
        return <Link to="/careers/platform-engineer/">Platform Engineer</Link>;
      },
      text: `Take an active role in shaping the future of our platform`,
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

      <StickyFooter maxWidthBreakpoint="lg" location={location}>
        <div className={classes.mainWrapper}>
          <main className={classes.content}>
            <div className={classes.hero}>
              <LayoutControl maxWidthBreakpoint="lg">
                <Headline>
                  <span>Careers @ {siteTitle}</span>
                </Headline>

                <Lead>Turn software development upside-down forever</Lead>
              </LayoutControl>
            </div>

            <LayoutControl maxWidthBreakpoint="lg">
              <InterstitialTitle text="Our mission" />
              <Mission classes={classes} />
            </LayoutControl>

            <LayoutControl maxWidthBreakpoint="lg">
              <InterstitialTitle text="Our values" />
              <TwoColumnPoints content={VALUES} />
            </LayoutControl>

            <LayoutControl maxWidthBreakpoint="lg">
              <InterstitialTitle text="Open roles" />
              <TwoColumnPoints content={OPEN_ROLES} />
            </LayoutControl>
          </main>
        </div>
      </StickyFooter>
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
