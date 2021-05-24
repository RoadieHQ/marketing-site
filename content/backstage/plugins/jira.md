---
humanName: Jira
heading: 'Backstage Jira Plugin'
lead: 'See Jira summary in Backstage'
attribution:
  text: Roadie
  href: https://roadie.io

seo:
  title: 'Backstage Jira Plugin | Roadie'
  description: |
    The Backstage Jira plugin integrates with Jira to show Jira
    information inside Backstage where it can be associated with your project.

logoImage: '../../assets/logos/jira/jira_logo.png'

coverImage: '../../assets/jira-plugin.png'
coverImageAlt: 'A preview of Jira plugin including tasks summary, project information and Activity Stream.'

gettingStarted:
  - intro: Install the plugin into Backstage.
    language: bash
    code: yarn add @roadiehq/backstage-plugin-jira

  - intro: Add proxy config
    language: yaml
    code: |
      # app-config.yaml
      proxy:
        '/jira/api':
          target: <JIRA_URL>
          headers:
            Authorization:
              $env: JIRA_TOKEN
            Accept: 'application/json'
            Content-Type: 'application/json'
            X-Atlassian-Token: 'nocheck'
            User-Agent: "MY-UA-STRING"

  - intro: Set img-src in Content Security Policy
    language: yaml
    code: |
      // app-config.yaml
      backend:
        # ...
        csp:
          img-src: 
            # "'self'" and 'data' are from the backstage default but must be set since img-src is overriden
            - "'self'"
            - 'data:'
            # Allow your Jira instance for @roadiehq/backstage-plugin-jira
            - 'JIRA_URL'

  - intro: Add plugin to the list of plugins
    language: typescript
    code: |
      // packages/app/src/plugins.ts
      export { plugin as Jira } from '@roadiehq/backstage-plugin-jira';

  - intro: 'Add plugin API to your Backstage instance'
    language: typescript
    code: |
      // packages/app/src/components/catalog/EntityPage.tsx
      import {
        JiraCard,
        isPluginApplicableToEntity as isJiraAvailable,
      } from '@roadiehq/backstage-plugin-jira';

      const OverviewContent = ({ entity }: { entity: Entity }) => (
        <Grid container spacing={3} alignItems="stretch">
          ...
          {isJiraAvailable(entity) && (
            <Grid item md={6}>
              <JiraCard entity={entity} />
            </Grid>
          )}
          ...
        </Grid>
      );
  - intro: Add annotation to the yaml config file of a component
    language: yaml
    code: |
      metadata:
        annotations:
          jira/project-key: <example-jira-project-key>
          jira/component: <example-component> # optional, you might skip this value to fetch data for all components
  - intro: Provide the JIRA_TOKEN environmental variable (instructions at the notes below)
---

## Get and provide `JIRA_TOKEN` as env variable.

1. Obtain you personal token from jira - https://id.atlassian.com/manage-profile/security/api-tokens
2. Create a base64-encoded string by converting a string in format

   "<your-atlassian-account-mail>:<your-jira-token>"

   for example:

   ```
   jira-mail@example.com:hTBgqVcrcxRYpT5TCzTA9C0F
   ```

   converts to base64

   ```
   amlyYS1tYWlsQGV4YW1wbGUuY29tOmhUQmdxVmNyY3hSWXBUNVRDelRBOUMwRg==
   ```

3. Save it as the environmental variable `JIRA_TOKEN` with `Basic` prefix, for example:

   ```
   JIRA_TOKEN='Basic amlyYS1tYWlsQGV4YW1wbGUuY29tOmhUQmdxVmNyY3hSWXBUNVRDelRBOUMwRg=='
   ```

   Alternatively, if you are running backstage locally, you can provide the variable by the command

   ```
   env JIRA_TOKEN='Basic amlyYS1tYWlsQGV4YW1wbGUuY29tOmhUQmdxVmNyY3hSWXBUNVRDelRBOUMwRg==' yarn dev
   ```
