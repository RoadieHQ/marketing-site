---
title: Authorization of the API
publishedDate: '2024-01-16'
description: How to get a Roadie API token and use it
---

## Prerequisites

You need to have the "Roadie API Key Access" policy assigned to your user in Roadie to create an API token.

## Get an API token

- Go to Administration > Account
- Add a token description
- Click "Generate Token".

## To test the token

```shell
curl \
  -X GET \
  -H 'Accept: application/json' \
  -H "Authorization: bearer ${ROADIE_API_TOKEN}" \
  https://api.roadie.so/api/catalog/entities
```

For write operations using PUT, POST, or PATCH requests with a request body, we expect a JSON structure. You should modify your calls to include the `Content-Type` header.

```shell
curl \
  -X POST \
  -H 'Accept: application/json' \
  -H 'Content-Type: application/json' \
  -H "Authorization: bearer ${ROADIE_API_TOKEN}" \
  -d '{ "key": "value" }'
  https://api.roadie.so/api/catalog/fragments
```
