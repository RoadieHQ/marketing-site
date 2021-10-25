import React from 'react';
import TextLink from 'components/TextLink';
import editOnGitHubUrl from '../../../editOnGitHubUrl';

const EditOnGitHubLink = ({ siteMetadata, plugin: node }) => {
  return (
    <TextLink
      to={editOnGitHubUrl({ siteMetadata, node, nodeSourcePath: '/content/backstage/plugins' })}
      color="primary"
    >
      Update these instructions
    </TextLink>
  );
};

export default EditOnGitHubLink;
