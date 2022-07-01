import React from 'react';
import { Headline } from 'components';
import CatalogScreenshot from '../../../../static/images/landing/screenshot-catalog.png';
import HeroForm from './HeroForm';
import { LOGOS } from '../CustomerLogoCloud';

const CenteredHero = () => {
  return (
    <>
      <div className="relative bg-gradient-to-r from-primary-600 via-primary-700 to-primary-400 overflow-x-hidden">
        <div className="relative pt-6 pb-0">
          <main className="mt-16 mx-auto max-w-7xl px-4 sm:mt-24 sm:px-6 lg:mt-32">
            <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
              <Headline size="medium" className="text-white">
                Set up and deploy Backstage <br /> in hours instead of weeks
              </Headline>

              <h2 className="mt-5 text-base text-white sm:mt-7 sm:text-xl lg:text-lg xl:text-xl">
                Roadie gives you a production Backstage instance with{' '}
                <nobr>drag-and-drop</nobr> plugins and secure integrations
              </h2>

              <div className="mt-5 md:mt-8">
                <HeroForm />
                <div className="mt-5 md:mt-10 sm:col-span-6 flex center justify-between">
                  {LOGOS.slice(0, 4).map((logo, i) => (
                    <img className="h-8 opacity-80" key={`hero-logo-${i}`} src={logo.src.white} alt={logo.alt} />
                  ))}
                </div>
              </div>
            </div>
          </main>
          <div className="max-w-7xl mt-10 mx-auto">
            <img src={CatalogScreenshot} alt="" className="drop-shadow-2xl" />
          </div>
        </div>
      </div>

      <script async src="https://player.vimeo.com/api/player.js" />
    </>
  );
};

export default CenteredHero;
