---
title: Authorization of the API
publishedDate: '2024-01-16'
description: How to get a Roadie API token and use it
---

## Prerequisites

You will need to be an administrator in Roadie to create an API token.

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
