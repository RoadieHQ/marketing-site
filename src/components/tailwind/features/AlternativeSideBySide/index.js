import React from 'react';
import {
  AnnotationIcon,
  GlobeAltIcon,
  LightningBoltIcon,
  MailIcon,
  ScaleIcon,
} from '@heroicons/react/outline'
import { Lead, InterstitialTitle, DotPattern } from 'components/tailwind';

import dragDropIllustration from '../../../../../content/assets/home/drag-drop-illustration.svg';
import securityMaintenanceIllustration from '../../../../../content/assets/home/security-maintenance-illustration.svg';

const easeOfUseFeatures = [{
  id: 1,
  name: 'All major plugin formats supported',
  description:
    `Roadie's drag and drop setup supports cards, tabs, sidebar links and full page plugins.`,
  icon: GlobeAltIcon,
}, {
  id: 2,
  name: 'Bring your own plugins',
  description:
    'Building your own internal plugins? Just publish them to our repository and they appear in your Backstage experience like magic.',
  icon: ScaleIcon,
}, {
  id: 3,
  name: 'Admins only',
  description:
    `Plugins would move around too frequently if everyone could edit them. We've built roles into Backstage so admins can lead the setup process.`,
  icon: LightningBoltIcon,
}];

const maintenanceFeatures = [{
  id: 1,
  name: 'Automated upgrades',
  description:
    `Open-source community power means that Backstage moves quickly. It's easy to fall behind if you don't put the work in.`,
  icon: AnnotationIcon,
}, {
  id: 2,
  name: 'Security patches delivered',
  description:
    `We regularly patch vulnerabilities in the open-source code, ensuring you're using a hardened version of Backstage.`,
  icon: MailIcon,
}];

const FeatureBulletPoint = ({ item }) => (
  <div className="relative">
    <dt>
      <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
        <item.icon className="h-6 w-6" aria-hidden="true" />
      </div>
      <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{item.name}</p>
    </dt>
    <dd className="mt-2 ml-16 text-base text-gray-500">{item.description}</dd>
  </div>
);

const FeatureIllustration = (props) => (
  // alt-text should be passed in via props.
  // eslint-disable-next-line jsx-a11y/alt-text
  <img className="relative mx-auto" width={490} {...props} />
);

const AlternativeSideBySide = () => {
  return (
    <div className="py-16 bg-gray-50 overflow-hidden lg:py-24">
      <div className="relative max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-7xl">
        <DotPattern
          width={404}
          height={784}
          className="hidden lg:block absolute left-full transform -translate-x-1/2 -translate-y-1/4"
          id="ca9667ae-9f92-4be7-abcb-9e3d727f2941"
        />

        <div className="relative text-center">
          <InterstitialTitle text="Backstage with benefits..." size="large" />
          <Lead>
            We&apos;re building on top of Backstage to make it painless to use and maintenance free.
          </Lead>
        </div>

        <div className="relative mt-12 lg:mt-24 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
          <div className="relative">
            <h3 className="text-2xl font-extrabold text-gray-900 tracking-tight sm:text-3xl">
              Quick and easy setup
            </h3>

            <div className="mt-3">
              <Lead size="small">
                Customize Backstage to suit your needs using our drag-and-drop composer. If your company uses Pagerduty
                instead of Opsgenie, simply remove one plugin and replace it with the other. It takes seconds and
                changes roll out instantly for everyone.
              </Lead>
            </div>

            <dl className="mt-10 space-y-10">
              {easeOfUseFeatures.map((item) => (
                <FeatureBulletPoint item={item} key={item.id} />
              ))}
            </dl>
          </div>

          <div className="mt-10 -mx-4 relative lg:mt-0" aria-hidden="true">
            <DotPattern
              className="absolute left-1/2 transform -translate-x-1/2 translate-y-16 lg:hidden"
              width={784}
              height={404}
              id="ca9667ae-9f92-4be7-abcb-9e3d727f2941"
            />

            <FeatureIllustration src={dragDropIllustration} alt="" />
          </div>
        </div>

        <DotPattern
          className="hidden lg:block absolute right-full transform translate-x-1/2 translate-y-12"
          width={404}
          height={784}
          aria-hidden="true"
          id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d"
        />

        <div className="relative mt-12 sm:mt-16 lg:mt-24">
          <div className="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div className="lg:col-start-2">
              <h3 className="text-2xl font-extrabold text-gray-900 tracking-tight sm:text-3xl">Maintenance free</h3>

              <div className="mt-3">
                <Lead size="small">
                  Roadie handles upgrades and security so you can stay focussed on the work your team does best.
                </Lead>
              </div>

              <dl className="mt-10 space-y-10">
                {maintenanceFeatures.map((item) => (
                  <FeatureBulletPoint item={item} key={item.id} />
                ))}
              </dl>
            </div>

            <div className="mt-10 -mx-4 relative lg:mt-0 lg:col-start-1">
              <DotPattern
                className="absolute left-1/2 transform -translate-x-1/2 translate-y-16 lg:hidden"
                width={784}
                height={404}
                aria-hidden="true"
                id="e80155a9-dfde-425a-b5ea-1f6fadd20131"
              />

              <FeatureIllustration src={securityMaintenanceIllustration} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default AlternativeSideBySide;
