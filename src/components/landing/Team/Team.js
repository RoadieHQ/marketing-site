import React from 'react';
import Person from './Person';
import { Lead, Headline } from 'components';

const Team = ({ headline, lead, people }) => (
  <div className="bg-white">
    <div className="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
      <div className="space-y-12 lg:grid lg:grid-cols-3 lg:gap-8 lg:space-y-0">
        <div className="space-y-5 sm:space-y-4">
          <Headline>{headline}</Headline>
          <Lead>{lead}</Lead>

        </div>

        <div className="lg:col-span-2">
          <ul
            className="space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:gap-x-8"
          >
            {people.map((person) => (
              <Person person={person} key={person.name} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  </div>
);

export default Team;
