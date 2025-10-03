---
title: Testing Custom Plugins
publishedDate: '2024-05-21T14:11:00.0Z'
description: Testing new versions of a Custom Plugin in Roadie
---

## Overview

This documentation explains how to test new versions of a plugin that you have build and added to Roadie.

## Setup

Build and publish a new version of the plugin with the following environment variables.

These can be used to change the plugin id and route id to avoid conflicts and register the plugin as a dev/test/preview version inside Roadie.

```
PLUGIN_ID=preview-<pluginName>
PLUGIN_ROUTE_REF=preview-<pluginName>
ROOT_ROUTE_REF=preview-<pluginName>
```

Update your plugin code to use these environment variables - normally in the following places:

- `package.json` i.e.
  `"develop": "ROOT_ROUTE_REF='plugin-local-dev' PLUGIN_ID='plugin-local-dev' PLUGIN_ROUTE_REF='plugin-local-dev' roadie-cli plugin:dev -l $PWD/ --output $PWD/out --port 7047",`
- `plugin.ts`
- `route.ts`

## Viewing

Publish the plugin like normal and then register it to Roadie as normal. You can then add the plugin to an entity to view it and remove when you are finished testing. For page components, you can use the Sandbox at `/administration/admin-sandbox`.
