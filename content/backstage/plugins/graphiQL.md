---
humanName: GraphiQL
heading: 'Backstage GraphiQL Plugin'
lead: 'Integrates GraphiQL as a tool to browse GraphQL API endpoints inside Backstage.'
attribution:
  text: Spotify
  href: https://spotify.com

seo:
  title: 'Backstage GraphiQL Plugin | Roadie'
  description: |
    Integrates GraphiQL as a tool to browse GraphQL API endpoints inside Backstage.

logoImage: '../../assets/logos/graphiql/logo-ql.png'
coverImage: '../../assets/graphiql-plugin.png'
coverImageAlt: 'A screenshot of the GraphiQL plugin.'

gettingStarted:
  - intro: Install the plugin into Backstage.
    language: bash
    code: 'yarn add @backstage/plugin-graphiql'

  - intro: Add plugin to the list of plugins.
    language: typescript
    code: |
      // packages/app/src/plugins.ts
      export { plugin as GraphiQL } from '@backstage/plugin-graphiql';
  - intro: Navigate to youdomain.com/graphiql.
---
