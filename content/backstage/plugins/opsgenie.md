---
humanName: OpsGenie
heading: 'Backstage OpsGenie Plugin'
lead: 'View OpsGenie alerts and incidents inside Backstage.'
npmjsPackage: "@k-phoen/backstage-plugin-opsgenie"
codeLocation: "https://github.com/K-Phoen/backstage-plugin-opsgenie"
attribution:
  text: K-Phoen
  href: https://github.com/K-Phoen

seo:
  title: 'Backstage OpsGenie Plugin | Roadie'
  description: |
    Keep track of all your OpsGenie alerts and incidents right from Backstage.

logoImage: 'assets/logos/opsgenie/logo-opsgenie.webp'
coverImage: 'assets/backstage/plugins/opsgenie/opsgenie-plugin.webp'
coverImageAlt: 'A screenshot of the OpsGenie plugin.'

availableOnRoadie: true
roadieDocsPath: /integrations/opsgenie/

gettingStarted:
  - intro: Install the plugin.
    language: bash
    code: |
      cd packages/app
      yarn add @k-phoen/backstage-plugin-opsgenie
  
  - intro: |
      Configure the plugin in `app-config.yaml`. Add a proxy API endpoint and OpsGenie domain name. See [Creating an OpsGenie API key](#creating-an-opsgenie-api-key) for more information.
    language: YAML
    code: |
      # app-config.yaml
      proxy:
        '/opsgenie/api':
          target: https://api.opsgenie.com
          headers:
            Authorization: GenieKey ${OPSGENIE_API_KEY}

      opsgenie:
        domain: https://myaccount.app.opsgenie.com/
  
  - intro: Add a route to the `OpsGeniePage` component.
    language: typescript
    code: |
      // packages/app/src/App.tsx
      import { OpsgeniePage } from '@k-phoen/backstage-plugin-opsgenie';

      // ...

      const AppRoutes = () => (
        <FlatRoutes>
          /// ...
          <Route path="/opsgenie" element={<OpsgeniePage />} />
          // ...
        </FlatRoutes>
      );

  - intro: Add a link to the sidebar.
    language: typescript
    code: |
      // packages/app/src/components/Root/Root.tsx
      <SidebarItem icon={ExtensionIcon} to="/opsgenie" text="OpsGenie" />

  - intro: Select the OpsGenie link on the sidebar to view who is on call, alerts and incidents.

---

The OpsGenie plugin is a frontend plugin that displays OpsGenie alerts, incidents and on-call information in Backstage. The plugin includes two components that can be integrated into Backstage:

1. The **OpsGeniePage** routable extension component which produces a standalone page with the following capabilities:
    * view a summary of who is currently on call
    * view and search a list of active alerts with the option of acknowledging or closing alerts directly from Backstage
    * view and search a list of incidents
2. The **EntityOpsgenieAlertsCard** component which can display recent alerts for a specific component.

### Creating an OpsGenie API key

An OpsGenie API key with full access rights is required for the plugin to connect to your OpsGenie domain. Write access is required to allow the plugin to make updates, for example to be able to acknowledge an alert directly from Backstage.

An API key can be created within the Settings area of your OpsGenie account:

![Create an OpsGenie API key](../../assets/backstage/plugins/opsgenie/opsgenie-create-api-key.webp)

Save your API key to the `OPSGENIE_API_KEY` environment available to make it available to the plugin.

### Display alerts on the component overview page

The `EntityOpsgenieAlertsCard` component can be added to `EntityPage.tsx` to display a list of the most recent alerts for components that have the an OpsGenie annotation. For example, to add the alert card to the Overview tab:

1. Add the `EntityOpsgenieAlertsCard` component to `EntityPage.tsx`:

    ```typescript
    // packages/app/src/components/catalog/EntityPage.tsx

    import {
      EntityOpsgenieAlertsCard,
      isOpsgenieAvailable
    } from '@k-phoen/backstage-plugin-opsgenie';

    // ...

    const overviewContent = (
      <Grid container spacing={3} alignItems="stretch">
        <Grid item md={6}>
          <EntityAboutCard variant="gridItem" />
        </Grid>
        <Grid item md={6}>
          {/* OpsGenie alert card start */}
          <EntitySwitch>
            <EntitySwitch.Case if={isOpsgenieAvailable}>
              <EntityOpsgenieAlertsCard title="OpsGenie Alerts" />
            </EntitySwitch.Case>
          </EntitySwitch>
          {/* OpsGenie alert card end */}
        </Grid>
        <Grid item md={4} xs={12}>
          <EntityLinksCard />
        </Grid>
        <Grid item md={8} xs={12}>
          <EntityHasSubcomponentsCard variant="gridItem" />
        </Grid>
      </Grid>
    );
    ```

2. Add the OpsGenie annotation to the component's `catalog-info.yaml` file:

    ```yaml
    metadata:
      annotations:
        opsgenie.com/component-selector: 'tag:"service:backstage-sample-service"'
    ```

3. Log into [app.opsgenie.com](https://app.opsgenie.com) and create an alert on the Alerts tab.

    ![Create an OpsGenie alert](../../assets/backstage/plugins/opsgenie/opsgenie-create-alert.webp)

    Make sure the alert's tag matches the tag in the annotation added in step 2.

4. View the component in Backstage to see the list of alerts:

    ![View component alerts on the overview page](../../assets/backstage/plugins/opsgenie/opsgenie-plugin-alerts-on-entity-page.webp)
