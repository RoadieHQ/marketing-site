---
title: Creating a NewRelic token for Roadie
publishedDate: '2021-09-09T21:00:00.0Z'
description: How to create a NewRelic token for use with Backstage.
---

## Introduction

In order to make requests to the NewRelic API, you must provide Roadie with an API key.

## Steps

1. Go to https://one.newrelic.com/launcher/api-keys-ui.api-keys-launcher and follow the steps to create a user-api-key for NewRelic.

2. Give the token a name and click "Create a key".

3. Click the icon along side the key you have created and click "Copy key"

4. Login to Roadie and visit the administration -> settings -> secrets (https://\<tenant name\>.roadie.so/administration/settings/secrets) page.

5. Click the pencil icon alongside the "NEW_RELIC_REST_API_KEY" and paste the API key you copied earlier.

6. It can take up to 2 minutes for the API key to be applied.

7. In the meantime, you can add the new-relic plugin to the Sidebar.

8. Hover over the sidebar on the left and click the "Edit Sidebar" icon

![edit-sidebar.png](./edit-sidebar.png)
   
9. Click "Add Card"

![add-card.png](./add-card.png)

10. Select the option "@backstage/plugin-newrelic: NewRelicPage", pick a name for the menu item the path, and an Icon. Click Add.

![select-component.png](./select-component.png)

11. You should see a new item in the sidebar for NewRelic, click the sidebar save button.

![save-sidebar.png](./save-sidebar.png)