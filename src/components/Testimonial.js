import React from 'react';
import { QuoteIcon } from 'components/icons';

import enriqueAvatar from '../../content/assets/home/testimonial/enrique-avatar.webp';
import enriqueAvatarPng from '../../content/assets/home/testimonial/enrique-avatar.png';
import contentfulLogo from '../../content/assets/home/testimonial/contentful-monochrome-white.webp';
import contentfulLogoPng from '../../content/assets/home/testimonial/contentful-monochrome-white.png';

const Testimonial = () => (
  <div className="py-12 px-4 sm:px-6 md:flex md:flex-col md:py-16 md:pl-0 md:pr-10 lg:pr-16">
    <div className="md:flex-shrink-0">
      <picture>
        <source srcSet={contentfulLogo} type="image/webp" />
        <source srcSet={contentfulLogoPng} type="image/png" />

        <img
          src={contentfulLogoPng}
          alt="Contentful logo"
          height="33"
          width="160"
        />
      </picture>
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

          <picture>
            <source srcSet={enriqueAvatar} type="image/webp" />
            <source srcSet={enriqueAvatarPng} type="image/png" />

            <img
              src={enriqueAvatarPng}
              alt="Enrique's face"
              className="h-12 w-12 rounded-full"
              height="100"
              width="100"
            />
          </picture>
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
