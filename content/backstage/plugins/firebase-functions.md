---
humanName: Firebase Functions
heading: 'Backstage Firebase Functions Plugin'
lead: 'See firebase functions status in Backstage'
attribution:
  text: Roadie
  href: https://roadie.io

npmjsUrl: https://www.npmjs.com/package/@roadiehq/backstage-plugin-firebase-functions

seo:
  title: 'Backstage Firebase Functions Plugin | Roadie'
  description: |
    The Backstage Firebase Functions plugin integrates with Google cloud platform to show your functions status
    inside Backstage and associate it with your services.

logoImage: '../../assets/logos/firebase-functions/logo-vertical.webp'

coverImage: '../../assets/firebase-plugin.webp'
coverImageAlt: 'A screenshot of the Firebase Functions plugin. It is showing a functions details for a sample service.'

gettingStarted:
  - intro: 'In the `backstage/packages/app` project add the plugin as a `package.json` dependency:'
    language: 'bash'
    code: 'yarn add @roadiehq/backstage-plugin-firebase-functions'

  - intro: 'Add plugin to the `entityPage.tsx` source file:'
    language: typescript
    code: |
      // packages/app/src/components/catalog/EntityPage.tsx
      import {
        EntityFirebaseFunctionsContent
      } from '@roadiehq/backstage-plugin-firebase-functions';

        ...
      const serviceEntityPage = (
        <EntityLayoutWrapper>
          ...
          <EntityLayout.Route 
           path="/firebase-functions"
           title="Firebase Functions">
          <EntityFirebaseFunctionsContent />
          </EntityLayout.Route>
          ...
        </EntityLayoutWrapper>
      );

  - intro: 'Add widget to the `entityPage.tsx` source file:'
    language: typescript
    code: |
      // packages/app/src/components/catalog/EntityPage.tsx
      import {
        isFirebaseFunctionsAvailable,
        EntityFirebaseFunctionsCard
      } from '@roadiehq/backstage-plugin-firebase-functions';

        ...
        const overviewContent = (
          <Grid container spacing={3}>
            ...
            <EntitySwitch>
              <EntitySwitch.Case if={isFirebaseFunctionsAvailable}>
                <Grid item md={6}>
                  <EntityFirebaseFunctionsCard />
                </Grid>
              </EntitySwitch.Case>
            </EntitySwitch>
            ...
          </Grid>
        );

  - intro: 'add annotation to the yaml config file of a component'
    language: 'yaml'
    code: 'cloud.google.com/function-ids: projects/project-name/locations/region-name/functions/function-name'
---

## Features

- Display firebase functions details
- Link to overview or logs in the cloud google platform console
