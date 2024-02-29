---
title: Integrating with Bitbucket
publishedDate: '2022-03-28T14:00:00.0Z'
description: How to give Roadie the access it needs to your Bitbucket repositories.

humanName: Bitbucket
logoImage: '../../../assets/logos/bitbucket/bitbucket.png'
integrationType: Catalog Source
`---`

## Introduction

This tutorial will guide you through the steps required to connect Roadie to your Bitbucket repositories.

## Step 1: Save Bitbucket integration config in Roadie

By adding a Bitbucket integration you will allow Roadie to access the YAML metadata files that Backstage needs to operate.

Roadie supports Bitbucket configuration on both Bitbucket Cloud and self-hosted Bitbucket server. The authentication methods supported are either with Token or a Username + Application Password authentication. Username + Application Password is the preferred authentication method since it provides more granular options to control the access to give to the integration. If you are connecting to a Bitbucket server, Username + Application Password is the only supported connection method.

1. Click the Administration link in the bottom left of the application.

![A link that says "Administration"](./administration-link.png)

2. Click the Settings tab along the top of the Administration page.

![A link that says "Settings"](./settings-link.png)

3. Click on Integrations in the left sidebar.

![A link that says "Integrations"](./integrations-link.png)

4. Open the Bitbucket section of the accordion

## Bitbucket Cloud configuration

You will see a warning that a bit bucket configuration is not available.

Press on the save button to enable the bitbucket cloud configuration.

![initial bitbucket page](./bitbucket-config-page.png)

⚠️ &nbsp;You may need to wait up to 2 minutes for the Bitbucket integration to become active.

### Configure autodiscovery

1. Go to the 'Configure your atuodiscovery' section.

2. Click on the '+ ADD LOCATION'

3. Put your target URL into the modal.

4. press Save

## Bitbucket Server configuration

1. Untick the 'Use Bitbucket Cloud' check box
   ![](./bitbucket-server-config.png)

2. Fill in your host
3. Add your api url

⚠️ &nbsp;You may need to wait up to 2 minutes for the Bitbucket integration to become active.

### Configure autodiscovery

For autodiscovery we use the OSS [BitbucketServerProvider](https://github.com/backstage/backstage/tree/master/plugins/catalog-backend-module-bitbucket-server) from the backstage repository.

Due to the strictrate limits on the bitbucket API it currently runs every 30 minutes.

1. Go to the 'Configure your autodiscovery' section below the integration section
2. Click the '+ ADD ITEM' button
3. Fill in the form.

- Host (readonly): It will be filled based on your configured integration's host.
- Path: The absolute URL to your catalog info files from the root of your repositories
- Project key (optional): A regexp to filter your projects and only ingest from projects that matches this filter
- Repo slug (optional): A regexp to filter your repositories and only ingest from repositories that matches this filter

You can read more about the configuration options in the [backstage docs](https://backstage.io/docs/integrations/bitbucketServer/discovery/#configuration)

![A form](./bitbucket-server-autodiscovery.png)
