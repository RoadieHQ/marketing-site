---
title: Using the MDX plugin to create Custom Plugins
publishedDate: '2025-09-23T17:11:00.0Z'
description: Examples how to develop and register a custom plugin to Roadie using the MDX plugin
---

The MdxPluginCard and MdxPluginHomepageCard retrieves data from a set of target API URLs and allows you to customize the response using MDX.

To add the cards you can add either the MdxPluginHomepageCard to the homepage or the MdxPluginCard to the entity pages.

You are given option to enter a list of named data fetchers, then you can refer to the responses from them using the specified names.

The MdxPluginCard that appears on the entity page allows using data from the entity to configure the API url. e.g. the following API url will be filled out with the entity name, namespace and kind: `/entities/by-name/{{ entity.kind }}/{{ entity.metadata.namespace }}/{{ entity.metadata.name }}`

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


### Available Components

#### Table

You can display tabular data from response

e.g. This will display the annotations for the entity.

```tsx
  <Table
  options={{
    search: false,
    showTitle: true,
    toolbar: false,
    loadingType: "linear",
    header: true,
    padding: "dense",
    pageSize: 4,
    paging: Object.entries(props.entity.metadata.annotations).length > 4,
    actionsColumnIndex: -1,
  }}
  columns={[
    { title: "Key", field: "key" },
    { title: "Value", field: "value" },
  ]}
  data={Object.entries(props.entity.metadata.annotations).map(([key, value]) => ({
    key,
    value,
  }))}
  subtitle={`${Object.entries(props.entity.metadata.annotations).length} item${
    Object.entries(props.entity.metadata.annotations).length === 1 ? "" : "s"
  }`}
  emptyContent={<span>No annotations found.</span>}
  onStateChange={() => {}}
/>
```

#### Link

You can use the Link component to create links to other pages.

```tsx
<Link to="/catalog">Catalog List</Link>
```

#### Chip

You can use the Chip component to display a label.

```tsx
<Chip label="Small" size="small" />
<Chip label="Medium" size="medium" />
```

#### List

You can use the List component to display a list of items.

```tsx
<List>
  {Object.entries(props.entity.metadata.annotations).map(([key, value]) => (
    <ListItem>{key} - {value}</ListItem>
  ))}
</List>
```