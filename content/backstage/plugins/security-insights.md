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

coverImage: '../../assets/roadie-backstage-security-plugin.jpg'
coverImageAlt: 'A screenshot of the Security Insights plugin. It is showing a security insights for a sample component.'

gettingStarted:
  - intro: Install the plugin into Backstage.
    language: bash
    code: 'yarn add @roadiehq/backstage-plugin-security-insights'

  - intro: Add a Sentry tab to your Backstage components.
    language: typescript
    code: |
      // packages/app/src/components/catalog/EntityPage.tsx
      import { EntitySecurityInsightsContent } from '@roadiehq/backstage-plugin-security-insights';

      const ServiceEntityPage = ({ entity }: { entity: Entity }) => (
        <EntityLayout>
          //...
          <EntityLayout.Route path="/security-insights" title="Security">
            <EntitySecurityInsightsContent />
          </EntityLayout.Route>
          //...
        </EntityLayout>
      )

  - intro: Add the Sentry card to the component overview (optional)
    language: bash
    code: |
      // packages/app/src/components/catalog/EntityPage.tsx
      import {
        EntitySecurityInsightsCard,
        isSecurityInsightsAvailable
      } from '@roadiehq/backstage-plugin-security-insights';

      // ...
      const overviewContent = (
        <Grid container spacing={3} alignItems="stretch">
          //...
          <EntitySwitch>
            <EntitySwitch.Case if={isSecurityInsightsAvailable}>
              <Grid item md={6}>
                <EntitySecurityInsightsCard />
              </Grid>
            </EntitySwitch.Case>
          </EntitySwitch>
          // ...
        </Grid>
      );

  - intro: Run the backstage app with the following command and navigate to the services tab.
    language: bash
    code: |
      yarn dev
---

## GitHub Advanced Security

This plugin requires features provided by GitHub advanced security. Specifically, it calls the code-scanning endpoints.
Advanced security is free for public repos but **not for private repos** even on GitHub Enterprise plans. It
must be purchased separately.

You can check if you have Advanced Security enabled by navigating to your repo in GitHub
and checking under Security -> Overview -> "Code scanning alerts".

## Dependabot

This plugin does not currently support displaying dependabot warnings. If this is something
you'd like to see please [create an issue](https://github.com/RoadieHQ/backstage-plugin-security-insights/issues/new/choose) in GitHub.