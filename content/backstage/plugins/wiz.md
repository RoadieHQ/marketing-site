---
humanName: Wiz
heading: 'Backstage Wiz Plugin'
lead: 'See Wiz issues status in Backstage'
npmjsPackage: "@roadiehq/backstage-plugin-wiz"
codeLocation: "https://github.com/RoadieHQ/roadie-backstage-plugins/tree/main/plugins/frontend/backstage-plugin-wiz"
attribution:
  text: Roadie
intro: |
  Wiz is the unified cloud security platform with prevention and response capabilities, enabling security and development teams to build faster and more securely.

  The Backstage Wiz Plugin integrates Wiz, a cloud security platform, into your Backstage instance, providing information about recently created issues, their status and severity.

seo:
  title: 'Backstage Wiz Plugin | Roadie'
  description: |
    The Backstage Wiz Plugin integrates Wiz, a cloud security platform, into your Backstage instance, providing information about recently created issues, their status and severity.

logoImage: '../../assets/logos/wiz/wiz-logo.png'

coverImage: '../../assets/wiz-plugin.png'
coverImageAlt: 'A preview of Wiz issues.'

availableOnRoadie: true
roadieDocsPath: /integrations/wiz/

gettingStarted:
  - intro: The plugin requires Wiz backend plugin to be installed first. The backend plugin handles authentication and retrieving data. You can read more about it in Prerequisites and Getting Started section below.
    language: bash
    code: |
      yarn --cwd packages/backend add @roadiehq/plugin-wiz-backend

  - intro: After installing backend plugin you can proceed with installing frontend part.
    language: bash
    code: |
      yarn --cwd packages/app add @roadiehq/backstage-plugin-wiz

  - intro: 'Add plugin components to your Entity Page'
    language: javascript
    code: |
      // packages/app/src/components/catalog/EntityPage.tsx
        import {
        EntityWizIssues,
        isWizAvailable,
        EntityIssuesWidget,
        EntityIssuesChart,
        EntitySeverityChart,
        } from '@roadiehq/backstage-plugin-wiz';

  - intro: Add annotation to the yaml config file of a component
    language: yaml
    sectionId: 'add-annotations'
    code: |
      metadata:
        annotations:
            wiz.io/project-id: <your-project-id>

  - intro: 'Add widgets under overviewContent, based on which card (widget) you wish to display.'
    language: javascript
    code: |
      // packages/app/src/components/catalog/EntityPage.tsx
      <EntitySwitch>
          <EntitySwitch.Case if={isWizAvailable}>
              <Grid item md={6}>
                  <EntityIssuesWidget />
              </Grid>
          </EntitySwitch.Case>
      </EntitySwitch>

      <EntitySwitch>
        <EntitySwitch.Case if={isWizAvailable}>
            <Grid item md={6}>
                <EntityIssuesChart />
            </Grid>
        </EntitySwitch.Case>
      </EntitySwitch>

      <EntitySwitch>
        <EntitySwitch.Case if={isWizAvailable}>
            <Grid item md={6}>
                <EntitySeverityChart />
            </Grid>
        </EntitySwitch.Case>
      </EntitySwitch>

  - intro: 'Add a new tab with all the issues for the project id you have specified in annotations, under serviceEntityPage.'
    language: javascript
    code: |
      // packages/app/src/components/catalog/EntityPage.tsx

      <EntityLayout.Route path="/wiz" title="WIZ">
          <EntityWizIssues />
      </EntityLayout.Route>
---

### Prerequisites

To begin using the Wiz backend plugin, you will need the following parameters:

- Wiz API URL (API Endpoint URL)
- Wiz Token URL
- Client ID and Client Secret

In order to retrieve those, you can read [official documentation](https://win.wiz.io/reference/prerequisites), which describes how to obtain the values.

The Wiz GraphQL API has a single endpoint:

- https://api.<TENANT_DATA_CENTER>.app.wiz.io/graphql

Where `<TENANT_DATA_CENTER>` is the Wiz regional data center your tenant resides in (e.g., us1, us2, eu1, or eu2).

### Getting Started

After obtaining all of the above, add the Wiz configuration in your `app-config.yaml`:

```yaml
wiz:
  clientId: <Client ID>
  clientSecret: <Client Secret>
  tokenUrl: <Wiz token URL>
  wizAPIUrl: <API Endpoint URL>
  dashboardLink: <your-wiz-url>
```

Create a file in packages/backend/src/plugins/wiz.ts

```javascript
import { createRouter } from '@roadiehq/plugin-wiz-backend';

export default async function createPlugin({
  logger,
  config,
}: PluginEnvironment) {
  return await createRouter({ logger, config });
})
```

In packages/backend/src/index.ts add the following:

```javascript
import wiz from './plugins/wiz';
// ...
async function main() {
  // ...
  const wizEnv = useHotMemoize(module, () => createEnv('wiz'));

  const wizConfig = {
    clientId: config.getOptionalString('wiz.clientId'),
    clientSecret: config.getOptionalString('wiz.clientSecret'),
    tokenUrl: config.getOptionalString('wiz.tokenUrl'),
    apiUrl: config.getOptionalString('wiz.wizAPIUrl'),
  };

  const apiRouter = Router();
  if (
    wizConfig.enabled &&
    wizConfig.clientId &&
    wizConfig.clientSecret &&
    wizConfig.tokenUrl &&
    wizConfig.apiUrl
  ) {
    router.use('/wiz-backend', await wiz(wizEnv));
  }
  await wiz(wizEnv);
  // ...
}
```

At this point you can generate access token you will need for API calls towards WIZ.
