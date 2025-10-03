import React from 'react';
import { SitewideFooter, SitewideHeader, Lead } from 'components';
import { SimpleCenteredHeading } from 'components/landing';

const lead =
  'Thank you for installing the Roadie Backstage GitHub app. Your setup is being completed by the Roadie team.';
const message = `We'll email you when it is finished at your github profile's email address. 
You can also check in on the progress by contacting us at support@roadie.io or via Intercom in the app.`;

const GithubAppInstallHoldingPage = () => (
  <>
    <SitewideHeader />

    <div className="bg-white">
      <SimpleCenteredHeading headline="App installation pending..." lead={lead} />
    </div>

    <div className="max-w-4xl mx-auto text-center mb-24 px-8">
      <Lead>{message}</Lead>
    </div>

    <SitewideFooter />
  </>
);

export default GithubAppInstallHoldingPage;
