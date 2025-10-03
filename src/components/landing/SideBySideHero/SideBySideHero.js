import React from 'react';
import { Button, Headline } from 'components';
import CatalogScreenshot from '../../../../content/assets/home/illustrations/home-product-screenshot.svg';
import { LOGOS } from '../CustomerLogoCloud';
import has from 'lodash/has';
import { PAGE_PATHS } from '../../../contactFormConstants';

const SideBySideHero = () => {
  const whiteLogos = [...LOGOS].filter(({ src }) => has(src, 'white')).slice(0, 5);

  return (
    <section className="landing-hero-background mx-auto max-w-7xl xl:rounded-lg lg:flex items-center">
      <div className="lg:w-1/2 p-4 lg:px-10 lg:py-16">
        <Headline className="text-white" size="medium">
          Batteries included Backstage
        </Headline>

        <h2 className="mt-5 text-white text-lg sm:mt-8 lg:text-xl xl:text-xl xl:mr-6">
          Easier, scalable and zero-maintenance. With security, scorecards and customizability
          built-in.
        </h2>

        <Button
          link={true}
          color="secondary"
          size="medium"
          to={PAGE_PATHS.freeTrial}
          className="font-bold tracking-wide mt-6"
          text="Try Roadie Backstage"
        />

        <div className="mt-5 md:mt-8 xl:mt-16">
          <span className="text-sm uppercase font-bold tracking-wider text-white">
            Trusted by dozens of scale-ups
          </span>
          <div className="flex flex-wrap">
            {whiteLogos.map((logo) => (
              <img
                className="h-8 my-3 mx-3 lg:h-10 lg:ml-0 lg:mr-11 xl:h-11 xl:mr-13"
                key={`hero-logo-${logo.alt}`}
                src={logo.src.white}
                alt={logo.alt}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="lg:w-1/2 py-4 pb-[1px] lg:py-16 lg:px-[2px]">
        <img src={CatalogScreenshot} alt="" className="webkit-optimize-image-rendering" />
      </div>
    </section>
  );
};

export default SideBySideHero;
