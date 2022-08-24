---
title: Configuring auto discovery to your organization
publishedDate: '2022-05-10T12:14:39.0Z'
description: How to configure backstage to read catalog files on github
lastUpdated: '2022-08-23T15:44:39.0Z'

humanName: GitHub Discovery
logoImage: '../../../assets/logos/github/mark/official/PNG/GitHub-Mark-120px-plus.png'
integrationType: Integration
---

## Introduction

Roadie loads your `catalog-info.yaml` files automatically from GitHub. This document walks you through how to change the default setting, how to add new paths, and support for multiple organizations.

This page describes how to do that.

## Prerequisites

- You must have installed the Roadie GitHub app in your organisation as described [here](/docs/getting-started/install-github-app/)
- You must be an Admin of Backstage

## Steps to add

1. Visit the Administration > Settings page and click on GitHub under Integrations
2. Scroll down to the `Automatically add and remove entities from your Catalog` section.
   ![add and remove](./default-settings.webp)
3. Press the `+ ADD ITEM` button in the bottom right corner.
4. In the input that appears enter a url that you'd like to have roadie to listen for additions and deletions.
   This url accepts regex in every segment
5. Press `SAVE`
6. Press `APPLY & RESTART` This will restart your instance it can take a couple of seconds.

## Steps to remove

1. Visit the Administration > Settings page and click on GitHub under Integrations
2. Scroll down to the `Automatically add and remove entities from your Catalog` section.
   ![add and remove](./default-settings.webp)
3. Press the minus sign next to the url.
4. Press `SAVE`
5. Press `APPLY & RESTART` This will restart your instance it can take a couple of seconds.

## Example configs

### Exact url

If you do not specify any wildcards it will load only the specified exact path.

```yaml
https://github.com/RoadieHQ/roadie-backstage-plugins/blob/main/catalog-info.yaml
```

In this example, Roadie will only load a `catalog-info.yaml` file from the `main` branch when it gets added/removed from the repo `roadie-backstage-plugins` in the `RoadieHQ` organization.

### Using the default branch

If you have default branch configured differently for your repos you can use the - sign as a substitution in your url and it will get replaced by your repo's default branch

```yaml
https://github.com/RoadieHQ/roadie-backstage-plugins/blob/-/catalog-info.yaml
```

Roadie will load only catalog-info.yaml file from the default branch when it got added/removed from the repo roadie-backstage-plugins in the RoadieHQ organization

### Using wildcards

If you would like to catalog a file from all of your repos you can use the \* as a wildcard in any of the segmenets.

```yaml
https://github.com/RoadieHQ/*/blob/-/catalog-info.yaml
```

In this example, Roadie will load a `catalog-info.yaml` file from the default branch when it gets added/removed from any repo in the RoadieHQ organization

### Putting your catalog files inside a folder

You can specify a folder in the resource part of the URL any depth you would like. This gives the possibility to specify the following url.

```yaml
https://github.com/RoadieHQ/*/blob/-/.roadie/*.yaml
```

Roadie will load any yaml file inside a root level .roadie folder from the default branch when it got added/removed from any repo in the RoadieHQ organization

## Confirming it worked

Add a backstage component file to a repository which will match the configured discovery url. After commiting it to the correct branch it should be almost immedietly in your catalog.
