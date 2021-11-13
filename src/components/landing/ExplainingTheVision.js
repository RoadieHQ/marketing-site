import React from 'react';
import { DotPattern } from 'components';

const HEADLINE = 'On a mission to empower teams';

const ExplainingTheVision = () => (
  <div className="relative bg-white py-16 sm:py-24">
    <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:gap-24 lg:items-start">
      <div className="relative sm:py-16 lg:py-0">
        <div
          aria-hidden="true"
          className="hidden sm:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-screen"
        >

          <div
            className="absolute inset-y-0 right-1/2 w-full bg-gray-50 rounded-r-3xl lg:right-72"
          />

          <DotPattern
            className="absolute top-8 left-1/2 -ml-3 lg:-right-8 lg:left-auto lg:top-12"
            width={404}
            height={392}
            id="02f20b47-fd69-4224-a62a-4c9de5c763f7"
          />
        </div>

        <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0 lg:max-w-none lg:py-20">
          <div className="relative pt-64 pb-10 rounded-2xl shadow-xl overflow-hidden">
            <img
              className="absolute inset-0 h-full w-full object-cover"
              src="https://images.unsplash.com/photo-1521510895919-46920266ddb3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&fp-x=0.5&fp-y=0.6&fp-z=3&width=1440&height=1440&sat=-100"
              alt=""
            />
          </div>
        </div>
      </div>

      <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0">
        {/* Content area */}
        <div className="pt-12 sm:pt-16 lg:pt-20">
          <h2 className="text-3xl text-gray-900 font-extrabold tracking-tight sm:text-4xl">
            {HEADLINE}
          </h2>

          <div className="mt-6 text-gray-500 space-y-6">
            <p className="text-lg">
              Software is impacting everything we experience. From communications, to transportation, to green energy, every industry has more software than ever before.
            </p>
            <p className="text-base leading-7">
              By accelerating the transition to a software based future, we believe we can have a huge positive influence on the world.
            </p>
            <p className="text-base leading-7">
              By accelerating the transition to a software based future, we believe we can have a huge positive influence on the world.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default ExplainingTheVision;
