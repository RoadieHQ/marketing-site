---
title: Use the grpc-docs plugin with your API entities
publishedDate: '2022-07-28T13:00:00.0Z'
description: How to use type:grpc-docs on your api entities

humanName: grpc-docs
integrationType: OSS plugin
---

# Introduction

If you or your orgnaization uses gRPC you might be familiar with the [protoc-gen-doc](https://github.com/pseudomuto/protoc-gen-doc) plugin.

Roadie can render your protoc-gen-doc generated json files to give a better viewing experience in your api definition page.

## Steps

Configure your API entity files with a `type: grpc-docs` and point your `spec.definition` to the generated protoc-gen-doc json file.

That's it, now they will be rendered in your api definition page.

Example entity configuration

```yaml
apiVersion: backstage.io/v1alpha1
kind: API
metadata:
  name: unquie-api-1
spec:
  type: grpc-docs
  lifecycle: production
  owner: group:engineering
  definition:
    $text: https://github.com/org/repo/blob/main/grpc-docs/example.json
```
