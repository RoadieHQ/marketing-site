---
title: Using Built-in Data Sources
publishedDate: '2023-05-12T21:00:00.0Z'
description: Built-in Data Sources.
---

 Roadie includes several (built-in) Data Sources for common vendors such as Datadog, Snyk, PagerDuty, and GitHub. All built-in Data Sources have pre-defined Facts you can use for defining your [Checks](../checks/).

### Configuring Built-in Data Sources

Built-in Data Sources use integration configurations from common Backstage plugins and annotations provided by them. You can see configuration instructions for integrations on their respective documentation pages in [the Plugins & Integrations page](/docs/integrations/).

You will find a list of built-in Data Sources, below, with annotations used by them and facts they currently include.

### Datadog Data Source

**Annotations used:** 
 * `datadoghq.com/slo_tag`, for retrieving SLOs 
 * `datadoghq.com/monitor_tags`, for retrieving monitors
 
<details>
<summary><b> Facts </b></summary>

| Name | Description          |
| ------- | ------------------ |
| Slo Count  | Number of SLOs configured in datadog matched based on the annotated tag.|
| Monitor Count | Number of monitors configured in datadog with tags matching the monitor_tags annotation. |

</details>

### Dependabot Alerts Data Source

**Annotations used:** `github.com/project-slug`
 
<details>
<summary><b> Facts </b></summary>
 
| Name | Description          |
| ------- | ------------------ |
| Open Alerts  | Number of Dependabot alerts with state "open".|
| Dismissed Alerts | Number of Dependabot alerts with state "dismissed".|
| Dismissed Without Reason Alerts | Number of Dependabot alerts with state "dismissed" that don\'t have dismissed_reason set.|
| Dismissed Without Comment Alerts | Number of Dependabot alerts with state "dismissed" that don\'t have dismissed_comment set.|
| Fixed Alerts |Number of Dependabot alerts with state "fixed".|
| Open Critical Severity Alerts | Number of open Dependabot alerts with "critical" severity.|
| Open High Severity Alerts | Number of open Dependabot alerts with "high" severity.|
| Open Medium Severity Alerts | Number of open Dependabot alerts with "medium" severity.|
| Open Low Severity Alerts | Number of open Dependabot alerts with "low" severity.|
| Dissmissed Critical Severity Alerts | Number of dismissed Dependabot alerts with "critical" severity.|
| Dissmissed High Severity Alerts | Number of dismissed Dependabot alerts with "high" severity.|
| Dissmissed Medium Severity Alerts | Number of dismissed Dependabot alerts with "medium" severity.|
| Dissmissed Low Severity Alerts | Number of dismissed Dependabot alerts with "low" severity.|
| Fixed Critical Severity Alerts | Number of fixed Dependabot alerts with "critical" severity.|
| Fixed High Severity Alerts | Number of fixed Dependabot alerts with "high" severity.|
| Fixed Medium Severity Alerts | Number of fixed Dependabot alerts with "medium" severity.|
| Fixed Low Severity Alerts | Number of fixed Dependabot alerts with "low" severity.|
| Oldest Open Alert Publish Date| Oldest alert publish date with state "open".|
| Oldest Open Alert Update Date| Oldest alert update date with state "open".|

</details>

### Entity Metadata Data Source

**Annotations used:** 
 
<details>
<summary> <b>Facts</b> </summary>
| Name | Description          |
| ------- | ------------------ |
| Has Title  | The entity has a title in metadata.|
| Has Description| The entity has a description in metadata.|
| Has Relationship | Has relationships defined to other entities.|
| Has Tags | The entity has tags in metadata.|
| Kind | The entity kind.|
| Name | The entity name.|
| Namespace | The entity namespace.|
| Title | The entity title.|
| Description | The entity description.|
| Type | The entity type.|
| Lifecycle | The entity lifecycle.|
| GitHub Project Slug | The entity's Github project slug. |
| Tags | The entity's tags.|
| Owner | The entity owner.|
| Annotation Keys | The entity annotation keys.|
| Label Keys | The entity label keys.|
| Link Urls | Links urls associated with the entity.|
</details>

### Entity Ownership Data Source

**Annotations used:** 
 
<details>
<summary> <b>Facts</b> </summary>

| Name | Description          |
| ------- | ------------------ |
| Has Owner  | The spec.owner field is set.|
| Has Group Owner | The spec.owner field is set and refers to a group.|
| Has Relationship | Has relationships defined to other entities.|
| Owner | The entity owner.|
| System | The system that the entity belongs to.|
| Depends On | An array of entity references to the components and resources that the entity depends on.|
| Dependency of | An array of entity references to the components and resources that the resource is a dependency. |
| Consumes APIs | An array of entity references to the APIs that are consumed by the entity.|
| Provides APIs | An array of entity references to the APIs that are provided by the entity.|
| Subcomponent Of | An entity reference to another component of which the entity is a part.|

</details>

### GitHub Alerts Data Source

**Annotations used:** `github.com/project-slug`
 
<details>
<summary><b> Facts </b> </summary>

| Name | Description          |
| ------- | ------------------ |
| Amount Of Open Pull Requests | Number of GitHub pull requests configured for this entity.|
</details>

### Pagerduty Analytics Data Source

**Annotations used:** `pagerduty.com/service-id`
 
<details>
<summary> <b>Facts</b> </summary>

| Name | Description          |
| ------- | ------------------ |
| Mean Assignment Count  | Mean count of instances where responders were assigned an incident (including through reassignment or escalation) or accepted a responder request.|
| Mean Engaged Seconds | Mean engaged time across all responders for incidents that match the given filters. Engaged time is measured from the time a user engages with an incident (by acknowledging or accepting a responder request) until the incident is resolved. This may include periods in which the incidents was snoozed.|
| Mean Engaged User Count | Mean number of users who engaged with an incident. Engaged is defined as acknowledging an incident or accepting a responder request in it.|
| Mean Seconds To Engage | A measure of people response time. This metric measures the time from the first user engagement (acknowledge or responder accept) to the last. This metric is only used for incidents with multiple responders; for incidents with one or no engaged users, this value is null.|
| Mean Seconds To First Ack | Mean time between the start of an incident, and the first responder to acknowledge.|
| Mean Seconds To Mobilize | Mean time between the start of an incident, and the last additional responder to acknowledge. For incidents with one or no engaged users, this value is null. |
| Mean Seconds To Resolve | Mean time from when an incident was triggered until it was resolved.|
| Total Business Hour Interruptions | Total number of unique interruptions during business hours. Business hour: 8am-6pm Mon-Fri, based on the user’s time zone.|
| Total Engaged Seconds | Total engaged time across all responders for incidents. Engaged time is measured from the time a user engages with an incident (by acknowledging or accepting a responder request) until the incident is resolved. This may include periods in which the incidents was snoozed.|
| Total Escalation count | Total count of instances where an incident is escalated between responders assigned to an escalation policy.|
| Total Incident count | The total number of incidents that were created.|
| Total Off Hour Interruptions | Total number of unique interruptions during off hours. Off hour: 6pm-10pm Mon-Fri and all day Sat-Sun, based on the user’s time zone.|
| Total Sleep Hour Interruptions | Total number of unique interruptions during sleep hours. Sleep hour: 10pm-8am every day, based on the user’s time zone.|
| Total Snoozed Seconds | Total number of seconds incidents were snoozed.|
| Up Time Pct | The percentage of time in the defined date range that the service was not interrupted by a major incident.|

</details>

### PagerDuty Service Info Data Source

**Annotations used:** `pagerduty.com/service-id`

<details>
<summary> <b>Facts</b> </summary>

| Name | Description          |
| ------- | ------------------ |
| Has Scheduled Actions  | A Boolean indicating if the service has automatic scheduled actions configured.|
| Has Description | A Boolean indicating if the service has a description.|
| Has Support Hours Set | A Boolean indicating if the service has at least one day of the week of support hours assigned to it in PagerDuty.|
| Has Escalation Policy | A Boolean indicating if the service has escalation policy assigned to it in PagerDuty.|
| Has Teams Assigned | A Boolean indicating if the service has teams assigned to it in PagerDuty.|
| Alert Creation Type | Alert creation type of the service. Determines whether a service creates only incidents, or both alerts and incidents. Applicable values are "create_incidents" or "create_alerts_and_incidents".|
| Integration Types | A set of integration types configured for the service.|
| Latest Incident | Creation Datetime of the latest incident for the service. Defaults to Epoch 0.|

</details>

### Snyk Data Source

**Annotations used:** 
  * `snyk.io/project-ids` 
  * `snyk.io/org-name`, if omitted, globally configured Snyk org is used
  
<details>
<summary> <b>Facts</b> </summary>

| Name | Description          |
| ------- | ------------------ |
| Amount of Projects  | Number of Snyk projects configured for this entity.|
| Test Frequencies | A collection of test frequencies configured for the projects of the entity. Individual values can be 'daily', 'weekly or 'never'.|
| Monitored Statuses | A collection of monitored statuses for the projects of the entity. Individual values can be either true or false.|
| Total Dependencies | Sum of all dependencies across all Snyk projects for this entity.|
| Low Severity Issue Count | Sum of all low severity issues across all Snyk projects for this entity.|
| Medium Severity Issue Count | Sum of all medium severity issues across all Snyk projects for this entity.|
| High Severity Issue Count | Sum of all high severity issues across all Snyk projects for this entity.|
| Critical Severity Issue Count Incident | Sum of all critical severity issues across all Snyk projects for this entity.|
| Last Tested Date | Latest test timestamp of any Snyk project configured for this entity.|
| Tags | A collection of tags for the projects of the entity. Stored as "key=value" strings.|
| Criticality Attributes | A collection of attributes under "criticality" key for the projects of the entity.|
| Environment Attributes | A collection of attributes under "environment" key for the projects of the entity.|
| Lifecycle Attributes | A collection of attributes under "lifecycle" key for the projects of the entity.|

</details>

### TechDocs Data Source

**Annotations used:** 

<details>
<summary> <b>Facts</b> </summary>

| Name | Description          |
| ------- | ------------------ |
|  Has Annotation Backstage Io Techdocs Ref | The entity has a TechDocs reference annotation.|
</details>

To use built-in Data Sources, you don’t need to do any set up apart from integration configuration and configuring your entities with matching annotations. Jump to the [Checks](../checks/) section to learn more about Checks.
