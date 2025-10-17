---
title: Tempate Extensions
publishedDate: '2025-10-17T10:53:00.0Z'
description: Nunjucks template extensions for the Roadie Scaffolder
---

## Overview

The Roadie Scaffolder supports a number of template extensions that allow you to customize the behaviour of the Scaffolder.

### uuidv4

You can use the `uuidv4` function to generate a UUIDv4 inside your templates. e.g.

```yaml
  steps:
    - id: log-message
      name: Log Message
      action: debug:log
      input:
        message: "UUIDv4: ${{ uuidv4() }}"
```

### now

You can use the `now` function to get the current time in milliseconds since epoch. e.g.

```yaml
  steps:
    - id: log-message
      name: Log Message
      action: debug:log
      input:
        message: "Current time in Milliseconds since epoch: ${{ '' | now }}"
```

### roadie.tenant

You can use the `roadie.tenant` variable to get the current tenant name. e.g.

```yaml
  steps:
    - id: log-message
      name: Log Message
      action: debug:log
      input:
        message: "Tenant URL: https://${{ roadie.tenant }}.roadie.so"
```
