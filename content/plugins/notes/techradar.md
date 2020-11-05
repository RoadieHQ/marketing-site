---
name: techradar
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
