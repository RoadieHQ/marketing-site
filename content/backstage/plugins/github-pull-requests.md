---
humanName: GitHub Pull Requests
heading: 'Backstage GitHub Pull Requests Plugin'
lead: 'See Pull Requests for your service in Backstage'
attribution:
  text: Roadie
  href: https://roadie.io

seo:
  title: 'Backstage GitHub Pull Requests Plugin | Roadie'
  description: |
    See GitHub Pull Requests in Backstage. Supports filtering, search and statistics
    on your pull requests.

logoImage: '../../assets/logos/github/PNG/GitHub-Mark-120px-plus2.png'
coverImage: '../../assets/pull-requests-cover.png'
coverImageAlt: |
  Pull requests for Backstage rendered inside a Backstage plugin.
  The statistics widget is alongside, showing the average time to merge a PR.

gettingStarted:
  - intro: Install the plugin into Backstage.
    language: bash
    code: 'yarn add @roadiehq/backstage-plugin-github-pull-requests'

  - intro: Import it into your Backstage application.
    language: typescript
    code: |
      // packages/app/src/plugins.ts
      export { plugin as GithubPullRequests } from '@roadiehq/backstage-plugin-github-pull-requests';

  - intro: Add plugin API to your Backstage instance.
    language: typescript
    code: |
      // packages/app/src/components/catalog/EntityPage.tsx
      import { Router as GithubPullRequestsRouter } from '@roadiehq/backstage-plugin-github-pull-requests';

      // ...

      const ServiceEntityPage = ({ entity }: { entity: Entity }) => (
        // ...
        <EntityPageLayout>
          <EntityPageLayout.Content
            path="/github-pull-requests"
            title="Github Pull Requests"
            element={<GithubPullRequestsRouter entity={entity} />}
          />
          </EntityPageLayout>
        </EntityPageLayout>
      )

  - intro: Run the backstage app with the following command and navigate to the services tab.
    code: |
      yarn start

  - intro: Add widget to your Overview tab.
    language: typescript
    code: |
      // packages/app/src/components/catalog/EntityPage.tsx
      import { PullRequestsStatsCard } from '@roadiehq/backstage-plugin-github-pull-requests';
        // ...
        const OverviewContent = ({ entity }: { entity: Entity }) => (
          <Grid container spacing={3} alignItems="stretch">
          ...
          <Grid item md={6}>
            <PullRequestsStatsCard entity={entity} />
          </Grid>
        </Grid>
      );
---
