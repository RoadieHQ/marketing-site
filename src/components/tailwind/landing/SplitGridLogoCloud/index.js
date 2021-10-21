import React from 'react';
import { Button } from 'components/tailwind';

const Title = ({ text }) => (
  <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
    {text}
  </h2>
);

const SubTitle = ({ text }) => (
  <p className="mt-3 max-w-3xl text-lg text-gray-500">
    {text}
  </p>
);

const CallToActionButtons = ({ primaryCallToAction, secondaryCallToAction }) => (
  <div className="mt-8 sm:flex">
    <Button link={true} size="medium" color="primary" {...primaryCallToAction} />

    <div className="mt-3 sm:mt-0 sm:ml-3">
      <Button link={true} size="medium" color="inset" {...secondaryCallToAction} />
    </div>
  </div>
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
          <Title text={content.title} />
          <SubTitle text={content.subTitle} />
          <CallToActionButtons
            primaryCallToAction={content.primaryCallToAction}
            secondaryCallToAction={content.secondaryCallToAction}
          />
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
