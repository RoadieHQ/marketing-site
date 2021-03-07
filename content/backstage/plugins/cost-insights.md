---
name: cost-insights
humanName: Cost Insights
heading: 'Backstage Cost Insights Plugin'
lead: 'Cost Insights is a plugin to help engineers visualize, understand and optimize their cloud costs.'
attribution:
  text: Spotify
  href: https://spotify.com

seo:
  title: 'Backstage Cost Insights Plugin | Roadie'
  description: |
    Visualize, understand and optimize your team's cloud costs.

logoImage: '../../assets/logos/cost-insights/money-bag.png'

coverImage: '../../assets/cost-insights-plugin.png'
coverImageAlt: 'A screenshot of the Cost Insights plugin.'

gettingStarted:
  - intro: Install the plugin into Backstage.
    language: bash
    code: 'yarn add @backstage/plugin-cost-insights'

  - intro: Create a CostInsights client. Clients must implement the CostInsightsApi interface. See the API file for required methods and documentation.
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

  - intro: Add plugin to the list of plugins.
    language: typescript
    code: |
      // packages/app/src/plugins.ts
      export { plugin as CostInsights } from '@backstage/plugin-cost-insights';
---
