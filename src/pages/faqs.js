import React from 'react';
import { Seo, SitewideFooter, SitewideHeader } from 'components';
import { FAQs } from 'components/landing';

const Faqs = () => (
  <>
    <Seo title={`FAQs | Roadie`} description="Frequently asked questions" />
    <SitewideHeader />
    <FAQs />
    <SitewideFooter />
  </>
);

export default Faqs;
