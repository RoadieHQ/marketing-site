---
title: Creating a scorecard
publishedDate: '2024-04-29'
description: How to create a Scorecard using Tech Insights.
---

Roadie Tech Insights helps you keep track of all of your software assets and make sure they meet your quality and compliance targets.

You can create Scorecards to track the things that matter about your assets in the Backstage catalog. This is done by ingesting Fact data via various Data Sources, and then aggregating Checks on those Facts.

## Prerequisites

- Roadie Tech Insights is a paid add-on. If you are not sure about whether or not you have it or would like to include it, please reach out to our sales team.
- You must be an administrator for your Roadie instance to enable and manage Tech Insights.

## Example: Tracking CODEOWNERS adoption

To track adoption of something like CODEOWNERS, we need three building blocks:

- A Data Source
- A Check
- And a Scorecard.

## Using a Data Source

There are several useful Data Sources that come built-in to Tech Insights.

One is the **GitHub Repository Settings Data Source**. This gives us access to several facts that we can use to construct our Check, including `Uses Codeowners` which indicates whether a services has CodeOwners enabled. It uses the `github.com/project-slug` annotation on each services catalog-info file to identify the releveant underlying repository.

[Authentication is required](/docs/tech-insights/builtin-data-sources/#authentication-3) but if you have the GitHub App installed then access will be granted based on permissions granted for that app.

You can also create your own [custom Data Source](/docs/tech-insights/define-custom-data-sources/) to consume data by calling an API or reading from external data like a CSV.

## Creating our Check

Next we need to build a Check.

A Check is a rule which a service either does or does not satisfy. Checks are defined by evaluating a Fact from a Data Source against a logical operation, such as checking if services have less than 4 Low Severity Issues from Snyk.

- [Creating a Check](/docs/tech-insights/add-check/)

## Creating our Scorecard

Now that we have our Data Sources connected to our Check, we need to surface that in a Scorecard so that all entities have access to the information.

Scorecards are for higher-level objectives, like security or compliance. We can add additional checks to a Scorecard over time but let's start with the Check we built in the previous step.

- [Creating a Scorecard](/docs/tech-insights/add-scorecard/)

## Next steps

- To learn more about Tech Insights on Roadie, please visit our [in-depth Tech Insights documentation](/docs/tech-insights/introduction/).
- To learn about other, more complex Checks, review our [Tech Insights recipes](/docs/tech-insights/track-docker-base-image-migration/) to understand how to track a variety of different facets of your software.
