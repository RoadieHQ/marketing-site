import React from 'react';
import { QuoteIcon } from 'components/icons';

import Avatar from './Avatar';

import enriqueAvatar from '../../../../content/assets/home/testimonial/enrique-contentful/enrique-avatar.webp';
import enriqueAvatarPng from '../../../../content/assets/home/testimonial/enrique-contentful/enrique-avatar.png';
import contentfulLogo from '../../../../content/assets/home/testimonial/enrique-contentful/contentful-monochrome-white.webp';
import contentfulLogoPng from '../../../../content/assets/home/testimonial/enrique-contentful/contentful-monochrome-white.png';

const EnriqueTestimonial = () => (
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
          <Avatar
            avatar={{
              webp: enriqueAvatar,
              png: enriqueAvatarPng,
              alt: `The face of a man with a slight beard and glasses. He is looking up and to the right slightly.`,
            }}
          />

          <div className="ml-4">
            <div className="text-base font-medium text-white">Enrique Amodeo Rubio</div>
            <div className="text-base font-medium text-primary-200">Staff Software Engineer</div>
          </div>
        </div>
      </footer>
    </blockquote>
  </div>
);

const CrystalTestimonial = () => (
  <div className="py-12 px-4 sm:px-6 md:flex md:flex-col md:py-16 md:pl-0 md:pr-10 lg:pr-16">
    <div className="md:flex-shrink-0">
      <picture>
        <source srcSet={snykLogo} type="image/webp" />
        <source srcSet={snykLogoPng} type="image/png" />

        <img
          src={snykLogoPng}
          alt="Snyk logo"
          height="33"
          width="160"
        />
      </picture>
    </div>

    <blockquote className="mt-6 md:flex-grow md:flex md:flex-col">
      <div className="relative text-lg font-medium text-white md:flex-grow">
        <QuoteIcon />

        <p className="relative">
          Roadie are amazing. I totally recommend them. They’re great to work with and super responsive and helpful.
        </p>
      </div>

      <footer className="mt-8">
        <div className="flex items-start">
          <Avatar
            avatar={{
              webp: crystalAvatar,
              png: crystalAvatarPng,
              alt: ``,
            }}
          />

          <div className="ml-4">
            <div className="text-base font-medium text-white">Crystal Hirschorn</div>
            <div className="text-base font-medium text-primary-200">Staff Software Engineer</div>
          </div>
        </div>
      </footer>
    </blockquote>
  </div>
);

export default EnriqueTestimonial;
