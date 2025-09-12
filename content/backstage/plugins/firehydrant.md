---
humanName: FireHydrant
heading: 'FireHydrant Plugin'
lead: "View FireHydrant service incidents for your components directly in Backstage."
  
attribution:
  text: 'FireHydrant'
  href: https://firehydrant.io

npmjsPackage: "@backstage-community/plugin-firehydrant"
codeLocation: "https://github.com/backstage/community-plugins/tree/main/workspaces/firehydrant/plugins/firehydrant"

seo:
  title: 'Backstage FireHydrant Plugin | Roadie'
  description: |
    View FireHydrant service incidents for your components directly in Backstage.

logoImage: '../../assets/logos/firehydrant/firehydrant.webp'
coverImage: '../../assets/backstage/plugins/firehydrant/firehydrant-service-card.webp'
coverImageAlt: 'FireHydrant in Backstage'

availableOnRoadie: true
roadieDocsPath: /integrations/firehydrant/

gettingStarted:
  - intro: Install the front-end plugin.
    language: bash
    code: |
      cd packages/app
      yarn add @backstage/plugin-firehydrant

  - intro: Add the FireHydrant card to the entity page.
    language: typescript
    code: |
      // packages/app/src/components/catalog/EntityPage.tsx
      import { FirehydrantCard } from '@backstage/plugin-firehydrant';
      ...
      const overviewContent = (
        <Grid container spacing={3} alignItems="stretch">
          <Grid item md={6}>
            <FirehydrantCard />
          </Grid>
          <Grid item md={6}>
          ...


  - intro: Add proxy configuration to the `app-config.yaml`.
    language: YAML
    code: |
      # app-config.yaml
      '/firehydrant/api':
        target: 'https://api.firehydrant.io/v1'
        changeOrigin: true
        headers:
          Authorization: Bearer fhb-d31e7e53c9c1bceba710eb17b4547549

---

FireHydrant.io is an incident management tool with a variety of reliability management features including its own service catalog. Backstage components can be added to the FireHydrant service catalog.

![Create service on FireHydrant.io](../../assets/backstage/plugins/firehydrant/firehydrant-create-service.webp)

Typically, Backstage components are linked to external services like FireHydrant.io by adding annotations to the component's `catalog-info.yaml`. The FireHydrant plugin does not require an annotation. Instead, the Backstage component is added to the FireHydrant.io service catalog following a very specific naming convention: `component-type:namespace/component-name`.

For example, a component of type `Component`, in the `default` namespace, named `backstage-sample-service` would need to be added to the FireHydrant.io service catalog as `Component:default/backstage-sample-service`. Here is what that component would loook like in the Backstage catalog:

![Sample component in Backstage](../../assets/backstage/plugins/firehydrant/component-in-backstage.webp)

And here is what the Matching component would look like in the FireHydrant.io service catalog:

![Matching component in FireHydrant.io](../../assets/backstage/plugins/firehydrant/component-in-firehydrant-io.webp)

## Obtaining a FireHydrant Authorization Token

Backstage needs an authorization token to authenticate to the FireHydrant.io API. This token is obtained by created a new bot configuration on FireHydrant.io:

![Create bot on FireHydrant.io, step 1](../../assets/backstage/plugins/firehydrant/firehydrant-create-bot.webp)

Add the authorization token directly to `app-config.yaml` or refer to it from an environment variable.
