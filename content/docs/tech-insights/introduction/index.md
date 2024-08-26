---
title: Introduction to Tech Insights
publishedDate: '2022-11-15'
description: An introduction to the Tech Insights plugin.
---

Roadie Tech Insights helps you keep track of all of your software assets and make sure they meet your quality and compliance targets.

You can create Scorecards to track the things that matter about your assets in the Backstage catalog. This is done by ingesting Fact data via various Data Sources, and then aggregating Checks on those Facts.

Therefore, in order to create [Scorecards](../scorecards/index.md), you will need to add [Data Sources](../data-sources/index.md) and define [Checks](../checks//index.md) on such data. Roadie provides a user interface to build all three of these, this page describes how to set each one of them.


## Prerequisites

- Roadie Tech Insights is a paid add-on. If you are not sure about whether or not you have it or would like to include it, please reach out to our sales team.
- You must be an administrator for your Roadie instance to enable and manage Tech Insights. See [access section](#users-access) for more details.


## Read Only Access

By default, all users will be able to see but not edit Tech Insights content.

If you want to hide Tech Insights for non-admin users such as when initially setting it up, you can check 'Admins only' checkbox under Administration → Settings → Plugins → Tech Insights page. This will remove Tech Insights from the sidebar for anyone who is not part of `roadie-backstage-admin` or `roadie-tech-insights-admin` groups.

![Admin Only View](./admin-only-settings.webp)


## Write Access

Anyone who is part of the `roadie-backstage-admin` group in Roadie will have write access to Tech Insights.

However, if you want to grant write access to the feature to some users, but do not wish to make them parts of main admin group (`roadie-backstage-admin`), you can create a group called `roadie-tech-insights-admin` and add them as a members there.

If it exists, anyone who is part of the `roadie-tech-insights-admin` group in Roadie will have write access to Tech Insights.

⚠️ If you are using GitHub Teams to manage your user groups, please note that it can take some time for Roadie to refresh the list of teams from GitHub teams once the discovery location is added. If you do not see admin functions immediately, please wait a few minutes and try again.


## Disabling Roadie Tech Insights

To disable Roadie Tech Insights and remove it from your sidebar, please reach out to Roadie support.


## First steps

You will first want to see what data is available to use already and see how to pull in custom data sets via [Data Sources](../data-sources/). Then you can define [Checks](../checks/) for your Data Sources, and compose [Scorecards](../scorecards/) with the Checks.
