---
humanName: Tech Radar
heading: 'Backstage Tech Radar Plugin'
lead: |
  Visualize the your company's official guidelines of different areas of software development.
attribution:
  text: Spotify
  href: https://spotify.com

seo:
  title: 'Backstage Tech Radar Plugin | Roadie'
  description: |
    Visualize the your company's official guidelines of different areas of software development.

logoImage: '../../assets/logos/tech-radar/radar.png'

coverImage: '../../assets/tech-radar-plugin.png'
coverImageAlt: 'A screenshot of the Tech Radar plugin.'

gettingStarted:
  - intro: Install the plugin into Backstage.
    language: bash
    code: 'yarn add @backstage/plugin-tech-radar'

  - intro: Add plugin to the list of plugins.
    language: typescript
    code: |
      // packages/app/src/plugins.ts
      export { plugin as TechRadar } from '@backstage/plugin-tech-radar';

  - intro: Modify your app routes to include the Router component exported from the tech radar, for example
    language: typescript
    code: |
      // packages/app/src/App.tsx
      import { Router as TechRadarRouter } from '@backstage/plugin-tech-radar';

      &lt;Routes>
        {/_ other routes ... _/}
        &lt;Route
          path="/tech-radar"
          element={&lt;TechRadarRouter width={1500} height={800} />}
        />
        {/_ other routes ... _/}
      &lt;/Routes>;
---

## How do I load in my own data?

To pass own data to plugin use a `getData` prop which expects a `Promise<TechRadarLoaderResponse>` signature.

For example:

```tsx
const getFireBaseData = () =>
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

<TechRadarComponent width={1500} height={900} getData={getFireBaseData} />;
```
