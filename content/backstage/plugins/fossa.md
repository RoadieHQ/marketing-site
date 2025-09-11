---
humanName: FOSSA
heading: 'Backstage FOSSA Plugin'
lead: 'View FOSSA license findings inside Backstage.'
attribution:
  text: 'SDA SE'
  href: https://sda.se/

npmjsPackage: @backstage/plugin-fossa

seo:
  title: 'Backstage FOSSA Plugin | Roadie'
  description: |
    View FOSSA license findings for all of your components right from Backstage.

logoImage: '../../assets/logos/fossa/fossa-logo.webp'
coverImage: '../../assets/backstage/plugins/fossa/fossa-plugin.webp'
coverImageAlt: 'A screenshot of the FOSSA plugin.'

gettingStarted:
  - intro: Install the plugin.
    language: bash
    code: |
      cd packages/app
      yarn add @backstage/plugin-fossa
  
  - intro: |
      Add a proxy API endpoint to `app-config.yaml`. See [Creating a FOSSA API key](#creating-a-fossa-api-key) for help creating a FOSSA API token.
    language: YAML
    code: |
      # app-config.yaml
      proxy:
      '/fossa':
          target: https://app.fossa.io/api
          allowedMethods: ['GET']
          headers:
            Authorization: token ${FOSSA_API_TOKEN}

  - intro: Add the FOSSA card to the Overview tab on the entity page.
    language: typescript
    code: |
      // packages/app/src/components/catalog/EntityPage.tsx
      import { EntityFossaCard } from '@backstage/plugin-fossa';

      const overviewContent = (
        <Grid container spacing={3} alignItems="stretch">
          
          {/* other grid items */}

          <Grid item md={4} xs={12}>
            <EntityFossaCard />
          </Grid>

        </Grid>
      );

  - intro: Add a new route for the FOSSA Component Overview page.
    language: typescript
    code: |
      // packages/app/src/App.tsx
      import { FossaPage } from '@backstage/plugin-fossa';

      const routes = (
        <FlatRoutes>
          {/* existing routes */}
          <Route path="/fossa" element={<FossaPage />} />
        </FlatRoutes>
      );

  - intro: Add a link to the FOSSA Component Overview route to the sidebar.
    language: typescript
    code: |
      // packages/app/src/components/Root/Root.tsx
      <SidebarItem icon={ExtensionIcon} to="fossa" text="FOSSA" />

  - intro: Add an annotation to a component's catalog configuration file to link the component to a FOSSA project.
    language: YAML
    code: |
      # catalog-info.yml
      metadata:
        annotations:
          fossa.io/project-name: my-fossa-project-name
      ```
---

The FOSSA plugin is a frontend plugin that summarizes license findings for components in Backstage. The plugin includes a card component that displays a summary of findings for individual components:

![FOSSA Card Component](../../assets/backstage/plugins/fossa/fossa-plugin-card.webp)

It also includes a page component that displays a summary of findings for all components in Backstage that are annotated with the FOSSA plugin annotation:

![FOSSA Page Component](../../assets/backstage/plugins/fossa/fossa-plugin-page.webp)

Both components allow users to link directly to findings on the FOSSA website.

### Creating a FOSSA API key

A FOSSA API key is required for Backstage to connect to the FOSSA API to retrieve license findings. FOSSA API keys are associated with to FOSSA user accounts.

To create a FOSSA API key:

1. Open [app.fossa.com/account/settings](https://app.fossa.com/account/settings).
1. Navigate to the API section on the Integrations tab.
1. Add a new token. Do not select the "Push Only" option.

    ![Create FOSSA API key](../../assets/backstage/plugins/fossa/create-fossa-api-token.webp)

1. Copy the token and save it to `FOSSA_API_TOKEN` environment variable.

    ![View FOSSA API key](../../assets/backstage/plugins/fossa/create-fossa-api-token2.webp)

### Specifying a FOSSA organization ID

You can optionally provide a FOSSA organization ID in `app-config.yaml`:

```yaml
fossa:
  organizationId: <your-fossa-organization-id>
```

Organization ID is not currently required by the functionality included with this plugin. FOSSA findings are retrieved using the `fossa.io/project-name` (FOSSA project title) in the component's `catalog-info.yml`. If an organization ID is provided, it is added as an additional filter parameter on the FOSSA API request to retrieve project details but it ultimately will not affect the data that is returned.
