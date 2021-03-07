---
humanName: Sentry
heading: 'Backstage Sentry Plugin'
lead: 'Correlate services with problems in production'
attribution:
  text: Spotify
  href: https://spotify.com

seo:
  title: 'Backstage Sentry Plugin | Roadie'
  description: |
    The Backstage Sentry plugin alerts you to errors which are affecting
    your production services, directly inside Backstage.

logoImage: '../../assets/logos/sentry/sentry-glyph-dark.png'

coverImage: '../../assets/sentry-plugin-1604x716.png'
coverImageAlt: 'A screenshot of the Sentry plugin. It is showing a list of errors.'

gettingStarted:
  - intro: |
      Ensure you have the Sentry Backend plugin installed. See the notes below to learn how
      to add a Sentry API token to Backstage.

  - intro: 'Install the plugin in your Backstage instance'
    language: 'bash'
    code: 'yarn add @backstage/plugin-sentry'

  - intro: 'Add the plugin to the list of plugins'
    language: 'typescript'
    code: |
      // packages/app/src/plugins.ts
      export { plugin as Sentry } from '@backstage/plugin-sentry';
---

The Backstage backend must have access to a `SENTRY_TOKEN` API key environment variable.

To get an API key, first create an internal application in the Sentry UI. Do this at the
organization level, rather than the personal level.

Give your application a name and a Webhook URL, then be sure to give the ability to read
issues and projects. These will be displayed in Backstage so it's important that the plugin
can access them.

![Creating an internal application in the Sentry UI](./sentry-create-internal-application-1590x1621.png)

Once you have an internal application, you can create a token. Run the Backstage backend with
this token.

```bash
env SENTRY_TOKEN=123abc yarn start
```
