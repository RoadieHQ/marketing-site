---
title: Custom domain name for Roadie Local
publishedDate: '2025-05-29T16:00:00.0Z'
description: Run Roadie Local with a custom domain name
---

Edit the `~/.roadie/config.yaml` config file and add the address of where you will host Roadie from under `domain` and set the protocol.

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

### DNS Configuration

You will need to add DNS routing in your in frastructure to make sure requests to all these 3 endpoints are routed to your roadie-local service on port 80. 

This means you will likely need DNS entries for:
- A <your.domain> -> <your-roadie-local-ip>:80
- CNAME vouch.<your.domain> -> <your.domain>
- CNAME keycloak.<your.domain> -> <your.domain>

Of course, you will likely want to use https, which means you will need to do SSL termination before the request reaches roadie-local. 

Typically you might want to use a load balancer to do the SSL termination. This might look like so:

<your.domain> -> <load-balancer-ip>:433 -> <your-roadie-local-ip>:80
