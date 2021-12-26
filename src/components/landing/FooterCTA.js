import React from 'react';
import { Button, Headline } from 'components';

const FooterCTA = () => (
  <div className="bg-white dark:bg-gray-900">
    <div className="max-w-7xl mx-auto text-center py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
      <div className="pb-3">
        <Headline el="h2">
          <span className="block">Ready to dive in?</span>
          <span className="block">Start your free trial today.</span>
        </Headline>
      </div>

      <div className="mt-8 flex justify-center">
        <div className="inline-flex">
          <Button
            link={true}
            to="/free-trial/"
            color="primary"
            text="Try it free"
          />
        </div>

        <div className="ml-3 inline-flex">
          <Button
            link={true}
            to="/request-demo/"
            color="secondary"
            text="Request a demo"
          />
        </div>
      </div>
    </div>
  </div>
);

export default FooterCTA;
