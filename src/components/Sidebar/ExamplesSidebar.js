import React from 'react';
import classnames from 'classnames';

import Sidebar from './Sidebar';
import { SidebarSection } from './Section';

const numberOfExampleItems = (examples) => (examples || []).length;

const ExamplesSidebar = ({ examples, className }) => {
  // There's no benefit to display sidebar if there are no examples.
  if (numberOfExampleItems(examples) < 1) {
    return null;
  }

  return (
    <Sidebar
      side="right"
      sticky={true}
      className={classnames(
        'hidden xl:block md:w-96 lg:w-3/12 pr-3 self-start sticky top-0',
        className
      )}
    >
      <SidebarSection>
        <strong>Examples</strong>
      </SidebarSection>

      <SidebarSection>
        {/* There is a CSS stylesheet that targets this class name */}
        <div>
          {examples.map((k) => {
            return (
              <a key={k.frontmatter.humanName} className="examples-sidebar" href={k.fields.slug}>
                {k.frontmatter.title}
              </a>
            );
          })}
        </div>
      </SidebarSection>
    </Sidebar>
  );
};

export default ExamplesSidebar;
