import React from 'react';

import SnykLogo from '../../../content/assets/home/customer-logos/snyk-monochrome.webp';
import SnykLogoPng from '../../../content/assets/home/customer-logos/snyk-monochrome.png';
import StreamElementsLogo from '../../../content/assets/home/customer-logos/streamelements-monochrome.webp';
import StreamElementsLogoPng from '../../../content/assets/home/customer-logos/streamelements-monochrome.png';
import TrackunitLogo from '../../../content/assets/home/customer-logos/trackunit-monochrome.webp';
import TrackunitLogoPng from '../../../content/assets/home/customer-logos/trackunit-monochrome.png';
import ContentfulLogo from '../../../content/assets/home/customer-logos/contentful-monochrome.webp';
import ContentfulLogoPng from '../../../content/assets/home/customer-logos/contentful-monochrome.png';
import NcsaLogo from '../../../content/assets/home/customer-logos/ncsa-monochrome.webp';
import NcsaLogoPng from '../../../content/assets/home/customer-logos/ncsa-monochrome.png';
import HopperLogo from '../../../content/assets/home/customer-logos/hopper-monochrome.webp';
import HopperLogoPng from '../../../content/assets/home/customer-logos/hopper-monochrome.png';
import MyFitnessPalLogo from '../../../content/assets/home/customer-logos/myfitnesspal-monochrome.webp';
import MyFitnessPalLogoPng from '../../../content/assets/home/customer-logos/myfitnesspal-monochrome.png';
import YotpoLogo from '../../../content/assets/home/customer-logos/yotpo-monochrome.webp';
import YotpoLogoPng from '../../../content/assets/home/customer-logos/yotpo-monochrome.png';
import NetlifyLogo from '../../../content/assets/home/customer-logos/netlify-monochrome.webp';
import NetlifyLogoPng from '../../../content/assets/home/customer-logos/netlify-monochrome.png';
import CaribouLogo from '../../../content/assets/home/customer-logos/caribou-monochrome.webp';
import CaribouLogoPng from '../../../content/assets/home/customer-logos/caribou-monochrome.png';

import HopperWhiteLogo from '../../../content/assets/home/customer-logos-monochrome/hopper.png';
import ContentfulWhiteLogo from '../../../content/assets/home/customer-logos-monochrome/contentful.png';
import SnykWhiteLogo from '../../../content/assets/home/customer-logos-monochrome/snyk.png';
import NetlifyWhiteLogo from '../../../content/assets/home/customer-logos-monochrome/netlify.png';
import CaribouWhiteLogo from '../../../content/assets/home/customer-logos-monochrome/caribou.png';
import YotpoWhiteLogo from '../../../content/assets/home/customer-logos-monochrome/yotpo.png';

import ContentfulDarkLogo from '../../../content/assets/home/customer-logos-monochrome/contentful-dark.png';
import SnykDarkLogo from '../../../content/assets/home/customer-logos-monochrome/snyk-dark.png';
import NetlifyDarkLogo from '../../../content/assets/home/customer-logos-monochrome/netlify-dark.png';
import CaribouDarkLogo from '../../../content/assets/home/customer-logos-monochrome/caribou-dark.png';
import YotpoDarkLogo from '../../../content/assets/home/customer-logos-monochrome/yotpo-dark.png';

export const LOGOS = [
  {
    src: {
      webp: CaribouLogo,
      png: CaribouLogoPng,
      white: CaribouWhiteLogo,
      dark: CaribouDarkLogo,
    },
    alt: 'Caribou logo',
    title: '~100 engineers',
  },
  {
    src: {
      webp: YotpoLogo,
      png: YotpoLogoPng,
      white: YotpoWhiteLogo,
      dark: YotpoDarkLogo,
    },
    alt: 'Yotpo logo',
    title: '~100 engineers',
  },
  {
    src: {
      webp: SnykLogo,
      png: SnykLogoPng,
      white: SnykWhiteLogo,
      dark: SnykDarkLogo,
    },
    alt: 'Snyk logo',
    title: '~150 engineers',
  },

  {
    src: {
      webp: ContentfulLogo,
      png: ContentfulLogoPng,
      white: ContentfulWhiteLogo,
      dark: ContentfulDarkLogo,
    },
    alt: 'Contentful logo',
    title: '~150 engineers',
  },
  {
    src: {
      webp: NetlifyLogo,
      png: NetlifyLogoPng,
      white: NetlifyWhiteLogo,
      dark: NetlifyDarkLogo,
    },
    alt: 'Netlify logo',
    title: '~100 engineers',
  },
  {
    src: {
      webp: HopperLogo,
      png: HopperLogoPng,
      white: HopperWhiteLogo,
    },
    alt: 'Hopper logo',
    title: '~200 engineers',
  },
  {
    src: {
      webp: MyFitnessPalLogo,
      png: MyFitnessPalLogoPng,
    },
    alt: 'MyFitnessPal logo',
    title: '~100 engineers',
  },
  {
    src: {
      webp: TrackunitLogo,
      png: TrackunitLogoPng,
    },
    alt: 'Trackunit logo',
    title: '~70 engineers',
  },
  {
    src: {
      webp: NcsaLogo,
      png: NcsaLogoPng,
    },
    alt: 'NCSA logo',
    title: '~50 engineers',
  },
  {
    src: {
      webp: StreamElementsLogo,
      png: StreamElementsLogoPng,
    },
    alt: 'StreamElements logo',
    title: '~50 engineers',
  },
  {
    src: {
      webp: YotpoLogo,
      png: YotpoLogoPng,
    },
    alt: 'Yotpo logo',
    title: '~250 engineers',
  },
];

/* eslint-disable jsx-a11y/alt-text */
export const LogoItem = ({ src, ...rest }) => (
  <picture>
    <source srcSet={src.webp} type="image/webp" />
    <source srcSet={src.png} type="image/png" />
    <img src={src.png} {...rest} />
  </picture>
);
/* eslint-enable jsx-a11y/alt-text */

const CustomerLogoCloud = ({ logos = LOGOS }) => (
  <div className="bg-white">
    <div className="max-w-7xl mx-auto py-12 lg:py-32 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-8 sm:mb-12 text-gray-600">
        <p>Providing Backstage to</p>
      </div>

      <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
        {logos.slice(0, 8).map((logo) => (
          <div className="col-span-1 flex justify-center" key={logo.src.png}>
            <LogoItem {...logo} className="h-10" />
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default CustomerLogoCloud;
