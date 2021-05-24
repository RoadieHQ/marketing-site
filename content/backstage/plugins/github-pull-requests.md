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

  - intro: Add plugin API to your Backstage instance.
    language: typescript
    code: |
      // packages/app/src/components/catalog/EntityPage.tsx
      import { EntityGithubPullRequestsContent } from '@roadiehq/backstage-plugin-github-pull-requests';

      // ...

      const serviceEntityPage = (
        <EntityLayout>
          ...
          <EntityLayout.Route path="/pull-requests" title="Pull Requests">
            <EntityGithubPullRequestsContent />
          </EntityLayout.Route>
          ...
        </EntityLayout>
      )

  - intro: Run the backstage app with the following command and navigate to the services tab.
    code: |
      yarn start

  - intro: Add widget to your Overview tab.
    language: typescript
    code: |
      // packages/app/src/components/catalog/EntityPage.tsx
      import { EntityGithubPullRequestsOverviewCard } from '@roadiehq/backstage-plugin-github-pull-requests';

        // ...
        const overviewContent = (
          <Grid container spacing={3}>
            ...
            <Grid item md={6}>
              <EntityGithubPullRequestsOverviewCard />
            </Grid>
            ...
          </Grid>
        );
---
