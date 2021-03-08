---
humanName: New Relic
heading: 'Backstage New Relic Plugin'
lead: 'Observability platform built to help engineers create and monitor their software.'
attribution:
  text: '@timwheelercorn'
  href: https://github.com/timwheelercom

seo:
  title: 'Backstage New Relic Plugin | Roadie'
  description: |
    Observability platform built to help engineers create and monitor their software.

logoImage: './content/assets/logos/new-relic/logo-relic.png'

coverImage: './content/assets/new-relic-plugin.png'
coverImageAlt: 'A screenshot of the GCP Projects plugin.'

gettingStarted:
  - intro: Install the plugin into Backstage.
    language: bash
    code: 'yarn add @backstage/plugin-newrelic'

  - intro: Add plugin to the list of plugins.
    language: typescript
    code: |
      // packages/app/src/plugins.ts
      export { plugin as Newrelic } from '@backstage/plugin-newrelic';

  - intro: Add the proxy config
    language: YAML
    code: |
      // app-config.yaml
      proxy:
        '/newrelic/apm/api':
          target: https://api.newrelic.com/v2
          headers:
            X-Api-Key:
              $env: NEW_RELIC_REST_API_KEY

  - intro: Navigate to youdomain.com/newrelic.
---
