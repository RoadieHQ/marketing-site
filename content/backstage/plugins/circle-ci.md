---
humanName: Circle CI
heading: 'Backstage Circle CI Plugin'
lead: 'See Circle CI Builds in Backstage'
attribution:
  text: Spotify
  href: https://spotify.com
  tags: ['frontend']

seo:
  title: 'Backstage Circle CI Plugin | Roadie'
  description: |
    The Backstage Circle CI plugin integrates with Circle CI to show your build
    information inside Backstage where it can be associated with your services.

logoImage: '../../assets/logos/circle-ci/circle-ci-logo-only-black.png'

coverImage: '../../assets/circle-ci-plugin.png'
coverImageAlt: 'A list of builds in a table along with a status and retry button for each build.'

gettingStarted:
  # What will this step accomplish?
  - intro: Install the plugin
    language: bash
    code: yarn add @backstage/plugin-circleci

  - intro: Import it into your Backstage application
    language: typescript
    code: |
      // packages/app/src/components/catalog/EntityPage.tsx
      import {
        EntityCircleCIContent,
        isCircleCIAvailable,
      } from '@backstage/plugin-circleci';

  - intro: 'Add the plugin to the CI/CD section'
    language: typescript
    code: |
      // packages/app/src/components/catalog/EntityPage.tsx
      const cicdContent = (
        <EntitySwitch>
          <EntitySwitch.Case if={isCircleCIAvailable}>
            <EntityCircleCIContent />
          </EntitySwitch.Case>
          ...
        </EntitySwitch>

  - intro: 'Add proxy configuration'
    language: yaml
    code: |
      # app-config.yaml
      proxy:
        '/circleci/api':
          target: https://circleci.com/api/v1.1
          headers:
            Circle-Token: ${CIRCLECI_AUTH_TOKEN}

  - intro: 'Get and provide a CIRCLECI_AUTH_TOKEN as an environment variable (see the [CircleCI docs](https://circleci.com/docs/api/#add-an-api-token))'
  
  - intro: 'Add a circleci.com/project-slug annotation to your respective catalog-info.yaml files following [the Component format](https://backstage.io/docs/architecture-decisions/adrs-adr002#format)'
    language: yaml
    code: |
      # Example catalog-info.yaml entity definition file
      apiVersion: backstage.io/v1alpha1
      kind: Component
      metadata:
        # ...
        annotations:
          # This also supports bitbucket/xxx/yyy
          circleci.com/project-slug: github/my-org/my-repo
      spec:
        type: service
        # ...

---
