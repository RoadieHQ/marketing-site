---
title: Removing or Deleting Entities
publishedDate: '2022-04-01T21:00:00.0Z'
description: How to remove a component from the catalog
---

You can remove a component from Roadie Backstage if required in two ways depending on how that entity was ingested.

## Auto-ingested entities

If the path matches a Github Autodiscovery pattern in your Admin Settings and was therefore ingested automatically, you must delete the entity in question from Github by either removing the entry from the yaml file or deleting the file or repository altogether.

This should then remove the entity from your catalog within a minute or so.

## Manually ingested entities

If you imported the entity manually using the url, and the path does not match a Github Autodiscovery pattern set for your organisation:

1. Go to the component in question i.e. `/catalog/default/component/sample-service` and click the kebab menu on the top right.
2. Select `Unregister entity` ![Remove item menu](./unregister-menu.png)
3. Review the content's that will be removed. It is ok to have a `location:generated-...` and the actual entity listed here.
4. Confirm
5. Your entities should be almost immediately removed from the catalog

If you see a big list of entities when you press `Unregister entity` it means that the entity is likely to be coming from a file which has multiple entities defined in it. Unfortunately you can only delete all of the entities that are coming from a file from the Roadie UI. To delete only one of the entities go to your SCM and delete the entity from the file.

NB: you can always re-ingest the entity via the `/register-existing-component` page.
