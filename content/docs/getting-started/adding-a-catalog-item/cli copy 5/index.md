---
title: Roadie CLIss
publishedDate: '2022-04-04T14:00:00.0Z'
description: How to configure the Roadie CLI to create a catalog item.

humanName: Roadie CLI6
examples:
  - name: component
    language: bash
    content: |
      roadie-cli roadie-entity:create \
        --kind component \
        --name first-component \
        --apiToken $ROADIE_API_TOKEN
  - name: resource
    language: bash
    content: |
      roadie-cli roadie-entity:create \
      --kind resource \
      --name first-resource \
      --apiToken $ROADIE_API_TOKEN
  - name: api
    language: bash
    content: |
      roadie-cli roadie-entity:create \
      --kind api \
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