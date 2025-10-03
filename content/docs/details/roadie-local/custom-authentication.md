---
title: Custom authentication for Roadie Local
publishedDate: '2025-05-29T16:00:00.0Z'
description: Roadie Local with custom auth
---

Roadie Local can work with a custom identity provider. The supported identity providers are
determined by [those supported by vouch-proxy](https://github.com/vouch/vouch-proxy/tree/v0.27.1/config),
which is what Roadie Local uses for authentication under the hood.

## Configuring custom authentication

Edit the file (e.g. `~/.roadie/environments/default/config/vouch-config.yaml.tpl`) with the following contents filled out from the OAuth provider of choice:

```yaml
oauth:
  scopes:
    - openid
    - email
    - profile
  provider: oidc
  client_id: <client id>
  client_secret: <client secret>
  auth_url: <oidc auth url>
  token_url: <oidc token url>
  user_info_url: <oidc user info url>
  end_session_endpoint: <oidc end session url>
  preferredDomain: <login email domain>

  # The following settings should be left in place for roadie-local to work
  callback_url: '{{ .Protocol }}://{{ if .Hostname }}vouch.{{ .Hostname }}{{ else }}localhost:9090{{ end }}/auth'
```

Then restart

```bash
./roadie-local restart
```
