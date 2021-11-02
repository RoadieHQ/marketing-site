import React from 'react';
import { Link } from 'components';
import { TwitterIcon, LinkedinIcon } from 'components/icons';
import isUndefined from 'lodash/isUndefined';

const SocialLinkIcon = ({ type }) => {
  if (type === 'twitter') {
    return <TwitterIcon className="w-5 h-5" aria-hidden="true" />;
  }

  return <LinkedinIcon className="w-5 h-5" aria-hidden="true" />;
};

const SocialLink = ({ person, type }) => {
  const url = person[`${type}Url`];
  if (isUndefined(url)) return null;

  return (
    <li>
      <Link to={url} className="text-gray-400 hover:text-gray-500">
        <span className="sr-only">{type}</span>
        <SocialLinkIcon type={type} />
      </Link>
    </li>
  );
};

const Person = ({ person }) => (
  <li>
    <div className="space-y-4">
      <div className="aspect-w-3 aspect-h-2">
        <img
          className="object-cover shadow-lg rounded-lg"
          src={person.imageUrl}
          alt={`${person.name} head shot`}
        />
      </div>

      <div className="text-lg leading-6 font-medium space-y-1">
        <h3>{person.name}</h3>
        <p className="text-indigo-600">{person.role}</p>
      </div>

      <div className="text-lg">
        <p className="text-gray-500">{person.bio}</p>
      </div>

      <ul className="flex space-x-5">
        <SocialLink person={person} type="twitter" />
        <SocialLink person={person} type="linkedin" />
      </ul>
    </div>
  </li>
);

export default Person;
