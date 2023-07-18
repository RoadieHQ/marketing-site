---
title: Required annotations
publishedDate: '2022-02-24T09:00:00.0Z'
description: List of needed annotations for each plugin.
---

## Introduction

In order to use some of the plugins, you may need to add annotations in catalog-info.yaml files. Below, in the table, you will find a list of the plugins and required annotations you may need to add. You can read more about annotations and what they represent in [Backstage documentations](https://backstage.io/docs/features/software-catalog/well-known-annotations).


| Package                                         | Plugin name          | Required Annotations                                       |
|-------------------------------------------------|----------------------|------------------------------------------------------------|
| @roadiehq/backstage-plugin-argo-cd              | Argo CD              | argocd/app-name or argocd/project-name                     |
| @roadiehq/backstage-plugin-aws-lambda           | AWS Lambda           | aws.com/lambda-function-name                               |
| @roadiehq/backstage-plugin-bugsnag              | Bugsnag              | bugsnag.com/project-key                                    |
| @roadiehq/backstage-plugin-buildkite            | Buildkite            | buildkite.com/project-slug                                 |
| @backstage/plugin-circleci                      | Circle CI            | circleci.com/project-slug                                  |
| @backstage/plugin-cloudbuild                    | Cloudbuild           | google.com/cloudbuild-project-slug                         |
| @roadiehq/backstage-plugin-datadog              | Datadog              | datadoghq.com/site or datadoghq.com/dashboard-url          |
| @roadiehq/backstage-plugin-firebase-functions   | Firebase Functions   | cloud.google.com/function-ids                              |
| @roadiehq/backstage-plugin-github-insights      | Github Insights      | github.com/project-slug                                    |
| @roadiehq/backstage-plugin-github-pull-requests | Github Pull Requests | github.com/project-slug                                    |
| @k-phoen/backstage-plugin-grafana               | Grafana              | grafana/alert-label-selector or grafana/dashboard-selector |
| @backstage/plugin-jenkins                       | Jenkins              | jenkins.io/github-folder                                   |
| @roadiehq/backstage-plugin-jira                 | Jira                 | jira/project-key                                           |
| @k-phoen/backstage-plugin-opsgenie              | Opsgenie             | opsgenie.com/component-selector                            |
| @backstage/plugin-pagerduty                     | Pagerduty            | pagerduty.com/integration-key                              |
| @roadiehq/backstage-plugin-prometheus           | Prometheus           | prometheus.io/rule or prometheus.io/alert                  |
| @backstage/plugin-rollbar                       | Rollbar              | rollbar.com/project-slug                                   |
| @roadiehq/backstage-plugin-security-insights    | Security Insights    | github.com/project-slug                                    |
| backstage-plugin-snyk                           | Snyk                 | snyk.io/org-id and snyk.io/target-id                       |
| @backstage/plugin-sonarqube                     | Sonarqube            | sonarqube.org/project-key                                  |
| @backstage/plugin-splunk-on-call                | Splunk On-Call       | splunk.com/on-call-team or splunk.com/on-call-routing-key  |
| @roadiehq/backstage-plugin-travis-ci            | Travis CI            | travis-ci.com/repo-slug                                    |

