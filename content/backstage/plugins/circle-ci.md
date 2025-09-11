---
humanName: Circle CI
heading: 'Backstage Circle CI Plugin'
lead: 'See Circle CI Builds in Backstage'
npmjsPackage: @circleci/backstage-plugin
attribution:
  text: CircleCI
  href: https://circleci.com/

seo:
  title: 'Backstage Circle CI Plugin | Roadie'
  description: |
    The Backstage Circle CI plugin integrates with Circle CI to show your build
    information inside Backstage where it can be associated with your services.

logoImage: '../../assets/logos/circle-ci/circle-ci-logo-only-black.webp'

coverImage: '../../assets/circle-ci-plugin.jpg'
coverImageAlt: 'A list of builds in a table along with a status and retry button for each build.'

availableOnRoadie: true
roadieDocsPath: /integrations/circleci/

gettingStarted:
  # What will this step accomplish?
  - intro: Install the plugin
    language: bash
    code: yarn add --cwd packages/app @circleci/backstage-plugin

  - intro: |
      'Get and provide a CIRCLECI_AUTH_TOKEN as an environment variable (see the [CircleCI docs](https://circleci.com/docs/api/#add-an-api-token))'

  - intro: 'Add proxy configuration'
    language: yaml
    code: |
      # app-config.yaml
      proxy:
        '/circleci/api':
          target: https://circleci.com/api/v1.1
          headers:
            Circle-Token: ${CIRCLECI_AUTH_TOKEN}

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

### Features

- List top 50 builds for a project
- Dive into one build to see logs
- Polling (logs only)
- Retry builds
- Works for both project and personal tokens
- Pagination for builds

### Limitations

- CircleCI has pretty strict rate limits per token, be careful with opened tabs
- CircleCI doesn't provide a way to auth by 3rd party (e.g. GitHub) token, nor by calling their OAuth endpoints, which currently stands in the way of better auth integration with Backstage (reference feature request and discussion topic)

### Useful links

- [npm](https://www.npmjs.com/package/@circleci/backstage-plugin)
- [GitHub](https://github.com/CircleCI-Public/backstage-plugin)
- [Roadie Docs](https://roadie.io/docs/integrations/circleci/)
