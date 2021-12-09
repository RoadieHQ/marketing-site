import React from 'react';

import {
  SitewideFooter,
  SitewideHeader,
} from 'components';

import {
  SimpleCenteredHeading,
} from 'components/landing';

const GithubAppInstallHoldingPage = () => (
  <>
    <SitewideHeader />

    <SimpleCenteredHeading
      headline="App installation pending..."
      lead="Thank you for installing the Roadie Backstage GitHub app. Your setup is being completed by the Roadie team. You can check in on the progress by contacting us at support@roadie.io"
    />



    <SitewideFooter />
  </>
);

export default GithubAppInstallHoldingPage;

