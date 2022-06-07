import React from 'react';
import { Lead, DotPattern, Title } from 'components';
import classnames from 'classnames';

import Bullet from './FeatureBullet';

const FeatureHeader = ({ title, description }) => (
  <>
    <Title el="h3">{title}</Title>

    <div className="mt-3">
      <Lead size="small">
        {description}
      </Lead>
    </div>
  </>
);

const FeatureBlock = ({
  title,
  description,
  bullets,
  illustration,
  illustrationSide = 'right',
}) => (
  <div className={classnames('lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center', { 'lg:grid-flow-row-dense': illustrationSide === 'left' })}>
    <div className={classnames({ 'lg:col-start-2': illustrationSide === 'left', 'relative': illustrationSide === 'right' })}>
      <FeatureHeader
        title={title}
        description={description}
      />

      <dl className="mt-10 space-y-10">
        {bullets.map((item) => (<Bullet item={item} key={item.name} />))}
      </dl>
    </div>

    <div
      className={
        classnames('mt-10 -mx-4 relative lg:mt-0', { 'lg:col-start-1': illustrationSide === 'left' })
      }
      aria-hidden={illustrationSide === 'right'}
    >
      <DotPattern
        className="absolute left-1/2 transform -translate-x-1/2 translate-y-16 lg:hidden"
        width={784}
        height={404}
        aria-hidden={illustrationSide === 'left'}
        id="ca9667ae-9f92-4be7-abcb-9e3d727f2941"
      />

      <div className="flex align-center justify-center px-2 sm:px-0">
        <picture>
          <source srcSet={illustration.webp} type="image/webp" />
          <source srcSet={illustration.png} type="image/png" />
          <img src={illustration.png} alt={illustration.alt} />
        </picture>
      </div>
    </div>
  </div>
);

const AlternatingFeatureBlock = ({ content }) => (
  <div className="relative max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-6xl">
    <DotPattern
      width={404}
      height={784}
      className="hidden lg:block absolute left-full transform -translate-x-1/2 -translate-y-1/4"
      id="ca9667ae-9f92-4be7-abcb-9e3d727f2941"
    />

    <div className="relative mt-12 sm:mt-16 lg:my-32">
      <FeatureBlock illustrationSide="right" {...content.features[0]} />
    </div>

    {content.features[1] && (
      <>
        <DotPattern
          className="hidden lg:block absolute right-full transform translate-x-1/2 translate-y-12"
          width={404}
          height={784}
          aria-hidden="true"
          id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d"
        />

        <div className="relative mt-12 sm:mt-16 lg:my-32">
          <FeatureBlock illustrationSide="left" {...content.features[1]} />
        </div>
      </>
    )}

    {content.features[2] && (
      <>
        <DotPattern
          width={404}
          height={784}
          className="hidden lg:block absolute left-full transform -translate-x-1/2 -translate-y-1/4"
          id="ca9667ae-9f92-4be7-abcb-9e3d727f2941"
        />

        <div className="relative mt-12 sm:mt-16 lg:my-32">
          <FeatureBlock illustrationSide="right" {...content.features[2]} />
        </div>
      </>
    )}
  </div>
);

export default AlternatingFeatureBlock;
