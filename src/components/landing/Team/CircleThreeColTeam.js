import React from 'react';
import { Lead, Headline } from 'components';
import SocialLink from './SocialLink';
import { GatsbyImage } from 'gatsby-plugin-image';

const Person = ({ person }) => (
  <li>
    <div className="space-y-6">
      {person.headshot && (
        <GatsbyImage
          className="mx-auto h-40 w-40 rounded-full xl:w-56 xl:h-56"
          image={person.headshot.childImageSharp.gatsbyImageData}
          alt={`${person.name} head shot`}
        />
      )}

      <div className="space-y-2">
        <div className="text-lg leading-6 font-medium space-y-1">
          <h3>{person.name}</h3>
          <p className="text-primary-600">{person.role}</p>
        </div>

        <ul className="flex justify-center space-x-5">
          <SocialLink person={person} type="github" />
          <SocialLink person={person} type="twitter" />
          <SocialLink person={person} type="linkedin" />
        </ul>
      </div>
    </div>
  </li>
);

const CircleThreeColTeam = ({ headline, lead, people }) => (
  <div className="bg-white">
    <div className="max-w-7xl mx-auto py-12 px-4 text-center sm:px-6 lg:px-8 lg:py-24">
      <div className="space-y-12">
        <div className="space-y-5 sm:mx-auto sm:max-w-xl sm:space-y-4 lg:max-w-3xl">
          <div className="mt-1">
            <Headline>{headline}</Headline>
          </div>

          <div className="mt-5">
            <Lead>{lead}</Lead>
          </div>
        </div>

        <ul className="mx-auto space-y-16 sm:grid sm:grid-cols-2 sm:gap-16 sm:space-y-0 lg:grid-cols-3 lg:max-w-5xl">
          {people.map((person) => (
            <Person key={person.name} person={person} />
          ))}
        </ul>
      </div>
    </div>
  </div>
);

export default CircleThreeColTeam;
