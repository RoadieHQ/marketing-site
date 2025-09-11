---
humanName: Code Coverage
heading: 'Backstage Code Coverage Plugin'
lead: 'See code coverage summaries for your software in Backstage'
npmjsPackage: @backstage-community/plugin-code-coverage
attribution:
  text: alde & nissayeva
  href: https://github.com/alde & https://github.com/nasquasha 

seo:
  title: 'Backstage Code Coverage Plugin | Roadie'
  description: |
    This is the frontend part of the code-coverage plugin. It displays code coverage summaries for your entities.

logoImage: '../../assets/logos/code-insights/code-icon.webp'

availableOnRoadie: true
roadieDocsPath: /integrations/codecoverage/

# Instructions for someone who wants to use this plugin.
# languages used here must be listed in the .babelrc

gettingStarted:
  # What will this step accomplish?
  - intro: Install the plugin into Backstage
    language: bash
    code: yarn --cwd packages/app add @backstage-community/plugin-code-coverage

  - intro: Modify your `EntityPage.tsx` to render code coverage reports.
    language: typescript
    code: |
      // packages/app/src/components/catalog/EntityPage.tsx

      import { TechDocsAddons } from '@backstage/plugin-techdocs-react';
      import { ReportIssue } from '@backstage/plugin-techdocs-module-addons-contrib';
      +import { EntityCodeCoverageContent } from '@backstage-community/plugin-code-coverage';

      @@ -226,6 +227,10 @@ const defaultEntityPage = (
          <EntityLayout.Route path="/docs" title="Docs">
            {techdocsContent}
          </EntityLayout.Route>
      +
      +    <EntityLayout.Route path="/code-coverage" title="Code Coverage">
      +      <EntityCodeCoverageContent />
      +    </EntityLayout.Route>
        </EntityLayout>
      );

  - intro: 'Add `backstage.io/code-coverage` annotations to relevant catalog-info.yaml files.'
    language: yaml
    code: |
      ...
      metadata:
        annotations:
          backstage.io/code-coverage: enabled
---

### Useful Links

- [npm](https://www.npmjs.com/package/@backstage-community/plugin-code-coverage)
- [GitHub](https://github.com/backstage/community-plugins/tree/7c68b0002c895f547b8304e404ca2bd83a6f345a/workspaces/code-coverage/plugins)
- [Roadie Docs](https://roadie.io/docs/integrations/codecoverage/)
