---
humanName: Template
# Required. Can have whitespace. Should be titleized.
heading: 'Backstage Template Plugin'
# Keep it short
lead: 'Describe the problem that the plugin will solve for users'
# Markdown can be used in the intro
intro: |
  Introduce the plugin

attribution:
  text: Spotify
  href: https://spotify.com

seo:
  # Don't forget to end with "| Roadie"
  title: 'Backstage Template Plugin | Roadie'
  description: |
    What would you want to know before clicking this in Google. Think about searcher intent.
    Don't forget to keep it under 160 chars.

# This must be a relative path. It should start with ../
# The overall size of the file should be approximately 200 by 200.
# The image in the file should be approximately 100 by 100 pixels. It needs space around it.
logoImage: 'assets/logos/sentry/sentry-glyph-light-200x184.webp'

# This must be a relative path. It should start with ../
coverImage: 'assets/backstage/plugins/sentry-plugin-1604x716.webp'
coverImageAlt: 'Explain what is in the image'

# Instructions for someone who wants to use this plugin.
# languages used here must be listed in the .babelrc

gettingStarted:
  # What will this step accomplish? Markdown can be used in the intro.
  - intro: Install the plugin
    language: bash
    code: yarn add @roadiehq/backstage-plugin-github-pull-requests

  - intro: Import it into your Backstage application
    language: typescript
    code: |
      // packages/app/src/apis.ts
      import { GithubPullRequestsClient, githubPullRequestsApiRef } from '@roadiehq/backstage-plugin-github-pull-requests';

  - intro: 'Heres where things get good...'
    language: typescript
    code: |
      // packages/app/src/plugins.ts
      export { plugin as Template } from '@backstage/plugin-template';
---

The Backstage backend must have access to a `SENTRY_TOKEN` environment variable. The
