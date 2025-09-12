---
humanName: iFrame
heading: 'Backstage iFrame Plugin'
lead: 'Render an iFrame inside Backstage.'
attribution:
  text: Roadie
  href: https://roadie.io

npmjsPackage: "@roadiehq/backstage-plugin-iframe"

seo:
  title: 'Backstage GitHub Actions Plugin | Roadie'
  description: |
    The Backstage iFrame plugin renders an Iframe card that can be added to a component/homepage.

logoImage: '../../assets/logos/github/mark/official/PNG/GitHub-Mark-120px-plus.webp'

availableOnRoadie: true
roadieDocsPath: /integrations/iframe/

gettingStarted: # What will this step accomplish?
  - intro: Install the plugin into your Backstage instance.
    language: bash
    code: yarn --cwd packages/app add @roadiehq/backstage-plugin-iframe

  - intro: Add allowlisting to your app-config.yaml as required (optional).
    language: bash
    code: |
      // app-config.yaml
      iframe:
        allowList: ["some-domain.com"]

  - intro: 'Add to your home page.'
    language: typescript
    code: |
      // packages/app/src/components/home/HomePage.tsx
      import { HomePageIFrameCard } from '@roadiehq/backstage-plugin-iframe';

      export const HomePage = () => {
        return (
          ...
          <Grid item xs={12} md={6}>
              <HomePageIFrameCard
                title="Super cool title"
                src="https://example.com"
              />
            </Grid>
          ...
        );
      };

  - intro: 'Add to your entity page'
    language: typescript
    code: |
      // packages/app/src/components/catalog/EntityPage.tsx
      import {
        iframePlugin,
        EntityIFrameCard,
        EntityIFrameContent,
      } from '@roadiehq/backstage-plugin-iframe';
      ...

      const contentProps = {
        frames: [
          {
            src: "https://example.com"
          }
        ],
        title: "super cool title"
      }

      const serviceEntityPage = (
        <EntityLayoutWrapper>
          ...
          <EntityLayout.Route
            path="/mycustom-iframes"
            title="Iframes">
              <EntityIFrameContent {...iframeProps} />
          </EntityLayout.Route>
          ...
        </EntityLayoutWrapper>
      );

      const iframeProps = {
        src: "https://example.com"
      }

      const overviewContent = (
        <Grid container spacing={3}>
          ...
          <Grid item md={8}>
            <EntityIFrameCard {...iframeProps}/>
          </Grid>
          ...
        </Grid>
      );
---

### Useful links

- [npm](https://www.npmjs.com/package/@roadiehq/backstage-plugin-iframe)
- [GitHub](https://github.com/RoadieHQ/roadie-backstage-plugins/tree/main/plugins/frontend/backstage-plugin-iframe)
- [Roadie Docs](https://roadie.io/docs/integrations/iframe/)
