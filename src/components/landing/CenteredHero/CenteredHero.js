import React from 'react';
import { Headline } from 'components';
import CatalogScreenshot from '../../../../static/images/landing/screenshot-catalog.png';
import HeroForm from './HeroForm';
import { LOGOS } from '../CustomerLogoCloud';
import has from 'lodash/has';

const CenteredHero = () => {
  const whiteLogos = [...LOGOS].filter(({ src }) => has(src, 'white')).slice(0, 5);

  return (
    <>
      <div className="relative landing-hero-background overflow-x-hidden">
        <div className="relative pt-6 pb-0">
          <main className="mt-14 mx-auto max-w-7xl px-4 sm:mt-20 sm:px-6 lg:mt-25">
            <div className="md:max-w-4xl md:mx-auto lg:col-span-6 lg:text-left">
              <Headline size="medium" className="text-white leading-snug">
                Set up Backstage in minutes. <br /> Forget maintenance.
              </Headline>

              <h2 className="mt-5 text-base text-white sm:mt-8 sm:text-xl lg:text-lg xl:text-xl">
                Roadie gives you a production Backstage instance with{' '}
                <nobr>drag-and-drop</nobr> plugins, secure integrations, and automatic security and feature updates.

              </h2>

              <div className="mt-5 md:mt-8">
                <HeroForm />
                <div className="flex-wrap mt-5 md:mt-20 sm:col-span-6 sm:flex-nowrap flex center justify-between">
                  {whiteLogos.map((logo) => (
                    <img
                      className="m-3 h-8 opacity-80"
                      key={`hero-logo-${logo.alt}`}
                      src={logo.src.white}
                      alt={logo.alt}
                    />
                  ))}
                </div>
              </div>
            </div>
          </main>
          <div className="max-w-7xl mt-20 mx-auto">
            <img src={CatalogScreenshot} alt="" className="drop-shadow-2xl" />
          </div>
        </div>
      </div>

      <script async src="https://player.vimeo.com/api/player.js" />
    </>
  );
};

export default CenteredHero;
