---
title: Custom domain name for Roadie Local
publishedDate: '2025-05-29T16:00:00.0Z'
description: Run Roadie Local with a custom domain name
---

Edit the `~/.roadie/config.yaml` config file and add domain and set the protocol

```yaml
license: <redacted>
environment: default
environments:
  default:
    version: 0.4.0
    
    # Config these two
    protocol: https
    domain: your.roadie.domain
```

```bash
roadie-local restart
```

With the configuration above Roadie will bind to port 80 and answer to the following domain names:

```
vouch.your.roadie.domain
keycloak.your.roadie.domain
your.roadie.domain
```
