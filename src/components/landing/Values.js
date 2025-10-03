import React from 'react';
import { Headline, Lead } from 'components';

const TITLE = 'Our values';
const LEAD =
  'The Roadie values were created by the entire team at the first Roadie off-site. They come from everyone.';

const VALUES = [
  {
    title: 'Focused on collaboration',
    detail:
      'We choose to work on problems together rather than apart. We take the time to ensure everyone has the context required to contribute. Titles or experience do not fully determine who gets to work on what. There are no brilliant jerks here.',
  },
  {
    title: 'Driven by customer compassion',
    detail: `We take the time to deeply understand customer problems. We don't build things simply because we want to. We are focused on creating an excellent experience for  the end user.`,
  },
  {
    title: 'Optimized for learning',
    detail:
      'Controlled failures are encouraged at Roadie. Psychological safety is paramount. Nobody will be punished for experiments that don’t work out.  We are always open to new ideas and no idea will be ridiculed.',
  },
  {
    title: 'Conscious of community',
    detail:
      'We consider our impact on the wider ecosystem and do our best for diversity, inclusion and equity. Our product was born from an open source project, so we consider ourselves part of a broad community.',
  },
  {
    title: 'Fulfilled by autonomy',
    detail:
      'Each person in Roadie is given a wide remit. We trust each other to deliver results without much hand holding. Decisions are made by those closest to the issue rather than those with the most seniority. We operate as though most decisions are reversible.',
  },
];

const Values = ({ title = TITLE, lead = LEAD, values = VALUES }) => (
  <div className="bg-white">
    <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-24">
      <div className="max-w-2xl lg:mx-auto lg:text-center">
        <div className="mt-1">
          <Headline>{title}</Headline>
        </div>

        <div className="mt-5">
          <Lead>{lead}</Lead>
        </div>
      </div>

      <div className="mt-20">
        <dl className="space-y-10 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:gap-y-10">
          {values.map((value) => (
            <div key={value.title}>
              <dt className="font-semibold text-gray-900">{value.title}</dt>
              <dd className="mt-3 text-gray-500">{value.detail}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  </div>
);

export default Values;
