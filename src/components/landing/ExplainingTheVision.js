import React from 'react';
import { TextLink as Link } from 'components';
import teamInRoad from '../../../content/team/group/team-in-road.jpg';

const ExplainingTheVision = () => (
  <section className="Section size-3">
    <div className='Container'>
      <div className='Grid columns-2 gap-9'>
        <div>
          <img
            className="absolute inset-0 h-full w-full object-cover"
            src={teamInRoad}
            alt="A number of Roadie employees talking to each other while standing in the middle of a small street"
          />
        </div>
        <div>
          <h2 className="Text size-7">
            The potential of software
          </h2>
          <div className="Flex column gap-5">
            <p className="Text size-4">
              Every industry has more software than ever before. From communications, to transportation, to green energy. 
            </p>
            <p className="Text size-4">
              The number of developers in the world is estimated to be 26.9 million, and is projected to grow to 45 million by 2030. <Link to="https://slashdata-website-cms.s3.amazonaws.com/sample_reports/EiWEyM5bfZe1Kug_.pdf">[Source]</Link>
            </p>
            <p className="Text size-4">
              By making each of these developers more effective, we believe Roadie can have a huge positive influence on the world.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default ExplainingTheVision;
