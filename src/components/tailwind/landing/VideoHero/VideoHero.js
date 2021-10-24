import React, { useState } from 'react'
import { Button, GrayBackgroundDotsPattern } from 'components/tailwind';
import { Helmet } from 'react-helmet';

import IntroToRoadieModal from './IntroToRoadieModal';
import backstageScreenshot from '../../../../../content/assets/backstage-screenshot.png';

const PlayIcon = () => (
  <div className="absolute inset-0 w-full h-full flex items-center justify-center" aria-hidden="true">
    <svg className="h-20 w-20 text-primary-500" fill="currentColor" viewBox="0 0 84 84">
      <circle opacity="0.9" cx={42} cy={42} r={42} fill="white" />
      <path d="M55.5039 40.3359L37.1094 28.0729C35.7803 27.1869 34 28.1396 34 29.737V54.263C34 55.8604 35.7803 56.8131 37.1094 55.9271L55.5038 43.6641C56.6913 42.8725 56.6913 41.1275 55.5039 40.3359Z" />
    </svg>
  </div>
);

const Title = ({ children }) => (
  <h1>
    <span className="mt-1 block text-4xl tracking-tight font-extrabold sm:text-5xl xl:text-6xl">
      {children}
    </span>
  </h1>
);

const SubTitle = ({ text }) => (
  <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
    {text}
  </p>
);

const VideoHero = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  return (
    <>
      <Helmet>
        <script src="https://player.vimeo.com/api/player.js" />
      </Helmet>

      <IntroToRoadieModal
        setModalOpen={setModalOpen}
        modalOpen={modalOpen}
      />

      <div className="relative bg-white overflow-hidden">
        <div className="hidden lg:block lg:absolute lg:inset-0" aria-hidden="true">
          <GrayBackgroundDotsPattern
            className="absolute top-0 left-1/2 transform translate-x-64 -translate-y-8"
            width={640}
            height={784}
            id="9ebea6f4-a1f5-4d96-8c4e-4c2abf658047"
          />
        </div>

        <div className="relative pt-6 pb-16 sm:pb-24 lg:pb-32">
          <main className="mt-16 mx-auto max-w-7xl px-4 sm:mt-24 sm:px-6 lg:mt-32">
            <div className="lg:grid lg:grid-cols-12 lg:gap-8">
              <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
                <Title>
                  <span className="block text-gray-900">Backstage for</span>
                  <span className="block text-primary-600">scale-ups</span>
                </Title>

                <SubTitle
                  text="Roadie&apos;s SaaS platform handles hosting and upgrades and ensures you always have access to the latest Backstage features."
                />

                <div className="mt-5 max-w-md sm:flex md:mt-8">
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

              <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
                <GrayBackgroundDotsPattern
                  className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-8 scale-75 origin-top sm:scale-100 lg:hidden"
                  width={640}
                  height={784}
                  id="4f4f415c-a0e9-44c2-9601-6ded5a34a13e"
                  aria-hidden="true"
                />

                <div className="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md">
                  <button
                    type="button"
                    className="relative block w-full bg-white rounded-lg overflow-hidden focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                    onClick={openModal}
                  >
                    <span className="sr-only">Watch our video to learn more</span>
                    <img
                      className="w-full"
                      src={backstageScreenshot}
                      alt="Screenshot of a component in Backstage showing the PagerDuty, GitHub Actions, Links and Compliance plugins"
                    />
                    <PlayIcon />
                  </button>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default VideoHero;
