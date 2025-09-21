---
humanName: Catalog Graph Plugin
heading: 'Backstage Catalog Graph Plugin'
lead: 'Visualize relationships between the entities in your Software Catalog.'
npmjsPackage: "@backstage/plugin-catalog-graph"
codeLocation: "https://github.com/backstage/backstage/tree/master/plugins/catalog-graph"
attribution:
  text: SDA SE
  href: https://sda.se/

seo:
  title: 'Backstage Catalog Graph Plugin | Roadie'
  description: |
    Visualize relationships between the entities in your Software Catalog.

logoImage: 'assets/logos/catalog-graph/catalog-graph-logo.jpeg'
coverImage: 'assets/catalog-graph-plugin.webp'
coverImageAlt: 'Backstage Catalog Graph Plugin showing relationships between entities'

availableOnRoadie: true
roadieDocsPath: /integrations/catalog-graph/

gettingStarted:
  - intro: Install the [plugin](https://github.com/backstage/backstage/blob/master/plugins/catalog-graph/README.md) into Backstage.
    language: bash
    code: |
      cd packages/app
      yarn add @backstage/plugin-catalog-graph'

  - intro: Add the CatalogGraphPage.
    language: typescript
    code: |
      // packages/app/src/App.tsx
      <FlatRoutes>
        …
        <Route path="/catalog-graph" element={<CatalogGraphPage />} />…
      </FlatRoutes>

  - intro: Bind the external routes of the catalogGraphPlugin.
    language: typescript
    code: |
      // packages/app/src/App.tsx
      bindRoutes({ bind }) {
        …
        bind(catalogGraphPlugin.externalRoutes, {
          catalogEntity: catalogPlugin.routes.catalogEntity,
        });
        …
      }

  - intro: Add EntityCatalogGraphCard to any entity page that you want.
    language: typescript
    code: |
      // packages/app/src/components/catalog/EntityPage.tsx
      <Grid item md={6} xs={12}>
        <EntityCatalogGraphCard variant="gridItem" height={400} />
      </Grid>
---

## Features

The plugin comes with these features:

- EntityCatalogGraphCard: A card that displays the directly related entities to the current entity. This card is for use on the entity page. The card can be customized, for example filtering for specific relations.

- CatalogGraphPage: A standalone page that can be added to your application providing a viewer for your entities and their relations. The viewer can be used to navigate through the entities and filter for specific relations. You can access it from the EntityCatalogGraphCard. NB: you will need to supply props to this component to tell it what root Entity to display when it renders like so:
```yaml
{
  "initialState": {
    "rootEntityRefs": [
      "domain:customers",
      "domain:employees"
    ],
    "maxDepth": 1,
    "selectedRelations": [
      "dependsOn"
    ]
  }
}
```

- EntityRelationsGraph: A react component that can be used to build own customized entity relation graphs.

## Prerequisites

The plugin will only display relationship that have already been set up between entities. You will need to define these 
yourself for services, api's etc... in the `catalog.yaml` files.

i.e. 
```
apiVersion: backstage.io/v1alpha1
kind: Component
metadata:
  name: wayback-search
  description: Search of the wayback machine
spec:
  type: service
  lifecycle: production
  owner: team-a
  providesApis:
    - wayback-search
  consumesApis:
    - wayback-archive
```

For more, please check out this post on [how to model software in Backstage](https://roadie.io/blog/modeling-software-backstage/).
