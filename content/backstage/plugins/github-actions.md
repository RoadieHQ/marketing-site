---
humanName: GitHub Actions
heading: 'Backstage GitHub Actions Plugin'
lead: 'See GitHub Actions builds in Backstage'
attribution:
  text: Spotify
  href: https://spotify.com

seo:
  title: 'Backstage GitHub Actions Plugin | Roadie'
  description: |
    The Backstage GitHub Actions plugin integrates with GitHub Actions to show your build
    information inside Backstage where it can be associated with your services.

logoImage: '../../assets/logos/github/mark/official/PNG/GitHub-Mark-120px-plus.png'

coverImage: '../../assets/backstage/plugins/github-actions/cover.png'
coverImageAlt: 'A list of builds for the Spotify Backstage repo with status and retry buttons.'

gettingStarted: # What will this step accomplish?
  - intro: |
      If you are **using Roadie**, or you are using a GitHub app with self-hosted Backstage, OAuth
      is already configured for use with the GitHub APIs. You can simply install the plugin and it
      should work automatically. Your GitHub App requires `action:read` permission.

      If your Backstage instance is using a Personal Access Token to authenticate against GitHub,
      you will need to follow our [instructions to create a GitHub OAuth app for Backstage](/blog/github-auth-backstage/).

  - intro: Install the plugin into your Backstage instance.
    language: bash
    code: yarn add @backstage/plugin-github-actions

  - intro: 'Add the tab to your entity pages.'
    language: typescript
    code: |
      // packages/app/src/components/catalog/EntityPage.tsx
      import { EntityGithubActionsContent } from '@backstage/plugin-github-actions';

      const serviceEntityPage = (
        <EntityLayout.Route path="/ci-cd" title="CI/CD">
          <EntityGithubActionsContent />
        </EntityLayout.Route>
      );

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

### Authentication

The GitHub actions plugin makes requests to the GitHub API directly from your browser. It
will authenticate as your GitHub user via OAuth. You may see this pop-up periodically
as you browse around Backstage. You must log in via OAuth before GitHub actions can work.

![pop-up asking the user to log in with GitHub](../../assets/backstage/plugins/github-actions/oauth-login.png)

### Multiple CI systems setup

Use the switch pattern to work with multiple CI systems simultaneously in Backstage.

```typescript
// packages/app/src/components/catalog/EntityPage.tsx
import {
  EntityRecentGithubActionsRunsCard,
  isGithubActionsAvailable,
} from '@backstage/plugin-github-actions';

const cicdCard = (
  <EntitySwitch>
    <EntitySwitch.Case if={isGithubActionsAvailable}>
      <Grid item sm={6}>
        <EntityRecentGithubActionsRunsCard limit={4} variant="gridItem" />
      </Grid>
    </EntitySwitch.Case>
  </EntitySwitch>
);

const overviewContent = (
  <Grid container spacing={3} alignItems="stretch">
    ...

    {cicdCard}
  </Grid>
);

```
