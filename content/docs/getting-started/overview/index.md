---
title: Overview
publishedDate: '2024-04-26T16:00:00.0Z'
description: How to begin onboarding on to Roadie.
---

## Introduction

Learn how to build your internal developer portal with Roadie:

- Populate your software catalog
- Add users and groups
- Add plugins and customise your user interface
- Dive into scorecards, templates and docs-as-code

## 1. [Setting up your catalog](/docs/getting-started/adding-a-catalog-item/)

We provide various ways to populate and model your software catalog.

Generally you will store entity files in a code repository and then provide Roadie with the URL of that file for it to be imported as a catalog entry. However you may also import a catalog item via the Roadie CLI or API.

- **GitHub** - You can store a catalog item as yaml in a code repository on GitHub and import it into the Roadie catalog.
- **Azure DevOps** - You can store a catalog item as yaml in a code repository in Azure DevOps and import it into the Roadie catalog.
- **Bitbucket** - You can store a catalog item as yaml in a code repository in Bitbucket and import it into the Roadie catalog.
- **AWS S3** - You can store a catalog item as yaml in an S3 bucket in AWS and import it into the Roadie catalog.
- **Roadie CLI** - You can import a catalog item into Roadie by calling it's API via the Roadie CLI.
- **Roadie API** - You can import a catalog item into Roadie by calling it's API.

## 2. [Adding users](/docs/getting-started/user-management/)

- [Invite](/docs/getting-started/user-management/) members of your team who will be responsible for Roadie.
- Designate [admins](/docs/getting-started/assigning-admins/) who will be responsible for configuring the Roadie system.
- [Model users, groups and teams](/docs/getting-started/teams/) to build concepts of ownership into the catalog from the start.

## 3. [Installing plugins](/docs/getting-started/configuring-backstage-plugins/)

Roadie supports many open-source Backstage plugins out of the box. See the [Plugins & Integrations](/docs/integrations/) page for a full list of supported plugins, and dedicated instructions for each one. The list of available plugins is also visible to admins in the Administration area.

## 4. [Configuring the Roadie UI](/docs/getting-started/configure-ui/)

Roadie allows you to configure which plugins you want to use via our UI. This guide explains the different types of plugin components and the different places they can be integrated into the app.

## 5. [Creating a scorecard](/docs/getting-started/creating-a-scorecard/)

Roadie Tech Insights helps you keep track of all of your software assets and make sure they meet your quality and compliance targets. You can create Scorecards to track the things that matter about your assets in the Backstage catalog.

## 6. [Creating a template](/docs/getting-started/scaffolding-components/)

Roadie Backstage Scaffolder allows you to define software templates to create new software projects, update existing ones or simply perform repeated tasks in a consistent manner. You can create your own templates, actions and field extensions to help automate common tasks.

## 7. [Adding your docs](/docs/getting-started/technical-documentation/)

Roadie Backstage TechDocs feature allows markdown files written alongside the code of your components to appear in Backstage as styled HTML documentation. Because this documentation is centralized in Backstage, it is more likely to be found and used by other people in your organization.
