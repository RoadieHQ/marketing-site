---
humanName: Tech Radar
heading: 'Backstage Tech Radar Plugin'
lead: |
  Visualize the your company's official guidelines of different areas of software development.
npmjsPackage: "@backstage-community/plugin-tech-radar"
attribution:
  text: Spotify
  href: https://spotify.com

seo:
  title: 'Backstage Tech Radar Plugin | Roadie'
  description: |
    Visualize the your company's official guidelines of different areas of software development.

logoImage: '../../assets/logos/tech-radar/radar.webp'

coverImage: '../../assets/tech-radar-plugin.jpg'
coverImageAlt: 'A screenshot of the Tech Radar plugin.'

availableOnRoadie: true
roadieDocsPath: /integrations/tech-radar/

gettingStarted:
  - intro: Install the plugin into Backstage.
    language: bash
    code: 'yarn add @backstage/plugin-tech-radar'

  - intro: Modify your app to include the plugin component exported from the tech radar, for example
    language: typescript
    code: |
      // packages/app/src/App.tsx
      import { TechRadarPage } from '@backstage/plugin-tech-radar';

      const routes = (
        <FlatRoutes>
          {/* ...other routes */}
          <Route
            path="/tech-radar"
            element={<TechRadarPage width={1500} height={800} />}
          />
        </FlatRoutes>
      );
---

## How do I load in my own data?

To pass own data to plugin use a `getData` prop which expects a `Promise<TechRadarLoaderResponse>` signature.

For example:

```ts
const getData = () =>
  Promise.resolve({
    quadrants: [{ id: 'infrastructure', name: 'Infrastructure' }],
    rings: [{ id: 'use', name: 'USE', color: '#91c49d' }],
    entries: [
      {
        moved: 0,
        ring: 'use',
        url: '#',
        key: 'firebase-function',
        id: 'firebase-function',
        title: 'FireBase Function',
        quadrant: 'infrastructure',
      },
    ],
  });

<TechRadarComponent width={1500} height={900} getData={getData} />;
```
