import React from 'react';
import { Button } from 'components';

import HeroLogos from './HeroLogos';
import CVEsOverTimeCard from './CVEsOverTimeCard';
import ScorecardsCard from './ScorecardsCard';
import CodeQualityCard from './CodeQualityCard';
import DocumentationCard from './DocumentationCard';

const SideBySideHero = () => {
  return (
    <section className="Section size-2">
      <div className="Container">
        <div className="text-center mb-20">
          <h1 className="Text size-9 bp2-size-9 mb-6">
            Batteries included Backstage
          </h1>

          <p className="Text size-5 weight-1 lowContrast mb-8" style={{ maxWidth: 'none' }}>
            Easier, scalable and zero-maintenance. With security, scorecards and customizability built-in.
          </p>

          <Button
            className="Button size-3 accent bp2-mb-8"
            link={true}
            to="/free-trial/"
            text="Request a Demo"
          />
        </div>

        <div className="flex justify-between px-12 mb-20">
          <HeroLogos />
        </div>

        <div className='Grid columns-1 bp2-columns-2 gap-4'>
          <CVEsOverTimeCard />
          <ScorecardsCard />
          <CodeQualityCard />
          <DocumentationCard />
        </div>
      </div>
    </section>
  );
};

export default SideBySideHero;
