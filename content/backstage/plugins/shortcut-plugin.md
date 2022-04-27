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

logoImage: '../../assets/logos/shorcut/shortcut-logo.png'
coverImage: '../../assets/backstage/plugins/shorcut/shortcut.png'
coverImageAlt: |
  Stories overview in Shortcut plugin.

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

  - intro: Add plugin API to your Backstage instance.
    language: typescript
    code: |
      // packages/app/src/components/catalog/EntityPage.tsx
      import { EntityShorcutPageContent } from '@roadiehq/backstage-plugin-shortcut';

      // ...

      const userPage = (
        <EntityLayoutWrapper>
          ...
          <EntityLayout.Route path="/backstage-plugin-shortcut" title="Shortcut">
            <EntityShorcutPageContent />
          </EntityLayout.Route>
          ...
        </EntityLayoutWrapper>
      )

  - intro: Run the backstage app with the following command and navigate to the user entity.
    code: |
      yarn start

  - intro: Card setup.

  - intro: You can use the stories card from this plugin (but make sure to install it first by following the steps above) in order to add the stories widget to your Overview page or Home page if you use Homepage plugin.

  - intro: Add stories card to your Overview tab.
    language: typescript
    code: |
      // packages/app/src/components/catalog/EntityPage.tsx
     import { StoriesCard } from '@roadiehq/backstage-plugin-shortcut';

      // ...
      
      const overviewContent = (
        <Grid container spacing={3} alignItems="stretch">
        <EntitySwitch>
          <Grid item md={6} xs={12}>
            <StoriesCard />
          </Grid>
          </EntitySwitch>
        </Grid>
      );
---

## How to use Shortcut plugin in Backstage:

1. Add your Shorcut personal auth token to the environment variables of your backstage backend server (you can find it in https://app.shortcut.com/{organisation}/settings/account/api-tokens), in the end it should look like this:

   `SHORTCUT_API_TOKEN="YOUR_API_TOKEN"`

## API Rate Limit in Shortcut

The Shortcut REST API limits requests to 200 per minute. Any requests over that limit will not be processed, and will return a 429 (“Too Many Requests”) response code.
