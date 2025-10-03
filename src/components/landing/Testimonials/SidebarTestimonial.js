import React from 'react';
import { QuoteIcon } from 'components/icons';

import Avatar from './Avatar';

const SidebarTestimonial = ({
  companyLogoPng,
  companyLogo,
  companyLogoAlt,
  quote,
  avatar,
  quoteeName,
  quoteeRole,
}) => (
  <div className="py-12 px-4 sm:px-6 md:flex md:flex-col md:py-16 md:pl-0 md:pr-10 lg:pr-16">
    <div className="md:flex-shrink-0">
      <picture>
        <source srcSet={companyLogo} type="image/webp" />
        <source srcSet={companyLogoPng} type="image/png" />

        <img src={companyLogoPng} alt={companyLogoAlt} height="33" width="160" />
      </picture>
    </div>

    <blockquote className="mt-6 md:flex-grow md:flex md:flex-col">
      <div className="relative text-lg font-medium text-white md:flex-grow">
        <QuoteIcon />

        <p className="relative">{quote}</p>
      </div>

      <footer className="mt-8">
        <div className="flex items-start">
          <Avatar avatar={avatar} />

          <div className="ml-4">
            <div className="text-base font-medium text-white">{quoteeName}</div>
            <div className="text-base font-medium text-primary-200">{quoteeRole}</div>
          </div>
        </div>
      </footer>
    </blockquote>
  </div>
);

export default SidebarTestimonial;
