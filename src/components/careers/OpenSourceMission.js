import React from 'react';
import { Link } from 'components';

const OpenSourceMission = () => (
  <div>
    <p>
      We are looking for an individual with proven leadership skills and a passion for open-source
      to lead our open-source efforts.
    </p>
    <p>
      Open-source is vital to Roadie.{' '}
      <Link to="https://github.com/backstage/backstage">Backstage</Link>{' '}
      is an open-source service catalog created in Spotify. We rely on Backstage and other notable
      projects from the open-source community in our day to day operations. We want to share what we
      build and ensure that we give back to the community. We are hiring staff dedicated to making
      it better.
    </p>
    <p>
      Roadie is a remote-first team working on building Backstage as a service for engineers. We try
      to provide a high level of psychological safety, a collaborative environment where we can work
      on problems together and the ability to work from anywhere.
    </p>
  </div>
);

export default OpenSourceMission;
