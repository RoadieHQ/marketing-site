---
humanName: Travis CI
heading: 'Backstage Travis CI Plugin'
lead: 'See builds in Backstage'
attribution:
  text: Roadie
  href: https://roadie.io

seo:
  title: 'Backstage Travis CI Plugin | Roadie'
  description: |
    The Backstage Travis CI plugin integrates with Travis CI to show your build
    information inside Backstage and associate it with your services.

logoImage: '../../assets/logos/travis-ci/travis-ci-mascot-200x200.png'

coverImage: '../../assets/travis-ci-plugin-1642x1027.png'
coverImageAlt: 'A screenshot of the Travis CI plugin. It is showing a list of builds for a sample service.'

gettingStarted:
  - intro: 'In the `backstage/packages/app` project add the plugin as a `package.json` dependency:'
    language: 'bash'
    code: 'yarn add @roadiehq/backstage-plugin-travis-ci'

  - intro: Add proxy configuration'
    language: 'yaml'
    code: |
      // app-config.yaml
      proxy:
        # ...

        '/travisci/api':
          target: https://api.travis-ci.com
          changeOrigin: true
          headers:
            Authorization:
              $secret:
                env: TRAVISCI_AUTH_TOKEN
            travis-api-version: 3

  - intro: 'Add plugin to the list of plugins:'
    language: 'ts'
    code: |
      // packages/app/src/plugins.ts
      export { plugin as TravisCI } from '@roadiehq/backstage-plugin-travis-ci';

  - intro: 'Add plugin to the `entitytPage.tsx` source file:'
    language: typescript
    code: |
      // packages/app/src/components/catalog/EntityPage.tsx
      case isTravisCIAvailable(entity):
        content = <RecentTravisCIBuildsWidget entity={entity} />;
        break;

  - intro: 'add annotation to the yaml config file of a component'
    language: yaml
    code: 'travis-ci.com/repo-slug: owner-name/project-name'

  - intro: 'add your developer api key (from https://travis-ci.com/account/preferences) to the environmental variables for your backstage backend server'
    language: bash
    code: 'TRAVISCI_AUTH_TOKEN="token your-api-key"'
---

## Features

- List Travis CI Builds
- Retrigger builds

To use the Travis CI Backstage plugin, first visit Travis CI to get an API token: https://travis-ci.com/account/preferences

There are two versions of Travis CI: https://travis-ci.com and https://travis-ci.org. travis-ci.org is deprecated and not supported in this plugin.

![travis-ci-copy-auth-token-1036x603](./travis-ci-copy-auth-token-1036x603.png)

Copy the token to your clipboard.

Each build can be retried via the column on the right hand side.
