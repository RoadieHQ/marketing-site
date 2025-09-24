---
humanName: Jira
heading: 'Backstage Jira Plugin'
lead: 'See Jira summary in Backstage'
npmjsPackage: "@roadiehq/backstage-plugin-jira"
codeLocation: "https://github.com/RoadieHQ/roadie-backstage-plugins/tree/main/plugins/frontend/backstage-plugin-jira"
attribution:
  text: Roadie
  href: https://roadie.io
intro: |
  [Jira](https://www.atlassian.com/software/jira) is Atlassian's flagship issue tracking and agile project management platform used by thousands of engineering teams worldwide to plan, track, and manage software development projects. Whether you're running Scrum sprints, managing Kanban boards, or tracking bugs across complex systems, Jira provides the structure and visibility teams need to deliver quality software efficiently.

  As a software engineer working in a microservices environment, you likely interact with multiple Jira projects daily—checking sprint progress, reviewing bug reports, and tracking feature development across different teams and services. The challenge is that this information often lives in isolation from your development workflow, requiring constant context switching between Backstage, your code repositories, and Jira's interface.

  **The Jira Backstage plugin eliminates this friction by surfacing critical project information directly in your developer portal.** Originally developed by Roadie and now widely adopted across the Backstage ecosystem, this plugin connects your Backstage entities to their corresponding Jira projects, providing real-time visibility into development progress without leaving your service catalog.

  ### What the plugin provides

  The plugin integrates seamlessly with both Jira Cloud and Server/Data Center instances to display:

  - **Project overview and health metrics** - See active issues, sprint progress, and project status at a glance
  - **Issue tracking and lifecycle management** - Track stories, bugs, and epics directly from your service pages
  - **Activity streams and recent updates** - Monitor project activity and stay informed of changes affecting your services
  - **Custom JQL query results** - Display filtered issue lists based on complex queries tailored to your team's needs
  - **Personal dashboards** - View tickets assigned to you across all projects from your Backstage homepage

  ### Why use this plugin

  Instead of maintaining separate workflows for checking project status in Jira's interface, your developers can access this information directly alongside service documentation, dependencies, and deployment status in Backstage. This unified view reduces context switching and provides a complete picture of your service's development lifecycle.

  The plugin is particularly valuable for:
  - **Platform engineering teams** who want to provide developers with project visibility without requiring deep Jira expertise
  - **Development teams practicing agile methodologies** who need quick access to sprint status and issue tracking during development
  - **Organizations with multiple Jira projects** who want centralized visibility across services and teams
  - **Teams using GitOps workflows** who want to correlate deployment status with development progress

  Major organizations like **[John Lewis & Partners](https://medium.com/john-lewis-software-engineering/weve-gone-backstage-this-is-how-we-use-it-on-our-digital-platform-b299cd4acb24)** have successfully integrated Jira data into their Backstage deployments, with John Lewis noting: "We use Backstage with data aggregated from key applications such as Gitlab, Pagerduty, JIRA, Kubecost and Google Cloud, serving that data via Big Query to specific Backstage panels."

  This guide covers installation for both Jira Cloud and Server instances, configuration options for single and multiple projects, and usage examples to help you get started quickly.

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

gettingStarted:
  - intro: Install the plugin into Backstage.
    language: bash
    code: yarn --cwd packages/app add @roadiehq/backstage-plugin-jira

  - intro: Add proxy configuration to app-config.yaml
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

      jira:
        proxyPath: /jira/api
        product: cloud  # Use 'cloud' for Jira Cloud or 'datacenter' for Server/Data Center

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
      import {
        EntityJiraOverviewCard,
        isJiraAvailable,
        hasJiraQuery,
        EntityJiraQueryCard,
      } from '@roadiehq/backstage-plugin-jira';

      const overviewContent = (
        <Grid container spacing={3} alignItems="stretch">
          <EntitySwitch>
            <EntitySwitch.Case if={isJiraAvailable}>
              <Grid item md={12}>
                <EntityJiraOverviewCard />
              </Grid>
            </EntitySwitch.Case>
            <EntitySwitch.Case if={hasJiraQuery}>
               <Grid item md={12}>
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
          # Find this in the project settings page
          jira/project-key: <example-jira-project-key>
          # optional, you might skip this value to fetch data for all components
          jira/component: <example-component> 
          # optional, used for Activity stream feed. If you are using Basic auth you can skip this.
          jira/token-type: Bearer 
          # optional, refine filter based on a label or labels (CSV)
          jira/label: <example-label> 
          # optional, used by EntityJiraQueryCard, this query supports basic templating with the above annotations if present, and information from the user profile. e.g. "assignee = {{ userEmail }} AND label = ({{ label }})"
          jira/all-issues-jql: 

  - intro: Even though you can use Bearer token please keep in mind that Activity stream feed will only contain entries that are visible to anonymous users. In order to view restricted content you will need to authenticate via Basic authentication, [as described in official documentation](https://developer.atlassian.com/server/framework/atlassian-sdk/consuming-an-activity-streams-feed/#authentication).
    language: bash
    code: |
      # Set your environment variable
      export JIRA_TOKEN='Basic <your-base64-encoded-credentials>'

      # Or run Backstage locally with the token
      env JIRA_TOKEN='Basic <your-base64-encoded-credentials>' yarn dev
---

The plugin displays your Jira project information directly in the entity overview, showing issue counts, project details, and activity streams at a glance.

### Plugin Components

The Jira plugin provides several UI components that you can add to your entity pages and homepage:

#### Overview Card

The `EntityJiraOverviewCard` displays essential project information:
- Project name and key
- Issue counts by status (To Do, In Progress, Done)
- Recent project activity
- Direct link to the Jira project dashboard

#### Query Card

The `EntityJiraQueryCard` allows custom JQL queries:
- Displays results of custom JQL searches
- Supports dynamic templating with entity annotations
- Configurable title and query parameters
- Useful for team-specific or filtered views

```typescript
import { EntityJiraQueryCard } from '@roadiehq/backstage-plugin-jira';

<Grid item md={6}>
  <EntityJiraQueryCard title="Critical Bugs" />
</Grid>
```

#### Homepage Component

The `HomePageMyJiraTicketsCard` shows personalized ticket information:
- Open and In Progress tickets assigned to the current user
- Quick access to your most relevant work items
- Integrates with Backstage's user profile system

```typescript
import { HomePageMyJiraTicketsCard } from '@roadiehq/backstage-plugin-jira';

<Grid item xs={12} md={6}>
  <HomePageMyJiraTicketsCard />
</Grid>
```

### Required Annotations

To connect your Backstage entities to Jira projects, add specific annotations to your entity metadata:

#### Basic Project Mapping

For a single Jira project:

```yaml
metadata:
  annotations:
    jira/project-key: MYPROJ
```

#### Component-Specific Issues

To filter issues by Jira component:

```yaml
metadata:
  annotations:
    jira/project-key: MYPROJ
    jira/component: backend-service
```

#### Label-Based Filtering

Filter issues by labels (supports comma-separated values):

```yaml
metadata:
  annotations:
    jira/project-key: MYPROJ
    jira/label: microservice,backend
```

#### Custom JQL Queries

For advanced filtering with JQL (Jira Query Language):

```yaml
metadata:
  annotations:
    jira/project-key: MYPROJ
    jira/all-issues-jql: 'assignee = "{{ userEmail }}" AND status != "Done" AND project = "{{ projectKey }}"'
```

The JQL query supports templating with:
- `{{ userEmail }}` - Current user's email
- `{{ projectKey }}` - The project key from annotations
- `{{ component }}` - Component name from annotations
- `{{ label }}` - Labels from annotations

### Configuration Options

#### Single Jira Instance

For organizations using a single Jira instance:

```yaml
# app-config.yaml
proxy:
  '/jira/api':
    target: 'https://your-company.atlassian.net'
    headers:
      Authorization: ${JIRA_TOKEN}
      Accept: 'application/json'
      Content-Type: 'application/json'
      X-Atlassian-Token: 'nocheck'
      User-Agent: "Backstage-Jira-Plugin"

jira:
  proxyPath: /jira/api
  product: cloud
```

### Authentication Setup

#### Obtaining a Jira API Token

1. Visit [Atlassian API Tokens](https://id.atlassian.com/manage-profile/security/api-tokens)
2. Click "Create API token"
3. Give it a descriptive name (e.g., "Backstage Integration")
4. Copy the generated token immediately (it won't be shown again)

#### Creating the Authentication Header

1. Create a base64-encoded string in the format:
   ```
   <your-atlassian-email>:<your-api-token>
   ```

   For example:
   ```
   john.doe@company.com:hTBgqVcrcxRYpT5TCzTA9C0F
   ```

2. Encode this string to base64:
   ```bash
   echo -n "john.doe@company.com:hTBgqVcrcxRYpT5TCzTA9C0F" | base64
   ```

   Result:
   ```
   am9obi5kb2VAY29tcGFueS5jb206aFRCZ3FWY3JjeFJZcFQ1VEN6VEE5QzBG
   ```

3. Set your environment variable with the `Basic` prefix:
   ```bash
   export JIRA_TOKEN='Basic am9obi5kb2VAY29tcGFueS5jb206aFRCZ3FWY3JjeFJZcFQ1VEN6VEE5QzBG'
   ```

#### Token Types and Activity Streams

For Activity Stream feeds, you can optionally specify the token type:

```yaml
metadata:
  annotations:
    jira/project-key: MYPROJ
    jira/token-type: Bearer  # Default is Basic
```

**Note:** Activity streams with Bearer tokens only show publicly visible content. For private or restricted content, use Basic authentication as described above.

### Feature Flags

The plugin supports feature flags for optional functionality:

#### Linked Pull Requests

Enable the display of linked pull requests in issue views:

```yaml
# app-config.yaml
jira:
  # other config...
  featureFlags:
    showLinkedPRs: true
```

This feature is particularly useful for Jira Data Center instances and provides visibility into code changes associated with specific issues.

### Troubleshooting

#### Common Issues

**Plugin not displaying:** Verify your entity has the correct `jira/project-key` annotation and that the project exists in your Jira instance.

**Authentication errors:** Check that your API token is valid. The user associated with the token should have read access to the projects you're trying to display. Make sure the token is base64 encoded correctly.

**CORS issues:** Ensure your proxy configuration is correct and that the `X-Atlassian-Token: 'nocheck'` header is included.

**Activity stream not showing:** This typically indicates the content is private. Switch to Basic authentication or adjust your Jira project permissions.

#### Required Permissions

Your Jira user needs these permissions:
- **Browse Projects** - View project details and issues
- **View Development Tools** - See linked development information
- **Read Attachments** - View issue attachments in activity streams

#### Performance Considerations

For large Jira projects, consider:
- Using component or label filters to limit the number of issues displayed
- Implementing custom JQL queries to show only relevant issues
- Configuring appropriate caching headers in your proxy setup

### Advanced Usage

#### Custom Activity Stream Integration

Configure the Activity Stream to show specific types of updates:

```yaml
metadata:
  annotations:
    jira/project-key: MYPROJ
    jira/component: api-service
    jira/label: critical,backend
    # This will show activity for critical backend issues in the api-service component
```

#### Dashboard Integration

Use the `HomePageMyJiraTicketsCard` component to create personalized dashboards:

```typescript
// packages/app/src/components/home/HomePage.tsx
import { HomePageMyJiraTicketsCard } from '@roadiehq/backstage-plugin-jira';

<Grid container>
  <Grid item xs={12} md={6}>
    <HomePageMyJiraTicketsCard />
  </Grid>
  {/* Other dashboard components */}
</Grid>
```

This provides developers with immediate visibility into their assigned work when they open Backstage, improving productivity and reducing the need to check multiple tools.

### References

- [Jira Backstage Plugin (Frontend)](https://github.com/RoadieHQ/roadie-backstage-plugins/tree/main/plugins/frontend/backstage-plugin-jira)
- [Atlassian Jira REST API Documentation](https://developer.atlassian.com/server/jira/platform/rest-apis/)
- [JQL (Jira Query Language) Guide](https://www.atlassian.com/software/jira/guides/expand-jira/jql)
