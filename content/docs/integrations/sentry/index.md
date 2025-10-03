---
title: Sentry
publishedDate: '2021-02-23T21:00:00.0Z'
lastValidated: '2021-02-23T21:00:00.0Z'
description: How to create a Sentry Token with permissions for use in Backstage and apply it to Roadie.
humanName: Sentry
logoImage: '../../../assets/logos/sentry/sentry-glyph-dark.webp'
integrationType: OSS plugin
---

## Introduction

In order to use the Backstage Sentry plugin with Roadie, you must securely provide Roadie with an API key which it can use to access the Sentry API.

## At a Glance

|                            |                                                                                                                                         |
| -------------------------: | --------------------------------------------------------------------------------------------------------------------------------------- |
|          **Prerequisites** | **Configuration Data:** <ul><li>API Token</li><li>Organization Slug</li></ul> **Component Annotations:** <ul><li>Project Slug</li></ul> |
|         **Considerations** |                                                                                                                                         |
| **Supported Environments** | ☐ Private Network via Broker <br /> ☐ Internet Accessible via IP Whitelist <br /> ☒ Cloud Hosted                                        |

## Connect Roadie to Sentry

### Step 1: Set your Sentry organization

Click the dropdown in the top left corner of the Sentry UI and click "Organization settings".

Copy the value of the Organization Slug from the settings. The value shown here is `roadie`. You will have a different value.

![organizaton setting in Sentry UI](./sentry-organization-settings.webp)

Go to the Administration Settings page and set the Sentry organization name.

![sentry-settings-page.webp](./sentry-settings-page.webp)

### Step 2: Get a Sentry token

Create an Internal Integration using the Sentry UI. Click "Settings" in the left sidebar, then "Developer Settings". Next click the "New Internal Integration" button.

Give the integration a name like "Roadie".

![a form on the sentry UI with the name input filled out with the text Roadie](./sentry-integration-name.webp)

Give the integration the ability to read projects and issues.

![a list of permissions on the Sentry UI with projects and issues set to Read](./sentry-integration-permissions.webp)

Click the "Save Changes" button.

Copy the token that Sentry displays.

![an api token in the Sentry UI](./sentry-token.webp)

### Step 3: Add the token to Roadie

Visit `https://<tenant-name>.roadie.so/administration/sentry` and add the token to the `SENTRY_TOKEN` secret.

Wait a few moments for the secret to be applied.

### Step 4: Add the Sentry annotation to a component

Using the Sentry UI, find a Sentry project which you would like to associate with a component in Roadie.

Click the gear icon beside your project name to view the project settings.

![a page for a sample service in Sentry with a gear icon near the top left of the screen](./gear-icon.webp)

Copy the name from the Project settings

![settings page for a project on Sentry with inputs for name and platform](./sentry-project-settings.webp)

Edit the `catalog-info.yaml` for the component you wish to associate with this Sentry project and add the `sentry.io/project-slug` annotation.

```yaml
apiVersion: backstage.io/v1alpha1
kind: Component
metadata:
  name: sample-service
  description: Sample service
  annotations:
    sentry.io/project-slug: sample-service
```

Commit and push this change and Roadie should pick it up within a few minutes.

## References

1. [Sentry integration docs](https://docs.sentry.io/product/integrations/integration-platform/)
