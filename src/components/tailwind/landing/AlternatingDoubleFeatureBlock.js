import React from 'react';
import { Lead, InterstitialTitle, DotPattern } from 'components/tailwind';

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

const FeatureHeader = ({ title, description }) => (
  <>
    <h3 className="text-2xl font-extrabold text-gray-900 tracking-tight sm:text-3xl">
      {title}
    </h3>

    <div className="mt-3">
      <Lead size="small">
        {description}
      </Lead>
    </div>
  </>
);

const FeatureBlockImageLeft = ({
  title,
  description,
  bullets,
  illustration,
}) => (
  <div className="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-8 lg:items-center">
    <div className="lg:col-start-2">
      <FeatureHeader
        title={title}
        description={description}
      />

      <dl className="mt-10 space-y-10">
        {bullets.map((item) => (
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

      {illustration}
    </div>
  </div>
);

const FeatureBlockImageRight = ({
  title,
  description,
  bullets,
  illustration,
}) => (
  <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
    <div className="relative">
      <FeatureHeader
        title={title}
        description={description}
      />

      <dl className="mt-10 space-y-10">
        {bullets.map((item) => (<FeatureBulletPoint item={item} key={item.id} />))}
      </dl>
    </div>

    <div className="mt-10 -mx-4 relative lg:mt-0" aria-hidden="true">
      <DotPattern
        className="absolute left-1/2 transform -translate-x-1/2 translate-y-16 lg:hidden"
        width={784}
        height={404}
        id="ca9667ae-9f92-4be7-abcb-9e3d727f2941"
      />

      <div className="float-right">
        {illustration}
      </div>
    </div>
  </div>
);

const AlternatingDoubleFeatureBlock = ({ content }) => (
  <div className="py-16 bg-gray-50 overflow-hidden lg:py-24">
    <div className="relative max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-7xl">
      <DotPattern
        width={404}
        height={784}
        className="hidden lg:block absolute left-full transform -translate-x-1/2 -translate-y-1/4"
        id="ca9667ae-9f92-4be7-abcb-9e3d727f2941"
      />

      <div className="relative text-center">
        <InterstitialTitle text={content.title} size="large" />
        <Lead>
          {content.description}
        </Lead>
      </div>

      <div className="relative mt-12 sm:mt-16 lg:mt-24">
        <FeatureBlockImageRight
          title={content.features[0].title}
          description={content.features[0].description}
          bullets={content.features[0].bullets}
          illustration={content.features[0].illustration}
        />
      </div>

      <DotPattern
        className="hidden lg:block absolute right-full transform translate-x-1/2 translate-y-12"
        width={404}
        height={784}
        aria-hidden="true"
        id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d"
      />

      <div className="relative mt-12 sm:mt-16 lg:mt-24">
        <FeatureBlockImageLeft
          title={content.features[1].title}
          description={content.features[1].description}
          bullets={content.features[1].bullets}
          illustration={content.features[1].illustration}
        />
      </div>
    </div>
  </div>
);

export default AlternatingDoubleFeatureBlock;
