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

logoImage: '../../assets/logos/github/mark/official/PNG/GitHub-Mark-120px-plus.webp'

coverImage: '../../assets/backstage/plugins/github-actions/cover.webp'
coverImageAlt: 'A list of builds for the Spotify Backstage repo with status and retry buttons.'

availableOnRoadie: true
roadieDocsPath: /home-page/

gettingStarted: # What will this step accomplish?
  - intro: Install the plugin into your Backstage instance.
    language: bash
    code: yarn --cwd packages/app add @backstage/plugin-home

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

### Useful Links

- [npm](https://www.npmjs.com/package/@backstage/plugin-home)
- [GitHub](https://github.com/backstage/backstage/blob/master/plugins/home/README.md)
- [Roadie Docs](https://roadie.io/docs/integrations/home-page/)
