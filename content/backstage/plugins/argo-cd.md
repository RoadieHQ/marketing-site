---
humanName: Argo CD
heading: 'Backstage Argo CD Plugin'
# Keep it short
lead: 'See Argo CD status in Backstage'
attribution:
  text: Roadie
  href: https://roadie.io

seo:
  # Don't forget to end with "| Roadie"
  title: 'Backstage Argo CD Plugin | Roadie'
  description: |
    The Backstage Argo CD plugin integrates with your Argo CD instance api to show kubernetes status
    information inside Backstage where it can be associated with your project.

logoImage: '../../assets/logos/argo-cd/argo-cd-logo.png'

coverImage: '../../assets/argo-cd-plugin.png'
coverImageAlt: 'A preview of Argo CD overview widget including kubernetes pod status.'

gettingStarted:
  - intro: Install the plugin into Backstage.
    language: bash
    code: yarn add @roadiehq/backstage-plugin-argo-cd
  - intro: Add proxy config to the app-config.yaml file
    language: yaml
    code: |
      proxy:
        '/argocd/api':
          target: https://&lt;your-argocd-instance>/api/v1/
          changeOrigin: true
          # only if your argocd api has self-signed cert
          secure: false
          headers:
            Cookie:
              $env: ARGOCD_AUTH_TOKEN
  - intro: Add plugin to the list of plugins
    language: typescript
    code: |
      // packages/app/src/plugins.ts
      export { plugin as ArgoCD } from '@roadiehq/backstage-plugin-argo-cd';
  - intro: 'Add argoCD widget to your overview page'
    language: typescript
    code: |
      // packages/app/src/components/catalog/EntityPage.tsx
      import {
        ArgoCDDetailsWidget
        isPluginApplicableToEntity as isArgoCDAvailable,
      } from '@roadiehq/backstage-plugin-argo-cd';

      const OverviewContent = ({ entity }: { entity: Entity }) => (
        &lt;Grid container spacing={3} alignItems="stretch">
          ...
          {isArgoCDAvailable(entity) && (
            &lt;Grid item md={6}>
              &lt;ArgoCDDetailsWidget entity={entity} />
            &lt;/Grid>
          )}
          ...
        &lt;/Grid>
      );
  - intro: Add annotation to the yaml config file of a component
    language: yaml
    code: |
      metadata:
        annotations:
          argocd/app-name: &lt;your-app-name>
  - intro: Get and provide `ARGOCD_AUTH_TOKEN` as env variable in following format
    language: yaml
    code: |
      ARGOCD_AUTH_TOKEN='argocd.token=&lt;token>'
---
