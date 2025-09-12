import React from 'react';
import { Title, CodeBlock } from 'components';

import HostTabs from './HostTabs';

const InstallationSteps = ({ plugin }) => {
  if (!plugin.frontmatter.gettingStarted) return null;
  return (
    <>
      <Title el="h2" className="xl:text-2xl xl:tracking-tight mb-6" id="installation-steps">
        Installation steps
      </Title>

      <HostTabs docsLink={`/docs/integrations${plugin.frontmatter.roadieDocsPath}`} />

      {plugin.frontmatter.gettingStarted && (
        <>
          {plugin.frontmatter.gettingStarted.map((section) => {
            const key = CodeBlock.generateKey(section);

            if (section.title && section.title !== '') {
              return (
                <div className="text-center pb-3" key={key}>
                  <Title text={section.title} />
                </div>
              );
            }

            return (
              <CodeBlock
                language={section.language}
                code={section.code}
                intro={section.intro}
                sectionId={section.sectionId}
                key={key}
              />
            );
          })}
        </>
      )}
    </>
  );
};

export default InstallationSteps;
