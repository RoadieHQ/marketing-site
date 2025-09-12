---
humanName: Allure
heading: 'Backstage Allure Plugin'
# Keep it short
lead: 'Display Allure test reports in Backstage'
npmjsPackage: "@backstage-community/plugin-allure"
codeLocation: "https://github.com/backstage/community-plugins/tree/main/workspaces/allure/plugins/allure"
attribution:
  text: Deepak Bhardwaj
  href: https://github.com/deepak-bhardwaj-ps

seo:
  # Don't forget to end with "| Roadie"
  title: 'Backstage Allure Plugin | Roadie'
  description: |
    The Backstage Allure plugin integrates with the Allure API to show report
    information inside Backstage.

logoImage: '../../assets/logos/allure/allure-logo.webp'

coverImage: '../../assets/allure-report-img.webp'
coverImageAlt: 'A preview of the Allure overview widget including suites and environments.'

availableOnRoadie: true
roadieDocsPath: /integrations/allure/

gettingStarted:
  - intro: Install the plugin into Backstage.
    language: bash
    code: |
      cd packages/app
      yarn add @backstage-community/plugin-allure
  - intro: Add proxy config to the app-config.yaml file
    language: yaml
    code: |
      allure:
          baseUrl: <ALLURE_SERVICE_BASE_URL>
          # Example: https://allure.my-company.net or when running allure locally, http://localhost:5050/allure-docker-service
  - intro: 'Add the Allure widget to your overview page'
    language: typescript
    code: |
      // packages/app/src/components/catalog/EntityPage.tsx
      + import { EntityAllureReportContent } from '@backstage-community/plugin-allure';

      ...

      const serviceEntityPage = (
        <EntityLayoutWrapper>
          ...
      +    <EntityLayout.Route path="/allure" title="Allure Report">
      +        <EntityAllureReportContent />
      +    </EntityLayout.Route>
        </EntityLayoutWrapper>
      );
---
