import React from 'react';
import TextLink from 'components/TextLink';
import editOnGitHubUrl from '../../../editOnGitHubUrl';

const EditOnGitHubLink = ({ siteMetadata, plugin: node, text = 'Update these instructions' }) => {
  return (
    <TextLink
      to={editOnGitHubUrl({ siteMetadata, node, nodeSourcePath: '/content/backstage/plugins' })}
      color="primary"
    >
      {text}
    </TextLink>
  );
};

export default EditOnGitHubLink;
