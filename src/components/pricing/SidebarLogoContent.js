import React from 'react';
import { LogoItem } from 'components/landing/CustomerLogoCloud';

import SnykLogo from '../../../content/assets/home/customer-logos/snyk-monochrome.webp';
import SnykLogoPng from '../../../content/assets/home/customer-logos/snyk-monochrome.png';

const SidebarLogoContent = () => (
  <div className="h-full flex items-end">
    <div className="mt-8">
      <p className="text-base text-gray-900 text-center px-4">
        Proudly providing Backstage to companies like
      </p>

      <LogoItem
        src={{
          webp: SnykLogo,
          png: SnykLogoPng,
        }}
        alt="Snyk logo"
        className="m-auto mt-8"
      />
    </div>
  </div>
);

export default SidebarLogoContent;
