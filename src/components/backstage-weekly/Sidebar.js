import React from 'react';

import { Link, Title } from 'components';
import { NetlifyFormCallToAction } from 'components/CallToAction';
import { FORM_NAMES } from '../../contactFormConstants';
import PAGE_SECTIONS from './pageSections';

const TableOfContents = ({ issue, pageSections }) => {
  const sectionsWithContent = Object.keys(pageSections).map((sectionName) => {
    const { key, existsKey, fragment, label } = pageSections[sectionName];
    if (!issue[existsKey]) return null;
    return { key, existsKey, fragment, label };
  }).filter(Boolean);

  if (sectionsWithContent.length <= 1) {
    return null;
  }

  const listItems = sectionsWithContent.map(({ key, fragment, label }) => (
    <li key={key} className="underline">
      <Link to={`#${fragment}`}>{label}</Link>
    </li>
  ));

  return (
    <div className="p-6 bg-gray-100 rounded-lg mb-10">
      <div className="mb-4">
        <Title>In this issue</Title>
      </div>

      <ul className="pl-6">{listItems}</ul>
    </div>
  );
};

const Sidebar = ({
  issue,
  pageSections = PAGE_SECTIONS,
  email,
  setEmail,
  setModalOpen,
}) => {
  return (
    <div className="sticky top-10">
      <TableOfContents issue={issue} pageSections={pageSections} />

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
