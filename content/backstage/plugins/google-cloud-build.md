---
humanName: Google Cloud Build
heading: 'Backstage Google Cloud Build Plugin'
lead: 'Build, test, and deploy on Google serverless CI/CD platform.'
attribution:
  text: Trivago
  href: https://www.trivago.com

npmjsPackage: "@backstage-community/plugin-cloudbuild"

seo:
  title: 'Backstage Google Cloud Build Plugin | Roadie'
  description: |
    Build, test, and deploy on Google serverless CI/CD platform.

logoImage: '../../assets/logos/google-cloud-build/logo-cloud.webp'

coverImage: '../../assets/google-cloud-build-plugin.webp'
coverImageAlt: 'A screenshot of the Google Cloud Build plugin.'

gettingStarted:
  - intro: Install the plugin into Backstage.
    language: bash
    code: 'yarn add @backstage/plugin-cloudbuild'

  - intro: Add plugin to the list of plugins.
    language: typescript
    code: |
      // packages/app/src/plugins.ts
      export { plugin as Cloudbuild } from '@backstage/plugin-cloudbuild';

  - intro: Add plugin API to your Backstage instance.
    language: typescript
    code: |
      // packages/app/src/components/catalog/EntityPage.tsx
      import {
        Router as CloudbuildRouter,
        isPluginApplicableToEntity as isCloudbuildAvailable,
      } from '@backstage/plugin-cloudbuild';

      const CICDSwitcher = ({ entity }: { entity: Entity }) => {
        switch (true) {
        ...
        case isCloudbuildAvailable(entity):
          return <CloudbuildRouter entity={entity} />;
        ...
        }
      }

  - intro: Add annotation to your component-info.yaml file.
    language: YAML
    code: |
      metadata:
        annotations:
          google.com/cloudbuild-project-slug: [your-project-slug]
---
