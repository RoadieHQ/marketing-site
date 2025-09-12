---
humanName: Rollbar
heading: 'Backstage Rollbar Plugin'
lead: 'Correlate services with problems in production'
npmjsPackage: "@backstage-community/plugin-rollbar"
codeLocation: "https://github.com/backstage/community-plugins/tree/main/workspaces/rollbar/plugins/rollbar"
attribution:
  text: '@andrewthauer'
  href: https://github.com/andrewthauer

seo:
  title: 'Backstage Rollbar Plugin | Roadie'
  description: |
    The Backstage Rollbar plugin shows you errors which are affecting
    your production services, directly inside Backstage.

logoImage: '../../assets/logos/rollbar/rollbar-logo-color.webp'

coverImage: '../../assets/rollbar-plugin-1550x715.webp'
coverImageAlt: 'A screenshot of the Rollbar plugin. It is showing a list of errors.'

gettingStarted:
  - intro: |
      Ensure you have the Rollbar Backend plugin installed. See the notes below to learn how
      to add a Rollbar API token to Backstage.
  - intro: 'Add Rollbar configuration to your Backstage app'
    language: 'yaml'
    code: |
      # app.config.yaml
      rollbar:
        organization: organization-name
        # used by rollbar-backend
        accountToken: ${ROLLBAR_ACCOUNT_TOKEN}
  - intro: 'Install the plugin in your Backstage instance'
    language: 'bash'
    code: 'yarn add @backstage/plugin-rollbar'
  - intro: 'Add the plugin to the list of plugins'
    language: 'typescript'
    code: |
      // packages/app/src/plugins.ts
      export { rollbarPlugin } from '@backstage/plugin-rollbar';
  - intro: 'Add the plugin to your Backstage instance.'
    language: 'typescript'
    code: |
      // packages/app/src/components/catalog/EntityPage.tsx
      import { EntityRollbarContent } from '@backstage/plugin-rollbar';

      const serviceEntityPage = (
        <EntityLayout>
          ...
          <EntityLayout.Route path="/rollbar" title="Rollbar">
            <EntityRollbarContent />
          </EntityLayout.Route>
          ...
        </EntityLayout>
      );
  - intro: Annotate entities with the rollbar project slug
    language: 'yaml'
    code: |
      # catalog-info.yaml
      metadata:
        annotations:
          rollbar.com/project-slug: organization-name/project-name
---

You can find account access tokens by navigating to your organization settings -> Account Access Tokens in your Rollbar account.


![Rollbar access token page](./rollbar-access-tokens.webp)
