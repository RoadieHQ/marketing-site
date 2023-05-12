---
title: Built-in Data Sources
publishedDate: '2023-05-12T21:00:00.0Z'
description: Built-in Data Sources.
---
## Using Built-in Data Sources

Additionally, Roadie includes several (built-in) Data Sources for common vendors such as Datadog, Snyk, PagerDuty, and GitHub. All built-in Data Sources have pre-defined Facts you can use for defining your [Checks](../checks/).

### Configuring Built-in Data Sources

Built-in Data Sources use integration configurations from common Backstage plugins and annotations provided by them. You can see configuration instructions for integrations on their respective documentation pages in [the Plugins & Integrations page](/docs/integrations/).

**Annotations used by built-in data sources**

* **GitHub** and **Dependabot**
  * `github.com/project-slug`

* **PagerDuty**
  * `pagerduty.com/service-id`

* **Datadog**
  * `datadoghq.com/slo_tag`, for retrieving SLOs 
  * `datadoghq.com/monitor_tags`, for retrieving monitors

* **Snyk**
  * `snyk.io/project-ids` 
  * (`snyk.io/org-name`), if omitted, globally configured Snyk org is used


To use built-in Data Sources, you don’t need to do any set up apart from integration configuration and configuring your entities with matching annotations. Jump to the [Checks](../checks/) section to learn more about Checks.
