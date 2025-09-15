---
humanName: Lighthouse
heading: 'Backstage Lighthouse Plugin'
lead: 'Integrates Lighthouse inside Backstage.'
npmjsPackage: "@backstage-community/plugin-lighthouse"
codeLocation: "https://github.com/backstage/community-plugins/tree/main/workspaces/lighthouse/plugins/lighthouse"
attribution:
  text: Spotify
  href: https://spotify.com

seo:
  title: 'Backstage Lighthouse Plugin | Roadie'
  description: |
    Google's Lighthouse tool is a great resource for benchmarking and improving the accessibility, performance, SEO, and best practices of your website.

logoImage: '../../assets/logos/lighthouse/logo-lh.webp'
coverImage: '../../assets/lighthouse-plugin.jpg'
coverImageAlt: 'A screenshot of the Lighthouse plugin.'

availableOnRoadie: true
roadieDocsPath: /integrations/lighthouse/

gettingStarted:
  - intro: Before you start please make sure that you setup lighthouse-audit-service first.

  - intro: Install the plugin into Backstage.
    language: bash
    code: 'yarn add @backstage/plugin-lighthouse'

  - intro: 'Add the plugin API to your API builder'
    language: typescript
    code: |
      // packages/app/src/apis.ts
      import {
        lighthouseApiRef,
        LighthouseRestApi,
      } from '@backstage/plugin-lighthouse';

      export const apis = (config: ConfigApi) => {
        builder.add(lighthouseApiRef, LighthouseRestApi.fromConfig(config));
      };

  - intro: 'Modify your app routes to include the LighthousePage component exported from the plugin.'
    language: typescript
    code: |
      // packages/app/src/App.tsx
      import { LighthousePage } from '@backstage/plugin-lighthouse'; from '@backstage/plugin-lighthouse';

      const routes = (
      <FlatRoutes>
      {/* ...other routes */}
      <Route path="/lighthouse" element={<LighthousePage />} />

  - intro: Configure lighthouse service url
    language: YAML
    code: |
      // app-config.yaml
      lighthouse:
        baseUrl: [your-website-url]

  - intro: Add annotation to your component-info.yaml file.
    language: YAML
    code: |
      metadata:
        annotations:
          lighthouse.com/website-url: [your-website-url]

  - intro: Add plugin API to your Backstage instance.
    language: typescript
    code: |
      // packages/app/src/components/catalog/EntityPage.tsx
      import { EntityLighthouseContent} from '@backstage/plugin-lighthouse';

      const websiteEntityPage = (
        ...
        <EntityLayout>>
          <EntityLayout.Route path="/lighthouse" title="Lighthouse">
            <EntityLighthouseContent />
          </EntityLayout.Route>
        </EntityPageLayout>
      )

  - intro: Optionally you might add Lighthouse widget to the overview tab on the EntityPage
    language: typescript
    code: |
      // packages/app/src/components/catalog/EntityPage.tsx
      import {
        EntityLastLighthouseAuditCard,
        isLighthouseAvailable,
      } from '@backstage/plugin-lighthouse';

      const overviewContent = (
        <Grid container spacing={3} alignItems="stretch">
          ...
          <EntitySwitch>
            <EntitySwitch.Case if={isLighthouseAvailable}>
           </EntitySwitch.Case>
          </EntitySwitch>
          ... 
        </Grid>
      );
---

## Backend

This plugin is only a frontend layer for [lighthouse-audit-service](https://github.com/spotify/lighthouse-audit-service) and won't work without it.
