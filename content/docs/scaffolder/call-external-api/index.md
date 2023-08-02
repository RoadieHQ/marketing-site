---
title: Call an external API
publishedDate: '2023-08-02'
description: An introduction template calling an external API
---

## Prerequisets

- Configure a proxy that can call the slack API with authentication. You can read more about how to configure a custom proxy [here](https://roadie.io/docs/custom-plugins/connectivity/proxy/)
- Have a slack app that can be called and it is added to the channels you are going to use for your notifications. You can read more about slack applications [here](https://api.slack.com/start/overview#creating)

## Actions used

- `debug:log`
- `https:backstage:request`

You can check the available actions if you visit `/create/actions`.

## Walkthrough

```yaml
apiVersion: scaffolder.backstage.io/v1beta3
kind: Template
metadata:
  name: send-slack-notification
  title: Send Slack notification
  description: This template demonstrates the https:backstage:request action by calling a configured proxy to send a request towards the Slack api to send a notification to the selected channel
spec:
  owner: group:default/engineering
  type: service

  parameters:
    - title: Send notification to slack channel
      properties:
        text:
          title: Notification message
          type: string
        channel:
          title: Channel name to send notification
          type: string

  steps:
    - id: log-message
      name: Log Message
      action: debug:log
      input:
        message: Template execution started

    - id: 'send-notification'
      name: 'Send Notification'
      action: 'http:backstage:request'
      input:
        method: 'POST'
        path: 'proxy/slack/chat.postMessage'
        headers:
          content-type: 'application/json; charset=utf-8'
        body:
          channel: ${{ parameters.channel }}
          text: ${{ parameters.text }}
```

## Breakdown

### Parameters

This section configures the frontend for your template. Essentially these values will be provided from the backstage ui to the template.

This renders 2 separate input fields for the template. Both of them are type string means they'll be presented as an input box on the UI and the user who triggers the action will be able to provide values for it.

```yaml
parameters:
  - title: Send notification to slack channel
    properties:
      text:
        title: Notification message
        type: string
      channel:
        title: Channel name to send notification
        type: string
```

### Steps

#### debug:log

Uses the debug:log action to output a log message to the backstage scaffolder UI. The message here is a general hard-coded message that indicates that the template execution has started

```yaml
- id: log-message
  name: Log Message
  action: debug:log
  input:
    message: Template execution started
```

#### http:backstage:request

Uses the `http:backstage:request`. This action makes an arbitrary HTTP request against the configured slack proxy.

```yaml
- id: 'send-notification'
  name: 'Send Notification'
  action: 'http:backstage:request'
  input:
    method: 'POST'
    path: 'proxy/slack/chat.postMessage'
    headers:
      content-type: 'application/json; charset=utf-8'
    body:
      channel: ${{ parameters.channel }}
      text: ${{ parameters.text }}
```

The `input.method` required parameter specifies what method you'd like to use.
The `input.path` required parameter is the path that will be called. Here we call the `proxy/slack/chat.postMessage` because we have a [configured proxy](https://roadie.io/docs/custom-plugins/connectivity/proxy/) which proxies the incoming requests towards the `https://slack.com/api`
The `input.headers` parameter is the headers that will be provided in the request as the headers
The `input.body` is the request body
The `input.body.channel` is the channel ID where you'd like to send your notification message.
The `input.body.text` is going to be the message that will show up in your slack channel
