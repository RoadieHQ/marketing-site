---
humanName: Harness
heading: 'Backstage Harness Plugin'
lead: 'The Harness NextGen CI/CD plugin allows you to see build information inside Backstage'
attribution:
  text: Harness
  href: https://spotify.com

seo:
  title: 'Backstage GitHub Actions Plugin | Roadie'
  description: |
    The Backstage GitHub Actions plugin integrates with GitHub Actions to show your build
    information inside Backstage where it can be associated with your services.

logoImage: '../../assets/logos/github/mark/official/PNG/GitHub-Mark-120px-plus.webp'

coverImage: '../../assets/backstage/plugins/github-actions/cover.webp'
coverImageAlt: 'A list of builds for the Spotify Backstage repo with status and retry buttons.'

availableOnRoadie: true

gettingStarted: # What will this step accomplish?
  - intro: |
      If you are **using Roadie**, or you are using a GitHub app with self-hosted Backstage, OAuth
      is already configured for use with the GitHub APIs. You can simply install the plugin and it
      should work automatically. Your GitHub App requires `action:read` permission.

      If your Backstage instance is using a Personal Access Token to authenticate against GitHub,
      you will need to follow our [instructions to create a GitHub OAuth app for Backstage](/blog/github-auth-backstage/).

  - intro: Install the plugin into your Backstage instance.
    language: bash
    code: yarn --cwd packages/app add @harnessio/backstage-plugin-ci-cd

  - intro: 'Add the plugin to the proxy in your app config.'
    language: yaml
    code: |
      // app-config.yaml
      proxy:
        # ... existing proxy settings
        '/harness/prod':
          target: 'https://app.harness.io/'
          headers:
            'x-api-key': '<YOUR PAT/SAT>'

  - intro: 'Optionally add the recent runs card to the overview page'
    language: typescript
    code: |
      // packages/app/src/components/catalog/EntityPage.tsx
      import { EntityRecentGithubActionsRunsCard } from '@backstage/plugin-github-actions';

      const overviewContent = (
        <Grid container spacing={3} alignItems="stretch">
          ...

          <Grid item sm={6}>
            <EntityRecentGithubActionsRunsCard limit={4} variant="gridItem" />
          </Grid>
        </Grid>
      );

  - intro: |
      Annotate a component with the `github.com/project-slug` key and value so that Backstage
      knows which builds correspond to your component.
    language: yaml
    code: |
      apiVersion: backstage.io/v1alpha1
      kind: Component
      metadata:
        name: sample-service
        description: Component with GitHub actions enabled.
        annotations:
          github.com/project-slug: 'RoadieHQ/sample-service'
      spec:
        type: service
        lifecycle: production
        owner: engineering-team
---
