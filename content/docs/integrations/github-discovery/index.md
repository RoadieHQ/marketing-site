---
title: Loading Backstage catalog files on your installation
publishedDate: '2022-05-10T12:14:39.0Z'
description: How to configure backstage to read catalog files on github

humanName: GitHub Discovery
logoImage: '../../../assets/logos/github/mark/official/PNG/GitHub-Mark-120px-plus.png'
integrationType: Integration
---

## Introduction

Roadie can load your catalog files automatically from GitHub. It takes advantage of the github webhooks to keep the catalog up to date with your additions and modifications.

This page describes how to do that.

## Prerequisites

- You must have installed the Roadie GitHub app in your organisation as described [here](/docs/getting-started/install-github-app/)
- You must be an Admin of Backstage

## Steps

1. Visit the Administration > Settings page and click on GitHub under Integrations
2. Scroll down to the `Automatically add and remove entities from your Catalog` section.
   ![add and remove](./add-remove.webp)
3. Press the `+ ADD ITEM` button in the bottom right corner.
4. In the input that appears enter a url that you'd like to have roadie to listen for additions and deletions.
   This url accepts regexes in every segment:

```yaml
# Roadie will only add entities when a catalog-info.yaml file was added/removed to the default branch from the roadie-backstage-plugins repo in the RoadieHQ organiztion.
- https://github.com/RoadieHQ/roadie-backstage-plugins/blob/-/catalog-info.yaml
# Roadie will only add/remove entities when a catalog-info.yaml file was added/removed to the default branch from any repos in the RoadieHQ organization.
- https://github.com/RoadieHQ/*/blob/-/catalog-info.yaml
# Roadie will add/remove any files that ends with yaml and inside a `.roadie` folder, that were added/removed to any branch from any repos in the RoadieHQ organization.
- https://github.com/RoadieHQ/*/blob/*/.roadie/*.yaml
# It will be expanded to the following url: `https://github.com/RoadieHQ/*/blob/-/catalog-info.yaml` In this case roadie will add/remove every catalog-info.yaml file inside every repo that got added/removed to/from the default branch in the RoadieHQ organization.
There is a special case if you only specify your organization like: `https://github.com/RoadieHQ`

`-` in the place of branch it means the configured default branch in the repository.
```

5. Press `SAVE`
6. Press `APPLY & RESTART` This will restart your instance it can take a couple of seconds.

## Confirming it worked

Add a backstage component file to a repository which will match the configured discovery url. After commiting it to the correct branch it should be almost immedietly in your catalog.
