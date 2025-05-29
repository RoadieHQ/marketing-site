---
title: Custom domain name for Roadie Local
publishedDate: '2025-05-29T16:00:00.0Z'
description: Run Roadie Local with a custom domain name
---

Supply the following environment variables in a `.env` file in the root directory:

```bash
# Example .env file
DOMAIN_NAME=roadie-local.test    # Your domain name
HOST_PORT=80                     # Port to expose nginx on (defaults to 8080)
PROTOCOL=http                    # Optional: http or https
VOUCH_CONFIG_PATH=./test-vouch-config.yaml  # Specify the domain name in the oauth config for vouch
ROADIE_ENVIRONMENT=default       # Optional: Environment name
```

Add the [vouch](https://github.com/vouch/vouch-proxy) config file (e.g. to work with Keycloak):
`./test-vouch-config.yaml`
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

```bash
export $(cat .env | xargs) 
docker compose up --no-attach frontend --no-attach backend --no-attach database
```
