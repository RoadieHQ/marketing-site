---
title: Track Datadog SLOs
publishedDate: '2023-07-25T18:15:00.0Z'
description: How to track and visualize Datadog SLOs with Roadie Tech Insights
---

As a platform team, it is important to measure the reliability and performance of services, and Datadog provides powerful tools to monitor and track them. Creating and monitoring Datadog Service Level Objectives (SLOs) is one way to do it. Defining SLOs across multiple components can be an objective as well, and with Tech Insights, your team is now able to manage these.

### **Prerequisites**

Before you begin, make sure you have the following:

- A Datadog account: Sign up for a Datadog account if you don't have one already.
- Access to your system's components: Ensure you have the necessary permissions to access the components you want to track.
- Defined SLOs in at least one of the components.

With Roadie's Tech Insights feature, there's an easier way. In this tutorial, we’re going to:

1. Set up Datadog integration.
2. Automatically scan Components in the Backstage catalog and record how many SLOs are defined for each.
3. Visualize the distribution of SLOs defined count.
4. Create a check to verify if at least one SLO is defined for each component.

As we go through this process, you’ll learn:

1. How to use built-in Data Sources (Datadog) and how to create Checks with Tech Insights.
2. How to detect which component has SLO defined with Tech Insights.
3. How to use a comparison operator.

Let's get started.

## Setup Datadog integration

In order to collect the Datadog SLO count from each component, the Datadog integration needs to be set up on Roadie. To do that, follow these steps:

### Administration → Settings → Datadog

Set the hostname of your Datadog app.

### Administration → Settings → Secrets

Set the `Datadog API Token` and `Datadog APP Token` in order for your Roadie instance to contact your Datadog app.

| Key          | Token             |
| ------------ | ----------------- |
| DD_API_TOKEN | Datadog API Token |
| DD_APP_TOKEN | Datadog APP Token |

## Record the SLO count for each component

In order to know which software has Datadog SLOs configured, we’re going to use the built-in Datadog Data Source in Roadie Tech Insights. It will run periodically and extract the SLO count from each component.

These are the steps to set that up.

1. Visit Tech Insights and click into the Data Sources tab. Search for the Datadog Data Source from the Data Sources list and select it.

   ![Data Source Listing](./datasources_list.png)

2. You may need to wait some time for the data source to collect all SLOs and Monitors from Datadog. It must contact the Datadog APIs for each component, which is captured by the already set filter.

   ![Data Source Results](./datasource_results.png)

## Visualize the distribution of SLOs count

Our Data Source comes with a built-in visualization panel that lets us get an overview of the SLO counts present in each configured and annotated component. When viewing a Data Source, expand the “Facts visualization” section to see it.

![Data Source Visualization](./datasource_graph.png)

This chart tells us:

1. 33% of the Components that this Data Source targets have 1 SLO defined and configured.
2. 33% of the Components that this Data Source targets have 2 SLOs defined and configured.
3. 33% of the Components that this Data Source targets have no SLOs configured.

In the next section, we will create a Check that can show a pass or fail result to app dev teams to tell them if they are missing any component that doesn’t have an SLO defined.

## Create a check that shows which software doesn’t have an SLO defined and configured

Now that we can determine which components are using Dockerfiles, and we can extract the base image version from those files, let’s write a check to combine both of these properties.

1. Visit Tech Insights and click into the Checks tab. Click the ADD CHECK button to create a new check.

   ![Checks Listing](./checks_overview.png)

2. Give the check a sensible name, like “Apps must have at least one Datadog SLO”, and a description like “Having Datadog SLOs configured for each component is important to measure the reliability and performance of services on a global scale.”

   ![Create a Check](./create_check.png)

3. In the Conditions section, we’re going to create a condition that compares against the Datadog Slo facts retrieved from the data source.
4. In the first set of condition inputs, use the following values.

   | Input name    | Value               |
   | ------------- | ------------------- |
   | Data Source   | Datadog Data Source |
   | Fact          | Slo count           |
   | Fact operator | Greater than        |
   | Value         | 0                   |

   You can use the “DRY RUN” button to test these conditions against some Components in your catalog, ensure they operate the way you would expect, and return the correct pass or fail result.

5. Use the filters to target this check at the same set of components as the Data Sources target.

   ![Check Filter](./check_filter.png)

   To filter every software that has Datadog SLO tags configured, you can use the filter "Has annotations: `datadoghq.com/slo_tag`".

6. Save the check by clicking “SAVE”. If you’re not quite ready to go live yet, you can use the “SAVE AS DRAFT” button to save the check but ensure only admins can see it.

### Check results

The results of this check tell us what software still doesn't have any SLOs configured and whom to reach out to fix it.

![Check Results](./check-results.png)

- The sample-api and sample-service pass the check; they have at least one SLO configured.
- The sample-backend fails the check as it has no SLO configured.

Since we already know the owners of these components, it’s easy to reach out and ask them to define and configure SLOs.
