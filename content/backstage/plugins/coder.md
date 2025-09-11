---
humanName: Coder
heading: 'Backstage Coder Plugin'
lead: 'Create and manage Coder workspaces from Backstage'
npmjsUrl: https://www.npmjs.com/package/@coder/backstage-plugin-coder
attribution:
  text: Coder
  href: https://coder.com/ 

seo:
  title: 'Backstage Coder Plugin | Roadie'
  description: |
    See Coder information and access workspaces directly from Backstage.

logoImage: '../../assets/logos/coder/coder_logo_transparent_text_black.webp'

coverImage: '../../assets/coder.png'
coverImageAlt: 'A screenshot of the Coder plugin showing a Coder workspace with clickable links.'

availableOnRoadie: true
roadieDocsPath: /integrations/coder/

# Instructions for someone who wants to use this plugin.
# languages used here must be listed in the .babelrc

gettingStarted:
  # What will this step accomplish?
  - intro: Install the plugin into Backstage
    language: bash
    code: yarn --cwd packages/app add @coder/backstage-plugin-coder

  - intro: Add proxy config to your app-config.yaml
    language: typescript
    code: |
      proxy:
        endpoints:
          '/coder':
            # Replace with your Coder deployment access URL (add a trailing slash)
            target: 'https://coder.example.com/'

            changeOrigin: true
            allowedMethods: ['GET'] # Additional methods will be supported soon!
            allowedHeaders: ['Authorization', 'Coder-Session-Token']
            headers:
              X-Custom-Source: backstage

  - intro: Add the Coder `CodeProvider` to your app
    language: typescript
    code: |
      // packages/app/src/App.tsx

      import {
        type CoderAppConfig,
        CoderProvider,
      } from '@coder/backstage-plugin-coder';

      const appConfig: CoderAppConfig = {
        deployment: {
          accessUrl: 'https://coder.example.com',
        },

        // Set the default template (and parameters) for
        // catalog items. Individual properties can be overridden
        // by a repo's catalog-info.yaml file
        workspaces: {
          defaultTemplateName: 'devcontainers',
          defaultMode: 'manual',

          // This property defines which parameters in your Coder
          // workspace templates are used to store repository links
          repoUrlParamKeys: ['custom_repo', 'repo_url'],

          params: {
            repo: 'custom',
            region: 'eu-helsinki',
          },
        },
      };

      // ...

      export default app.createRoot(
        <CoderProvider appConfig={appConfig}>
          <AlertDisplay />
          <OAuthRequestDialog />
          <AppRouter>
            <Root>{routes}</Root>
          </AppRouter>
        </CoderProvider>,
      );

  - intro: 'Add the `CoderWorkspacesCard` card to the entity page.'
    language: typescript
    code: |
      // packages/app/src/components/catalog/EntityPage.tsx

      import { CoderWorkspacesCard } from '@coder/backstage-plugin-coder';

      // We recommend placing the component inside of overviewContent
      const overviewContent = (
        <Grid container spacing={3} alignItems="stretch">
          {entityWarningContent}
          <Grid item md={6}>
            <EntityAboutCard variant="gridItem" />
          </Grid>

          {/* Coder component should go inside Grid to help it work with MUI layouts */}
          <Grid item md={6} xs={12}>
            <CoderWorkspacesCard readEntityData />
          </Grid>

          {/* Other elements for overviewContent go here */}
        </Grid>
      );
  - intro: In addition to the above you can also add additional properties to each `catalog-info.yaml` file for a given repo
    language: yaml
    code: |
      apiVersion: backstage.io/v1alpha1
      kind: Component
      metadata:
        name: python-project
      spec:
        type: other
        lifecycle: unknown
        owner: pms

        # Properties for the Coder plugin are placed here
        coder:
          templateName: 'devcontainers'
          mode: 'auto'
          params:
            repo: 'custom'
            region: 'us-pittsburgh'


---

### Useful things to know

You can also wrap a single page or component with CoderProvider if you only need Coder in a specific part of your app. See the Coder API reference (particularly the section on the CoderProvider component) for more details.

### Links

- [Coder announcing the plugin](https://coder.com/blog/coder-backstage-plugin)
- [@coder/backstage-plugin-coder](https://www.npmjs.com/package/@coder/backstage-plugin-coder) on npm
- [coder/backstage-plugins](https://github.com/coder/backstage-plugins) repo
