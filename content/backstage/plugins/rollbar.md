---
humanName: Rollbar
heading: 'Backstage Rollbar Plugin'
lead: 'Correlate services with problems in production'
attribution:
  text: '@andrewthauer'
  href: https://github.com/andrewthauer

seo:
  title: 'Backstage Rollbar Plugin | Roadie'
  description: |
    The Backstage Rollbar plugin shows you errors which are affecting
    your production services, directly inside Backstage.

logoImage: '../../assets/logos/rollbar/rollbar-logo-color.png'

coverImage: '../../assets/rollbar-plugin-1550x715.png'
coverImageAlt: 'A screenshot of the Rollbar plugin. It is showing a list of errors.'

gettingStarted:
  - intro: |
      Ensure you have the Rollbar Backend plugin installed. See the notes below to learn how
      to add a Rollbar API token to Backstage.
  - intro: 'Install the plugin in your Backstage instance'
    language: 'bash'
    code: 'yarn add @backstage/plugin-rollbar'
  - intro: 'Add the plugin to the list of plugins'
    language: 'typescript'
    code: |
      // packages/app/src/plugins.ts
      export { plugin as Rollbar } from '@backstage/plugin-rollbar';
  - intro: 'Add the plugin API to your Backstage instance.'
    language: 'typescript'
    code: |
      // packages/app/src/api.ts
      import { RollbarClient, rollbarApiRef } from '@backstage/plugin-rollbar';

      // ...

      builder.add(
        rollbarApiRef,
        new RollbarClient({
          apiOrigin: backendUrl,
          basePath: '/rollbar',
        }),
      );

      // Alternatively you can use the mock client
      // builder.add(rollbarApiRef, new RollbarMockClient());
---

At the time of writing, in July 2020, Rollbar are rolling out a new UI which doesn't seem to
have the ability to create API keys.

To switch back to the old UI temporarily, click your organization's name in the bottom left
corner and select "Switch to old UI".

Once there, go to your Account settings and click Account access tokens in the sidebar. Here
you can "Add new access token". Make sure it has the `read` scope.

![Rollbar access token page](./rollbar-accounts-access-tokens-1590x1397.png)
