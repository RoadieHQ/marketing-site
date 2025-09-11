---
humanName: Jira
heading: 'Backstage Jira Plugin'
lead: 'See Jira summary in Backstage'
npmjsPackage: "@roadiehq/backstage-plugin-jira"
attribution:
  text: Roadie
  href: https://roadie.io
intro: |
  Jira is an issue tracking product developed by Atlassian that allows bug tracking and agile project management. Jira offers numerous features like sprints for Scrum management and other agile boards like Kanban. This allows teams to organize projects, define, assign and prioritize tasks. Furthermore, Jira is ideal for progress tracking, bug tracking and complete transparency throughout the entire project lifecycle.

  The Jira Backstage plugin lets you bring the Jira project related to your service into the Catalog. You can keep track of tasks, stories, bugs, and epics from the service page in Backstage.

  In this guide you'll find:

    - [Installation steps](#installation-steps)
    - [Required annotations](#section-add-annotations)
    - [Obtaining a Jira token](#things-to-know)

seo:
  title: 'Backstage Jira Plugin | Roadie'
  description: |
    The Backstage Jira plugin integrates with Jira to show Jira
    information inside Backstage where it can be associated with your project.

logoImage: '../../assets/logos/jira/jira_logo.webp'

coverImage: '../../assets/jira-plugin.webp'
coverImageAlt: 'A preview of Jira plugin including tasks summary, project information and Activity Stream.'

availableOnRoadie: true
roadieDocsPath: /integrations/jira/

thingsToKnowTitle: Using a Jira token
thingsToKnowHostDependant: true
thingsToKnowOnRoadie: /docs/integrations/jira/#step-1-create-an-api-token

gettingStarted:
  - intro: Install the plugin into Backstage.
    language: bash
    code: yarn --cwd packages/app add @roadiehq/backstage-plugin-jira

  - intro: Add proxy config
    language: yaml
    code: |
      # app-config.yaml
      proxy:
        '/jira/api':
          target: '<JIRA_URL>'
          headers:
            Authorization: ${JIRA_TOKEN}
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

  - intro: 'Add plugin API to your Backstage instance'
    language: typescript
    code: |
      // packages/app/src/components/catalog/EntityPage.tsx
      import { EntityJiraOverviewCard, isJiraAvailable, hasJiraQuery } from '@roadiehq/backstage-plugin-jira';

      const overviewContent = (
        <Grid container spacing={3} alignItems="stretch">
          <EntitySwitch>
            <EntitySwitch.Case if={isJiraAvailable}>
              <Grid item md={6}>
                <EntityJiraOverviewCard />
              </Grid>
            </EntitySwitch.Case>
            <EntitySwitch.Case if={hasJiraQuery}>
               <Grid item md={6}>
                 {/* This card can be used as an alternative or in addition to the overview card */}
                 <EntityJiraQueryCard title="Our Custom Query" />
               </Grid>
             </EntitySwitch.Case>
          </EntitySwitch>
        </Grid>
      );

  - intro: Add annotation to the yaml config file of a component
    language: yaml
    sectionId: 'add-annotations'
    code: |
      metadata:
        annotations:
          jira/project-key: <example-jira-project-key>
          jira/component: <example-component> # optional, you might skip this value to fetch data for all components
          jira/token-type: Bearer # optional, used for Activity stream feed. If you are using Basic auth you can skip this.
          jira/label: <example-label> # optional, refine filter based on a label or labels (CSV)
          jira/all-issues-jql: # optional, used by EntityJiraQueryCard, this query supports basic templating with the above annotations if present, and information from the user profile. e.g. "assignee = {{ userEmail }} AND label = ({{ label }})"

  - intro: Even though you can use Bearer token please keep in mind that Activity stream feed will only contain entries that are visible to anonymous users. In order to view restricted content you will need to authenticate via Basic authentication, as described in official documentation (https://developer.atlassian.com/server/framework/atlassian-sdk/consuming-an-activity-streams-feed/#authentication).

  - intro: Provide the JIRA_TOKEN environmental variable (instructions at the notes below)
---


1. Obtain you [personal token from Jira](https://id.atlassian.com/manage-profile/security/api-tokens).
2. Create a base64-encoded string by converting a string in format

   ```
   <your-atlassian-account-mail>:<your-jira-token>
   ```

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
