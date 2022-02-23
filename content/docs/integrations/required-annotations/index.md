---
title: Required annotations
publishedDate: '2022-02-124T09:00:00.0Z'
description: List of needed annotations for each plugin.
---

## Introduction

In order to use some of the plugins, you may need to add annotations in catalog-info.yaml files. Below, in the table, you will find a list of the plugins and required annotations you may need to add. You can read more about annotations and what they represent in [Backstage documentations](https://backstage.io/docs/features/software-catalog/well-known-annotations).


| Plugin  | Required Annotations          |
| ------- | ------------------ |
| @roadiehq/backstage-plugin-github-pull-requests  | github.com/project-slug |
| @roadiehq/backstage-plugin-github-insights| github.com/project-slug |
| @roadiehq/backstage-plugin-argo-cd| argocd/app-name or argocd/project-name |
| @roadiehq/backstage-plugin-aws-lambda| aws.com/lambda-function-name |
| @roadiehq/backstage-plugin-bugsnag| bugsnag.com/project-key |
| @roadiehq/backstage-plugin-buildkite | buildkite.com/project-slug |
| @roadiehq/backstage-plugin-datadog | datadoghq.com/site' or 'datadoghq.com/dashboard-url |
| @roadiehq/backstage-plugin-firebase-functions| cloud.google.com/function-ids |
| @roadiehq/backstage-plugin-jira | jira/project-key |
| @roadiehq/backstage-plugin-security-insights | github.com/project-slug |
| @roadiehq/backstage-plugin-travis-ci | travis-ci.com/repo-slug |
| @roadiehq/backstage-plugin-security-insights | github.com/project-slug |
| @roadiehq/backstage-plugin-prometheus | prometheus.io/rule or prometheus.io/alert |
| @backstage/plugin-sonarqube | sonarqube.org/project-key |
| @backstage/plugin-circleci | circleci.com/project-slug |
| @backstage/plugin-cloudbuild | google.com/cloudbuild-project-slug |
| @backstage/plugin-jenkins | jenkins.io/github-folder |
| @k-phoen/backstage-plugin-opsgenie | opsgenie.com/component-selector |
| @backstage/plugin-rollbar | rollbar.com/project-slug |