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
2. Select Inspect Entity
3. Select the Ancestry tab
4. Click on the "generated" location that is the parent of your current entity.
5. Click the kebab menu again on this generated location entity and select unregister entity.
![Remove item menu](./unregister-menu.png)
6. Go back to the entity in step 1 and unregister that also.

NB: you can always re-ingest the entity via the `/register-existing-component` page. 
