---
name: cost-insights
humanName: Cost Insights
heading: 'Backstage Cost Insights Plugin'
lead: 'Visualize, understand and optimize your cloud costs.'
npmjsUrl: https://www.npmjs.com/package/@backstage-community/plugin-cost-insights
attribution:
  text: Spotify
  href: https://spotify.com

seo:
  title: 'Backstage Cost Insights Plugin | Roadie'
  description: |
    Visualize, understand and optimize your team's cloud costs inside Backstage with the Cost Insights Plugin.

logoImage: '../../assets/logos/cost-insights/money-bag.webp'

coverImage: '../../assets/backstage/plugins/cost-insights.jpg'
coverImageAlt: 'Charts showing cloud costs over time and compared to other services.'

gettingStarted:
  - intro: Install the plugin into your Backstage instance.
    language: bash
    code: 'yarn add @backstage/plugin-cost-insights'

  - intro: Create a CostInsights client which implements the CostInsightsApi interface.
  - intro:
      Cost Insights currently does not provide a CostInsightsApi client out of the box, but there are templates and examples in the Backstage repo. Here's an exploration into [Cost Insights for AWS](https://github.com/backstage/community-plugins/blob/main/workspaces/cost-insights/plugins/cost-insights/contrib/aws-cost-explorer-api.md).
    language: typescript
    code: |
      // path/to/CostInsightsClient.ts
      import { CostInsightsApi } from '@backstage/plugin-cost-insights';

      export class CostInsightsClient implements CostInsightsApi { ... }

  - intro: Import the client and the CostInsights plugin API to your Backstage instance.
    language: typescript
    code: |
      // packages/app/src/api.ts
      import { createApiFactory } from '@backstage/core';
      import { costInsightsApiRef } from '@backstage/plugin-cost-insights';
      import { CostInsightsClient } from './path/to/file';

      export const apis = [
        createApiFactory({
          api: costInsightsApiRef,
          deps: {},
          factory: () => new CostInsightsClient(),
        }),
      ];

  - intro: Add the CostInsightsPage extension to your App.tsx file.
    language: typescript
    code: |
      // packages/app/App.tsx
      import { CostInsightsPage } from '@backstage/plugin-cost-insights';

      <FlatRoutes>
        ...
        <Route path="/cost-insights" element={<CostInsightsPage />} />
        ...
      </FlatRoutes>

  - intro: Add plugin to your sidebar.
    language: typescript
    code: |
      // packages/app/src/sidebar.tsx
      export const AppSidebar = () => (
        <Sidebar> 
          <SidebarItem icon={MoneyIcon} to="cost-insights" text="Cost Insights" />
        </Sidebar>
      )
---

To learn more about the Cost Insights plugin and how it is used inside Spotify, check out this [RedMonk](https://redmonk.com) interview with Cost Insights product manager Janisa Anandamohan and her engineering colleague Tim Hansen. We also have brief notes from the video in [this edition of our newsletter](https://roadie.io/blog/backstage-weekly-25-org-chart-kubecon/#cost-insights-on-redmonk).

<iframe width="560" height="315" src="https://www.youtube.com/embed/5GN2ucN1Lxs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

