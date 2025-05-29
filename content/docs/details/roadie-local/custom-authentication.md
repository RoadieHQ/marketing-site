---
title: Custom authentication for Roadie Local
publishedDate: '2025-05-29T16:00:00.0Z'
description: Roadie Local with custom auth
---

Roadie Local can work with a custom identity provider. The supported identity providers are
determined by [those supported by vouch-proxy](https://github.com/vouch/vouch-proxy/tree/v0.27.1/config), which is what Roadie Local uses for authentication
under the hood.

## Configuring custom authentication

Create a file (e.g. `./test-vouch-config.yaml`) with the following contents filled out from the OAuth provider of choice:

```yaml
oauth:
  scopes: [openid, email, profile]
  provider: oidc
  client_id: roadie
  client_secret: roadie
  auth_url: http://keycloak.<your-domain-name>/realms/roadie/protocol/openid-connect/auth
  end_session_endpoint: http://keycloak.<your-domain-name>/realms/roadie/protocol/openid-connect/logout
  preferredDomain: roadie.io
  callback_url: http://vouch.<your-domain-name>/auth
  token_url: http://auth:7080/realms/roadie/protocol/openid-connect/token
  user_info_url: http://auth:7080/realms/roadie/protocol/openid-connect/userinfo
```

If not using the builtin Keycloak service, change `auth_url` and `end_session_endpoint` to point to your auth provider. 

Then set the `VOUCH_CONFIG_PATH` environment variable to point to your config file:

```bash
# In .env file
VOUCH_CONFIG_PATH=/path/to/your/config.yaml
```

You can now either:

1. Use the Docker Compose script directly:

```bash
export $(cat .env | xargs) 
docker compose up --no-attach frontend --no-attach backend --no-attach database
```

2. Or use the CLI with the new options:

```bash
# The -c flag now sets VOUCH_CONFIG_PATH directly
./roadie-local start  -c /path/to/your/config.yaml -d your-domain.example.com -p https 
```
