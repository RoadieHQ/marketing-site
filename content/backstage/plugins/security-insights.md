---
humanName: Security Insights
heading: 'Backstage Security Insights Plugin'
lead: 'See Security Insights for your components in Backstage'
attribution:
  text: Roadie
  href: https://roadie.io

seo:
  title: 'Backstage Security Insights Plugin | Roadie'
  description: |
    See Security Insights in Backstage.

logoImage: '../../assets/logos/github/PNG/GitHub-Mark-120px-plus3.png'

coverImage: './content/assets/roadie-backstage-security-plugin.jpg'
coverImageAlt: 'A screenshot of the Security Insights plugin. It is showing a security insights for a sample component.'

gettingStarted:
  - intro: Install the plugin into Backstage.
    language: bash
    code: 'yarn add @roadiehq/backstage-plugin-security-insights'

  - intro: Import it into your Backstage application.
    language: typescript
    code: |
      // packages/app/src/plugins.ts
      export { plugin as SecurityInsights } from '@roadiehq/backstage-plugin-security-insights';

  - intro: Add plugin API to your Backstage instance.
    language: typescript
    code: |
      // packages/app/src/components/catalog/EntityPage.tsx
      import { Router as SecurityInsightsRouter } from '@roadiehq/backstage-plugin-security-insights';

      const ServiceEntityPage = ({ entity }: { entity: Entity }) => (
        ...
        &lt;EntityPageLayout>
          &lt;EntityPageLayout.Content
            path="/security-insights"
            title="Security Insights"
            element={&lt;SecurityInsightsRouter entity={entity} />}
          />
          &lt;/EntityPageLayout>
        &lt;/EntityPageLayout>
      )

  - intro: Run the backstage app with the following command and navigate to the services tab.
    language: bash
    code: |
      yarn start

  - intro: Widgets setup.

  - intro: You must install this plugin by following the steps above to add the widget to your Overview.

  - intro: Add widget to your Overview tab.
    language: typescript
    code: |
      // packages/app/src/components/catalog/EntityPage.tsx
      import {
        SecurityInsightsWidget,
        isPluginApplicableToEntity as isSecurityInsightsAvailable,
      } from '@roadiehq/backstage-plugin-security-insights';

      // ...

      const OverviewContent = ({ entity }: { entity: Entity }) => (
        &lt;Grid container spacing={3} alignItems="stretch">
          ...
          {isSecurityInsightsAvailable(entity) && (
          &lt;>
          &lt;Grid item md={6}>
            &lt;SecurityInsightsWidget entity={entity} />
          &lt;/Grid>
          &lt;/>
        )}
        &lt;/Grid>
      );
---
