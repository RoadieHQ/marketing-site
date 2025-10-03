---
title: Organising Templates
publishedDate: '2023-08-07'
description: How to organise and categorize Templates
---

## Overview

When you start getting lots of templates and they start getting used a lot and relied on, organising and categorising them becomes a priority.

### Grouping templates

Roadie Admin users can create groups or categories of templates that will show in the list page. This can be done via the Settings page in the Scaffolder plugin config at `/administration/setting/scaffolder`.

### Certified Templates

![certified-template](./certified.webp)

Certified templates are templates that have an approval from the owner of the template. They get a certification chip rendered on their template card when you visit the `/create` page.

You should only certify templates that are in a mature and stable state. This allows users to safely run a certified template without worrying that it is not working or is incomplete.

The certification chip can be shown on your templates by adding the `roadie.io/certified: "true"` annotation to the template.

```yaml
apiVersion: scaffolder.backstage.io/v1beta3
kind: Template
metadata:
...
  annotations:
    roadie.io/certified: "true"
spec:
...
```
