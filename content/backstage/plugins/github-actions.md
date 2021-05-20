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

logoImage: '../../assets/logos/github/PNG/GitHub-Mark-120px-plus.png'

coverImage: '../../assets/backstage/plugins/github-actions-plugin-cover.png'
coverImageAlt: 'A list of builds for the Spotify Backstage repo with status and retry buttons.'

gettingStarted: # What will this step accomplish?
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


---

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
