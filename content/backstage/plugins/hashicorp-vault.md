---
humanName: Hashicorp Vault
heading: 'Hashicorp Vault Plugin'
lead: "View a list of secrets directly in Backstage."
intro: Hashicorp Vault is an identity-based secrets and encryption management system. With this plugin, you'll be able to view a list of secrets and links to manage them on Vault's UI.
  
attribution:
  text: 'Spread Group'
  href: https://www.spreadgroup.com

npmjsUrl: https://www.npmjs.com/package/@backstage-community/plugin-vault

seo:
  title: 'Backstage Hashicorp Vault Plugin | Roadie'
  description: |
    View Hashicorp Vault secrets directly in Backstage.

logoImage: '../../assets/logos/hashicorp-vault/vault.webp'
coverImage: '../../assets/backstage/plugins/hashicorp-vault/hashicorp-vault-secrets.webp'
coverImageAlt: 'Hashicorp Vault in Backstage'

gettingStarted:
  - intro: Install the front-end plugin.
    language: bash
    code: |
      cd packages/app
      yarn add @backstage/plugin-vault

  - intro: Add the Vault card to the entity page.
    language: typescript
    code: |
      // packages/app/src/components/catalog/EntityPage.tsx
      import { EntityVaultCard } from '@backstage/plugin-vault';

      const overviewContent = (
          <Grid container spacing={3} alignItems="stretch">
          {/* ...other content */}
          <Grid item md={6} xs={12}>
              <EntityVaultCard />
          </Grid>
      );

  - intro: Get a `VAULT_TOKEN` with `LIST` capabilities and add it to `app-config.yaml`.
    language: YAML
    code: |
      # app-config.yaml
      vault:
        baseUrl: http://your-vault-url
        token: <<VAULT_TOKEN>>
        secretEngine: 'customSecretEngine' # Optional. Default: 'secrets'
        kvVersion: <<kv-version>> # Optional. The available options are '1' or '2'



---


## Including secrets in the Catalog

The Hashicorp Vault plugin for Backstage allows you to include secrets as part of your Catalog's components. You'll have to add the Vault's path to your secrets relevant to each component in their respective `catalog-info.yaml`.

For instance, for my `ReallyCool` component, which stores secrets in Vault's `secrets/path/to/really-cool`, then I need to set an annotation like this:

```yaml
apiVersion: backstage.io/v1alpha1
kind: Component
metadata:
  # ...
  annotations:
    vault.io/secrets-path: path/to/really-cool
```

As you can see, the path you specify here is be relative to what you set as `secretEngine` in `app-config.yaml`.

## Token requirements

This Backstage plugin needs a Vault token to be able to access a list of secrets URLs. The plugin only needs `LIST` capabilities.

The plugin also comes with an auto-renewal option, to enable it, include self-renewal capabilities in your token's custom policy:

```
# Allows token to renew itself
path "auth/token/renew-self" {
  capabilities = ["update"]
}
```

For more information, consult [Vault's documentation](https://learn.hashicorp.com/tutorials/vault/tokens#periodic-service-tokens).