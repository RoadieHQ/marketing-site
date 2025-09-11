---
humanName: Home Page
heading: 'Backstage Home Page Plugin'
lead: 'See GitHub Actions builds in Backstage'
attribution:
  text: Spotify, with extensions by Roadie
  href: https://spotify.com and https://roadie.io

npmjsPackage: @backstage/plugin-home

seo:
  title: 'Backstage GitHub Actions Plugin | Roadie'
  description: |
    The Backstage  Home Page plugin allows the creation of a custom landing page for your Backstage instance.

logoImage: '../../assets/logos/home-page/home.webp'

availableOnRoadie: true
roadieDocsPath: /integrations/home-page/

gettingStarted: # What will this step accomplish?
  - intro: Install the plugin into your Backstage instance.
    language: bash
    code: yarn --cwd packages/app add @backstage/plugin-home

  - intro: Create a new file for the Home page component at `packages/app/src/components/home/HomePage.tsx`.
    language: typescript
    code: |
      import React from 'react';

      export const homePage = (
        /* TODO: Compose a Home Page here */
      );

  - intro: Add routes to `App.tsx` for the new component. The below examples assumes you'll be pointing the root at the Home page.
    language: typescript
    code: |
      // packages/app/src/App.tsx

      import { HomepageCompositionRoot } from '@backstage/plugin-home';
      import { homePage } from './components/home/HomePage';

      // ...
      <Route path="/" element={<HomepageCompositionRoot />}>
        {homePage}
      </Route>;
      // ...

  - intro: |
      The Home page is then composed like any React-based page, by stacking different components as you see fit. You can either write your own or find open source components.
  - intro: Roadie have two open sourced Home page components that can be used.
  - intro: To use the `HomePageMarkdown` component which renders arbitrary markdown on the Home page, install the plugin.
    language: bash
    code: yarn add @roadiehq/backstage-plugin-home-markdown
  - intro: Add the associatede type
    language: typescript
    code: |
      export type MarkdownContentProps = {
        owner: string;
        repo: string;
        path: string;
        branch?: string;
      };
  - intro: Then use the component.
    language: typescript
    code: |
      import { HomePageMarkdown } from '@roadiehq/backstage-plugin-home-markdown';

      export const HomePage = () => {
          return (
            ...
                <Grid item xs={12} md={6}>
                    <HomePageMarkdown
                        title="Neeews!"
                        owner="RoadieHQ"
                        repo="roadie-backstage-plugins"
                        path=".backstage/README.md"
                    />
                </Grid>
            ...
            );
          };

  - intro: There is also a `HomePageRSS` RSS feed component. To use it, install the plugin.
    language: typescript
    code: |
      yarn add @roadiehq/backstage-plugin-home-rss
  - intro: Configure the proxy to pull information for the feed. For example, the Reuters feed.
    language: yaml
    code: |
      proxy:
        '/reuters-news-feed':
          target: 'https://www.reutersagency.com/feed'

  - intro: Then use the component in your Home page.
    language: typescript
    code: |
      // packages/app/src/components/home/HomePage.tsx
      import { HomePageRSS } from '@roadiehq/backstage-plugin-home-rss';

      export const HomePage = () => {
        return (
          ...
          <Grid item xs={12} md={6}>
              <HomePageRSS
                  feedURL="http://localhost:7007/api/proxy/reuters-news-feed/?best-topics=tech&post_type=best"
                  title="Reuters News"
                  paging={false} // Optional. By default the paging is enabled, but it can be disabled
              />
          </Grid>
          ...
        );
      };
---

### Useful Links

- [npm](https://www.npmjs.com/package/@backstage/plugin-home)
- [GitHub](https://github.com/backstage/backstage/blob/master/plugins/home/README.md)
- [Roadie Docs](https://roadie.io/docs/integrations/home-page/)
- [Roadie Home Page plugins](https://github.com/RoadieHQ/roadie-backstage-plugins/tree/main/plugins/home)
- [Templates for Home Page design](https://backstage.io/storybook/?path=/story/plugins-home-templates--default-template)
