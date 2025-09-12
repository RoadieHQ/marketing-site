---
humanName: Buildkite
heading: 'Backstage Buildkite Plugin'
lead: 'See Buildkite Builds in Backstage'
npmjsPackage: "@roadiehq/backstage-plugin-buildkite"
attribution:
  text: Roadie, officially approved by Buildkite.

seo:
  # Don't forget to end with "| Roadie"
  title: 'Backstage Buildkite Plugin | Roadie'
  description: |
    The Backstage Buildkite plugin integrates with Buildkite to show your build
    information inside Backstage where it can be associated with your services.

logoImage: '../../assets/logos/buildkite/buildkite-logo.webp'

coverImage: '../../assets/buildkite-plugin-overview.webp'
coverImageAlt: 'A list of builds in a table along with a status and retry button for each build.'

availableOnRoadie: true
roadieDocsPath: /integrations/buildkite/

gettingStarted:
  - intro: Install the plugin
    language: bash
    code: yarn add @roadiehq/backstage-plugin-buildkite

  - intro: Add proxy configurations
    language: YAML
    code: |
      # app-config.yaml
      proxy:
        '/buildkite/api':
          target: https://api.buildkite.com/v2/
          headers:
            Authorization: Bearer ${BUILDKITE_TOKEN}

  - intro: Import it into your Backstage application
    language: typescript
    code: |
      // packages/app/src/components/catalog/EntityPage.tsx
      import {
        EntityBuildkiteContent,
        isBuildkiteAvailable,
      } from '@roadiehq/backstage-plugin-buildkite';

  - intro: Add plugin API to your Backstage instance
    language: typescript
    code: |
     // packages/app/src/components/catalog/EntityPage.tsx

     export const cicdContent = (
       <EntitySwitch>
         <EntitySwitch.Case if={isBuildkiteAvailable}>
           <EntityBuildkiteContent />
         </EntitySwitch.Case>
         ...
       </EntitySwitch>
     );

  - intro: Add annotation to your component-info.yaml file
    language: YAML
    code: |
      metadata:
        annotations:
          buildkite.com/project-slug: <buildkiteorganization/buildkitepipeline>

  - intro: Get and provide BUILDKITE_TOKEN as env variable. 
---

## Features

You might rebuild each build and track build progress with this plugin.

![single build view in buildkite plugin](./bk-single-view.webp)
