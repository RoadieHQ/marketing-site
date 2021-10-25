import React, { useEffect } from 'react';
import { graphql } from 'gatsby';
import Prism from 'prismjs';

import {
  SEO,
  SitewideFooter,
  SitewideHeader,
  ContentHeader,
  TextLink as Link,
  CodeBlock,
} from 'components';

const BackstageDocker = ({ data }) => {
  const siteTitle = data.site.siteMetadata.title;

  useEffect(() => {
    Prism.highlightAll();
  });

  return (
    <>
      <SEO
        title={`Backstage docker image | ${siteTitle}`}
        description={`
          Want to try out Backstage without any setup? Use our Backstage Docker image to get started quickly.
        `}
      />

      <SitewideHeader />
      <ContentHeader frontmatter={{ title: 'Backstage Docker Image' }} />

      <article className="prose prose-orange">
        <p>Roadie maintains a public Backstage docker image for the community to use. You can find it <Link to="https://hub.docker.com/r/roadiehq/community-backstage-image">on Docker Hub</Link>. It will quickly give you a sense of what Backstage is and how you might use it.</p>

        <h2>Prerequisites</h2>
        <p>
          <ol>
            <li>Docker installed and running locally on your computer.</li>
            <li>A GitHub Personal Access Token with the <code className="language-text">repo</code>, <code className="language-text">user</code>, <code className="language-text">read:org</code> and <code className="language-text">read:discussion</code> scopes. You can find more detailed instructions <Link to="/docs/getting-started/getting-started-for-admins/#step-1-create-a-personal-access-token-pat">in our documentation</Link>.</li>
          </ol>
        </p>

        <h2>Instructions</h2>

        <p>Run the following command, replacing <code className="language-text">[GITHUB_TOKEN]</code> with your token. Once it starts up, Backstage will automatically open your browser on <Link to="http://localhost:7000">localhost:7000</Link>.</p>
        <CodeBlock
          language="bash"
          code={`docker run -p 7000:7000 --env GITHUB_TOKEN=[TOKEN] roadiehq/community-backstage-image:latest`}
        />

        <h2>Caveats</h2>
        <p>Backstage must be heavily customized before you can use it inside your organization. This requires editing the Backstage source code — something you cannot do with this community Backstage docker image.</p>

        <p>To learn how to customize Backstage, check out the <Link to="https://backstage.io/docs/getting-started/">official getting started guide</Link>.</p>

        <h2>Want to get started even faster?</h2>
        <p>Check out <Link to="/free-trial/">Roadie&apos;s no-code SaaS Backstage platform</Link>.</p>
      </article>

      <SitewideFooter />
    </>
  );
};

export default BackstageDocker;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
