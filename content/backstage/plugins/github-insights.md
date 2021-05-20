---
humanName: GitHub Insights
heading: 'Backstage GitHub Insights Plugin'
lead: 'See GitHub Insights for your components in Backstage'
attribution:
  text: Roadie
  href: https://roadie.io

seo:
  title: 'Backstage GitHub Insights Plugin | Roadie'
  description: |
    See GitHub Insights in Backstage. Supports contributors, languages, readme and releases.

logoImage: '../../assets/logos/code-insights/code-icon.png'

coverImage: '../../assets/code-insights-plugin.png'
coverImageAlt: 'A screenshot of the GitHub Insights plugin. It is showing a code details for a sample component.'

gettingStarted: # What will this step accomplish?
  - intro: Install the plugin into Backstage.
    language: bash
    code: 'yarn add @roadiehq/backstage-plugin-github-insights'

  - intro: Import it into your Backstage application.
    language: typescript
    code: |
      // packages/app/src/plugins.ts
      export { plugin as GitHubInsights } from '@roadiehq/backstage-plugin-github-insights';

  - intro: Add plugin API to your Backstage instance.
    language: typescript
    code: |
      // packages/app/src/components/catalog/EntityPage.tsx
      import { Router as GitHubInsightsRouter } from '@roadiehq/backstage-plugin-github-insights';

      const ServiceEntityPage = ({ entity }: { entity: Entity }) => (
        // ...
        <EntityPageLayout>
          <EntityPageLayout.Content
            path="/code-insights"
            title="Code Insights"
            element={<GitHubInsightsRouter entity={entity} />}
          />
          </EntityPageLayout>
        </EntityPageLayout>
      )

  - intro: Run the backstage app with the following command and navigate to the services tab.
    language: bash
    code: |
      yarn start

  - intro: Widgets setup.

  - intro: You must install this plugin by following the steps above to add the widgets to your Overview. You might add only selected widgets or all of them.

  - intro: Add widgets to your Overview tab.
    language: typescript
    code: |
      // packages/app/src/components/catalog/EntityPage.tsx
      import {
        ContributorsCard,
        LanguagesCard,
        ReadMeCard,
        ReleasesCard,
        isPluginApplicableToEntity as isGitHubAvailable,
      } from '@roadiehq/backstage-plugin-github-insights';

      // ...

      const OverviewContent = ({ entity }: { entity: Entity }) => (
        <Grid container spacing={3} alignItems="stretch">
          ...
          {isGitHubAvailable(entity) && (
            <>
              <Grid item md={6}>
                <ContributorsCard entity={entity} />
                <LanguagesCard entity={entity} />
                <ReleasesCard entity={entity} />
              </Grid>
              <Grid item md={6}>
                <ReadMeCard entity={entity} />
              </Grid>
            </>
          )}
        </Grid>
      );
---
