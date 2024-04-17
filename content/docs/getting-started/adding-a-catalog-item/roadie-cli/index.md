---
title: Roadie CLI
publishedDate: '2022-04-04T14:00:00.0Z'
description: How to configure the Roadie CLI to create a catalog item.

humanName: Roadie CLI
examples:
  - name: Component
    language: bash
    content: |
      roadie-cli roadie-entity:create \
        --kind component \
        --name first-component \
        --apiToken $ROADIE_API_TOKEN
  - name: Resource
    language: bash
    content: |
      roadie-cli roadie-entity:create \
        --kind resource \
        --name first-resource \
        --apiToken $ROADIE_API_TOKEN
  - name: System
    language: bash
    content: |
      roadie-cli roadie-entity:create \
        --kind system \
        --name first-api \
        --apiToken $ROADIE_API_TOKEN
  - name: API
    language: bash
    content: |
      roadie-cli roadie-entity:create \
        --kind api \
        --name first-api \
        --apiToken $ROADIE_API_TOKEN
  - name: Domain
    language: bash
    content: |
      roadie-cli roadie-entity:create \
        --kind domain \
        --name first-api \
        --apiToken $ROADIE_API_TOKEN
  - name: System
    language: bash
    content: |
      roadie-cli roadie-entity:create \
        --kind system \
        --name first-api \
        --apiToken $ROADIE_API_TOKEN
---

The Roadie Entity CLI allows you to create, update and delete entities in the Roadie catalog via the public API. This option allows you to manage entities from sources where Roadie does not have an existing Entity provider.

### Get an API token

Before you start you will first need to [get an API key](/docs/api/authorization/).

### Install the CLI

You can install the cli with the following command
```bash
npm install -g @roadiehq/roadie-cli
```
