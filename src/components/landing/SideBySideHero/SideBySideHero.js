import React from 'react';
import { Headline } from 'components';
import CatalogScreenshot from '../../../../content/assets/homepage/home-product-screenshot.png';
import { LOGOS } from '../CustomerLogoCloud';
import has from 'lodash/has';
import { Button } from 'components';

const SideBySideHero = () => {
  const whiteLogos = [...LOGOS].filter(({ src }) => has(src, 'white')).slice(0, 5);

  return (
    <>
      <div className="relative  overflow-x-hidden">
        <main className="landing-hero-background mx-auto max-w-7xl xl:rounded-lg">
          <div className="lg:flex items-center">
            <div className="lg:w-1/2 p-4 lg:px-10 lg:py-16">
              <Headline size="small" className="text-white leading-snug">
                Set up Backstage in minutes. <br /> Forget maintenance.
              </Headline>

              <h2 className="mt-5 text-white text-lg sm:mt-8 lg:text-xl xl:text-2xl xl:mr-6">
                Get automatic upgrades, instant Catalog updates, and <nobr>ready-to-use</nobr>{' '}
                integrations with Roadie’s Backstage as a service.
              </h2>

              <Button
                link={true}
                color="secondary"
                size="medium"
                to="/request-demo/"
                className="font-bold tracking-wide mt-6"
                text="Request a Demo"
              />

              <div className="mt-5 md:mt-8">
                <div className="flex flex-wrap">
                  {whiteLogos.map((logo) => (
                    <img
                      className="h-8 my-3 mx-3 lg:h-10 lg:ml-0 lg:mr-11 xl:mr-13"
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
          </div>
        </main>
      </div>
    </>
  );
};

export default SideBySideHero;
