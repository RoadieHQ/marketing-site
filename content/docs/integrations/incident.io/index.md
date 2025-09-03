---
title: incident.io Plugin
publishedDate: '2024-08-20'
lastValidated: '2024-08-20'
description: How to enable the incident.io plugin

humanName: incident.io Plugin
logoImage: '../../../assets/logos/incident/incident-logo.webp'
integrationType: OSS plugin
---

## Introduction

The [incident.io plugin](https://www.npmjs.com/package/@incident-io/backstage) integrates with Incident.io to show your configured components and your current on-going incidents inside Backstage.

## At a Glance
| | |
|---: | --- |
| **Prerequisites** |  |
| **Considerations** |  |
| **Supported Environments** | ☐ Private Network via Broker <br /> ☐ Internet Accessible via IP Whitelist <br /> ☒ Cloud Hosted |

### Create and add an API Key

Generate an API key on your incident.io app, then add it to Roadie at `https://<tenant-name>.roadie.so/administration/incident` by entering the token value from above into `INCIDENT_API_KEY`.
![incident.io configuration page](incident-config-page.webp)

### Configure the plugin

In the same incident.io configuration section, you can set your custom API ID, Component ID, System ID and Domain ID. These only needed if you created these custom fields in your incident.io application.

### Configure Roadie UI to display incident.io information

In Roadie, find and select a relevant entity via the Catalog.

The `EntityIncidentCard` card can be added to the overview page of an entity by clicking the settings cog, and adding a new card.
The `HomePageIncidentCard` card can be added to the home page by clicking the settings cog and selecting the card from the dropdown.
![incident.io homepage card](homepage-incident-card.webp)

## References

- [incident.io Plugin Documentation](https://www.npmjs.com/package/@incident-io/backstage)
