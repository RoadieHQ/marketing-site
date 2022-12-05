import React from 'react';
import { DotPattern, Title } from 'components';
import classnames from 'classnames';
import camelCase from 'lodash/camelCase';

import Bullet from './FeatureBullet';

const FeatureBlock = ({
  title,
  description,
  bullets,
  paragraphs,
  illustration,
  illustrationSide = 'right',
}) => (
  <div
    className={classnames('lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center', {
      'lg:grid-flow-row-dense': illustrationSide === 'left',
    })}
  >
    <div
      className={classnames({
        'lg:col-start-2': illustrationSide === 'left',
        relative: illustrationSide === 'right',
      })}
    >
      <Title el="h3" className="text-primary-600">{title}</Title>
      <p className="mt-5 text-xl">{description}</p>

      {!!paragraphs && (
        <>
          {paragraphs.map((paragraph, i) => (
            <p key={`feature-p-${camelCase(title)}-${i}`}>{paragraph}</p>
          ))}
        </>
      )}

      {!!bullets && (
        <dl className="mt-10 space-y-10">
          {bullets.map((item, i) => (
            <Bullet item={item} key={`feature-b-${camelCase(title)}-${i}`} />
          ))}
        </dl>
      )}
    </div>

    <div
      className={classnames('mt-10 -mx-4 relative lg:mt-0', {
        'lg:col-start-1': illustrationSide === 'left',
      })}
      aria-hidden={illustrationSide === 'right'}
    >
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

export const AlternatingFeatureWrapper = ({ className, children }) => (
  <section
    className={classnames(
      className,
      'relative overflow-hidden max-w-xl mx-auto px-4 sm:px-6 lg:px-28 lg:max-w-7xl'
    )}
  >
    {children}
  </section>
);

export const AlternatingFeatureBlock = ({ featureItem, illustrationSide = 'right' }) => (
  <div className="relative">
    {illustrationSide === 'right' ? (
      <DotPattern
        width={404}
        height={784}
        className="hidden lg:block absolute left-full transform -translate-x-1/2 -translate-y-1/4"
        id="ca9667ae-9f92-4be7-abcb-9e3d727f2941"
      />
    ) : (
      <DotPattern
        className="hidden lg:block absolute right-full transform translate-x-1/2 translate-y-12"
        width={404}
        height={784}
        aria-hidden="true"
        id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d"
      />
    )}

    <div className="relative mt-12 sm:mt-16 lg:my-32">
      <FeatureBlock illustrationSide={illustrationSide} {...featureItem} />
    </div>
  </div>
);
