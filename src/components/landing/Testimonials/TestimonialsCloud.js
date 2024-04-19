import React from 'react';

import Avatar from './Avatar';

import ronAvatar from '../../../../content/assets/home/testimonial/ron-yotpo/avatar.webp';
import ronAvatarJpeg from '../../../../content/assets/home/testimonial/ron-yotpo/avatar.jpeg';

import markAvatar from '../../../../content/assets/home/testimonial/mark-hopper/avatar.webp';
import markAvatarJpeg from '../../../../content/assets/home/testimonial/mark-hopper/avatar.jpeg';

import jonAvatar from '../../../../content/assets/home/testimonial/jon-ncsa/avatar.webp';
import jonAvatarJpeg from '../../../../content/assets/home/testimonial/jon-ncsa/avatar.jpeg';

const TESTIMONIALS = [{
  title: '“Incredible”',
  text: (
    <>
      <p className="Text size-4">“The Roadie team have been incredible to work with. Their platform provides us with a ton of flexibility and integrations and we don&apos;t have to worry about maintenance.”</p>
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
}, {
  title: '“Tremendous”',
  text: (
    <>
      <p className="Text size-4">“Backstage has been pivotal for our growth. And Roadie has been pivotal in supporting us at the operations, feature enhancements / roadmap, and onboarding level.</p>
      <p className="Text size-4">The Roadie team provides frequent updates on their offering and even more frequent answers to our questions - their support is tremendous and has eased and sped up our adoption of Backstage.”</p>
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
}, {
  title: '“Responsive”',
  text: (
    <>
      <p className="Text size-4">“Having a place to gather documentation of our systems and APIs, while keeping those definitions close to the source, has been a real win.</p>
      <p className="Text size-4">The Roadie team has been incredibly proactive in communicating updates and responsive to all our questions.”</p>
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
}];

const Testimonial = ({
  author,
  text,
  title,
}) => (
  <blockquote className="flex flex-col rounded-lg shadow-lg overflow-hidden">
    <div className="flex-1 bg-white p-6 flex flex-col justify-between">
      <div className="Flex column gap-4">
        <span className="Text size-5">{title}</span>
        {text}
      </div>

      <div className="mt-6 flex items-start">
        <Avatar avatar={author.avatar} borderColor="primary-600" />
        <div className="ml-4">
          <div className="Text size-3 weight-2">{author.name}</div>
          <div className="Text size-3 lowContrast">{author.role}</div>
          <div className="Text size-3 lowContrast">{author.company}</div>
        </div>
      </div>
    </div>
  </blockquote>
);

const Testimonials = ({ testimonials = TESTIMONIALS }) => (
  <section className="Section size-3">
    <div className="Container">
      <div className='Flex column gap-2'>
        <h2 className='Text size-4 weight-2 orange'>Testimonials</h2>
        <h3 className='Text size-7'>What our customers say</h3>
      </div>

      <div className="Grid columns-3 gap-6">
        {testimonials.map((props) => (
          <Testimonial {...props} key={props.author.name} />
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
