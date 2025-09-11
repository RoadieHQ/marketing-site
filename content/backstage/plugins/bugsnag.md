---
humanName: Bugsnag
heading: 'Backstage Bugsnag Plugin'
lead: 'Monitor errors in Bugsnag for your service in Backstage'
npmjsPackage: @roadiehq/backstage-plugin-bugsnag
attribution:
  text: Roadie
  href: https://roadie.io

seo:
  title: 'Backstage Bugsnag Plugin | Roadie'
  description: |
    Monitor errors in Bugsnag for your service in Backstage. 

logoImage: '../../assets/logos/bugsnag/bugsnag-logo.webp'
coverImage: '../../assets/backstage/plugins/bugsnag/backstage-bugsnag-plugin.webp'
coverImageAlt: |
  Service errors overview inside a Bugsnag plugin.

availableOnRoadie: true
roadieDocsPath: /integrations/bugsnag/

gettingStarted:
  - intro: Install the plugin into Backstage.
    language: bash
    code: |
      // packages/app
      'yarn add @roadiehq/backstage-plugin-bugsnag'
  
  - intro: Add proxy configurations
    language: 'yaml'
    code: |
      // app-config.yaml
      proxy:
        # ...

        '/bugsnag/api':
          target: 'https://api.bugsnag.com'
          headers:
            Authorization: 'token ${BUGSNAG_PERSONAL_TOKEN}'
            X-version: '2'    

  - intro: Add plugin API to your Backstage instance.
    language: typescript
    code: |
      // packages/app/src/components/catalog/EntityPage.tsx
      import { EntityBugsnagErrorsOverviewTable } from '@roadiehq/backstage-plugin-bugsnag';

      // ...

      const serviceEntityPage = (
        <EntityLayout>
          ...
          <EntityLayout.Route path="/bugsnag" title="Bugsnag">
            <EntityBugsnagErrorsOverviewTable />
          </EntityLayout.Route>
          ...
        </EntityLayout>
      )

  - intro: Run the backstage app with the following command and navigate to the services tab.
    code: |
      yarn start

---

## How to use Bugsnag plugin in Backstage:

Firstly, add an annotation to the yaml config file of a component:

```yml
bugsnag.com/project-key: <organization-name>/<project-notifier-api-key>
```
Both values can be found in Bugsnag settings dashboard, under organization and project settings.

Afterwards, proceed with adding your Bugsnag personal auth token to the environment variables of your backstage backend server (you can find it in https://app.bugsnag.com/settings/{organizationaname}/my-account/auth-tokens), in the form of the word 'token' followed by your token. So it should look like this:

  ```
  BUGSNAG_PERSONAL_TOKEN="token <your-api-key>"
  ```

  Alternatively, if you are running backstage locally, you can provide the variable by the command

   ```
   env BUGSNAG_PERSONAL_TOKEN="token <your-api-key>" yarn dev
   ```

## API Rate Limit in Bugsnag:

Since Bugsnag has a policy around API rate limits (https://bugsnagapiv2.docs.apiary.io/#introduction/rate-limiting), we are not displaying error trends in the table. However, you can visit error details page in Bugsnag for more details, including error trend.



