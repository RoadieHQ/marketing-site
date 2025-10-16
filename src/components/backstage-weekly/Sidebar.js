import React from 'react';

import { SidebarTableOfContents } from 'components';
import { NetlifyFormCallToAction } from 'components/CallToAction';
import { FORM_NAMES } from '../../contactFormConstants';
import PAGE_SECTIONS from './pageSections';

const Sidebar = ({
  issue,
  pageSections = PAGE_SECTIONS,
  email,
  setEmail,
  setModalOpen,
}) => {
  return (
    <div className="sticky top-10">
      <SidebarTableOfContents content={issue} pageSections={pageSections} title="In this Issue" />

      <div className="p-6 bg-gray-700 rounded-lg">
        <h2 className="font-highlight text-white text-2xl font-bold tracking-tight mb-2">
          Backstage Weekly
        </h2>
        <p className="text-white text-base">
          Get the latest news, deep dives into Backstage features, and a roundup of recent
          open-source action.
        </p>

        <div>
          <NetlifyFormCallToAction
            setModalOpen={(open) => {
              setModalOpen(open);
            }}
            buttonText="Stay current"
            netlifyFormName={FORM_NAMES.subscribeToNewsletter}
            email={email}
            setEmail={setEmail}
            color="secondary"
          />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
