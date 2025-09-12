---
humanName: Tech Insights
heading: 'Backstage Tech Insights Plugin'
lead: |
  Visualize, understand and optimize your team's tech health.
npmjsPackage: "@backstage-community/plugin-tech-insights"
codeLocation: "https://github.com/backstage/community-plugins/tree/main/workspaces/tech-insights"
attribution:
  text: Roadie
  href: https://github.com/backstage/backstage

seo:
  title: 'Backstage Tech Insights Plugin | Roadie'
  description: |
    Visualize, understand and optimize your team's tech health.

logoImage: '../../assets/tech-insights/tech_insights.webp'
coverImage: '../../assets/tech-insights/tech_insights_scorecard.webp'
coverImageAlt: "Visualize, understand and optimize your team's tech health."

availableOnRoadie: true

gettingStarted:
  - intro: 'Install the plugin backend packages Backstage backend app'
    language: 'bash'
    code: |
        cd packages/backend 
        yarn add @backstage/plugin-tech-insights-backend @backstage/plugin-tech-insights-node
  - intro: 'Install the plugin frontend package in your Backstage app'
    language: typescript
    code: |
        cd packages/app
        yarn add @backstage/plugin-tech-insights
  
  - intro: 'Configure your Backstage backend to run the Tech Insights plugin'
    language: typescript
    code: |
      // packages/backend/src/plugins/techInsights.ts
      import {
        createRouter,
        buildTechInsightsContext,
      } from '@backstage/plugin-tech-insights-backend';
      import { Router } from 'express';
      import { PluginEnvironment } from '../types';
  
      export default async function createPlugin(
        env: PluginEnvironment,
      ): Promise<Router> {
        const builder = buildTechInsightsContext({
          logger: env.logger,
          config: env.config,
          database: env.database,
          discovery: env.discovery,
          factRetrievers: [], // Fact retrievers registrations you want tech insights to use, we'll add these in the next step
          factCheckerFactory: myFactCheckerFactory // Fact checker, we'll add this in the next steps
        });

        return await createRouter({
          ...(await builder),
          logger: env.logger,
          config: env.config,
        });
      }
  
  - intro: 'Create Fact Retrievers to fetch fact data for you'
    language: typescript
    code: |
      // packages/backend/src/plugins/techInsights.ts
      import { FactRetriever } from '@backstage/plugin-tech-insights-node';

      const myFactRetriever: FactRetriever = {
        id: 'documentation-number-factretriever', // unique identifier of the fact retriever
        version: '0.1.1', // SemVer version number of this fact retriever schema. This should be incremented if the implementation changes
        entityFilter: [{ kind: 'component' }], // EntityFilter to be used in the future (creating checks, graphs etc.) to figure out which entities this fact retrieves data for.
        schema: {
          // Name/identifier of an individual fact that this retriever returns
          examplenumberfact: {
            type: 'integer', // Type of the fact
            description: 'A fact of a number', // Description of the fact
          },
        },
        handler: async ctx => {
          // Handler function that retrieves the fact
          const { discovery, config, logger } = ctx;
          const catalogClient = new CatalogClient({
            discoveryApi: discovery,
          });
          const entities = await catalogClient.getEntities({
            filter: [{ kind: 'component' }],
          });
          /**
          * snip: Do complex logic to retrieve facts from external system or calculate fact values
          */

          // Respond with an array of entity/fact values
          return entities.items.map(it => {
            return {
              // Entity information that this fact relates to
              entity: {
                namespace: it.metadata.namespace,
                kind: it.kind,
                name: it.metadata.name,
              },

              // All facts that this retriever returns
              facts: {
                examplenumberfact: 2, //
              },
              // (optional) timestamp to use as a Luxon DateTime object
            };
          });
        },
      };
      const myFactRetrieverRegistration = createFactRetrieverRegistration({
        cadence: '1 * 2 * * ', // On the first minute of the second day of the month
        factRetriever: myFactRetriever,
      });


  - intro: Create Fact Checker checks to determine results of the facts.
    language: typescript
    code: |
      // packages/backend/src/plugins/techInsights.ts
      import { JsonRulesEngineFactCheckerFactory } from '@backstage/plugin-tech-insights-backend-module-jsonfc';

      const myFactCheckerFactory = new JsonRulesEngineFactCheckerFactory({
        logger: env.logger,
        checks: [
          {
            id: 'exampleNumberCheck',
            type: JSON_RULE_ENGINE_CHECK_TYPE,
            name: 'Example Number Check',
            description: 'Verifies that the example number is larger is equal to 3.',
            factIds: ['documentation-number-factretriever'],
            rule: {
              conditions: {
                all: [
                  {
                    fact: 'examplenumberfact',
                    operator: 'equal',
                    value: 3,
                  },
                ],
              },
            },
          },
         ],
      }),
      
  - intro: Import the plugin.
    language: typescript
    code: |
      // packages/backend/src/index.ts
      import techInsights from './plugins/techInsights';

      const techInsightsEnv = useHotMemoize(module, () => createEnv('tech_insights'));

      apiRouter.use('/tech-insights', await techInsights(techInsightsEnv));     
      
      
  - intro: Set up the plugin frontend.
    language: typescript
    code: |
        // packages/app/src/components/catalog/EntityPage.tsx

        import { EntityTechInsightsScorecardContent } from '@backstage/plugin-tech-insights';

        const serviceEntityPage = (
          <EntityLayoutWrapper>
            <EntityLayout.Route path="/" title="Overview">
              {overviewContent}
            </EntityLayout.Route>
            <EntityLayout.Route path="/ci-cd" title="CI/CD">
              {cicdContent}
            </EntityLayout.Route>
            ...
            <EntityLayout.Route path="/tech-insights" title="Scorecards">
              <EntityTechInsightsScorecardContent
                title="Customized title for the scorecard"
                description="Small description about scorecards"
              />
            </EntityLayout.Route>
            ...
          </EntityLayoutWrapper>
        );      
---

## How do I fetch facts for my own data?

Tech Insights uses Fact Retrievers to retrieve data from external sources. Any external service or API can be used as the service providing fact data that is tied to your Backstage entities. 

## How do I create non-boolean checks?

The default implementation of FactChecker uses JSON rules engine. To create checks using other types of logic, you can implement the `FactCheckerFactory` interface and provide your own implementation.

## How do I retrieve and construct graphs from the facts I have in the database?

Tech Insights backend exposes an API endpoint that can be queried for fact data based on datetime range and entity reference. You can construct an XHR call like the following to query individual values of graphable data:

```bash
curl <backstage-backend>/api/tech-insights/facts/range?entity=<entity-kind>:<entity-namespace>/<entity-name>?ids[]=documentation-number-factretriever&startDatetime=2021-09-12T06:46:30&endDatetime=2021-10-21T06:46:30
```

## How do I make sure my database doesn't get overwhelmed with fact data?

You can defined a lifecycle configuration value to the `factRetrieverRegistration` you create. The possible values for this are either a number of items to keep or a duration for how long the item should be kept in the database before it is cleaned up. Example values are:
```typescript
const maxItems = { maxItems: 7 }; // Deletes all but 7 latest facts for each id/entity pair
const ttl = { timeToLive: 1209600000 }; // (2 weeks) Deletes items older than 2 weeks
const ttlWithAHumanReadableValue = { timeToLive: { weeks: 2 } }; // Deletes items older than 2 weeks
```


## More information

* [Tech Insights backend README file](https://github.com/backstage/community-plugins/blob/main/workspaces/tech-insights/plugins/tech-insights-backend/README.md)
* [Tech Insights frontend README file](https://github.com/backstage/community-plugins/blob/main/workspaces/tech-insights/plugins/tech-insights/README.md)
* [Tech Insights JSON rules engine implementation README file](https://github.com/backstage/community-plugins/blob/main/workspaces/tech-insights/plugins/tech-insights-backend-module-jsonfc/README.md)
