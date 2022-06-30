import React from 'react';
import { Button, Headline } from 'components';

const CenteredHero = () => {

  return (
    <>
      <div className="relative bg-primary-600 overflow-x-hidden">
        <div className="relative pt-6 pb-16 sm:pb-24 lg:pb-32">
          <main className="mt-16 mx-auto max-w-7xl px-4 sm:mt-24 sm:px-6 lg:mt-32">
            <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
              <Headline size="medium" className="text-white">
                Set up and deploy Backstage <br /> in hours instead of weeks
                {/* <span className="text-gray-900">Drag and drop</span>
                  <span className="block text-gray-900">Backstage</span>
                  <span className="block text-gray-900">managed Backstage</span> */}
              </Headline>

              <h2 className="mt-5 text-base text-white sm:mt-7 sm:text-xl lg:text-lg xl:text-xl">
                Roadie gives you a production Backstage instance with drag-and-drop plugins and
                secure integrations
              </h2>

              <div className="mt-5 sm:flex sm:justify-center lg:justify-start md:mt-8">
                <div>
                  <Button
                    link={true}
                    to="/free-trial/"
                    color="primary"
                    text="Try it free"
                    size="large"
                    fullWidth={true}
                  />
                </div>

                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <Button
                    link={true}
                    to="/request-demo/"
                    color="secondary"
                    text="Request a demo"
                    size="large"
                    fullWidth={true}
                  />
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>

      <script async src="https://player.vimeo.com/api/player.js" />
    </>
  );
};

export default CenteredHero;
