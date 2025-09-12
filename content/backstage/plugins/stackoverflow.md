---
humanName: Stack Overflow
heading: 'Backstage Stack Overflow Plugin'
lead: 'Display public and private Stackoverflow questions and answers in Backstage'
attribution:
  text: Spotify
  href: https://spotify.com

seo:
  title: 'Backstage Stack Overflow Plugin | Roadie'
  description: |
    The Backstage Stack Overflow plugin displays public and private Stackoverflow questions and answers in Backstage and adds Stack Overflow to search results.

logoImage: '../../assets/logos/stackoverflow/so-logo.webp'

availableOnRoadie: true
roadieDocsPath: /integrations/stackoverflow/

gettingStarted:

  - intro: As a prerequisite, you should have installed the <a href="https://github.com/backstage/community-plugins/tree/main/workspaces/stack-overflow/plugins/stack-overflow-backend'>Stack Overflow Backend plugin</a>.
  - intro: 'Install the Stack Overflow backend plugin package in your Backstage app'
    language: 'bash'
    code: 'yarn add @backstage/plugin-search-backend-module-stack-overflow-collator'
  - intro: 'Add Stack Overflow to your app config.'
    language: 'yaml'
    code: |
      // app-config.yaml
      stackoverflow:
        baseUrl: https://api.stackexchange.com/2.2
  - intro: 'If you have a private Stack Overflow instance and/or a private Stack Overflow Team you will need to supply an API key or Personal Access Token. You can read more about how to set this up by going to the Stack Overflow Help Page.'
    language: 'yaml'
    code: |
      // app-config.yaml
      stackoverflow:
        baseUrl: https://api.stackexchange.com/2.2 # alternative: your internal stack overflow instance
        apiKey: $STACK_OVERFLOW_API_KEY
        apiAccessToken: $STACK_OVERFLOW_API_ACCESS_TOKEN

  - intro: To use Stack Overflow on your home page, add to you `packages/app/src/components/home/HomePage.tsx`
    language: typescript
    code: |
      // packages/app/src/components/home/HomePage.tsx
      <Grid item xs={12} md={6}>
        <HomePageStackOverflowQuestions
          requestParams={{
            tagged: 'backstage',
            site: 'stackoverflow',
            pagesize: 5,
          }}
        />
      </Grid>

  - intro: To return Stack Overflow results as part of the search results in Backstage, add `StackOverflowSearchResultListItem` to `packages/app/src/components/search/SearchPage.tsx`.
    language: typescript
    code: |
      // packages/app/src/components/home/HomePage.tsx
      <Grid item xs={12} md={6}>
        <HomePageStackOverflowQuestions
          requestParams={{
            tagged: 'backstage',
            site: 'stackoverflow',
            pagesize: 5,
          }}
        />
      </Grid>
---

### Useful Links

- [npm](https://www.npmjs.com/package/@backstage-community/plugin-stack-overflow)
- [GitHub (Frontend)](https://github.com/backstage/community-plugins/blob/main/workspaces/stack-overflow/plugins/stack-overflow/README.md)
- [GitHub Backend](https://github.com/backstage/community-plugins/tree/main/workspaces/stack-overflow/plugins/stack-overflow-backend)
- [Roadie Docs](https://roadie.io/docs/integrations/stackoverflow/)
