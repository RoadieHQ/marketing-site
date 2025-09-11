---
humanName: Codescene
heading: 'Backstage Codescene Plugin'
lead: 'See your Codescene projects and analysis in Backstage.'
npmjsPackage: "@backstage-community/plugin-codescene"
attribution:
  text: Codescene
  href: https://codescene.com/

seo:
  title: 'Backstage Codescene Plugin | Roadie'
  description: |
    See existing Codescene projects and associated analysis data from your CodeScene instance inside Backstage.

logoImage: '../../assets/logos/codescene/codescene.webp'

availableOnRoadie: true
roadieDocsPath: /integrations/codescene/

gettingStarted:
  # What will this step accomplish?
  - intro: Install the plugin into Backstage
    language: bash
    code: yarn --cwd packages/app add @backstage-community/plugin-codescene

  - intro: Import it into your Backstage application
    language: typescript
    code: |
      // packages/app/src/components/home/Homepage.tsx

      import {
        CloudsmithStatsCard,
        CloudsmithQuotaCard,
        CloudsmithRepositoryAuditLogCard,
        CloudsmithRepositorySecurityCard,
        } from '@roadiehq/backstage-plugin-cloudsmith';

  - intro: Add the proxy to your app-config.
    language: typescript
    code: |
      proxy:
        '/codescene-api':
          target: '<INSTANCE_HOSTNAME>/api/v1'
          allowedMethods: ['GET']
          allowedHeaders: ['Authorization']
          headers:
            Authorization: Basic ${CODESCENE_AUTH_CREDENTIALS}
      codescene:
        baseUrl: https://codescene.my-company.net # replace with your own URL

  - intro: 'Add codescene routes and pages to your App.tsx.'
    language: typescript
    code: |
      import {
        CodeScenePage,
        CodeSceneProjectDetailsPage,
      } from '@backstage-community/plugin-codescene';

      ...

      <Route path="/codescene" element={<CodeScenePage />} />
      <Route
          path="/codescene/:projectId"
          element={<CodeSceneProjectDetailsPage />}
      />

  - intro: Add a codescene sidebar item (optional).
    language: typescript
    code: |
      // In packages/app/src/components/Root/Root.tsx
      import { CodeSceneIcon } from '@backstage-community/plugin-codescene';

      {
        /* other sidebar items... */
      }
      <SidebarItem icon={CodeSceneIcon} to="codescene" text="CodeScene" />;

  - intro: Add codescene `CodeSceneEntityKPICard` and `CodeSceneEntityFileSummary` to your entity page.
    language: typescript
    code: |
      // In packages/app/src/components/catalog/EntityPage.tsx
      import {
        CodeSceneEntityPage,
        CodeSceneEntityFileSummary,
        isCodeSceneAvailable,
      } from '@backstage-community/plugin-codescene';

      /* other EntityLayout.Route items... */

      <EntityLayout.Route
        path="/codescene"
        title="codescene"
        if={isCodeSceneAvailable}
      >
        <Grid container spacing={3} alignItems="stretch">
          <Grid item md={6}>
            <CodeSceneEntityKPICard />
          </Grid>
          <Grid item md={6}>
            <CodeSceneEntityFileSummary />
          </Grid>
        </Grid>
      </EntityLayout.Route>;

  - intro: Annotate relevant catalog-info.yaml files with codescene annotations.
    language: yaml
    code: |
      apiVersion: backstage.io/v1alpha1
      kind: Component
      metadata:
        name: backstage
        annotations:
          codescene.io/project-id: <codescene-project-id>
---

### Useful Links

- [GitHub](https://github.com/backstage/community-plugins/tree/main/workspaces/codescene/plugins/codescene)
