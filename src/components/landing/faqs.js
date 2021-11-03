import React from 'react';

const Item = ({ question, answer }) => (
  <div>
    <dt className="font-semibold text-gray-900">{question}</dt>
    <dd className="mt-3 text-gray-500">{answer}</dd>
  </div>
);

const FAQs = ({ faqs = [] }) => (
  <div className="bg-white">
    <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
      <div className="max-w-2xl lg:mx-auto lg:text-center">
        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          Frequently asked questions
        </h2>
        <p className="mt-4 text-gray-500">
          Ac euismod vel sit maecenas id pellentesque eu sed consectetur. Malesuada adipiscing sagittis vel nulla nec.
          Urna, sed a lectus elementum blandit et.
        </p>
      </div>

      <div className="mt-20">
        <dl className="space-y-10 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:gap-y-10">
          {faqs.map((faq) => (
            <Item {...faq} key={faq.id} />
          ))}
        </dl>
      </div>
    </div>
  </div>
);

export default FAQs;
