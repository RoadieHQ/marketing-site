import React from 'react';
import { SEO, SitewideFooter, SitewideHeader } from 'components';
import { FAQs } from 'components/landing';

const Faqs = () => (
  <>
    <SEO title={`FAQs | Roadie`} description="Frequently asked questions" />
    <SitewideHeader />
    <FAQs />
    <SitewideFooter />
  </>
);

export default Faqs;
