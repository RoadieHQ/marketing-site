---
humanName: LaunchDarkly
heading: 'Backstage LaunchDarkly Plugin'
lead: 'LaunchDarkly feature flags associated to software in the catalog'
npmjsPackage: "@roadiehq/backstage-plugin-launchdarkly"
codeLocation: "https://github.com/RoadieHQ/roadie-backstage-plugins/tree/main/plugins/frontend/backstage-plugin-launchdarkly"
attribution:
  text: Roadie
  href: https://roadie.io

seo:
  title: 'Backstage LaunchDarkly Plugin | Roadie'
  description: |
    LaunchDarkly feature flags associated to software in the catalog.

logoImage: '../../assets/logos/launchdarkly/logo-launchdarkly.webp'

availableOnRoadie: true
roadieDocsPath: /integrations/launchdarkly/

gettingStarted:
  - intro: Install the plugin into Backstage.
    language: bash
    code: |
      cd packages/app
      yarn add @roadiehq/backstage-plugin-launchdarkly

  - intro: Add proxy configurations in the app-config.yaml file
    language: 'yaml'
    code: |
      // app-config.yaml
      proxy:
        # ...
        '/launchdarkly/api':
          target: https://app.launchdarkly.com/api
          headers:
            Authorization: ${LAUNCHDARKLY_API_KEY}

  - title: Add LaunchDarkly cards.
  - intro: Add the EntityLaunchdarklyContextOverviewCard
    language: typescript
    code: |
      // packages/app/src/components/catalog/EntityPage.tsx
      <EntitySwitch>
        <EntitySwitch.Case if={isLaunchdarklyContextAvailable}>
          <EntityLaunchdarklyContextOverviewCard />
        </EntitySwitch.Case>
      </EntitySwitch>

  - intro: Add the EntityLaunchdarklyProjectOverviewContent
    language: typescript
    code: |
      // packages/app/src/components/catalog/EntityPage.tsx
      <EntityLayout.Route path="/launch-darkly-projects" title="LaunchDarkly">
        <EntityLaunchdarklyProjectOverviewContent />
      </EntityLayout.Route>

  - title: Annotate your catalog-info.yaml files with the appropriate LaunchDarkly contexts and keys
  - intro: Add the appropriate LaunchDarkly contexts and keys to your entity pages.
    language: yaml
    code: |
      apiVersion: backstage.io/v1alpha1
      kind: Component
      metadata:
        name: launchdarklytest
        annotations:
          launchdarkly.com/project-key: default
          launchdarkly.com/environment-key: test
          launchdarkly.com/context: '{ "kind": "tenant", "key": "blah", "name": "blah" }'
      spec:
        type: service
        lifecycle: unknown
        owner: 'group:engineering'

  - intro: You can add filter-tags and filter-query annotations to reduce the volume of flags returned
    language: yaml
    code: |
      apiVersion: backstage.io/v1alpha1
      kind: Component
      metadata:
        name: launchdarklytest
        annotations:
          launchdarkly.com/project-key: default
          launchdarkly.com/environment-key: test
          launchdarkly.com/context: '{ "kind": "tenant", "key": "blah", "name": "blah" }'
          launchdarkly.com/filter-tags: '["tagged-flag"]'
          launchdarkly.com/filter-query: 'dark-mode'
      spec:
        type: service
        lifecycle: unknown
        owner: 'group:engineering'
---

### Authentication

The LaunchDarkly API uses token-based authentication so in order to retrieve results you will need it. To generate an API token, go to https://docs.launchdarkly.com/home/account/api.

### Useful links

- [npm](https://www.npmjs.com/package/@roadiehq/backstage-plugin-launchdarkly)
- [GitHub](https://roadie.io/docs/integrations/launchdarkly/)
- [Roadie docs](https://roadie.io/docs/integrations/launchdarkly/)
