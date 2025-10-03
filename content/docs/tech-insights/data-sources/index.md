---
title: Introduction to Data Sources
publishedDate: '2022-11-15'
description: Managing Data Sources.
---

# What are Data Sources?

Data Sources are data retrieval configurations towards third-party integrations or arbitrary APIs. They define a set of facts that are collected from each individual source.

The Facts collected by Data Sources can be used for defining Checks. You can view the Facts collected by a Data Source by clicking on the Data Source and finding the facts on the details page.

## Ready-made and Custom Data Sources

[Built-in Data Sources](/docs/tech-insights/builtin-data-sources/) within Roadie handle integrations towards most common targets like GitHub, PagerDuty, Datadog or multiple others. The benefit for to using built-in data sources is a curated collection of most important individual data points as well as more comprehensive custom-built data manipulation, which guarantees correct mappings from the third party integration to an entity in Roadie. If you feel that some data sources would be good candidates for built-in functionality, requests to new data source targets can be sent to Roadie via Slack or email.

However, you can also [define your own custom Data Sources](/docs/tech-insights/define-custom-data-sources/), which can pull data from external APIs, files in a repository or other file storage integration targets, Spreadsheets and other sources. Custom Data Sources are useful to gather data from in-house solutions, custom APIs or third party integrations that don't yet have a built-in integration built by Roadie. The Data Source builder gives you the ability to construct powerful Data Sources with their own entity targets, lifecycles and custom complex response mapping functionality.

To manage Data Sources, go to Tech Insights → Data Sources.

## Data Source Results - Facts

Each Data Source contains a collection of items that are called "Facts". These facts represent individual values that the Data Source has gathered over time or received through its API. Each collection of facts is tied to an individual entity within the wider Roadie catalog.

These facts can be used as values to write Tech Insights Checks against, or alternatively as values to either graph or display directly on individual entity pages.

Each Data Source has a predefined schema which contains the information of all the fact data that it provides. These individual _fact items_ within a Data Source have their own type definitions, which can be one of the following:

- string
- number
- boolean
- set
- datetime

Some example values of facts are:

- Code Quality Score
- Amount of Open Pull Requests
- Test Coverage
- Amount Severity 2 Vulnerabilities
- Last Deploy Time
- Has High-Availability Enabled

## Gathering Facts

Facts can be gathered either automatically with the help of Data Sources, which are run on schedule, or pushing the data directly towards an individual Data Source via the Roadie API.

### Pull based model

On pull based model Data Sources contact third party integrations and APIs, requesting data from them. This data is linked to individual entities and stored in the Tech Insights data storage solution. How the data is associated to individual entities depends on the specific sources of the data and how they make it available.

The schedule of the Data Source is defined as a CRON expression, and it is triggered periodically to contact the third party integration or configured API endpoint the retrieve relevant fact data. This schedule can be seen on the Data Source details pages and there is a limited set configuration options provided when creating a Data Source which allows users to configure their wanted _cadence_ for fact retrieval.

Each Data Source can be also triggered manually. This can be done either to gather relevant data for an individual entity or for all entities that the Data Source targets.

### Push based model

Roadie also provides an API which allows users to push their own facts against Data Sources. This alleviates the pain introduced for example by hard to reach sources or possible rate limits on third party APIs. The push based model targets individual Data Sources and expects the data pushed to the system to match the _schema_ defined for the Data Source.

A common use case to prefer push based model of fact gathering is values constructed during a CI/CD cycle that might be good candidates as Tech Insights fact data.

## Fact Lifecycles

Each Data Source defines a lifecycle for the facts it is gathering and storing. This lifecycle can be defined either as an amount of values stored or a duration of how long values are stored.

The lifecycle is useful to be defined when constructing Data Sources providing possibly historically relevant fact data. Examples of such data could for example be facts like "Amount of Open Pull Requests" or "Test Coverage". In these cases it might make sense to compare historical data against the latest/current values to see if individual repositories/services or teams have seen progress in their efforts to increase their software quality.
