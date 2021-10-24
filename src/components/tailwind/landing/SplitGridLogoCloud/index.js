import React from 'react';
import { Headline } from 'components/tailwind';

const SubTitle = ({ text }) => (
  <p className="mt-3 max-w-3xl text-lg text-gray-500">
    {text}
  </p>
);

const LogoItem = ({ src }) => (
  <div className="col-span-1 flex justify-center items-center py-8 px-8 bg-gray-50">
    {src}
  </div>
);

const SplitGridOnRight = ({ content }) => (
  <div className="bg-white">
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
      <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
        <div>
          <Headline el="h2">{content.title}</Headline>
          <SubTitle text={content.subTitle} />
        </div>

        <div className="mt-8 grid grid-cols-2 gap-0.5 md:grid-cols-3 lg:mt-0 lg:grid-cols-2">
          {content.logos.map((logo) => (
            <LogoItem {...logo} key={logo.src} />
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default SplitGridOnRight;
