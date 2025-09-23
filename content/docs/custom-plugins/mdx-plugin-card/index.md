---
title: Using the MDX plugin to create Custom Plugins
publishedDate: '2025-09-23T17:11:00.0Z'
description: Examples how to develop and register a custom plugin to Roadie using the MDX plugin
---

The MdxPluginCard and MdxPluginHomepageCard retrieves data from a set of target API URLs and allows you to customize the response using MDX.

To add the cards you can add either the MdxPluginHomepageCard to the homepage or the MdxPluginCard to the entity pages.

You are given options to enter a list of named data fetchers, then you can refer to the responses from them using the specified names.

In the template you can access variables from the response using props, e.g. if you have a data fetcher called entities, you can access the response using props.entities.

```tsx
<code>
Displaying {props.entities.items.length} of {props.entities.totalItems} entities.
</code>
```

That will display the number of entities and the total number of entities.

```text
Displaying 5 of 493 entities.
```


You can iterate over the response

e.g.

```tsx
<table>
  <thead>
    <tr>
      <th>Key</th>
      <th>Value</th>
    </tr>
  </thead>
  <tbody>
    {Object.entries(props.entity.metadata.annotations).map(([key, value]) => (
      <tr key={key}>
        <td>{key}</td>
        <td>{String(value)}</td>
      </tr>
    ))}
  </tbody>
</table>
```

This will display the annotations for the entity.

```txt
backstage.io/managed-by-location    url:https://github.com/roadiehq/example
backstage.io/techdocs-ref          dir:.
example.com/owner                  team-a
example.com/priority               high
```
