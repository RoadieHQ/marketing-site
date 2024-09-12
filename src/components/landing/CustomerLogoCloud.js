import React from 'react';

import SnykLogo from '../../../content/assets/home/customer-logos/snyk-monochrome.webp';
import SnykLogoPng from '../../../content/assets/home/customer-logos/snyk-monochrome.png';
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

export const LOGOS = [
  {
    src: {
      webp: SnykLogo,
      png: SnykLogoPng,
    },
    alt: 'Snyk logo',
    title: '~150 engineers',
  },

  {
    src: {
      webp: ContentfulLogo,
      png: ContentfulLogoPng,
    },
    alt: 'Contentful logo',
    title: '~150 engineers',
  },
  {
    src: {
      webp: NetlifyLogo,
      png: NetlifyLogoPng,
    },
    alt: 'Netlify logo',
    title: '~100 engineers',
  },
  {
    src: {
      webp: HopperLogo,
      png: HopperLogoPng,
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
      webp: NcsaLogo,
      png: NcsaLogoPng,
    },
    alt: 'NCSA logo',
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
        <p>Trusted by companies like</p>
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
