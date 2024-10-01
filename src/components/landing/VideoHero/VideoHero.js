import React, { useState } from 'react'
import { Button, GrayBackgroundDotsPattern, Headline } from 'components';
import { PlayIcon } from 'components/icons';
import { PAGE_PATHS } from '../../../contactFormConstants';

import IntroToRoadieModal from './IntroToRoadieModal';
import catalogScreenshot from '../../../../content/assets/home/illustrations/home-product-screenshot.svg';

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

        <div className="relative pt-0 pb-16 sm:pb-24 lg:pb-32">
          <main className="mt-4 mx-auto max-w-7xl px-4 sm:mt-20 sm:px-6 lg:mt-20 text-center">
            <div className="p-container is-hero">
              <div>
                <Headline className="title is-48 tracking-right mt-6" size="medium">
                  <span className="text-gray-900">Achieve developer effectiveness</span>
                </Headline>
                <div className="w-embed">
                  <div style={ {"height": "2rem"} } ></div>
                </div>
                <SubTitle
                  className="text is-16 text-center"
                  text="Fully customizable Internal Developer Portal with on-prem access, built on Backstage. Scorecards and RBAC included."
                />
                <div className="w-embed">
                  <div style={ {"height": "1.6rem"} }></div>
                </div>
                <div
                  className="flex flex-col is-center sm:text-center md:max-w-2xl md:mx-auto lg:col-span-7 lg:text-left">
                  <div className="mt-5 sm:flex sm:justify-center lg:justify-center md:mt-8">
                    <div>
                      <Button
                        link={true}
                        to={PAGE_PATHS.freeTrial}
                        color="primary"
                        text="Try it free"
                        size="large"
                        fullWidth={true}
                      />
                    </div>
                    <div className="mt-3 sm:mt-0 sm:ml-3">
                      <Button
                        link={true}
                        to={PAGE_PATHS.requestDemo}
                        color="secondary"
                        text="Request a demo"
                        size="large"
                        fullWidth={true}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-hero-wrap">
                <div className="bg-line corner">
                  <div className="bg-dot-line"></div>
                  <div className="bg-line-cover"></div>
                </div>
                <div className="bg-line">
                  <div className="bg-dot-line"></div>
                  <div className="bg-line-cover"></div>
                </div>
                <div className="bg-line">
                  <div className="bg-dot-line"></div>
                  <div className="bg-line-cover"></div>
                </div>
                <div className="bg-line">
                  <div className="bg-dot-line"></div>
                  <div className="bg-line-cover"></div>
                </div>
                <div className="bg-line corner">
                  <div className="bg-dot-line"></div>
                  <div className="bg-line-cover"></div>
                </div>
              </div>
            </div>
            <div className="lg:grid lg:grid-cols-1 lg:gap-8  mt-10">
              <div
                className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-5 lg:flex lg:items-center">
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
                    title="Play video"
                  >
                    <span className="sr-only">Watch our video to learn more</span>
                    <img
                      className="w-full"
                      src={catalogScreenshot}
                      alt="Screenshot of a component in Backstage showing Snyk, Tech Insights, CI, Argo CD, Kubernetes and PagerDuty plugins."
                    />

                    <div className="absolute inset-0 w-full h-full flex items-center justify-center" aria-hidden="true">
                      <PlayIcon className="h-20 w-20 text-primary-500" />
                    </div>
                  </button>
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

export default VideoHero;
