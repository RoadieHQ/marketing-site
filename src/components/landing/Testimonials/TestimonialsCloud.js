import React from 'react';

import Avatar from './Avatar';

import ronAvatar from '../../../../content/assets/home/testimonial/ron-yotpo/avatar.webp';
import ronAvatarJpeg from '../../../../content/assets/home/testimonial/ron-yotpo/avatar.jpeg';

import markAvatar from '../../../../content/assets/home/testimonial/mark-hopper/avatar.webp';
import markAvatarJpeg from '../../../../content/assets/home/testimonial/mark-hopper/avatar.jpeg';

import jonAvatar from '../../../../content/assets/home/testimonial/jon-ncsa/avatar.webp';
import jonAvatarJpeg from '../../../../content/assets/home/testimonial/jon-ncsa/avatar.jpeg';

const TESTIMONIALS = [
  {
    title: 'Incredible',
    text: (
      <>
        <p className="prose mb-2">
          The Roadie team have been incredible to work with. They&apos;re obviously Backstage
          experts, and their platform provides us with a ton of flexibility and integrations.
        </p>
        <p className="prose">
          We&apos;ve been able to start using Backstage must faster and we don&apos;t have to worry
          about the maintenance.
        </p>
      </>
    ),
    author: {
      name: 'Ron Barabash',
      role: 'Team lead',
      company: 'Yotpo',
      avatar: {
        webp: ronAvatar,
        jpeg: ronAvatarJpeg,
        alt: `A man in a t-shirt with arms crossed looking slightly to the left.`,
      },
    },
  },
  {
    title: 'Tremendous',
    text: (
      <>
        <p className="prose mb-2">
          Backstage has been pivotal for our growth. And Roadie has been pivotal in supporting us at
          the operations, feature enhancements / roadmap, and onboarding level.
        </p>
        <p className="prose">
          The Roadie team provides frequent updates on their offering and even more frequent answers
          to our questions - their support is tremendous and has eased and sped up our adoption of
          Backstage.
        </p>
      </>
    ),
    author: {
      name: 'Mark Loyzer',
      role: 'Senior Software Engineer',
      company: 'Hopper',
      avatar: {
        webp: markAvatar,
        jpeg: markAvatarJpeg,
        alt: `A young man in a suit jacket looking straight at the camera`,
      },
    },
  },
  {
    title: 'Responsive',
    text: (
      <>
        <p className="prose mb-2">
          Having a place to gather documentation of our systems and APIs, while keeping those
          definitions close to the source, has been a real win.
        </p>
        <p className="prose">
          The Roadie team has been incredibly proactive in communicating updates and responsive to
          all our questions.
        </p>
      </>
    ),
    author: {
      name: 'Jon Stern',
      role: 'Director of engineering',
      company: 'NCSA',
      avatar: {
        webp: jonAvatar,
        jpeg: jonAvatarJpeg,
        alt: `A sketch of some characters playing an early form of football`,
      },
    },
  },
];

const Testimonial = ({ author, text, title }) => (
  <blockquote className="flex flex-col rounded-lg shadow-lg overflow-hidden">
    <div className="flex-1 bg-white p-6 flex flex-col justify-between">
      <div className="flex-1 mt-4 mb-12">
        <p className="mb-4 text-base text-gray-900 font-bold">{title}</p>
        {text}
      </div>

      <div className="mt-6 flex items-start">
        <Avatar avatar={author.avatar} borderColor="primary-600" />
        <div className="ml-4">
          <div className="text-base text-gray-900">{author.name}</div>
          <div className="text-base text-gray-500">{author.role}</div>
          <div className="text-base text-gray-500">{author.company}</div>
        </div>
      </div>
    </div>
  </blockquote>
);

const Testimonials = ({ testimonials = TESTIMONIALS }) => (
  <div className="bg-gray-900">
    <div className="max-w-7xl mx-auto py-12 lg:py-32 px-4 sm:px-6 lg:px-32">
      <div className="text-center mb-8 sm:mb-12 text-white">
        <p>What our customers say</p>
      </div>

      <div className="grid gap-16 lg:grid-cols-3 lg:gap-x-5 lg:gap-y-12">
        {testimonials.map((props) => (
          <Testimonial {...props} key={props.author.name} />
        ))}
      </div>
    </div>
  </div>
);

export default Testimonials;
