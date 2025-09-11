---
humanName: New Relic
heading: 'Backstage New Relic Plugin'
lead: 'Observability platform built to help engineers create and monitor their software.'
attribution:
  text: '@timwheelercorn'
  href: https://github.com/timwheelercom

seo:
  title: 'Backstage New Relic Plugin | Roadie'
  description: |
    Observability platform built to help engineers create and monitor their software.

logoImage: '../../assets/logos/new-relic/logo-relic.webp'

coverImage: '../../assets/new-relic-plugin.webp'
coverImageAlt: 'A screenshot of the GCP Projects plugin.'

availableOnRoadie: true
roadieDocsPath: /integrations/newrelic/

gettingStarted:
  - intro: Install the plugin into Backstage.
    language: bash
    code: 'yarn add @backstage/plugin-newrelic'

  - intro: Add New Relic page to your Backstage instance
    language: typescript
    code: |
      // packages/app/src/App.tsx
      import { NewRelicPage } from '@backstage/plugin-newrelic';

      ...
      const routes = (
        <FlatRoutes>
          ...
          <Route path="/newrelic" element={<NewRelicPage />} />
          ...
        </FlatRoutes>
      );
      ...
    
  - intro: Add link to New Relic to your sidebar
    language: typescript
    code: |
      // packages/app/src/components/Root/Root.tsx
      ...
    
      export const Root = ({ children }: PropsWithChildren<{}>) => (
        <SidebarPage>
          <Sidebar>
            ...
            <SidebarItem icon={ExtensionIcon} to="newrelic" text="New Relic" />
            ...
          </Sidebar>
        </SidebarPage>
      );
        
  - intro: Add the proxy config
    language: YAML
    code: |
      // app-config.yaml
      proxy:
        '/newrelic/apm/api':
          target: https://api.newrelic.com/v2
          headers:
            X-Api-Key:
              $env: NEW_RELIC_REST_API_KEY

  - intro: Navigate to youdomain.com/newrelic.
---
