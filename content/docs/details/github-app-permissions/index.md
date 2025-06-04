---
title: GitHub App Permissions
publishedDate: '2022-01-30T21:00:00.0Z'
description: The permissions required by our GitHub app and why we need them.
---

## Introduction

This page explains the permissions required by the various GitHub Apps we use at Roadie.

Roadie provides two GitHub apps. If you do not wish to use the scaffolder, you can choose the Lite GitHub app in order to reduce the permissions granted.

GitHub Apps are the recommended way for connecting to GitHub and accessing private repositories and other data. Roadie allows the use of a GitHub Personal Access Token also for initial testing purposes but there are various limitations with this approach such as low rate limit quotas for GitHub's APIs.

Some plugins also make use of a temporary personal OAuth2 token via prompting users to sign in to GitHub to make API requests on behalf of the user, such as the [Pull Requests plugin](https://roadie.io/backstage/plugins/github-pull-requests/).


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
| Actions           | Read         | Enables the Backstage plugin that renders Github workflow actions on the component page.                                                                                                      |
| Administrator     | Read & Write | Allows the scaffolder to create projects (e.g., `github:repo:create`), add collaborators (e.g., `github:repo:create`), manage repository subscriptions (e.g., `github:repo:create`), and create autolinks (e.g., `github:autolinks:create`). |
| Checks            | Read & Write | Allows the Github app to run checks on your backstage repositories                                                                                                                            |
| Commit statuses   | Read         | Allows Backstage to read GitHub urls pointing to reasources referenced by commit sha                                                                                                          |
| Contents          | Read & Write | Used by Backstage to read/write `catalog-info.yaml` files, open pull requests, and manage repository topics (e.g., for the `github:repo:create` action).                                    |
| Dependabot alerts | Read         | Required by the GitHub Dependabot plugin.                                                                                                                                                     |
| Deploy keys       | Read & Write | Required by the `github:deployKey:create` scaffolder action to add deploy keys to repositories.                                                                                                 |
| Deployments       | Read & Write | Required by the `github:environment:create` scaffolder action to manage deployment branch policies (e.g., `repos.createDeploymentBranchPolicy`).                                             |
| Environments      | Read & Write | Required by the `github:environment:create` scaffolder action to create or update deployment environments (e.g., `repos.createOrUpdateEnvironment`).                                          |
| Issues            | Read & Write | Required by the `github:issues:label` action to add labels and the `publish:github:pull-request` action to assign issues. Also allows Backstage to read issue stats.                       |
| Metadata          | Read         | This gives Roadie read only access to various pieces of metadata about the  GitHub organisation used only in order to enable functionality. This permission is mandatory for all GitHub apps. |
| Pages             | Read & Write | Required by the `github:pages:enable` scaffolder action to enable and configure GitHub Pages for a repository.                                                                                |
| Projects          | Read         | Allows the Github app to run checks on your backstage repositories                                                                                                                            |
| Pull requests     | Read & Write | Required for the GitHub Pull Requests plugin and to open pull requests to create `catalog-info.yaml` files.                                                                                   |
| Secrets           | Read & Write | Allows the Github app to create Secrets and manage them for GitHub Actions Workflows. This functionality is used by some Scaffolder actions also - `publish:github`, `github:repo:create` and `github:deployKey:create`.                 |
| Security events   | Read         | This allows Backstage to render a security insights plugin on the component page.                                                                                                             |
| Variables         | Read & Write | Allows the Github app to create Variables into GitHub Actions Workflows. This functionality can be used by the Scaffolder.                                                                    |
| Workflows         | Read & Write | Allows the scaffolder feature to create workflows for new projects it creates in GitHub                                                                                                       |

These are the organization permissions required:

| Name           | Access level | Reason required                                                                                                                                                                                      |
|----------------|--------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Members        | Read         | This allows Backstage to authenticate users of your Github org and ensure only users of your organisation can access it. It also allows for ownership to be assigned and displayed for each service. |
| Administration | Read & Write | Allows the scaffolder feature to create new projects in GitHub                                                                                                                                       |
