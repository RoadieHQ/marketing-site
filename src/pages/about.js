import React from 'react';

import {
  SEO,
  SitewideFooter,
  SitewideHeader,
} from 'components';

import Team from 'components/landing/Team';

const About = () => (
  <>
    <SEO
      title={`About us | Roadie`}
      description="Who we are and what we care about."
    />
    <SitewideHeader />

    <Team />

    <SitewideFooter />
  </>
);

export default About;

