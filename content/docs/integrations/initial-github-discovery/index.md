---
title: Performing a sync with your GitHub for your catalog files
publishedDate: '2022-08-23'
lastUpdated: '2022-08-23'
description: How to perform a sync between roadie's catalog and your GitHub organisation

humanName: Github Discovery Sync
logoImage: '../../../assets/logos/github/mark/official/PNG/GitHub-Mark-120px-plus.png'
integrationType: Integration
---

## Introduction

Roadie can perform on demand syncs with your organisation. This is useful in a case where you already have `catalog-info.yaml` files distributed in your organization and you'd like to have them inside roadie's catalog.

This page describes how to do that.

## Prerequisites

- You must have installed the Roadie GitHub app in your organisation as described [here](/docs/getting-started/install-github-app/)
- You must be an Admin of Roadie Backstage

## Steps

1. Visit the Administration > Settings page and click on GitHub under Integrations
2. Scroll down to the `Import Existing Components` section.
   ![Image with the import existing components section](./import-existing-components.webp)
3. Press the `IMPORT` button in the bottom left corner.
4. A modal will open up.
   ![Opened modal](./modal.webp)
5. Type the target url that you used in your `app-config.yaml` files under the `catalog.locations` key with the type: github-discovery.
6. Press the `IMPORT` button in the bottom right corner
7. You can see a table with all of the discovered repos that got added to the roadie catalog.
   ![A table with the discovered repos](./finished.webp)

## Confirming it worked

You can go to the catalog and see your added components.
