import React from 'react';
import { Button } from 'components/tailwind';

const SimpleCentered = () => {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto text-center py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          <span className="block">Ready to dive in?</span>
          <span className="block">Start your free trial today.</span>
        </h2>
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
