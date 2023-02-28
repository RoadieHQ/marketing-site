---
title: Integrating to internal infrastructure with Broker 
publishedDate: '2022-12-20T14:00:00.0Z'
description: How to configure secure broker connection to work wth Roadie.

humanName: Broker Integration
logoImage: '../../../assets/logos/roadie/roadie-racks-og-image.png'
integrationType: Integration
---

## Introduction

The Broker connection is designed to connect Roadie and its plugins to integration targets that are located on self-hosted infrastructure and therefore not publicly available via the internet. 

## Overview
The broker is a Node.js service that you run inside your infrastructure to provide a secure tunnel for Roadie traffic. It was originally created by security company, [Snyk](https://docs.snyk.io/features/snyk-broker/broker-introduction). The code is open-source. We are actively using it with existing customers for Kubernetes API access and other Backstage and Roadie plugins. You don't need to be a Snyk user to use the broker.

*The benefits of the broker include:*
* You can allow list what Roadie can access using a config file.
* Any tokens for the internal endpoints stay in your infra. They are not shared with Roadie.
* The broker maintains an audit log of what we access.
* The connection is established outbound from your side. We cannot re-establish the connection on our own if you kill it.

The Broker feature is available on our Growth Plan - see pricing page for more information. 

##  Broker Architecture

Broker connection consists of two similar services called _broker server_ and a corresponding _broker client_ 

### Client
A node.js application creating a websocket connection to its counterpart, broker server hosted in Roadie infrastructure.


### Server
A tenant specific broker server accepting websocket handshakes and directing traffic through from Roadie instance via the socket to the broker client


The broker connection itself keeps an open websocket identified by a broker token which can be specified by the client trying to establish a connection. The traffic flows through this websocket and is filtered on both ends, broker server and broker client, using an 'accept.json' configuration file. This configuration file also determines where requests are forwarded to and if they need additional headers to be injected to the request. 

This way Roadie does not need to have knowledge or access of your infrastructure endpoints nor authorization tokens. 

## Configuration
### Enabling broker connection
The broker server instance is not enabled by default on tenants and thus needs to be requested to be enabled.

You can visit the settings page fro the broker at the following url in the application. `https://<your-tenant>.roadie.so/administration/settings/integrations/broker` 

The broker endpoint server is secured by allow listing IP addresses. You can configure the list of IP addresses in the settings page mentioned above.

You can also test the broker client connections mentioned below from the settings page.

### Configuring Broker client

There are three ways to run the broker client application:

- Run one of the pre configured docker containers provided by roadie
- Run the broker client nodejs application
- Build a custom docker container

#### Roadie Docker Containers
Roadie provides pre configured docker containers containing pre-configured broker clients for use with backstage. At time of writing, we are providing a container image for kubernetes and sonarqube.

You can configure them with environment variables containing authentication credentials for the brokered service as well as the broker endpoint and the broker client token.

e.g. To run the kubernetes client you can run the docker container as follows:

```bash
docker run \
   -v "$(pwd)"/certs:/var/lib/certs:ro \
  --env CA_CERT=/var/lib/certs/ca.cert \
  --env K8S_SERVICE_ACCOUNT_TOKEN=service-account-token \
  --env BROKER_TOKEN=kube-api \
  --env BROKER_SERVER_URL=https://<TENANT_NAME>.broker.roadie.so \
  roadiehq/broker:kubernetes
```

#### Snyk Broker CLI application

The broker client is published as an npm package available to be downloaded, installed on run on a machine configured to run nodejs packages. You can install and run it directly or use the npx command:

```bash
npm install --global snyk-broker
BROKER_TOKEN=test \ 
BROKER_SERVER_URL=https://<TENANT_NAME>.broker.roadie.so \
broker
```

```bash
BROKER_TOKEN=test \ 
BROKER_SERVER_URL=https://<TENANT_NAME>.broker.roadie.so \
npx snyk-broker
```

In order to do something meaningful with the broker client you will need to configure and `accept.json` file documented in a section below.

To provide the accept.json

```bash
ACCEPT=accept.json
BROKER_TOKEN=test \ 
BROKER_SERVER_URL=https://<TENANT_NAME>.broker.roadie.so \
broker
```

#### Custom docker container
You could also build your own container that builds the `accept.json` and broker client into. This is out of the scope of this document. But you can take inspiration from the `roadiehq/broker` container images on docker hub.
 
#### Broker client application configuration

Broker client is configured via an `accept.json` configuration file and environment variables based on the content of the said `accept.json` file. The file contains endpoint routing paths definitions determining where the requests coming from Roadie should be forwarded to. The configuration file also acts as a filtering mechanism to block non-allowed requests and as a request decorator to enhance request headers with possible auth information.

Roadie can provide configuration files for plugins which can be used to forward traffic to endpoints the plugins are using. You can find a broker configuration file section on each of the plugins documentation pages. If some plugin is missing a configuration file, you can request the support to provide you with one. 

**Configuration file structure**

An example `accept.json` looks like the following:

```JSON
{
  "private": [
    {
      "//": "Show results of my plugins API",
      "method": "GET",
      "path": "/api/show",
      "origin": "${MY_PLUGIN_REST_ENDPOINT}",
      "auth": {
        "scheme": "bearer",
        "token": "${MY_PLUGIN_AUTH_TOKEN}:"
      }
    }
  ],
  "public": [
    {
      "//": "Get broker connection status",
      "method": "GET",
      "path": "/healthcheck"
    }
  ]
}

```

The file is divided into 2 parts, public and private. 

The _public_ configuration block defines what endpoints can be called when _calling the broker client endpoint_ directly. This would be for cases where an internal infrastructure would need to send data via the broker client toward Roadie instances. This is rarely used since most Backstage and Roadie plugins make requests and expect a response.

The _private_ configuration block defines what requests are allowed to come through via the connected broker websocket connection and where they are forwarded to. In the example above we are allowing traffic to flow to a single endpoint matching an imaginary service we have developed. We are hosting this custom imaginary service in our own infrastructure behind a corporate firewall in a private network and it's APIs are accessible when using bearer token authentication. The service exposes a single GET endpoint with a path /api/show. With this configuration the broker client would allow Roadie plugins to contact the imaginary service, via the broker connection, in cases where the request is going to the defined endpoint using a GET request and nothing else.

The best way to configure endpoints and tokens via environment variables. In the above example the `accept.json` file is expecting two env variables, ` MY_PLUGIN_REST_ENDPOINT` and `MY_PLUGIN_AUTH_TOKEN`. 


**Configuration options**

Below you can find a table of configuration options available in the `accept.json` file.

| Key    | Example values                                     | Description                                                                                                                                                                                            |
|--------|----------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| //     | Any string                                         | Denotes a comment on the configuration file                                                                                                                                                            |
| method | HTTP Methods (GET, POST, PUT, DELETE, etc.) or any | HTTP Method to be used as a filter on the request                                                                                                                                                      |
| path   | /my-plugin/endpoint                                | Endpoint path to accept requests to. Only request going to these endpoints are forwarded. You can use `*` as a wildcard, e.g. `/my-service/components*`                                                |
| origin | https://my-service.myinternaldomain.com            | The origin host to forward the request to. This is only available on the `private` configuration block.                                                                                                |
| auth   | {"scheme": "bearer", "token": "my-secret-token" }  | Auth scheme and value to use to overwrite any auth header coming from the original request. See auth scheme options from the table below. This is only available on the `private` configuration block. |




_Auth Scheme options_

| Scheme value | Value input key                      | Example                                                                                                                | End result                                                                                                                             | 
|--------------|--------------------------------------|------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------|
| `token`      | `token`                              | `{ "scheme": "token", "token": "my-secret-token" }`                                                                    | `Authorization: Token my-secret-token`                                                                                                 |
| `bearer`     | `token`                              | `{ "scheme": "bearer", "token": "my-secret-token" }`                                                                   | `Authorization: Bearer my-secret-token`                                                                                                |
| `basic`      | `token` or `username` and `password` | `{ "scheme": "basic", "token": "my-secret-token" }` or `{ "scheme": "basic", "username": "user", "password": "pass" }` | `Authorization: Basic bXktc2VjcmV0LXRva2Vu` (base64 encoded token) or `Authorization: Basic dXNlcjpwYXNz` (base64 encoded `user:pass`) |


An additional filtering based on any header can be achieved by using `valid` configuration block in the configuration file.  
```JSON
"valid": [{
  "header": "my-header-key",
  "values": ["my-super-secret-header-key-value"]
}]
```




## References

* [Snyk documentation for the broker](https://docs.snyk.io/features/snyk-broker/broker-introduction)
* [Open source Broker repository](https://github.com/snyk/broker/)
