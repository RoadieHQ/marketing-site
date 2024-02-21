---
title: GitHub Teams
publishedDate: '2024-02-20T21:00:00.0Z'
description: How to manage entities via a HTTP URL

humanName: GitHub Teams
logoImage: '../../../../assets/logos/github/mark/official/PNG/GitHub-Mark-120px-plus.png'
entityKinds: [user, group]
discovery: true
---

## Introduction

Roadie can load your organization team structure and employees from GitHub teams.

This page describes how to do that.

## Prerequisites

- You must have installed the Roadie GitHub app in your organisation as described [here](/docs/getting-started/install-github-app/)
- You must be an Admin of Backstage

## Steps

1. Visit the Administration > Settings page and click on GitHub under Integrations
2. Find the Add button beside "Configure Autodiscovery of teams and users" and click the button.
3. In the dialog the appears enter the name of the GitHub Organization. Press Save

## Confirming it worked

Within the next couple of minutes, you should see the org structure loaded into backstage as "Group" and "User" kind entities.
