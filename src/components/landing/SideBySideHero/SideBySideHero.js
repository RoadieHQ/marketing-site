import React from 'react';
import { Button } from 'components';
import { LOGOS } from '../CustomerLogoCloud';
import has from 'lodash/has';

const SideBySideHero = () => {
  const whiteLogos = [...LOGOS].filter(({ src }) => has(src, 'white')).slice(0, 5);

  return (
    <section className="Section size-3">
      <div className="Container">
        <div className='Grid columns-2 gap-9'>
          <div className='Flex column gap-6'>
            <h1 className="Text size-9">
              Batteries included Backstage
            </h1>

            <p className="Text size-5 weight-1 lowContrast">
              Easier, scalable and zero-maintenance. With security, scorecards and customizability built-in.
            </p>

            <Button
              className="Button size-3 accent"
              link={true}
              to="/free-trial/"
              text="Book a Demo"
            />
          </div>
          <div>
            <span className="Text size-4 lowContrast">
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
      </div>
    </section>
  );
};

export default SideBySideHero;
