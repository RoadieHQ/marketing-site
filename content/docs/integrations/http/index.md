---
title: HTTP
publishedDate: '2024-02-20T21:00:00.0Z'
description: How to manage entities via a HTTP URL

humanName: HTTP
logoImage: '../../../assets/logos/http/http-logo.webp'
integrationType: Catalog data source
---

## At a Glance
| | |
|---: | --- |
| **Prerequisites** |  |
| **Considerations** |  |
| **Supported Environments** | ☐ Private Network via Broker <br /> ☐ Internet Accessible via IP Whitelist <br /> ☒ Cloud Hosted |

You may choose to load entities from an HTTP server hosted on the public Internet. In order to enable this, you will need to tell Roadie in advance the allowed URLs.

## Steps
### Host an entity yaml file
You will need to host a YAML file with the correct Backstage entity schema on a HTTP server that is available to Roadie.

### Configure your Roadie instance to trust this server

Go to Administration > Settings > Backend and click Add Item. Enter the URL host of the server and click save.

### Load the entity into Roadie

Next you can go to the import entity page and enter the URL for the entity into the URL box and click Analyze and Import to save the item to the catalog.

Roadie will periodically check this URL for updates to the entity.

### Remove the entity from the catalog

To remove the entity you can go to the entity page and click on the three dots in the top right and click unregister entity.
