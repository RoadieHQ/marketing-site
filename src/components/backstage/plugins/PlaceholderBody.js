import React from 'react';
import { EditOnGitHubLink } from 'components/backstage/plugins';

const PlaceholderBody = ({ plugin, siteMetadata }) => {
  return (
    <>
      <div>
        <p className="prose prose-primary my-10 max-w-none">
          We&apos;re working to build the best catalog of Backstage plugins available.
          The plan is to have reviews, ratings, installation instructions and usage instructions
          for every plugin that exists.
        </p>

        <p className="prose prose-primary my-10 max-w-none">
          There&apos;s a lot of plugins and it&apos;s taking some time to get them all cataloged.
          We haven&apos;t gotten around to fleshing out this page for the 
          Backstage {plugin.frontmatter.humanName} plugin.
        </p>

        <p className="prose prose-primary my-10 max-w-none">
          In the meantime, you can{' '}
          <EditOnGitHubLink
            siteMetadata={siteMetadata}
            plugin={plugin}
            text="help us improve this page"
          />.
        </p>
      </div>
    </>
  );
};

export default PlaceholderBody;
