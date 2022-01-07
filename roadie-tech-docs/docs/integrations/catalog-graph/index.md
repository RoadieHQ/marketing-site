
## Introduction

With this plugin, you can visualize the [relations between entities](https://roadie.io/blog/modeling-software-backstage/), like ownership, grouping or API relationships.

![catalog_graph_card.png](catalog_graph_card.png)

## Add a Catalog Graph card to a dashboard

Click the cog icon on the top right of a component Dashboard (or the default Overview) page. Then click the plus icon to add a new card.

![edit_layout.png](edit_layout.png)

![add_card.png](add_card.png)

Select the EntityCatalogGraph card from the drop down and click Add. Press save to submit.

![select_catalog_graph.png](select_catalog_graph.png)


## Viewing the graph and navigating through the relationships.

You can click on any of the entities in the graph to go to the page for that entity.

You can also click the View graph link at the bottom of the card to view a full page graph and see the component in the
context of the whole system.

![view_full_graph.png](view_full_graph.png)


## Adding relationships between components

If you can't see any connections to your component you will first need to define these relationships explicitly in your
component yaml files as explained here https://roadie.io/blog/modeling-software-backstage/.


### Customize graph parameters.

In order to customize the breadth and depth of the graph on your dashboards you can click the cog icon at the top right 
of the page and then the spanner icon in the top right of the card.


![edit_layout.png](edit_layout.png)

![edit_card_props.png](edit_card_props.png)



Then you can edit the props for the card by adding the following JSON or a subset of it depending on your preferences.

```json
{
  "title": "Relationship Graph",
  "kinds": [
    "component",
    "domain",
    "system",
    "api",
    "group"
  ],
  "relations": [
    "ownerOf",
    "ownedBy",
    "consumesApi",
    "apiConsumedBy",
    "providesApi",
    "apiProvidedBy",
    "dependsOn",
    "dependencyOf",
    "parentOf",
    "childOf",
    "memberOf"
  ],
  "maxDepth": 2
}
```

If not specified, your graph will have a depth of 1 by default.