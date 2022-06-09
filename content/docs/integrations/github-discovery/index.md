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

- You must have installed the Roadie GitHub app in your organisation as described [here](/docs/getting-started/install-github-app/)
- You must be an Admin of Backstage

## Steps

1. Visit the Administration > Settings page and click on GitHub under Integrations
2. Find the Add button beside "Configure Autodiscovery of entities" and click the button.
3. In the dialog the appears enter the name of the url of your GitHub Organization e.g. `https://github.com/your-org`. Press Save

## Confirming it worked

Within the next couple of minutes, you should see the org structure loaded into backstage as "Group" and "User" kind entities.
