import React from 'react';

import enriqueAvatar from '../../../content/assets/home/enrique-avatar.jpeg';
import contentfulLogo from '../../../content/assets/home/1a-contentful-full-logo.png';

const QuoteIcon = () => (
  <svg
    className="absolute top-0 left-0 transform -translate-x-3 -translate-y-2 h-8 w-8 text-primary-600"
    fill="currentColor"
    viewBox="0 0 32 32"
    aria-hidden="true"
  >
    <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
  </svg>
);

const Testimonial = () => (
  <div className="py-12 px-4 sm:px-6 md:flex md:flex-col md:py-16 md:pl-0 md:pr-10 lg:pr-16">
    <div className="md:flex-shrink-0">
      <img
        src={contentfulLogo}
        alt="Contentful logo"
        height="33"
        width="160"
      />
    </div>

    <blockquote className="mt-6 md:flex-grow md:flex md:flex-col">
      <div className="relative text-lg font-medium text-white md:flex-grow">
        <QuoteIcon />

        <p className="relative">
          Roadie helps us get the most out of Backstage, while saving time and money on setup and operation.
        </p>
      </div>

      <footer className="mt-8">
        <div className="flex items-start">
          <div className="flex-shrink-0 inline-flex rounded-full border-2 border-white">
            <img
              src={enriqueAvatar}
              alt="Enrique's face"
              className="h-12 w-12 rounded-full"
              height="100"
              width="100"
            />
          </div>

          <div className="ml-4">
            <div className="text-base font-medium text-white">Enrique Amodeo Rubio</div>
            <div className="text-base font-medium text-primary-200">Staff Software Engineer</div>
          </div>
        </div>
      </footer>
    </blockquote>
  </div>
);

export default Testimonial;
