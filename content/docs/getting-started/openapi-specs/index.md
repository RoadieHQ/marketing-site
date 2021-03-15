---
title: OpenAPI Specs
lastUpdated: '2021-03-14T21:00:00.0Z'
description: How to use OpenAPI specs with Roadie Backstage.
---

## Introduction

The Open API spec support of Roadie Backstage allows users to look up and read the OpenAPI specs of
services in your Backstage catalog.

Creating Open API specs is outside the scope of this documentation. Please see the [Swagger
OpenAPI Getting Started Guide](https://swagger.io/tools/open-source/getting-started/) for more
information on writing OpenAPI specs.

## Pre-requisites

This tutorial assumes that you...

1.  Have prepared an OpenAPI spec to use. If you don't have an OpenAPI spec prepared, you can use one of the [APIs listed on APIs Guru](https://apis.guru/browse-apis/). In the examples below, we will use the [Spotify API Spec](https://api.apis.guru/v2/specs/spotify.com/v1/swagger.yaml).
2.  Have a component which is already tracked in Backstage so we can add an API spec to it.
3.  Understand how entities are added to Backstage via YAML definitions. Please read the [Getting Started Guide](/docs/getting-started/technical-documentation/) to learn more.

## Adding an OpenAPI spec to a component

### Step 1: Create an API kind

Create a YAML file called `api-info.yaml` in the root of your component, alongside your code.

```yaml
apiVersion: backstage.io/v1alpha1
kind: API
metadata:
  name: spotify
  description: The official Spotify REST API
spec:
  type: openapi
  lifecycle: production
  owner: spotify
  definition:
    $text: https://api.apis.guru/v2/specs/spotify.com/v1/swagger.yaml
```

The `API` kind can take many of the normal `spec` properties such as the `owner` and `lifecycle`
of the API.

The important part is to ensure that `spec.definition` points to the remote URL of your OpenAPI spec.

### Step 2: Add the API to Backstage

Once this API spec is committed and available on GitHub, you can make Roadie Backstage aware of it using the catalog importer.

Copy the URL of the YAML spec on GitHub and paste it into the catalog importer at `https://your-company.roadie.so/catalog-import`.

![an input with a GitHub URL pasted into it. There is a button labelled analyze](./catalog-import-select-url.png)

Click Analyze.

Review the action the importer is going to take next, then press Import.

![a chance to review the URL which is going to be added and the name of the API which will lbe created](./catalog-import-review.png)

Click the name of the API to view it in Backstage.

![list of the entities which have been added to the catalog with the option to click and view one](./catalog-import-finish.png)

### Step 3: Link the API to a component

Now that the API is tracked in Backstage, we can associate it with a component.

In the `catalog-info.yaml` file of your component, add the `spec.providesApis` property to
indicate that this component provides the `spotify` API.

```yaml
apiVersion: backstage.io/v1alpha1
kind: Component
metadata:
  name: my-component
  # Other metadata and annotations omitted for brevity.
spec:
  type: service
  owner: my-team
  lifecycle: experimental
  providesApis:
    - spotify
```

The token `spotify` under `spec.providesAPIs` **must** match the `metadata.name` of the `API` we created earlier.

A single component can provide multiple APIs.

Once this step is done correctly, we can visit the API tab of our component in Backstage to see that it provides the Spotify API.

![API tab with a list of APIs the component provides. The only API in the list is the Spotify API object.](./provided-spotify-api.png)

And we can click through to the definition of that API to see the specification.

![a list of endpoints that Spotify exposes such as slash albums](./spotify-api-spec.png)

## Further reading

1. The [official Kind: API documentation](https://backstage.io/docs/features/software-catalog/descriptor-format#kind-api).
