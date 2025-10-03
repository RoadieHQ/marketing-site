---
title: Roadie API
publishedDate: '2022-04-04T14:00:00.0Z'
description: You can import a catalog item into Roadie by calling its API.

category: catalog-source
order: 5
humanName: Roadie API
examples:
  - name: Component
    language: bash
    content: |
      curl \
        https://api.roadie.so/api/catalog/roadie-entities/entities \
        -X POST \
        -H "Authorization: bearer ${$ROADIE_API_TOKEN}" \
        -H 'Content-Type: application/json' \
        --data '{
          "apiVersion": "backstage.io/v1alpha1",
          "kind": "Component",
          "metadata": {
            "description": "The place to be, for great artists",
            "name": "artist-web"
          },
          "spec": {
            "type": "website",
            "owner": "artist-relations-team",
            "lifecycle": "production",
            "dependsOn": [
              "resource:default/artists-db"
            ],
            "providesApis": [
              "artist-api"
            ]
          }
        }'
  - name: Resource
    language: bash
    content: |
      curl \
        https://api.roadie.so/api/catalog/roadie-entities/entities \
        -X POST \
        -H "Authorization: bearer ${$ROADIE_API_TOKEN}" \
        -H 'Content-Type: application/json' \
        --data '{
          "apiVersion": "backstage.io/v1alpha1",
          "kind": "Resource",
          "metadata": {
            "name": "artists-db",
            "description": "Stores artist details"
          },
          "spec": {
            "type": "database",
            "owner": "artist-relations-team",
            "system": "artist-engagement-portal"
          }
        }'
  - name: API
    language: bash
    content: |
      curl \
        https://api.roadie.so/api/catalog/roadie-entities/entities \
        -X POST \
        -H "Authorization: bearer ${$ROADIE_API_TOKEN}" \
        -H 'Content-Type: application/json' \
        --data '{
          "apiVersion": "backstage.io/v1alpha1",
          "kind": "API",
          "metadata": {
            "name": "artist-api",
            "description": "Retrieve artist details"
          },
          "spec": {
            "type": "openapi",
            "lifecycle": "production",
            "owner": "artist-relations-team",
            "system": "artist-engagement-portal",
            "definition": "openapi: \"3.0.0\"\ninfo:\n  version: 1.0.0\n  title: Artist API\n  license:\n    name: MIT\nservers:\n  - url: http://artist.spotify.net/v1\npaths:\n  /artists:\n    get:\n      summary: List all artists\n"
          }
        }'
  - name: System
    language: bash
    content: |
      curl \
        https://api.roadie.so/api/catalog/roadie-entities/entities \
        -X POST \
        -H "Authorization: bearer ${$ROADIE_API_TOKEN}" \
        -H 'Content-Type: application/json' \
        --data '{
          "apiVersion": "backstage.io/v1alpha1",
          "kind": "System",
          "metadata": {
            "name": "artist-engagement-portal",
            "description": "Handy tools to keep artists in the loop"
          },
          "spec": {
            "owner": "artist-relations-team",
            "domain": "artists"
          }
        }'
  - name: Domain
    language: bash
    content: |
      curl \
        https://api.roadie.so/api/catalog/roadie-entities/entities \
        -X POST \
        -H "Authorization: bearer ${$ROADIE_API_TOKEN}" \
        -H 'Content-Type: application/json' \
        --data '{
          "apiVersion": "backstage.io/v1alpha1",
          "kind": "Domain",
          "metadata": {
            "name": "artists",
            "description": "Everything about artists"
          },
          "spec": {
            "owner": "artist-relations-team"
          }
        }'
---

The Roadie Entity API allows you to create, update and delete entities in the Roadie catalog via the public API. This option allows you to manage entities from sources where Roadie does not have an existing Entity provider.

### Get an API token

Before you start you will first need to [get an API key](/docs/api/authorization/).

### Load a catalog item

Run the command you see on the right hand side to create the catalog item.

### Visit the created catalog item in Roadie

After sending the API call, you can find the Catalog item in the Roadie UI by visiting: `https://<tenant name>.roadie.so/catalog`, selecting the tab that represents the entity you created and then clicking the item name in the list.

### Next Steps

- [Write a scaffolder template](/docs/scaffolder/writing-templates/) to create or update software projects.
