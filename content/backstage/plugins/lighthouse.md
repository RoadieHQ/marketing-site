---
humanName: Lighthouse
heading: 'Backstage Lighthouse Plugin'
lead: 'Integrates Lighthouse inside Backstage.'
attribution:
  text: Spotify
  href: https://spotify.com

seo:
  title: 'Backstage Lighthouse Plugin | Roadie'
  description: |
    Google's Lighthouse tool is a great resource for benchmarking and improving the accessibility, performance, SEO, and best practices of your website.

logoImage: '../../assets/logos/lighthouse/logo-lh.png'
coverImage: '../../assets/lighthouse-plugin.png'
coverImageAlt: 'A screenshot of the Lighthouse plugin.'

gettingStarted:
  - intro: Before you start please make sure that you setup lighthouse-audit-service first.

  - intro: Install the plugin into Backstage.
    language: bash
    code: 'yarn add @backstage/plugin-lighthouse'

  - intro: Add plugin to the list of plugins.
    language: typescript
    code: |
      // packages/app/src/plugins.ts
      export { plugin as LighthousePlugin } from '@backstage/plugin-lighthouse';

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

  - intro: Configure lighthouse service url
    language: YAML
    code: |
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
      import { EmbeddedRouter as LighthouseRouter } from '@backstage/plugin-lighthouse';

      const WebsiteEntityPage = ({ entity }: { entity: Entity }) => (
        ...
        <EntityPageLayout>
          <EntityPageLayout.Content
            path="/lighthouse"
            title="Lighthouse"
            element={<LighthouseRouter entity={entity} />}
          />
          </EntityPageLayout>
        </EntityPageLayout>
      )

  - intro: Optionally you might add Lighthouse widget to the overview tab on the EntityPage
    language: typescript
    code: |
      // packages/app/src/components/catalog/EntityPage.tsx
      import {
        LastLighthouseAuditCard,
        isPluginApplicableToEntity as isLighthouseAvailable,
      } from '@backstage/plugin-lighthouse';

      const OverviewContent = ({ entity }: { entity: Entity }) => (
        <Grid container spacing={3} alignItems="stretch">
          ...
          {isLighthouseAvailable(entity) && (
            <Grid item sm={4}>
              <LastLighthouseAuditCard />
            </Grid>
          )}
        </Grid>
      );
---

## Backend

This plugin is only a frontend layer for [lighthouse-audit-service](https://github.com/spotify/lighthouse-audit-service) and won't work without it.
