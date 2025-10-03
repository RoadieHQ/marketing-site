---
title: Roadie CLI
publishedDate: '2022-04-04T14:00:00.0Z'
description: You can import a catalog item into Roadie by calling its API via the Roadie CLI.

category: catalog-source
order: 4
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
---

The Roadie Entity CLI allows you to create, update and delete entities in the Roadie catalog via the public API. This option allows you to manage entities from sources where Roadie does not have an existing Entity provider.

### Get an API token

Before you start you will first need to [get an API key](/docs/api/authorization/).

### Install the CLI

You can install the cli with the following command

```bash
npm install -g @roadiehq/roadie-cli
```

### Load a catalog item

Run the command you see on the right hand side to create the catalog item.

### Visit the created catalog item in Roadie

After running the command, you can find the Catalog item in the Roadie UI by visiting: `https://<tenant name>.roadie.so/catalog`, selecting the tab that represents the entity you created and then clicking the item name in the list.

### Next Steps

- [Write a scaffolder template](/docs/scaffolder/writing-templates/) to create or update software projects.
