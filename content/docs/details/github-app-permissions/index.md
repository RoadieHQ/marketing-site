---
title: GitHub App Permissions
publishedDate: '2022-01-30T21:00:00.0Z'
description: The permissions required by our GitHub app and why we need them.
---

## Introduction

This page explains the permissions required by the various GitHub Apps we use at Roadie.

Roadie provides two GitHub apps. If you do not wish to use the scaffolder, you can choose the Lite GitHub app in order to reduce the permissions granted.

## Roadie Backstage Lite

This app enables the core Backstage functionality of the service catalog and TechDocs.

These are the repository permissions required:

| Name              | Access level | Reason required                                                                                                                                                                                                                                                                                                                                                                   |
|-------------------|--------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Contents          | Read         | Used by Backstage to read the `catalog-info.yaml` files it requires to function.                                                                                                                                                                                                                                                                                                  |
| Commit statuses   | Read         | Allows Backstage to read GitHub urls pointing to reasources referenced by commit sha                                                                                                                                                                                                                                                                                              |
| Pull requests     | Read         | Required for the GitHub Pull Requests plugin                                                                                                                                                                                                                                                                                                                                      |
| Actions           | Read         | Enables the Backstage plugin that renders Github workflow actions on the component page.                                                                                                                                                                                                                                                                                          |
| Metadata          | Read         | This gives Roadie read only access to various pieces of metadata about the GitHub organisation used only in order to enable functionality. This permission is mandatory for all GitHub apps.                                                                                                                                                                                      |
| Issues            | Read         | Allow Backstage to get stats on issues                                                                                                                                                                                                                                                                                                                                            |
| Security events   | Read         | This allows Backstage to render a security insights plugin on the component page.                                                                                                                                                                                                                                                                                                 |
| Dependabot alerts | Read         | Required by the GitHub Dependabot plugin.                                                                                                                                                                                                                                                                                                                                         |
| Workflows         | Read         | Enables the Backstage plugin that renders Github workflow actions on the component page.                                                                                                                                                                                                                                                                                          |
| Checks            | Read & Write | Allows the Github app to run checks on your backstage repositories                                                                                                                                                                                                                                                                                                                |
| Webhooks          | Read & Write | Allows the [`github:webhook` action](/docs/scaffolder/scaffolder-actions-directory/#githubwebhook) to create webhooks in your repositories via the Scaffolder                                                                                                                                                                                                                     |
| Secrets           | Read & Write | Allows the [`publish:github` action](/docs/scaffolder/scaffolder-actions-directory/#publishgithub) to add secrets when creating a new repository via the Scaffolder. (NB: The read permission only theoretically allows fetching of encrypted secrets - [see the API docs here](https://docs.github.com/en/rest/actions/secrets?apiVersion=2022-11-28#get-an-environment-secret)) |
| Variables         | Read & Write | Allows the [`publish:github` action](/docs/scaffolder/scaffolder-actions-directory/#publishgithub) to add variables when creating a new repository via the Scaffolder                                                                                                                                                                                                             |

These are the organization permissions required:

| Name           | Access level | Reason required                                                                                                                                                                                      |
|----------------|--------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Members        | Read         | This allows Backstage to authenticate users of your Github org and ensure only users of your organisation can access it. It also allows for ownership to be assigned and displayed for each service. |
| Administration | Read         | Allows Roadie to read GitHub teams to understand how users are organized                                                                                                                             |


## Roadie Backstage

This app enables all Backstage features, including the scaffolder.

These are the repository permissions required:

| Name              | Access level | Reason required                                                                                                                                                                               |
|-------------------|--------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Administrator     | Read & Write | Allows the scaffolder feature to create new projects in GitHub                                                                                                                                |
| Contents          | Read & Write | Used by Backstage to read the `catalog-info.yaml` files it requires to function, and to open pull requests to create `catalog-info.yaml` files.                                               |
| Commit statuses   | Read         | Allows Backstage to read GitHub urls pointing to reasources referenced by commit sha                                                                                                          |
| Pull requests     | Read & Write | Required for the GitHub Pull Requests plugin and to open pull requests to create `catalog-info.yaml` files.                                                                                   |
| Actions           | Read         | Enables the Backstage plugin that renders Github workflow actions on the component page.                                                                                                      |
| Metadata          | Read         | This gives Roadie read only access to various pieces of metadata about the  GitHub organisation used only in order to enable functionality. This permission is mandatory for all GitHub apps. |
| Issues            | Read         | Allow Backstage to get stats on issues                                                                                                                                                        |
| Security events   | Read         | This allows Backstage to render a security insights plugin on the component page.                                                                                                             |
| Dependabot alerts | Read         | Required by the GitHub Dependabot plugin.                                                                                                                                                     |
| Workflows         | Read & Write | Allows the scaffolder feature to create workflows for new projects it creates in GitHub                                                                                                       |
| Checks            | Read & Write | Allows the Github app to run checks on your backstage repositories                                                                                                                            |
| Projects          | Read         | Allows the Github app to run checks on your backstage repositories                                                                                                                            |
| Secrets           | Read & Write | Allows the Github app to create Secrets into GitHub Actions Workflows. This functionality can be used by the Scaffolder.                                                                      |
| Variables         | Read & Write | Allows the Github app to create Variables into GitHub Actions Workflows. This functionality can be used by the Scaffolder.                                                                    |

These are the organization permissions required:

| Name           | Access level | Reason required                                                                                                                                                                                      |
|----------------|--------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Members        | Read         | This allows Backstage to authenticate users of your Github org and ensure only users of your organisation can access it. It also allows for ownership to be assigned and displayed for each service. |
| Administration | Read & Write | Allows the scaffolder feature to create new projects in GitHub                                                                                                                                       |
