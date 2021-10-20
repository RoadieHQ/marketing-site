import React from 'react';
import { Button, InterstitialTitle } from 'components/tailwind';

const SimpleCentered = () => {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto text-center py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <InterstitialTitle size="large">
          <span className="block">Ready to dive in?</span>
          <span className="block">Start your free trial today.</span>
        </InterstitialTitle>

        <div className="mt-8 flex justify-center">
          <div className="inline-flex">
            <Button
              link={true}
              to="/tailwind/free-trial/"
              color="primary"
              text="Try it free"
            />
          </div>

          <div className="ml-3 inline-flex">
            <Button
              link={true}
              to="/tailwind/request-demo/"
              color="inset"
              text="Request a demo"
            />
          </div>
        </div>
      </div>
    </div>
  )
};

export default SimpleCentered;
