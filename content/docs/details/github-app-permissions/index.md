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

### Repository Permissions
| Permission | Roadie Backstage Lite | Roadie Backstage | Reason |
| --- | --- | --- | --- |
| Actions | Read | Read & Write | Enables the Backstage plugin that renders Github workflow actions on the component page. |
| Administration | Read | Read & Write | Allows the scaffolder feature to create new projects in GitHub |
| Checks | Read & Write | Read & Write | Allows the Github app to run checks on your backstage repositories |
| Code Scanning Alerts | Read | Read | Allows the Github app to read code scanning alerts on your backstage repositories |
| Commit statuses | Read | Read | Allows Backstage to read GitHub urls pointing to reasources referenced by commit sha |
| Contents | Read | Read & Write | This allows Backstage to render a security insights plugin on the component page. |
| Dependabot alerts | Read | Read | Required by the GitHub Dependabot plugin. |
| Deployments | Not Used | Read & Write | Required by the `github:environment:create` scaffolder action to create or update deployment environments (e.g., `repos.createOrUpdateEnvironment`). |
| Environments | Not Used | Read & Write | Required by the `github:environment:create` scaffolder action to create or update deployment environments (e.g., `repos.createOrUpdateEnvironment`). |
| Issues | Read | Read & Write | Required by the `github:issues:label` action to add labels and the `publish:github:pull-request` action to assign issues. Also allows Backstage to read issue stats. |
| Metadata | Read | Read | This gives Roadie read only access to various pieces of metadata about the GitHub organisation used only in order to enable functionality. This permission is mandatory for all GitHub apps. |
| Pages | Not Used | Read & Write | Required by the `github:pages:enable` scaffolder action to enable and configure GitHub Pages for a repository. |
| Projects | Not Used | Read | Allows the Github app to run checks on your backstage repositories. |
| Pull Requests | Read | Read & Write | Required for the GitHub Pull Requests plugin and to open pull requests to create files. |
| Secrets | Not Used | Read & Write | Allows the Github app to create Secrets and manage them for GitHub Actions Workflows. This functionality is used by some Scaffolder actions also - `publish:github`, `github:repo:create` and `github:deployKey:create`. |
| Security Events | Read | Read | This allows Backstage to render a security insights plugin on the component page. |
| Webhooks | Read & Write | Read & Write | Allows the Github app to create webhooks on your backstage repositories. |
| Workflows | Not Used | Read & Write | Allows the scaffolder feature to create workflows for new projects it creates in GitHub |
| Variables | Not Used | Read & Write | Allows the Github app to create Variables into GitHub Actions Workflows. This functionality can be used by the Scaffolder. |

### Organization Permissions
| Permission | Roadie Backstage Lite | Roadie Backstage | Reason |
| --- | --- | --- | --- |
| Administration | Read | Read & Write | Allows Roadie to read GitHub teams to understand how users are organized. Also allows the scaffolder feature to create new projects in GitHub. |
| Members | Read | Read | This allows Backstage to authenticate users of your Github org and ensure only users of your organisation can access it. It also allows for ownership to be assigned and displayed for each service. |
