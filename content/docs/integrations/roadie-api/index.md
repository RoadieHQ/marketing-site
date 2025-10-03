---
title: Using the Roadie API
publishedDate: '2024-02-20T21:00:00.0Z'
lastValidated: '2024-02-20T21:00:00.0Z'
description: How to manage entities via the Roadie API

humanName: Roadie API
logoImage: '../../../assets/logos/roadie/roadie-racks.webp'
integrationType: Catalog data source
---

## Introduction

The Roadie Entity API allows you to create, update and delete entities in the Roadie catalog via the public API. This option allows you to manage entities from sources where Roadie does not have an existing Entity provider.

Before you start you will first need to [get an API key](/docs/api/authorization/).

You can either manage entities as a full set of entities, or create and delete entities one by one. You would use entity sets if you want to create a batch of entities and manage them on an ongoing basis in an idempotent manner. For example, you might want to run a script once a week that lists resources from your internal system and creates relevant entities in Roadie. Then when resources are added and removed, the entities are added and removed.

## At a Glance

|                            |                                                                                                  |
| -------------------------: | ------------------------------------------------------------------------------------------------ |
|          **Prerequisites** |                                                                                                  |
|         **Considerations** |                                                                                                  |
| **Supported Environments** | ☐ Private Network via Broker <br /> ☐ Internet Accessible via IP Whitelist <br /> ☒ Cloud Hosted |

## Entity Sets

To create / update a set of entities, you can call the following API. It will completely replace all entities in the specified set with the entities specified in the body of the request. If the set does not exist, it will be created as part of this call.

```bash
curl -X PUT https://api.roadie.so/api/catalog/roadie-entities/sets/my-entities \
  -H "Authorization: Bearer $ROADIE_API_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
        "items": [
          {
             "apiVersion": "backstage.io/v1alpha1",
             "kind": "Component",
             "metadata": {
               "name": "sample-component",
               "description": "A sample component.",
               "title": "Sample Component"
             },
             "spec": {
               "type": "library",
               "owner": "roadie-demo/dev-team",
               "lifecycle": "production",
               "system": "core-system"
            }
          }
        ]
      }'
```

You can list entity sets with the following API call.

```bash
curl -X GET https://api.roadie.so/api/catalog/roadie-entities/sets \
  -H "Authorization: Bearer $ROADIE_API_TOKEN"
```

And list the entities within a set with the following call:

```bash
curl -X GET https://api.roadie.so/api/catalog/roadie-entities/entities?set=my-entities \
  -H "Authorization: Bearer $ROADIE_API_TOKEN"
```

You can delete an entity set by removing the last entity from a particular set. e.g. the following call will delete the set:

```bash
curl -X PUT https://api.roadie.so/api/catalog/roadie-entities/sets/my-entities \
  -H "Authorization: Bearer $ROADIE_API_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
        "items": []
      }'
```

## Entities

To create an entity without an entity set, you can do that with the following API call.

```bash
curl -X POST https://api.roadie.so/api/catalog/roadie-entities/entities \
  -H "Authorization: Bearer $ROADIE_API_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
        "apiVersion": "backstage.io/v1alpha1",
        "kind": "Component",
        "metadata": {
          "name": "another-sample-component",
          "description": "Another sample component for testing Roadie Backstage functionality.",
          "title": "Another Sample Component"
        },
        "spec": {
          "type": "library",
          "owner": "roadie-demo/dev-team",
          "lifecycle": "experimental",
          "system": "core"
        }
      }'
```

You can retrieve an entity with the entity id.

```bash
curl -X GET https://api.roadie.so/api/catalog/roadie-entities/entities/d6ca25f8-58d0-4d19-a4d1-005065568f0e \
  -H "Authorization: Bearer $ROADIE_API_TOKEN"
```

You can delete that entity with the entity id.

```bash
curl -X DELETE https://api.roadie.so/api/catalog/roadie-entities/entities/d6ca25f8-58d0-4d19-a4d1-005065568f0e \
  -H "Authorization: Bearer $ROADIE_API_TOKEN"
```
