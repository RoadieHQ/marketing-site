---
title: Troubleshooting the Catalog
publishedDate: '2022-05-17T21:00:00.0Z'
description: How to resolve issues getting data into the catalog
---

## About Locations

The backstage catalog uses location entities to point to external sources (in version control) which defined entities.
The catalog backend will periodically (every few minutes) poll each location and check for any updates to the entities
defined there. 

While locations are themselves entities they are generally considered internal to the workings of backstage and not part 
of your catalog (though you may need to create locations directly in some use cases).

## Using the Locations log

The locations log provides information on the scheduling of the catalog refresh cycle and surfaces any errors.

![locations log home](./locations-log-unsorted.png)

### Searching for an entity

You can search for an entity using the filter input (Top right of the table). The filter operates on the `entity/location url`
column. The values in this column are [entity refs](https://backstage.io/docs/features/software-catalog/references#string-references) (e.g. kind:namespace/entity-name) 
or for a location entity the target url. In practice you'll want to search on either your entity name or perhaps
the url of a catalog info yaml file. To view details for a particular entity click the entity link.

![locations log search](./locations-log-search.png)

### Checking the refresh schedule

The `last refresh time` column above gives the time of the most recent update to the entity. The column `next refresh time`
gives the time the catalog will next check for updates. It should be noted the last refresh time only updates when
there are changes rather than on every check.

### Viewing errors

The errors column of the locations log gives you the number of errors with that entity or location. You can sort the
table by this column by clicking on the column header to view rows with errors.

![locations log errors](./locations-log-errors.png)

Viewing a particular entry you can view the list of errors, the raw entity data and also the processed entity (if available).
You can use this information to diagnose and fix errors with catalog info yaml files.

## Common Errors

### Processor BuiltinKindsEntityProcessor threw an error while validating the entity

This means that the entity definition in your catalog yaml file is not valid. You can solve this by reading the cause
(e.g. `caused by TypeError: /spec/type should be string - type: string`) and looking at the `unprocessed entity` tab
in the location definition card and making a PR to fix the yaml file. In this case below `spec.type` has been set to `null`
but this is not valid.

![locations log BuiltinKindsEntityProcessor](./locations-log-BuiltinKindsEntityProcessor.png)

### Unable to read url, NotFoundError

This error can often be ignored. When the GitHub discovery processor is enabled it creates a location for every
repo in the organisation even if the catalog file doesn't exist. You can check if this is the case by navigating to
the url in the title to see if the catalog file location really exists. If it does exist and you're getting this error
contact support.

![locations log notfound](./locations-log-NotFoundError.png)

