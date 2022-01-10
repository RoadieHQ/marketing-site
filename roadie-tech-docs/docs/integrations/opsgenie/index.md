
## Introduction

This page describes how to set up the Opsgenie plugin.

## Steps

### Step 1: Create an API token

In order for the Backstage integration to work we must first generate our api key.

In order to create a key [create an Integration](https://support.atlassian.com/opsgenie/docs/create-a-default-api-integration/) of type API and copy the key displayed.

### Step 2: Store the credentials in Roadie

Visit `https://<tenant-name>.roadie.so/administration/settings/secrets` and enter the key into the `OPSGENIE_API_KEY` secret.

![Set OPSGENIE_API_KEY via UI](./secret.png)

### Step 3: Configure Roadie with your Opsgenie account details

Visit `https://<tenant-name>.roadie.so/administration/settings/opsgenie` and enter the following:
* The domain of your Opsgenie app (e.g. `https://my-app.app.eu.opsgenie.com/`)
* The API endpoint you use (e.g. US / EU )

![Set Opsgenie Config](./config.png)

### Step 4: Add the Opsgenie UI elements

The Opsgenie plugin provides two type of UI elements. 

The card `EntityOpsgenieAlertsCard` displays alerts for particular components and can be [added to component dashboards](../../getting-started/updating-the-ui/#updating-dashboards). 

The overview page `OpsgeniePage` can be also be [added to the sidebar](../../getting-started/updating-the-ui#updating-the-sidebar).

## References

- [Opsgenie backstage plugin](https://github.com/K-Phoen/backstage-plugin-opsgenie)
