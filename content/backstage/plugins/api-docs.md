---
humanName: API Docs
heading: 'Backstage API Docs Plugin'
lead: 'Discover and display API entities for your components in Backstage'
attribution:
  text: SDA-SE
  href: https://sda.se/

seo:
  # Don't forget to end with "| Roadie"
  title: 'Backstage AWS Lambda Plugin | Roadie'
  description: |
    Components to discover and display API entities as an extension to the catalog plugin.

logoImage: '../../assets/logos/api-docs/logo-docs.png'

coverImage: '../../assets/api-docs-plugin.png'
coverImageAlt: 'A screenshot of the API Docs. It is showing a available endpoints for a sample component.'

# Instructions for someone who wants to use this plugin.
# languages used here must be listed in the .babelrc
gettingStarted:
  # What will this step accomplish?
  - intro: Install the plugin into Backstage.
    language: bash
    code: 'yarn add @backstage/plugin-api-docs'
  - intro: Add plugin to the list of plugins.
    language: typescript
    code: |
      // packages/app/src/plugins.ts
      export { plugin as ApiDocs } from '@backstage/plugin-api-docs';
  - intro: Add plugin API to your Backstage instance.
    language: typescript
    code: |
      // packages/app/src/components/catalog/EntityPage.tsx
      import { Router as ApiDocsRouter } from '@backstage/plugin-api-docs';

        const ServiceEntityPage = ({ entity }: { entity: Entity }) => (
          <EntityPageLayout>
            ...
            <EntityPageLayout.Content
              path="/docs/*"
              title="Docs"
              element={<DocsRouter entity={entity} />}
            />
            ...
          </EntityPageLayout>
        );
---

## API formats supported right now:

- AsyncAPI
- GraphQL
- OpenAPI 2 & 3

All other formats are displayed as plain text right now, but it could be easily extended.
