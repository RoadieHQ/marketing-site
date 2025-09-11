---
humanName: Argo CD
heading: 'Backstage Argo CD Plugin'
# Keep it short
lead: 'See Argo CD status in Backstage'
npmjsPackage: "@roadiehq/backstage-plugin-argo-cd"
attribution:
  text: Roadie, in collaboration with American Airlines
intro: | 
    [Argo CD](https://argoproj.github.io/cd/), a CNCF project, enables declarative GitOps workflows for Kubernetes. Argo CD continuously monitors all running applications and compares their live state to the desired state specified in the Git repository. Argo CD can pull updated code from Git repositories and deploy it directly to Kubernetes resources, thus enabling developers to manage both infrastructure configuration and application updates in one system.

    The ArgoCD Backstage plugin brings synced status, health status, and updates history of your services to your Developer Portal. This plugin can support multiple ArgoCD instances.

    In this guide you'll find:

      - [Installation steps](#installation-steps)
      - [Required annotations](#section-add-annotations)
      - [Set up for multiple ArgoCD instances](#things-to-know)

seo:
  # Don't forget to end with "| Roadie"
  title: 'Backstage Argo CD Plugin | Roadie'
  description: |
    The Backstage Argo CD plugin integrates with your Argo CD instance api to show kubernetes status
    information inside Backstage where it can be associated with your project.

logoImage: '../../assets/logos/argo-cd/argo-cd-logo.webp'

coverImage: '../../assets/argo-cd-plugin.webp'
coverImageAlt: 'A preview of Argo CD overview widget including kubernetes pod status.'

availableOnRoadie: true
roadieDocsPath: /integrations/argocd/

thingsToKnowTitle: Configure multiple Argo CD instances
thingsToKnowHostDependant: true
thingsToKnowOnRoadie: /docs/integrations/argocd/#multiple-argo-cd-instances

gettingStarted:
  - intro: Install the plugin into Backstage.
    language: bash
    code: |
      cd packages/app
      yarn add @roadiehq/backstage-plugin-argo-cd
  - intro: Add proxy config to the app-config.yaml file
    language: yaml
    code: |
      proxy:
        '/argocd/api':
          target: https://<your-argocd-instance>/api/v1/
          changeOrigin: true
          # only if your argocd api has self-signed cert
          secure: false
          headers:
            Cookie:
              $env: ARGOCD_AUTH_TOKEN
  - intro: 'Add argoCD widget to your overview page'
    language: typescript
    code: | 
      // packages/app/src/components/catalog/EntityPage.tsx
      import {
        EntityArgoCDOverviewCard,
        isArgocdAvailable
      } from '@roadiehq/backstage-plugin-argo-cd';
    
      const overviewContent = (
        <Grid container spacing={3} alignItems="stretch">
        ...
          <EntitySwitch>
            <EntitySwitch.Case if={e => Boolean(isArgocdAvailable(e))}>
              <Grid item sm={4}>
                <EntityArgoCDOverviewCard />
              </Grid>
            </EntitySwitch.Case>
          </EntitySwitch>
        ...
        </Grid>
      );
  - intro: Add annotation to the yaml config file of a component
    language: yaml
    sectionId: 'add-annotations'
    code: |
      metadata:
        annotations:
          argocd/app-name: <your-app-name>
  - intro: Get and provide `ARGOCD_AUTH_TOKEN` as env variable in following format
    language: bash
    code: |
      ARGOCD_AUTH_TOKEN='argocd.token=<token>'
---

There are two options for setting up multiple Argo CD instances.

**Option 1: use a proxy per instance**

If you want to create multiple components that fetch data from different argoCD instances, you have to add a proxy config for each instance:

```yaml
proxy:
...

  '/argocd/api':
    target: https://<someAddress>/api/v1/
    changeOrigin: true
    secure: false
    headers:
      Cookie:
        $env: ARGOCD_AUTH_TOKEN

  '/argocd/api2':
    target: https://<otherAddress>/api/v1/
    changeOrigin: true
    secure: false
    headers:
      Cookie:
        $env: ARGOCD_AUTH_TOKEN2
```

Add all required auth tokens to environmental variables, in this example, ARGOCD_AUTH_TOKEN2.

And then in the following component definition annotations add a line with the url to the desired proxy path:

```yaml
argocd/proxy-url: '/argocd/api2'
```

`argocd/proxy-url` annotation defaults to '/argocd/api' so it's not needed if there is only one proxy config.

**Option 2 - Argo CD backend plugin**


To enable ArgoCD backend plugin you need to import it to your backend application. 

1. Create plugin file for ArgoCD backend in your `packages/backend/src/plugins/` directory.

```ts
// packages/backend/src/plugins/argocd.ts

import { createRouter } from '@roadiehq/backstage-plugin-argo-cd-backend';
import { PluginEnvironment } from '../types';

export default async function createPlugin({
  logger,
  config,
}: PluginEnvironment) {
  return await createRouter({ logger, config });
}
```

2. Modify your backend router to expose the APIs for ArgoCD backend
```ts
// packages/backend/src/index.ts

import argocd from './plugins/argocd';
...

const argocdEnv = useHotMemoize(module, () => createEnv('argocd'));
...
apiRouter.use('/argocd', await argocd(argocdEnv));
```


If you want to create multiple components that fetch data from different argoCD instances, you can dynamically set the ArgoCD instance url by adding the following to your app-config.yaml files.

```yml
argocd:
  username: ${ARGOCD_USERNAME}
  password: ${ARGOCD_PASSWORD}
  appLocatorMethods:
    - type: 'config'
      instances:
        - name: argoInstance1
          url: https://argoInstance1.com
          token: ${ARGOCD_AUTH_TOKEN}
        - name: argoInstance2
          url: https://argoInstance2.com
```

The Argo plugin will fetch the Argo CD instances an app is deployed to and use the [backstage-plugin-argo-cd-backend](https://www.npmjs.com/package/@roadiehq/backstage-plugin-argo-cd-backend) plugin to reach out to each Argo instance based on the mapping mentioned below.


Add the required auth tokens to environmental variables, `ARGOCD_USERNAME` and `ARGOCD_PASSWORD`.

You can also use an argo session token as mentioned above in the `argocd` object as shown above. If omitted, we will use the argo username and password from the code block above.
