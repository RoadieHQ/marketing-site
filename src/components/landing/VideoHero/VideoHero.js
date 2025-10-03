import React, { useState } from 'react';
import { Button, Headline } from 'components';
import { PlayIcon } from 'components/icons';
import { PAGE_PATHS } from '../../../contactFormConstants';

import IntroToRoadieModal from './IntroToRoadieModal';
import catalogScreenshot from '../../../../content/assets/home/illustrations/home-product-screenshot.svg';

const Title = () => (
  <Headline className="tracking-tight text-center text-gray-900" size="large">
    <span className="block">Achieve true</span>
    <span>developer effectiveness</span>
  </Headline>
);

const SubTitle = () => (
  <div className="sm:max-w-lg lg:max-w-xl mx-auto">
    <p className="text-center text-gray-500 lg:text-lg">
      The fully customizable Internal Developer Portal built on Backstage. Scorecards, RBAC, and
      secure on-prem access included.
    </p>
  </div>
);

const CallToAction = () => (
  <div className="mt-5 sm:flex sm:justify-center md:mt-8">
    <div>
      <Button
        link={true}
        to={PAGE_PATHS.requestDemo}
        color="primary"
        text="Request a demo"
        size="large"
        fullWidth={true}
      />
    </div>

    <div className="mt-3 sm:mt-0 sm:ml-3">
      <Button
        link={true}
        to={PAGE_PATHS.freeTrial}
        text="Try it free"
        color="secondary"
        size="large"
        fullWidth={true}
      />
    </div>
  </div>
);

const PlayButton = ({ openModal, children }) => (
  <button
    type="button"
    className="relative block w-full bg-white rounded-lg overflow-hidden focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
    onClick={openModal}
    title="See Roadie in action"
  >
    {children}
  </button>
);

const ProductImage = () => (
  <img
    className="w-full"
    src={catalogScreenshot}
    alt="Screenshot of a component in Backstage showing Snyk, Tech Insights, CI, Argo CD, Kubernetes and PagerDuty plugins."
  />
);

const ScreenshotVideoPlayer = ({ openModal }) => (
  <div className="relative sm:max-w-lg md:max-w-xl sm:mx-auto">
    <PlayButton openModal={openModal}>
      <span className="sr-only">Watch our video to learn more</span>
      <ProductImage />

      <div
        className="absolute inset-0 w-full h-full flex items-center justify-center"
        aria-hidden="true"
      >
        <span className="h-40 w-40">
          <PlayIcon />
        </span>
      </div>
    </PlayButton>
  </div>
);

const VideoHero = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  return (
    <>
      <IntroToRoadieModal setModalOpen={setModalOpen} modalOpen={modalOpen} />

      <div className="relative bg-white">
        <div className="pt-0 pb-12 px-4">
          <div className="mt-12 lg:mt-16">
            <Title />
          </div>

          <div className="mt-4">
            <SubTitle />
          </div>

          <div className="mb-8 lg:mb-20">
            <CallToAction />
          </div>

          <ScreenshotVideoPlayer openModal={openModal} />
        </div>
      </div>

      <script async src="https://player.vimeo.com/api/player.js" />
    </>
  );
};

export default VideoHero;
