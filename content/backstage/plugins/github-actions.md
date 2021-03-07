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

coverImage: '../../assets/github-actions-plugin-cover.png'
coverImageAlt: 'A list of builds for the Spotify Backstage repo with status and retry buttons.'

gettingStarted: # What will this step accomplish?
  - intro: Install the plugin
    language: bash
    code: yarn add @backstage/plugin-github-actions
  - intro: Import it into your Backstage application
    language: typescript
    code: |
      // packages/app/src/plugins.ts
      export { plugin as GithubActions } from '@backstage/plugin-github-actions';

  - intro: 'Heres where things get good...'
    language: typescript
    code: |
      // packages/app/src/apis.ts
      import { GithubActionsClient, githubActionsApiRef } from '@backstage/plugin-github-actions';

      export const apis = (config: ConfigApi) => {
        // ... existing code here.
        builder.add(githubActionsApiRef, new GithubActionsClient());
      };
---
