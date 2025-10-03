import React from 'react';
import logo from '../../../content/assets/pragmatic-engineer-logo.png';
import { Link } from 'components';
import { PAGE_PATHS } from '../../contactFormConstants';

const PragmaticEngineerNewsletter = () => (
  <Link to={PAGE_PATHS.requestDemo} className="text-white underline-none hover:underline">
    <img
      src={logo}
      alt="The Pragmatic Engineer logo. Three orange columns ordered tallest to shortest."
      className="h-4 mr-2 inline align-middle"
      style={{ marginBottom: 3 }}
    />
    Welcome all Pragmatic Engineer readers! Click here to book a demo of Roadie Backstage.
  </Link>
);

export default PragmaticEngineerNewsletter;
