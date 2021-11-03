import React from 'react';
import {
  DotPattern,
  LowSideAnglePattern,
  HighSideAnglePattern,
  SplitDiagonalPattern,
  Testimonial,
  Headline,
} from 'components';

import { FAQs } from 'components/landing';

const FAQ_CONTENT = [{
  id: 1,
  question: "What's the best thing about Switzerland?",
  answer:
    "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  
}, {
  id: 1,
  question: "What's the best thing about Switzerland?",
  answer:
    "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",

}, {
  id: 1,
  question: "What's the best thing about Switzerland?",
  answer:
    "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",

}, {
  id: 1,
  question: "What's the best thing about Switzerland?",
  answer:
    "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
}];

const FormWithTestimonial = ({
  title,
  description,
  children,
  faqs = FAQ_CONTENT,
}) => (
  <main className="overflow-hidden pb-24 mb-24">
    <div className="bg-warm-gray-50">
      <div className="py-8 lg:py-12">
        <div className="relative z-10 max-w-7xl mx-auto pl-4 pr-8 sm:px-6 lg:px-8">
          <Headline>{title}</Headline>

          <p className="mt-6 text-xl text-warm-gray-500 max-w-3xl bg-white">
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
            <div className="relative overflow-hidden py-10 px-6 bg-gradient-to-b from-primary-500 to-primary-600 sm:px-10 xl:p-12">
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
              {children}
            </div>
          </div>
        </div>
      </div>
    </section>

    <FAQs faqs={faqs} />
  </main>
);

export default FormWithTestimonial;
