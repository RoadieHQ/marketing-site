---
humanName: Harness Next CI/CD
heading: 'Backstage Harness Next CI/CD Plugin'
lead: 'The Harness NextGen CI/CD plugin allows you to see build information inside Backstage'
attribution:
  text: Harness
  href: https://harness.io/

npmjsPackage: "@harnessio/backstage-plugin-ci-cd"
codeLocation: "https://github.com/harness/backstage-plugins/tree/main/plugins/harness-ci-cd"

seo:
  title: 'Backstage Harness Next CI/CD Plugin | Roadie'
  description: |
    The Backstage Harness Next CI/CD plugin integrates with GitHub Actions to show your build
    information inside Backstage where it can be associated with your services.

logoImage: 'assets/logos/harness/harness.webp'

availableOnRoadie: true
roadieDocsPath: /integrations/harness/

gettingStarted: # What will this step accomplish?
  - intro: Install the plugin into your Backstage instance.
    language: bash
    code: yarn --cwd packages/app add @harnessio/backstage-plugin-ci-cd

  - intro: |
      Generate a Harness <a href='https://developer.harness.io/docs/platform/automation/api/add-and-manage-api-keys/'>API key</a>. Make sure the user creating this API token has necessary permissions, which include project view permission along with pipeline view and execute permissions and same applies for service accounts as well it must have a role assigned that has the roles with adequate permissions as described bef

  - intro: 'Add the plugin to the proxy in your app config.'
    language: yaml
    code: |
      // app-config.yaml
      proxy:
        # ... existing proxy settings
        '/harness/prod':
          target: 'https://app.harness.io/'
          headers:
            'x-api-key': '<YOUR PAT/SAT>'

  - intro: Add the `EntityHarnessCiCdContent` to your EntityPage component.
    language: typescript
    code: |
      // In packages/app/src/components/catalog/EntityPage.tsx

      import {
        isHarnessCiCdAvailable,
        EntityHarnessCiCdContent,
      } from '@harnessio/backstage-plugin-ci-cd';

      const cicdContent = (
        // ...
        <EntitySwitch.Case if={isHarnessCiCdAvailable}>
          <EntityHarnessCiCdContent />
        </EntitySwitch.Case>
        // ...
      );

  - intro: |
      Update relevant catalog-info.yaml files with Harness annotations. For example add pipelines and services.
    language: yaml
    code: |
      apiVersion: backstage.io/v1alpha1
      kind: Component
      metadata:
        # ...
        annotations:
          # optional annotation
          harness.io/pipelines: |
            labelA: <harness_pipeline_url>
            labelB: <harness_pipeline_url>
          # here labelA / labelB denotes the value you will see in dropdown in execution list. Refer screentshot 1
          # optional annotation
          harness.io/services: |
            labelA: <harness_service_url>
            labelB: <harness_service_url>
spec:
  type: service
  # ...
---

### Useful Info

The Next CI/CD plugin is designed to:

- Connect a Backstage service with a Harness project and view top 50 executions from the pipelines in the project.
- See details about executions - status, execution timestamp and time taken, associated triggers for CI pipelines, services deployed for CD pipelines.
- Specify pipeline IDs (CI) or service IDs (CD) to narrow down on pipeline executions to show in the Backstage service view.
- Retry pipeline executions from the plugin

### Useful Links

- [npm]()
- [GitHub](https://github.com/harness/backstage-plugins/tree/main/plugins/harness-ci-cd)
- [Roadie Docs](https://roadie.io/docs/integrations/harness/)
