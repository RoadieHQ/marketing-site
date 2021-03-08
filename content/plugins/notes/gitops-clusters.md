---
name: gitops-clusters
---

## Backend

In order this plugin to work you must install backend plugin available: [here](https://github.com/chanwit/gitops-api).

You might also use ready-to-use Docker image: [https://hub.docker.com/r/chanwit/gitops-api/](https://hub.docker.com/r/chanwit/gitops-api/)

To start using GitOps with Backstage and Docker, rung the following command:

```bash
$ docker run -d --init -p 3008:8080 chanwit/gitops-api
```

This plugin requires the backend to run on port 3008.
