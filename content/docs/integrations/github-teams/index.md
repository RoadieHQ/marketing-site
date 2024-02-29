---
title: Loading GitHub Organization Teams
publishedDate: '2021-03-19T12:14:39.0Z'
description: How to configure backstage to read teams from github

humanName: GitHub Teams
logoImage: '../../../assets/logos/github/mark/official/PNG/GitHub-Mark-120px-plus.png'
integrationType: Catalog Source
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
