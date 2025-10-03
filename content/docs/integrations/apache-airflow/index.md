---
title: Viewing Apache Airflow DAGs in Roadie
publishedDate: '2022-11-23T15:00:00.0Z'
lastValidated: '2022-11-23T15:00:00.0Z'
description: How to set up the Apache Airflow Backstage plugin in Roadie.

humanName: Apache Airflow
logoImage: '../../../assets/logos/apache-airflow/apache-airflow-logo.webp'
integrationType: OSS plugin
---

## Introduction

The Backstage Apache Airflow plugin serves as frontend to the REST API exposed by Apache Airflow to show Apache Airflow's information inside Backstage.

## At a Glance

|                            |                                                                                                  |
| -------------------------: | ------------------------------------------------------------------------------------------------ |
|          **Prerequisites** |                                                                                                  |
|         **Considerations** |                                                                                                  |
| **Supported Environments** | ☐ Private Network via Broker <br /> ☐ Internet Accessible via IP Whitelist <br /> ☒ Cloud Hosted |

## Using the Plugin

1. Add a proxy configuration in Roadie at `/administration/settings/plugins/proxy` - see guide [here](/docs/custom-plugins/connectivity/proxy/#setup).

Path: `/airflow`
Target: `https://your.airflow.instance.com/api/v1`
Headers: `Authorization`: `Basic ${APACHE_AIRFLOW_BASIC_AUTH_TOKEN}`

2. Get and provide a APACHE_AIRFLOW_BASIC_AUTH_TOKEN as an environment variable in Roadie at `/administration/apache-airflow` - see below for instructions on how to get the token.

3. Set the `baseUrl` for your Apache Airflow webserver in the Apache Airflow plugin options at `/administration/apache-airflow`

## Basic Authentication token

In order to make requests to your Apache Airflow API, you must provide Roadie with a basic authentication token.

1. The basic authorization token is the base64 encoding of the username and password of your instance.

   example:
   `echo -n "airflow:airflow" | base64 -w0`

## References

- [Configuration docs for Backstage Apache Airflow plugin](https://github.com/backstage/community-plugins/tree/main/workspaces/apache-airflow/plugins/apache-airflow#configuration)
