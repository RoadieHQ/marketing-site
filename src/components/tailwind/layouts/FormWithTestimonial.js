import React from 'react';
import {
  DotPattern,
  LowSideAnglePattern,
  HighSideAnglePattern,
  SplitDiagonalPattern,
  Testimonial,
} from 'components/tailwind';

const FormWithTestimonial = ({
  title,
  description,
  subTitle,
  children,
}) => (
  <main className="overflow-hidden pb-24 mb-24">
    <div className="bg-warm-gray-50">
      <div className="py-24 lg:py-32">
        <div className="relative z-10 max-w-7xl mx-auto pl-4 pr-8 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-warm-gray-900 sm:text-5xl lg:text-6xl">
            {title}
          </h1>

          <p className="mt-6 text-xl text-warm-gray-500 max-w-3xl">
            {description}
          </p>
        </div>
      </div>
    </div>

    <section className="relative bg-white">
      <div className="absolute w-full h-1/2 bg-warm-gray-50" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <DotPattern
          className="absolute z-0 top-0 right-0 transform -translate-y-16 translate-x-1/2 sm:translate-x-1/4 md:-translate-y-24 lg:-translate-y-72"
          width={404}
          height={384}
          id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative bg-white shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-3">
            <div className="relative overflow-hidden py-10 px-6 bg-gradient-to-b from-indigo-500 to-indigo-600 sm:px-10 xl:p-12">
              <div className="absolute inset-0 pointer-events-none sm:hidden" aria-hidden="true">
                <SplitDiagonalPattern />
              </div>

              <div
                className="hidden absolute top-0 right-0 bottom-0 w-1/2 pointer-events-none sm:block lg:hidden"
                aria-hidden="true"
              >
                <HighSideAnglePattern />
              </div>

              <div
                className="hidden absolute top-0 right-0 bottom-0 w-1/2 pointer-events-none lg:block"
                aria-hidden="true"
              >
                <LowSideAnglePattern />
              </div>

              <Testimonial />
            </div>

            <div className="py-10 px-6 sm:px-10 lg:col-span-2 xl:p-12">
              <h3 className="text-lg font-medium text-warm-gray-900">
                {subTitle}
              </h3>

              <div className="mt-6">
                {children}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
);

export default FormWithTestimonial;
