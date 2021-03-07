---
humanName: Buildkite
heading: 'Backstage Buildkite Plugin'
lead: 'See Buildkite Builds in Backstage'
attribution:
  text: Roadie
  href: https://roadie.io

seo:
  # Don't forget to end with "| Roadie"
  title: 'Backstage Buildkite Plugin | Roadie'
  description: |
    The Backstage Buildkite plugin integrates with Buildkite to show your builds
    information inside Backstage where it can be associated with your services.

logoImage: '../../assets/logos/buildkite/buildkite-logo.png'

coverImage: '../../assets/buildkite-plugin-overview.png'
coverImageAlt: 'A list of builds in a table along with a status and retry button for each build.'

gettingStarted:
  - intro: Install the plugin
    language: bash
    code: yarn add @roadiehq/backstage-plugin-buildkite

  - intro: Import it into your Backstage application
    language: typescript
    code: |
      // packages/app/src/plugins.ts
      export { plugin as Buildkite } from '@roadiehq/backstage-plugin-buildkite';

  - intro: Add proxy configuration'
    language: YAML
    code: |
      # app-config.yaml
      proxy:
        '/buildkite/api':
          target: https://api.buildkite.com/v2/
          headers:
            Authorization: 
              $env: BUILDKITE_TOKEN

  - intro: Add plugin API to your Backstage instance.
    language: typescript
    code: |
      // packages/app/src/components/catalog/EntityPage.tsx
      import {
        Router as BuildkiteRouter,
        isPluginApplicableToEntity as isBuildkiteAvailable,
      } from '@roadiehq/backstage-plugin-buildkite';

      const CICDSwitcher = ({ entity }: { entity: Entity }) => {
        switch (true) {
          ...
          case isBuildkiteAvailable(entity):
            return <BuildkiteRouter entity={entity} />;
          ...
        }
      }

  - intro: Add annotation to your component-info.yaml file.
    language: YAML
    code: |
      metadata:
        annotations:
          buildkite.com/project-slug: [exampleorganization/exampleproject]
---

## Features

You might rebuild each build and track build progress with this plugin.

![single build view in buildkite plugin](./bk-single-view.png)
