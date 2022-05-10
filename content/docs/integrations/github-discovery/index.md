---
title: Loading Backstage catalog files on your installation
publishedDate: '2022-05-10T12:14:39.0Z'
description: How to configure backstage to read catalog files on github

humanName: GitHub Discovery
logoImage: '../../../assets/logos/github/mark/official/PNG/GitHub-Mark-120px-plus.png'
integrationType: Integration
---

## Introduction

Roadie can load your catalog files automatically from GitHub.

This page describes how to do that.

## Prerequisites

- You will need a git repository for the configuration of Backstage.
- You must install the Roadie GitHub app in your organisation with access to all repositories.

## Steps

1. If the name of your organization was "acme", you would create a file in the github repository called github-discovery.yaml with the following contents:

   ```yaml
   apiVersion: backstage.io/v1alpha1
   kind: Location
   metadata:
     name: github-catalog-discovery
     description: Configuration to load catalog files github teams
   spec:
     type: github-discovery
     targets:
       - https://github.com/acme
   ```

2. Next go to the catalog import page in backstage e.g. https://<tenant-name>.roadie.so/catalog-import
3. Enter the url to that file you created.

## Confirming it worked

Within the next couple of minutes, you should see all your catalog files loaded into your backstage instance.
