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
      headline="App Installation Pending..."
      lead="Thank you for installing the Roadie Backstage GitHub app. Your setup is being completed by the Roadie team. We'll let you know when it is done but you can check in on the progress by contacting us at support@roadie.io"
    />



    <SitewideFooter />
  </>
);

export default GithubAppInstallHoldingPage;

