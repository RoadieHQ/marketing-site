import React from 'react'
import SitewideHeader from 'components/tailwind/SitewideHeader';
import { Button, Lead, Headline } from 'components/tailwind';

const Main = () => {
  return (
    <main className="mt-16 mx-auto max-w-7xl px-4 sm:mt-24">
      <div className="text-center">

        <Headline>
          <span className="block xl:inline">Backstage for</span>{' '}
          <span className="block text-indigo-600 xl:inline">scale-ups</span>
        </Headline>

        <div className="mt-3 max-w-md mx-auto md:mt-5 md:max-w-3xl">
          <Lead>
            Roadie&apos;s SaaS platform handles hosting and upgrades and ensures you always have access to the latest Backstage features.
          </Lead>
        </div>

        <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
          <div>
            <Button
              link={true}
              to="/tailwind/free-trial/"
              color="primary"
              text="Try it free"
              size="large"
              fullWidth={true}
            />
          </div>

          <div className="mt-3 sm:mt-0 sm:ml-3">
            <Button
              link={true}
              to="/tailwind/request-demo/"
              color="secondary"
              text="Request a demo"
              size="large"
              fullWidth={true}
            />
          </div>
        </div>
      </div>
    </main>
  );
};

const SimpleCentered = () => {
  return (
    <div className="relative bg-gray-50 overflow-hidden">
      <div className="hidden sm:block sm:absolute sm:inset-y-0 sm:h-full sm:w-full" aria-hidden="true">
        <div className="relative h-full max-w-7xl mx-auto">
          <svg
            className="absolute right-full transform translate-y-1/4 translate-x-1/4 lg:translate-x-1/2"
            width={404}
            height={784}
            fill="none"
            viewBox="0 0 404 784"
          >
            <defs>
              <pattern
                id="f210dbf6-a58d-4871-961e-36d5016a0f49"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
              </pattern>
            </defs>
            <rect width={404} height={784} fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)" />
          </svg>
          <svg
            className="absolute left-full transform -translate-y-3/4 -translate-x-1/4 md:-translate-y-1/2 lg:-translate-x-1/2"
            width={404}
            height={784}
            fill="none"
            viewBox="0 0 404 784"
          >
            <defs>
              <pattern
                id="5d0dd344-b041-4d26-bec4-8d33ea57ec9b"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
              </pattern>
            </defs>

            <rect width={404} height={784} fill="url(#5d0dd344-b041-4d26-bec4-8d33ea57ec9b)" />
          </svg>
        </div>
      </div>

      <div className="relative pt-6 pb-16 sm:pb-24">
        <SitewideHeader />
        <Main />
      </div>
    </div>
  )
};

export default SimpleCentered;
