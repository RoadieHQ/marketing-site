---
humanName: Azure DevOps
heading: 'Backstage Azure DevOps Plugin'
# Keep it short
lead: 'See Azure DevOps information in Backstage'
attribution:
  text: Roadie
intro: |
  <p>
    As a prerequisite, you need to have installed and configured the Azure DevOps Backend plugin before you move forward with any of these steps.
  </p>
  <p>
    We recommend creating a multi-select field called something like "Affected services" or "Impacted components".
  </p>

seo:
  # Don't forget to end with "| Roadie"
  title: 'Backstage Azure DevOps Plugin | Roadie'
  description: |
    The Backstage Azure DevOps plugin provides visualisations for components sourced from Azure DevOps, from services like Azure Pipelines and Azure Repos.

logoImage: '../../assets/logos/azure-devops/Azure-DevOps-logo.webp'

coverImage: '../../assets/azure-devops-builds.png'
coverImageAlt: 'A preview of Argo CD overview widget including kubernetes pod status.'

availableOnRoadie: true
roadieDocsPath: /azure-devops/

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
