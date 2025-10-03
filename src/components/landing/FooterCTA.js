import React from 'react';
import { Button, Headline } from 'components';
import { PAGE_PATHS } from '../../contactFormConstants';

const FooterCTA = () => (
  <div className="bg-white">
    <div className="max-w-7xl mx-auto text-center py-12 px-4 sm:px-6 lg:py-32 lg:px-8">
      <div className="pb-3">
        <Headline el="h2">
          <span className="block">Start using Backstage today</span>
        </Headline>
      </div>

      <div className="mt-8 flex justify-center">
        <div className="inline-flex">
          <Button link={true} to={PAGE_PATHS.freeTrial} color="primary" text="Try it free" />
        </div>

        <div className="ml-3 inline-flex">
          <Button link={true} to={PAGE_PATHS.requestDemo} color="inset" text="Request a demo" />
        </div>
      </div>
    </div>
  </div>
);

export default FooterCTA;
