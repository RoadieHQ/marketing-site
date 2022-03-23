---
title: Adding plugins
publishedDate: '2022-01-30T21:00:00.0Z'
description: How to add and configre Backstage plugins in Roadie
---

## Introduction

Roadie supports many open-source Backstage plugins out of the box. This tutorial will show you how to add a plugin to Roadie.

We will use PagerDuty in this example, but the process is broadly similar for most plugins.

See the sidebar for a full list of supported plugins, and dedicated instructions for each one.

## Prerequisites

You must be an admin in Roadie. By default, all users are admins. Learn how to designate certain users as admins [here](/docs/getting-started/create-admin-group/).

## Step 1: Add the UI component

Most plugins make available a Tab or Card which must be added to the Roadie interface.

Let's add the PagerDuty Card to the Component Overview page.

1. Visit the Overview page of a Component in your catalog and click the gear icon in the top right corner.

![Backstage page showing a service with various cards which pull in information from third-party systems](./component-overview-page.png)

3. Click the plus icon to add a component.

![The same view with a red arrow pointing to a plus icon which has appeared in place of the gear icon](./plus-icon.png)

4. Search for "EntityPagerDutyCard" in the dialog which appears and click "ADD".

![a modal dialog with a search box. Searching selects an option from the list. There is an add button at the bottom of the dialog.](./add-pagerduty-card.png)

5. The PagerDuty card should appear in the interface. Drag it to wherever you would like it to appear.

![A new card has appeared on the page. It has the text "Missing or Invalid PagerDuty token"](./missing-invalid-token.png)

6. Click the floppy disk icon in the top right to save your changes.

## Step 2: Set an API token

As you can see, the PagerDuty card is complaining about a missing or invalid token. It cannot access the PagerDuty API without authentication. Let's set a token now.

1. Visit the secrets page in Roadie. [Here's how](/docs/details/setting-secrets/).

2. Scroll down to find PAGERDUTY_TOKEN in the UI. 

![A table row with the name PAGERDUTY_TOKEN, an edit icon as a button and a short description of what the token does](./pagerduty-secret.png)

3. Click the pencil icon to open a dialog where you can set a token. Click SAVE. Please visit the [dedicated PagerDuty plugin docs](/docs/integrations/pagerduty/) to learn where to get this token from.

![A modal dialog with an input where we can input a secret and a save button](./set-token-dialog.png)

Once the token is set, we should see something different when we return to the component page. We're not there yet but we're closer!

![The PagerDuty plugin card now shows an error](./pagerduty-plugin-with-error.png)

## Step 3: Set an annotation

For the plugin to work for a component, we need to tell Backstage how to map the service in PagerDuty to the Component in Roadie Backstage.

1. Open the `catalog-info.yaml` file for the component in question in your text editor.
2. Add the PagerDuty annotation. Please visit the [dedicated PagerDuty plugin docs](/docs/integrations/pagerduty/) to learn where to get this "integration-key".

```yaml
apiVersion: backstage.io/v1alpha1
kind: Component
metadata:
  name: sample-service-1
  title: Sample Service 1
  description: |
    A service for testing Backstage functionality. Configured for
    GitHub Actions.
  annotations:
    pagerduty.com/integration-key: 78743832u48973894798
spec:
  type: service
  owner: my-team-name
  lifecycle: production
```

It can take a few minutes for Backstage to find and ingest this new value. Once it does, you should see the PagerDuty card render correctly in Roadie Backstage.

![PagerDuty card showing who is on call and any active incidents](./pagerduty-plugin-works.png)

That's it! Now any service can correctly display information from PagerDuty simply by adding the annotation.

## Next steps

Now that you have things set up, why not [invite a colleague to check out Roadie Backstage](/docs/getting-started/user-management/).
