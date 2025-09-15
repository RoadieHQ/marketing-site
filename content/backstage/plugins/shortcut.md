---
humanName: Shortcut
heading: 'Backstage Shortcut Plugin'
lead: 'Provides an overview of user stories in Shortcut'
attribution:
  text: Roadie
  href: https://roadie.io

seo:
  title: 'Backstage Shortcut Plugin | Roadie'
  description: |
    Provides an overview of user stories which are currently in progress.

logoImage: '../../assets/logos/shortcut/shortcut-logo.png'
coverImage: '../../assets/backstage/plugins/shortcut/shortcut.webp'
coverImageAlt: |
  Stories overview in Shortcut plugin.

npmjsPackage: "@roadiehq/backstage-plugin-shortcut"
codeLocation: "https://github.com/RoadieHQ/roadie-backstage-plugins/tree/main/plugins/frontend/backstage-plugin-shortcut"

availableOnRoadie: true
roadieDocsPath: /integrations/shortcut-plugin/

gettingStarted:
  - intro: Install the plugin into Backstage.
    language: bash
    code: |
      // packages/app
      'yarn add @roadiehq/backstage-plugin-shortcut'

  - intro: Add proxy configurations
    language: 'yaml'
    code: |
      // app-config.yaml
      proxy:
        # ...
        '/shortcut/api':
          target: https://api.app.shortcut.com/api/v3
          headers:
          Shortcut-Token: '${SHORTCUT_API_TOKEN}'

  - intro: Add Shortcut stories card to Home page:.
    language: typescript
    code: |
      // packages/app/src/components/home/HomePage.tsx
      import { HomepageStoriesCard } from '@roadiehq/backstage-plugin-shortcut'
      // ...

      const HomePage = () => {
        <PageWithHeader title="Home" themeId="home">
          <Content>
            ...
              <Grid item md={6} xs={12}>
                <HomepageStoriesCard />
              </Grid>
            ...
           </Content>
        </PageWithHeader>
      )

  - intro: Run the backstage app with the following command and navigate to the user entity.
    code: |
      yarn start
---

## Authentication

The Shortcut API uses token-based authentication so in order to retrieve results you will need it. To generate an API token, go to https://app.shortcut.com/settings/account/api-tokens.

## API Rate Limit in Shortcut

The Shortcut REST API limits requests to 200 per minute. Any requests over that limit will not be processed, and will return a 429 (“Too Many Requests”) response code.
