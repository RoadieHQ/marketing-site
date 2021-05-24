---
humanName: API Docs
heading: 'Backstage API Docs Plugin'
lead: 'Discover and display API entities for your components in Backstage'
attribution:
  text: SDA-SE
  href: https://sda.se/

seo:
  # Don't forget to end with "| Roadie"
  title: 'Backstage API Docs Plugin | Roadie'
  description: |
    Components to discover and display API entities as an extension to the catalog plugin.

logoImage: '../../assets/logos/api-docs/logo-docs.png'

coverImage: '../../assets/api-docs-plugin.png'
coverImageAlt: 'A screenshot of the API Docs. It is showing a available endpoints for a sample component.'

# Instructions for someone who wants to use this plugin.
# languages used here must be listed in the .babelrc
gettingStarted:
  # What will this step accomplish?
  - intro: Install the plugin into Backstage.
    language: bash
    code: 'yarn add @backstage/plugin-api-docs'
  - intro: Add the ApiExplorerPage extension to the app:.
    language: typescript
    code: |
      // In packages/app/src/App.tsx
      import { ApiExplorerPage } from '@backstage/plugin-api-docs';
      <Route path="/api-docs" element={<ApiExplorerPage />} />;
  - intro: Add one of the provided widgets to the EntityPage:.
    language: typescript
    code: |
      // packages/app/src/components/catalog/EntityPage.tsx
      
        import {
          EntityAboutCard,
          EntityApiDefinitionCard,
          EntityConsumingComponentsCard,
          EntityProvidingComponentsCard,
        } from '@backstage/plugin-api-docs';


        const apiPage = (
          <EntityLayout>
            ...
            <EntityLayout.Route path="/" title="Overview">
              <Grid container spacing={3}>
                <Grid item md={6}>
                  <EntityAboutCard />
                </Grid>
                <Grid container item md={12}>
                  <Grid item md={6}>
                    <EntityProvidingComponentsCard />
                  </Grid>
                  <Grid item md={6}>
                    <EntityConsumingComponentsCard />
                  </Grid>
                </Grid>
              </Grid>
           </EntityLayout.Route>
           <EntityLayout.Route path="/definition" title="Definition">
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <EntityApiDefinitionCard />
                </Grid>
              </Grid>
            </EntityLayout.Route>
         </EntityLayout>
        );

        // ...

        export const entityPage = (
          <EntitySwitch>
            // ...
            <EntitySwitch.Case if={isKind('api')} children={apiPage} />
            // ...
          </EntitySwitch>
        );

  - intro: Custom API Renderings
    language: typescript
    code: |
      // packages/app/src/apis.tsx
      
        import { ApiEntity } from '@backstage/catalog-model';
        import {
          ApiDefinitionWidget,
          apiDocsConfigRef,
          defaultDefinitionWidgets,
        } from '@backstage/plugin-api-docs';
        import { SqlRenderer } from '...';

        // ...

        export const apis: AnyApiFactory[] = [
          createApiFactory({
          api: apiDocsConfigRef,
          deps: {},
          factory: () => {
            // load the default widgets
            const definitionWidgets = defaultDefinitionWidgets();
            return {
              getApiDefinitionWidget: (apiEntity: ApiEntity) => {
                // custom rendering for sql
                if (apiEntity.spec.type === 'sql') {
                  return {
                    type: 'sql',
                    title: 'SQL',
                    component: definition => <SqlRenderer definition={definition} />,
                  } as ApiDefinitionWidget;
                }

                // fallback to the defaults
                return definitionWidgets.find(d => d.type === apiEntity.spec.type);
              },
            };
          },
        }),
      ]
---

## API formats supported right now:

- AsyncAPI
- GraphQL
- OpenAPI 2 & 3

All other formats are displayed as plain text right now, but it could be easily extended.
