---
humanName: GitHub Insights
heading: 'Backstage GitHub Insights Plugin'
lead: 'See GitHub Insights for your components in Backstage'
attribution:
  text: Roadie
  href: https://roadie.io

npmjsPackage: "@roadiehq/backstage-plugin-github-insights"

seo:
  title: 'Backstage GitHub Insights Plugin | Roadie'
  description: |
    See GitHub Insights in Backstage. Supports contributors, languages, readme and releases.

logoImage: '../../assets/logos/code-insights/code-icon.webp'

coverImage: '../../assets/code-insights-plugin.webp'
coverImageAlt: 'A screenshot of the GitHub Insights plugin. It is showing a code details for a sample component.'

availableOnRoadie: true

gettingStarted: # What will this step accomplish?
  - intro: Install the plugin into Backstage.
    language: bash
    code: |
     // packages/app
     yarn add @roadiehq/backstage-plugin-github-insights

  - intro: Add plugin API to your Backstage instance.
    language: typescript
    code: |
      // packages/app/src/components/catalog/EntityPage.tsx
      import { EntityGithubInsightsContent } from '@roadiehq/backstage-plugin-github-insights';

      const serviceEntityPage = (
        <EntityLayoutWrapper>
          ...
          <EntityLayout.Route 
            path="/code-insights"
            title="Code Insights">
            <EntityGithubInsightsContent />
          </EntityLayout.Route>
        </EntityLayoutWrapper>
      );

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
      EntityGithubInsightsContent,
      EntityGithubInsightsLanguagesCard,
      EntityGithubInsightsReadmeCard,
      EntityGithubInsightsReleasesCard,
      isGithubInsightsAvailable,
      } from '@roadiehq/backstage-plugin-github-insights';

      // ...
      
      const overviewContent = (
        <Grid container spacing={3} alignItems="stretch">
        <EntitySwitch>
            <EntitySwitch.Case if={e => Boolean(isGithubInsightsAvailable(e))}>
              <Grid item md={6}>
                <EntityGithubInsightsLanguagesCard />
                <EntityGithubInsightsReleasesCard />
              </Grid>
              <Grid item md={6}>
                <EntityGithubInsightsReadmeCard maxHeight={350} />
              </Grid>
            </EntitySwitch.Case>
          </EntitySwitch>
        </Grid>
      );
---
