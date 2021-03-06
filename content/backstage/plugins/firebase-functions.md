---
humanName: Firebase Functions
heading: 'Backstage Firebase Functions Plugin'
lead: 'See firebase functions status in Backstage'
attribution:
  text: Roadie
  href: https://roadie.io

seo:
  title: 'Backstage Firebase Functions Plugin | Roadie'
  description: |
    The Backstage Firebase Functions plugin integrates with Google cloud platform to show your functions status
    inside Backstage and associate it with your services.

logoImage: '../../assets/logos/firebase-functions/logo-vertical.png'

coverImage: '../../assets/firebase-plugin.png'
coverImageAlt: 'A screenshot of the Firebase Functions plugin. It is showing a functions details for a sample service.'

gettingStarted:
  - intro: 'In the `backstage/packages/app` project add the plugin as a `package.json` dependency:'
    language: 'bash'
    code: 'yarn add @roadiehq/backstage-plugin-firebase-functions'

  - intro: 'Add plugin to the list of plugins:'
    language: 'ts'
    code: |
      // packages/app/src/plugins.ts
      export { plugin as FirebaseFunctionsPlugin } from '@roadiehq/backstage-plugin-travis-ci';

  - intro: 'Add plugin to the `entitytPage.tsx` source file:'
    language: typescript
    code: |
      // packages/app/src/components/catalog/EntityPage.tsx
      &lt;EntityPageLayout.Content
        path="/firebase-functions/\*"
        title="Firebase Functions"
        element={&lt;FirebaseFunctionsRouter entity={entity} /&gt;}
      /&gt;

  - intro: 'add annotation to the yaml config file of a component'
    language: 'yaml'
    code: 'cloud.google.com/function-ids: projects/project-name/locations/region-name/functions/function-name'
---

## Features

- Display firebase functions details
- Link to overview or logs in the cloud google platform console
