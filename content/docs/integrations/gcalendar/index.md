---
title: Google Calendar Plugin 
publishedDate: '2022-03-29T14:00:00.0Z'
description: How to use the Google calendar plugin

humanName: Google Calendar
logoImage: '../../../assets/logos/google-calendar/Google-Calendar-Logo-700x394.webp'
integrationType: OSS plugin
---

## At a Glance
| | |
|---: | --- |
| **Prerequisites** |  |
| **Considerations** |  |
| **Supported Environments** | ☐ Private Network via Broker <br /> ☐ Internet Accessible via IP Whitelist <br /> ☒ Cloud Hosted |

## Introduction

The Google Calendar plugin provides a home page card you can use to display your agenda in Backstage.

![gcp-api-search](./gcalendar-card.webp)

## Installation

## Configure Google authentication

1. Set up a Google OAuth app in Roadie following [this guide](/docs/integrations/google-oauth-client)

2. Ensure the Google calendar API is enabled in GCP.
   1. In GCP console navigate to `APIs & Services > Library`
   ![gcp-api-library](./gcp-api-library.webp)

   2. Search for "Google Calendar"
   ![gcp-api-search](./gcp-api-search.webp)

   3. Select Google Calendar from the results and click "enable"
   ![gcp-api-search](./gcp-enable-api.webp)

## Add the calendar card to the home page
   
Add the card `HomePageCalendar` from the `@backstage/plugin-gcalendar` package to the home page ([read how](/docs/details/updating-the-ui#updating-the-home-page)).
