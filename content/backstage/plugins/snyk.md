---
humanName: Sentry
heading: 'Backstage Snyk Plugin'
lead: 'Correlate services with problems in production'
attribution:
  text: Spotify
  href: https://spotify.com

seo:
  title: 'Backstage Snyk Plugin | Roadie'
  description: |
    The Backstage Sentry plugin alerts you to errors which are affecting
    your production services, directly inside Backstage.

logoImage: '../../assets/logos/sentry/sentry-glyph-dark.webp'

coverImage: '../../assets/sentry-plugin-1604x716.webp'
coverImageAlt: 'A screenshot of the Sentry plugin. It is showing a list of errors.'

availableOnRoadie: true
roadieDocsPath: /sentry/

gettingStarted:
  - intro: 'Install the plugin package in your Backstage app'
    language: 'bash'
    code: 'yarn add @backstage/plugin-sentry'
  - intro: 'Configure your proxy to add credentials to requests to sentry.'
    language: 'bash'
    code: |
      // app-config.yaml
      proxy:
        '/sentry/api':
        target: https://sentry.io/api/
        allowedMethods: [ 'GET' ]
        headers:
          Authorization: Bearer ${SENTRY_TOKEN}
      sentry:
        organization: 'your org'
  - intro: 'Add the plugin components to your entity page'
    language: 'bash'
    code: |
      import { EntitySentryContent, EntitySentryCard } from '@backstage/plugin-sentry';
      // Add to the overview grid
      const overviewContent = (
        <Grid container spacing={3} alignItems="stretch">
           {/* ...other routes */}
           <Grid item md={6}>
             <EntitySentryCard />
           </Grid>
        </Grid>
      );
      // Add a Sentry Tab
      const serviceEntityPage = (
        <EntityLayout>
          <EntityLayout.Route path="/sentry" title="Sentry">
            <EntitySentryContent />
          </EntityLayout.Route>
        </EntityLayout>
      );
---

The Backstage backend must have access to a `SENTRY_TOKEN` API key environment variable.

To get an API key, first create an internal application in the Sentry UI. Do this at the
organization level, rather than the personal level.

Give your application a name and a Webhook URL, then be sure to give the ability to read
issues and projects. These will be displayed in Backstage so it's important that the plugin
can access them.

![Creating an internal application in the Sentry UI](./sentry-create-internal-application-1590x1621.jpg)

Once you have an internal application, you can create a token. Run the Backstage backend with
this token.

```bash
env SENTRY_TOKEN=123abc yarn start
```
