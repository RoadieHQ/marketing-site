---
humanName: GPC Project Creator
heading: 'Backstage Google Cloud Platform Projects Plugin'
lead: 'Create, list and manage your Google Cloud Projects.'
attribution:
  text: trivago
  href: https://www.trivago.com

seo:
  title: 'Backstage Google Cloud Platform Projects Plugin | Roadie'
  description: |
    Create, list and manage your Google Cloud Projects.

logoImage: '../../assets/logos/gcp-projects/logo-gcp.png'

coverImage: '../../assets/gcp-projects-plugin.png'
coverImageAlt: 'A screenshot of the GCP Projects plugin.'

gettingStarted:
  - intro: Install the plugin into Backstage.
    language: bash
    code: 'yarn add @backstage/plugin-gcp-projects'
  - intro: Add plugin to the list of plugins.
    language: typescript
    code: |
      // packages/app/src/plugins.ts
      export { plugin as GcpProjects } from '@backstage/plugin-gcp-projects';
  - intro: Navigate to youdomain.com/gcp-projects.
---
