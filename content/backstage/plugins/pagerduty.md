---
humanName: PagerDuty
heading: 'Backstage PagerDuty Plugin'
lead: |
  Don't waste any time getting up to speed on that late night incident.
npmjsPackage: "@pagerduty/backstage-plugin"
codeLocation: "https://github.com/PagerDuty/backstage-plugins"
attribution:
  text: '@samiramkr'
  href: https://github.com/samiramkr

seo:
  title: 'Backstage PagerDuty Plugin | Roadie'
  description: |
    See who is on call, view active incidents and create incidents all from within Backstage.

logoImage: '../../assets/logos/pagerduty/pagerduty-logo-light-200x200.webp'
coverImage: '../../assets/pagerduty-plugin-2077x955.webp'
coverImageAlt: 'PagerDuty incidents for sample-service-1 rendered in Backstage.'

availableOnRoadie: true
roadieDocsPath: /integrations/pagerduty/

gettingStarted:
  - intro: The PagerDuty plugin is a frontend plugin. You will need to install it, configure it and add it to an appropriate location on the entity page.

  - intro: Install the PagerDuty plugin into your Backstage app.
    language: bash
    code: |
      yarn add --cwd packages/app @backstage/plugin-pagerduty

  - intro: Setup a new proxy endpoint for the PagerDuty API. The `PAGERDUTY_TOKEN` environment variable will be used to specify a secret access token required to access the PagerDuty API.
    language: yaml
    code: |
      # app-config.yaml
      proxy:
        '/pagerduty':
          target: https://api.pagerduty.com
          headers:
            Authorization: Token token=${PAGERDUTY_TOKEN}

  - intro: Import the plugin components at the top of the entity page.
    language: typescript
    code: |
      // packages/app/src/components/catalog/EntityPage.tsx

      // ... other imports above

      import {
        isPluginApplicableToEntity as isPagerDutyAvailable,
        EntityPagerDutyCard,
      } from '@backstage/plugin-pagerduty';

      // ... rest of the file

  - intro: Add the EntityPagerDutyCard component to one or more entity page components, depending on where you want the PagerDuty UI to appear. For example, here's how to display the PagerDuty UI on the existing Overview tab which is rendered for all types of entities.
    language: typescript
    code: |
      // packages/app/src/components/catalog/EntityPage.tsx
      const overviewContent = (
        <Grid container spacing={3} alignItems="stretch">
          ...
          <EntitySwitch>
            <EntitySwitch.Case if={isPagerDutyAvailable}>
              <Grid item md={6}>
                <EntityPagerDutyCard />
              </Grid>
            </EntitySwitch.Case>
          </EntitySwitch>
          ...
        </Grid>
      );
---

The PagerDuty plugin is a frontend plugin that provides convenient access to frequently used PagerDuty capabilities. Developers see pertinent information and actions for every entity that is connected to a PagerDuty service including:

- who is currently on call for the entity
- whether there are any active incidents for the entity
- raise a new incident for the entity

## Connecting an entity to a PagerDuty service

An entity is connected to a PagerDuty service by adding a `pagerduty.com/integration-key` annotation to the entity's `catalog-info.yaml` file. For example:

```yaml
annotations:
  pagerduty.com/integration-key: a8642af33a984c07d01144f420df074e
```

The integration key can be retrieved from the Integrations tab of the service in the PagerDuty service directory.

![PagerDuty service integrations tab](./pagerduty-service-integration-key.webp)

## PagerDuty UI placement and rendering

In the example above, the PagerDuty UI was added to the Overview tab for all entities. The PagerDuty panel was conditionally rendered only for entities that are actual connected to a PagerDuty service using the `isPagerDutyAvailable` function.

You are not constrained to displaying the PagerDuty panel on the Overview tab. Where and how you display the PagerDuty panel is completely within your control. For example, what if your organization has a policy that requires all APIs to have on call support? Rather than hiding the PagerDuty panel when an API entity is not connected to a PagerDuty service, you could display a policy reminder. Not only can Backstage provide access to frequently used PagerDuty capabilities but it can also help bring visibility to policy gaps.
