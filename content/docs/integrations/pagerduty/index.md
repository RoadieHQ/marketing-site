---
title: Set up the PagerDuty plugin
publishedDate: '2022-08-26T21:00:00.0Z'
description: How to set up the Backstage PagerDuty plugin in Roadie Backstage.

humanName: PagerDuty
logoImage: '../../../assets/logos/pagerduty/pagerduty-logo-light-200x200.png'
integrationType: OSS plugin
---

## Introduction

The PagerDuty Backstage plugin allows Roadie Backstage users to:

1.  See who is on call for a particular catalog Component.
2.  See if there are active incidents for a given catalog Component.
3.  Create new incidents from Backstage.

![PagerDuty plugin in Roadie Backstage](./pagerduty-plugin.png)

## Prerequisites

In order to use the PagerDuty plugin, Roadie needs an API token or an OAuth application's credentials to be able to use the plugin inside Roadie.

### Setting up the plugin:

#### 1. Create an API token or an OAuth application.

Please follow the offical [PagerDuty documentation](https://pagerduty.github.io/backstage-plugin-docs/getting-started/pagerduty/#:~:text=Events%20API.-,Setup%20API%20Authorization,-To%20use%20PagerDuty) to acquire the credentials that you would like to use:

ℹ️ The PagerDuty Backstage plugin allows users to create PagerDuty incidents from within Backstage. For this reason, the API key needs both read and write permissions to function correctly.

Copy the key that is created to your clipboard.

#### 2. Store the credentials in Roadie

##### API Token

Visit the following URL and enter the API Key value from above into `PAGERDUTY_TOKEN`.

```text
https://<tenant-name>.roadie.so/administration/pagerduty
```

ℹ️ Roadie accepts the token from PagerDuty unmodified.

##### OAuth application

- Go to your tenant's `administration/pagerduty` page.
- Select `oauth` as your Auth type.
- Fill in your application's subdomain.
- Fill in your application's region
- Save
- Apply & Restart

After the restart provide the `PD_CLIENT_ID` and `PD_CLIENT_SECRET` secrets just under the save buttons. Once these are set you can go to the next step.

#### 3. Add the PagerDuty annotation

Backstage requires a PagerDuty annotation on every component which will display the PagerDuty plugin. The plugin supports two different annotation keys:

1. `pagerduty.com/integration-key`
2. `pagerduty.com/service-id`

For Tech Insights usages, Roadie uses the `service-id` annotation to identify the linking between an entity and a PagerDuty service.

This example shows how it might look on a Backstage component:

```yaml
apiVersion: backstage.io/v1alpha1
kind: Component
metadata:
  name: sample-service
  title: Sample Service
  description: A sample service
  annotations:
    pagerduty.com/integration-key: <sample-service-integration-key>
    pagerduty.com/service-id: <sample-service-service-id>
spec:
  type: service
  owner: sample-team
  lifecycle: experimental
```

To generate the PagerDuty integration key, find a "Service" in the PagerDuty Service Directory and view the Integrations tab.

![integrations tab](./integrations-tab.png)

Click the Add an integration link. Choose Events API V2, and click the Add button.

![Integrations list](./integrations-list.png)

You should now be redirected back to the Integrations tab, and a new integration should have been created. You can edit the integration name to indicate that this is a Roadie Backstage integration.

![Created integration](./created-integration.png)

Copy the Integration Key and add it to the Component YAML.

```yaml
apiVersion: backstage.io/v1alpha1
kind: Component
metadata:
  name: sample-service
  title: Sample Service
  description: A sample service
  annotations:
    pagerduty.com/integration-key: <sample-service-integration-key>
    pagerduty.com/service-id: <sample-service-service-id>
spec:
  type: service
  owner: sample-team
  lifecycle: experimental
```

Commit and merge this change and the Roadie Backstage PagerDuty plugin should begin working shortly afterwards.

#### 4. Add the PagerDuty card

Navigate to the component you have added the annotation for and [add the PagerDuty card to the overview page](/docs/getting-started/configuring-backstage-plugins/#step-1-add-the-ui-component).

## References

- [PagerDuty docs for creating API tokens](https://support.pagerduty.com/docs/generating-api-keys)
