---
humanName: End of Life
heading: 'Backstage End of Life Plugin'
# Keep it short
lead: 'End of Life data for your software catalog'
attribution:
  text: dweber019
  href: https://github.com/dweber019

seo:
  # Don't forget to end with "| Roadie"
  title: 'Backstage End of Life Plugin | Roadie'
  description: |
    The Backstage End of Life plugin shows end of life data for entities from endoflife.date or your own data provided by a URL or integrations.

logoImage: '../../assets/logos/endoflife/logo.webp'

availableOnRoadie: true
roadieDocsPath: /endoflife/

gettingStarted:
  - title: Plugin installation

  - intro: Install the EoL plugin into Backstage.
    language: bash
    code: |
      yarn --cwd packages/app add @dweber019/backstage-plugin-endoflife

  - title: catalog-info.yaml annotations

  - intro: Add `endoflife.date/products` metadata to your catalog-info files to tag entities with relevant dependencies. Multiple values can be comma separated.
    language: yaml
    code: |
      apiVersion: backstage.io/v1alpha1
      kind: Component
      metadata:
        name: some-angular-nginx-component
        annotations:
          endoflife.date/products: angular, nginx

  - intro: You can also add specific versions for more precise tracking
    language: yaml
    code: |
      apiVersion: backstage.io/v1alpha1
      kind: Component
      metadata:
        name: some-angular-nginx-component
        annotations:
          endoflife.date/products: angular@17,nginx@1.25

  - title: Add cards to your entity pages

  - intro: Add the EntityEndOfLifeCard to the EntityPage.
    language: typescript
    code: |
      // packages/app/src/components/catalog/EntityPage.tsx

      import { EntityEndOfLifeCard } from '@dweber019/backstage-plugin-endoflife';

      const overviewContent = (
        <Grid container spacing={3} alignItems="stretch">
          {entityWarningContent}
          ...
          <EntitySwitch>
            <EntitySwitch.Case if={hasLabels}>
              <Grid item md={4} xs={12}>
                <EntityLabelsCard />
              </Grid>
            </EntitySwitch.Case>
          </EntitySwitch>
          <EntitySwitch>
            <EntitySwitch.Case if={isEndOfLifeAvailable}>
              <Grid item md={6}>
                <EntityEndOfLifeCard />
              </Grid>
            </EntitySwitch.Case>
          </EntitySwitch>
          ...
        </Grid>
      );

---

### Useful links

- [npm](https://www.npmjs.com/package/@dweber019/backstage-plugin-endoflife)
- [github](https://github.com/dweber019/backstage-plugins)
