---
name: gitops-clusters
---

## Backend

The backend of this plugin is written in Golang and its source code is available [here](https://github.com/chanwit/gitops-api) as a separate GitHub repository.
The binary of this plugin is available as a ready-to-use Docker image, [https://hub.docker.com/chanwit/gitops-api](https://hub.docker.com/chanwit/gitops-api).
To start using GitOps with Backstage, you have to start the backend using the following command:

```bash
$ docker run -d --init -p 3008:8080 chanwit/gitops-api
```

Please note that this plugin requires the backend to run on port 3008.
