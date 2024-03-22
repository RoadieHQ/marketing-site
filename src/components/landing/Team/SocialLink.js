import React from 'react';
import { Link } from 'components';
import { TwitterIcon, LinkedinIcon, GitHubIcon } from 'components/icons';

const SocialLinkIcon = ({ type }) => {
  if (type === 'twitter') {
    return <TwitterIcon className="w-4 h-4" aria-hidden="true" />;
  } else if (type === 'github') {
    return <GitHubIcon className="w-4 h-4" aria-hidden="true" />;
  }

  return <LinkedinIcon className="w-4 h-4" aria-hidden="true" />;
};

const SocialLink = ({ person, type }) => {
  const url = person[`${type}Url`];
  if (!url) return null;

  return (
    <li>
      <Link to={url} className="IconButton size-2 neutral">
        <span className="sr-only">{type}</span>
        <SocialLinkIcon type={type} />
      </Link>
    </li>
  );
};

export default SocialLink;
