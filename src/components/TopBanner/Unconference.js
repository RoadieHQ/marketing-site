import React from 'react';
import unconferenceLogo from '../../../content/assets/backstage-unconference.png';
import { Link } from 'components';

const Unconference = () => (
  <Link to="https://hopin.com/events/backstage-users-unconference" className="text-white underline-none hover:underline">
    <img
      src={unconferenceLogo}
      alt="The Backstage users unconference logo."
      className="h-4 mr-2 inline align-middle"
    />
    Join us at the first ever Backstage Users Unconference community event on <strong>November 4th</strong>.
  </Link>
);

export default Unconference;
