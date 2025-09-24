---
humanName: Snyk
heading: 'Backstage Snyk Plugin'
lead: 'Correlate services with problems in production'
attribution:
  text: Snyk
  href: https://snyk.io

seo:
  title: 'Backstage Snyk Plugin | Roadie'
  description: |
    The Backstage Sentry plugin alerts you to errors which are affecting
    your production services, directly inside Backstage.

logoImage: '../../assets/logos/snyk/snyk-avatar.webp'

npmjsPackage: "backstage-plugin-snyk"
codeLocation: "https://github.com/snyk-tech-services/backstage-plugin-snyk"

availableOnRoadie: true
roadieDocsPath: /integrations/snyk/

gettingStarted:
  - intro: 'Install the Snyk plugin package in your Backstage app'
    language: 'bash'
    code: 'yarn add --cwd packages/app backstage-plugin-snyk'

  - intro: Obtain a Snyk token ((a service account with Viewer permission at your group level is preferred) and save it as an env variable.
    language: bash
    code: export SNYK_TOKEN="123-123-123-123"

  - intro: 'Add the Snyk proxy configuration to the app-config.yaml file in the root directory. The User Agent helps Snyk track API traffic from Backstage setups and encourages them to invest more in the plugin.'
    language: 'yaml'
    code: |
      proxy:
        endpoints:
          ...
          /snyk:
            # Host of the API to use for calls.
            # For Snyk Enterprise customers with regional contracts, change this to api.eu.snyk.io (for EU) or api.au.snyk.io (for AUS) (see https://docs.snyk.io/working-with-snyk/regional-hosting-and-data-residency)
            target: https://api.snyk.io/ 
            headers:
              User-Agent: tech-services/backstage-plugin/1.x
              Authorization: token ${SNYK_TOKEN}
          ...

  - intro: You can also optionally add the following config to your `app.config`.
    language: yaml
    code: |
      snyk:
        # Host of the Web UI to render links. Defaults to "app.snyk.io"
        # If you use an EU or AU Snyk account, change this to app.eu.snyk.io or app.au.snyk.io
        appHost: app.snyk.io
        #
        # Uncomment to specify the version of the API to use for calls. Defaults to "2024-02-28".
        # Override with care, not all versions have a target API.
        # apiVersion: 2024-02-28
        # Uncomment to specify the version for the issues API specifically. Defaults to 2024-01-23
        # issuesApiVersion: 2024-01-23
        #
        # Mocks the API calls, useful for development and for testing the plugin without a Snyk account. Defaults to "false".
        mocked: false
        #
        # Shows resolved issues in all graphs. Defaults to "false" to show only non-resolved issues.
        showResolvedInGraphs: false
  - intro: 'Add the Snyk plugin components to your Entity page'
    language: 'typescript'
    code: |
      // packages/app/src/components/catalog/EntityPage.tsx
      import {
        SnykOverview,
        EntitySnykContent,
        isSnykAvailable,
      } from "backstage-plugin-snyk";

      ...

      const serviceEntityPage = (
        ...
        <EntityLayout.Route 
          path="/snyk"
          title="Snyk"
          // Uncomment the line below if you'd like to only show the tab on entities with the correct annotations already set
          // if={isSnykAvailable}
        >
          <EntitySnykContent />
        </EntityLayout.Route>
      );
  - intro: To show the vulnerability count widget, add this to your Entity page.tsx
    language: 'typescript'
    code: |
      // packages/app/src/components/catalog/EntityPage.tsx
      const overviewContent = (
        <Grid container spacing={3} alignItems="stretch">
          ...
          <Grid item md={6} if={isSnykAvailable}>
            <SnykOverview />
          </Grid>
        </Grid>
      );

  - intro: Add one or more snyk annotations to the catalog-info.yaml files in your catalog. For example, you could add org-id, targets, target-id and project-ids.
    language: yaml
    code: |
      apiVersion: backstage.io/v1alpha1
      kind: Component
      metadata:
        name: goof
        description: Goof
        annotations:
          snyk.io/org-id: 361fd3c0-41d4-4ea4-ba77-09bb17890967
          snyk.io/targets: Snyk Demo/java-goof,508d2263-ea8a-4e42-bc9d-844de21f4172
          snyk.io/target-id: aarlaud-snyk/github-stats
          snyk.io/project-ids: 7439e322-f9c1-4c42-8367-002b33b9d946,db066cb9-b373-46da-b918-b49b541e0d63
          snyk.io/exclude-project-ids: 4737fc9c-3894-40ba-9dc5-aa8ae658c9f6,38e02916-0cf7-4927-ba98-06afae9fef36
      spec:
        type: service
        lifecycle: production
        owner: guest
        ....
---

### Snyk Annotations

- snyk.io/target-id: Specify a single target by name or ID. Using the target ID will avoid an API call and be faster. Use this API endpoint to get the Target IDs.
- snyk.io/targets: Specify one or more targets by name or ID. Using the target ID will avoid an API call and be faster. Use this API endpoint to get the Target IDs.
- snyk.io/project-ids: The project ID (see slug in URL or ID in project settings). If there are multiple projects (e.g., multiple package.json or pom files), add them comma-separated.
- snyk.io/exclude-project-ids: Exclude specific projects you might not want.

### Useful Links

- [npm](https://www.npmjs.com/package/backstage-plugin-snyk)
- [GitHub](https://github.com/snyk-tech-services/backstage-plugin-snyk)
- [Roadie Docs](https://roadie.io/docs/integrations/snyk/)
- [Snyk docs](https://snyk.io/blog/backstage-integration-with-the-snyk-api/)
