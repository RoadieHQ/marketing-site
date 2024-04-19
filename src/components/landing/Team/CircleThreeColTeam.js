import React from 'react';
import SocialLink from './SocialLink';
import { GatsbyImage } from 'gatsby-plugin-image';

const Person = ({ person }) => (
  <li>
    <div className="">
      {person.headshot && (
        <GatsbyImage
          className="mx-auto rounded-full aspect-square"
          image={person.headshot.childImageSharp.gatsbyImageData}
          alt={`${person.name} head shot`}
        />
      )}

      <div className="mt-3">
        <div className="Flex column mb-1">
          <span className='Text size-4 weight-2'>{person.name}</span>
          <span className="Text size-3 lowContrast">{person.role}</span>
        </div>
        <ul className="Flex row gap-2">
          <SocialLink person={person} type="github" />
          <SocialLink person={person} type="twitter" />
          <SocialLink person={person} type="linkedin" />
        </ul>
      </div>
    </div>
  </li>
);

const CircleThreeColTeam = ({ headline, lead, people }) => (
  <div className="Section size-3">
    <div className="Container">
      <div className="">
        <div className="">
          <div className="mb-3">
            <h2 className='Text size-7'>{headline}</h2>
          </div>
          <div className="mb-9">
            <p className='Text size-5 weight-1 lowContrast'>{lead}</p>
          </div>
        </div>

        <ul
          className="Grid columns-2 bp2-columns-4 bp3-columns-6 gap-5 bp2-gap-7"
        >
          {people.map((person) => (
            <Person key={person.name} person={person} />
          ))}
        </ul>
      </div>
    </div>
  </div>
);

export default CircleThreeColTeam;
