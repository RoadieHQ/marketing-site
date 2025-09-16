---
humanName: API Docs
heading: 'Backstage API Docs Plugin'
lead: 'Discover and display API entities for your components in Backstage'
npmjsPackage: "@backstage/plugin-api-docs"
codeLocation: "https://github.com/backstage/backstage/tree/master/plugins/api-docs"
attribution:
  text: SDA-SE
  href: https://sda.se/

intro: |
  If you're a Backstage developer, chances are you're managing a growing number of APIs across services, teams, and domains. The **Backstage API Docs** plugin turns your catalog of API specs into a first‐class, discoverable resource—making it easier for engineers to find, understand, and consume internal APIs. Instead of hunting through repos, dashboards, or external docs, your OpenAPI, AsyncAPI, or GraphQL specs are visible directly in Backstage alongside components, ownership, and lifecycle metadata.
  
  By embedding API specs within Backstage, you gain:
  
  - **Faster discovery**: APIs show up as entities in the catalog, including search, filters, tags, and relationships (which service provides or uses which API).  
  - **Better alignment**: Teams can see the spec of each API, and understand versioning or lifecycle without duplicating effort.  
  - **Improved onboarding & documentation consistency**: New engineers can navigate your API landscape clearly via rendered specs (OpenAPI/AsyncAPI/GraphQL), complete with links from component pages. Spec definitions can live next to code or be imported through catalog entity files.  
  
  This plugin is already part of many Backstage setups (including when using `npx @backstage/create-app`), but you can also add it to an existing Backstage instance by installing `@backstage/plugin-api-docs`. Once installed, you get UI components for browsing API specs (e.g. via an `ApiExplorerPage`) and cards in your Entity pages (API definition, consuming/providing services, etc.).
  
  Below you’ll find how to install, configure, and manage the API Docs plugin—how to connect spec sources, customize rendering, and ensure developers in your organisation can reliably discover, trust, and use your APIs rather than inventing new ones.

seo:
  # Don't forget to end with "| Roadie"
  title: 'Backstage API Docs Plugin | Roadie'
  description: |
    Backstage Plugin to discover and display API specs and entities as an extension to the catalog plugin.

logoImage: '../../assets/logos/api-docs/logo-docs.webp'

coverImage: '../../assets/api-docs-plugin.webp'
coverImageAlt: 'A screenshot of the API Docs. It is showing a available endpoints for a sample component.'

availableOnRoadie: true
roadieDocsPath: /details/openapi-specs/

# Instructions for someone who wants to use this plugin.
# languages used here must be listed in the .babelrc
gettingStarted:
  - intro: |
      This plugin is already added when using `npx @backstage/create-app` 
      so you can usually skip these steps. However, if you are not using create-app
      you can follow the steps below.
    language: bash
    code: 'yarn add @backstage/plugin-api-docs'
  - intro: 'Add the ApiExplorerPage extension to the app:'
    language: typescript
    code: |
      // In packages/app/src/App.tsx
      import { ApiExplorerPage } from '@backstage/plugin-api-docs';
      <Route path="/api-docs" element={<ApiExplorerPage />} />;
  - intro: 'Add one of the provided widgets to the EntityPage:'
    language: typescript
    code: |
      // packages/app/src/components/catalog/EntityPage.tsx
      
      import {
        EntityAboutCard,
        EntityApiDefinitionCard,
        EntityConsumingComponentsCard,
        EntityProvidingComponentsCard,
      } from '@backstage/plugin-api-docs';


      const apiPage = (
        <EntityLayout>
          ...
          <EntityLayout.Route path="/" title="Overview">
            <Grid container spacing={3}>
              <Grid item md={6}>
                <EntityAboutCard />
              </Grid>
              <Grid container item md={12}>
                <Grid item md={6}>
                  <EntityProvidingComponentsCard />
                </Grid>
                <Grid item md={6}>
                  <EntityConsumingComponentsCard />
                </Grid>
              </Grid>
            </Grid>
          </EntityLayout.Route>

          <EntityLayout.Route path="/definition" title="Definition">
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <EntityApiDefinitionCard />
              </Grid>
            </Grid>
          </EntityLayout.Route>
        </EntityLayout>
      );

      // ...

      export const entityPage = (
        <EntitySwitch>
          // ...
          <EntitySwitch.Case if={isKind('api')} children={apiPage} />
          // ...
        </EntitySwitch>
      );
  
  - intro: 'There are other components to discover in `./src/components` that are also added by the default app.'
---

The API formats supported are:

- AsyncAPI 2 & 3
- GraphQL
- OpenAPI 2 & 3

All other formats are displayed as plain text, but it could be easily extended.

For more detailed installation instructions covering custom API rendering, pagination, OAuth 2
Authorization Code flow with Swagger UI, and adding a `requestInterceptor` to Swagger UI,
check out [the package README on NPM](https://www.npmjs.com/package/@backstage/plugin-api-docs).
