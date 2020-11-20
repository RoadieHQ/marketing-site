---
name: techradar
---

## How do I load in my own data?

Passing own data is simple through a `getData` prop which expects a `Promise<TechRadarLoaderResponse>` signature.

Here's an example:

```tsx
const getHardCodedData = () =>
  Promise.resolve({
    quadrants: [{ id: 'infrastructure', name: 'Infrastructure' }],
    rings: [{ id: 'use', name: 'USE', color: '#93c47d' }],
    entries: [
      {
        moved: 0,
        ring: 'use',
        url: '#',
        key: 'github-actions',
        id: 'github-actions',
        title: 'GitHub Actions',
        quadrant: 'infrastructure',
      },
    ],
  });

<TechRadarComponent width={1400} height={800} getData={getHardCodedData} />;
```
