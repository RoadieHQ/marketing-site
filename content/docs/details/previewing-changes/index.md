---
title: Preview Component Changes
publishedDate: '2022-04-01T21:00:00.0Z'
description: How to preview config changes in Backstage
---

## Introduction
Currently, previewing changes to a `catalog-info.yaml` file is not well supported in Backstage. However, you can still do so if needed by essentially creating a new component manually using your branch and a namespace to differentiate it from the real component, and then delete it after.

The steps are the following:

1. Add a namespace of 'preview' (or whatever you want) to the `catalog-info.yaml` file you want to test (if you don't, you will get a conflict with the existing component)
```yaml
...
kind: Location
metadata:
  name: <repo-name>
  namespace: preview
...
```
2. Go to `/catalog-import` in Roadie Backstage
3. Import the catalog-info file URL from a branch on your version control, i.e. `https://github.com/<your-github-org>/<your-repo>/blob/<your-branch-name>/catalog-info.yaml`
4. View your branch based component, and make updates to the branch file to see changes pulled in automatically. 
5. [Delete the component](/docs/details/unregister-components/) when you are finished. 
