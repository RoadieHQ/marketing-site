---
humanName: Azure DevOps
heading: 'Backstage Azure DevOps Plugin'
# Keep it short
lead: 'See Azure DevOps information from Azure Pipelines and Azure Repos in Backstage'
attribution:
  text: Spotify
  href: https://spotify.com

intro: |
    As a prerequisite, you need to have installed and configured the [Azure DevOps Backend](https://github.com/backstage/community-plugins/tree/main/workspaces/azure-devops/plugins/azure-devops-backend) plugin before you move forward with any of these steps.

seo:
  # Don't forget to end with "| Roadie"
  title: 'Backstage Azure DevOps Plugin | Roadie'
  description: |
    The Backstage Azure DevOps plugin provides visualisations for components sourced from Azure DevOps, from services like Azure Pipelines and Azure Repos.

logoImage: '../../assets/logos/azure-devops/Azure-DevOps-logo.webp'

availableOnRoadie: true
roadieDocsPath: /azure-devops/

gettingStarted:
  - intro: Install the frotnend plugin for Azure DevOps.
    language: bash
    code: |
      yarn --cwd packages/app add @backstage-community/plugin-azure-devops

  - intro: To use , add the `EntityAzurePipelinesContent` card.
    language: typescript
    code: |
      // In packages/app/src/components/catalog/EntityPage.tsx

      // If you're using `dev.azure.com/project-repo annotation` use this:

      import {
        EntityAzurePipelinesContent,
        isAzureDevOpsAvailable,
      } from '@backstage-community/plugin-azure-devops';

      // For example in the CI/CD section
      const cicdContent = (
        <EntitySwitch>
          // ...
          <EntitySwitch.Case if={isAzureDevOpsAvailable}>
              <EntityAzurePipelinesContent defaultLimit={25} />
          </EntitySwitch.Case>
          // ...
        </EntitySwitch>

      // If you're using `dev.azure.com/project annotation` use this:

      import {
        EntityAzurePipelinesContent,
        isAzurePipelinesAvailable,
      } from '@backstage-community/plugin-azure-devops';

      // For example in the CI/CD section
      const cicdContent = (
        <EntitySwitch>
          // ...
          <EntitySwitch.Case if={isAzurePipelinesAvailable}>
            <EntityAzurePipelinesContent defaultLimit={25} />
          </EntitySwitch.Case>
          // ...
        </EntitySwitch>
  - intro: To use the `EntityAzurePullRequestsContent` add the extension to your Entity page.
    language: typescript
    code: |
      // In packages/app/src/components/catalog/EntityPage.tsx
      import {
        EntityAzurePullRequestsContent,
        isAzureDevOpsAvailable,
      } from '@backstage-community/plugin-azure-devops';

      // For example in the Service section
      const serviceEntityPage = (
        <EntityLayout>
          // ...
          <EntityLayout.Route if={isAzureDevOpsAvailable} path="/pull-requests" title="Pull Requests">
            <EntityAzurePullRequestsContent defaultLimit={25} />
          </EntityLayout.Route>
          // ...
        </EntityLayout>
  - intro: To use the `EntityAzureGitTagsContent` component, add the extension to your Entity page.
    language: typescript
    code: |
      // In packages/app/src/components/catalog/EntityPage.tsx
      import {
        EntityAzureGitTagsContent,
        isAzureDevOpsAvailable,
      } from '@backstage-community/plugin-azure-devops';

      // For example in the Service section
      const serviceEntityPage = (
        <EntityLayout>
          // ...
          <EntityLayout.Route if={isAzureDevOpsAvailable} path="/git-tags" title="Git Tags">
            <EntityAzureGitTagsContent />
          </EntityLayout.Route>
          // ...
        </EntityLayout>
  - intro: To use the Git Readme feature, add the `EntityAzureReadmeCard` component to your Entity page.
    language: typescript
    code: |
      // In packages/app/src/components/catalog/EntityPage.tsx
      import {
        EntityAzureReadmeCard,
        isAzureDevOpsAvailable,
      } from '@backstage-community/plugin-azure-devops';

      // As it is a card, you can customize it the way you prefer
      // For example in the Service section

      const overviewContent = (
        <Grid container spacing={3} alignItems="stretch">
          <EntitySwitch>
            <EntitySwitch.Case if={isAzureDevOpsAvailable}>
              <Grid item md={6}>
                ...
              </Grid>
              <Grid item md={6}>
                <EntityAzureReadmeCard maxHeight={350} />
              </Grid>
            </EntitySwitch.Case>
          </EntitySwitch>
        </Grid>
      );
  - intro: For relevant entities, add annotations to their respective catalog-info.yaml files
    language: yaml
    code: |
      # Example catalog-info.yaml entity definition file
      apiVersion: backstage.io/v1alpha1
      kind: Component
      metadata:
        # ...
        annotations:
          dev.azure.com/project-repo: my-project/my-repo
          dev.azure.com/build-definition: <build-definition-name> // if you have multiple entities in a single monorepo you'll need to specify the builds
          dev.azure.com/readme-path: /<path-to>/<my-readme-file>.md
          dev.azure.com/project: <project-with-build-code> // if your code is in a diferent repo
          dev.azure.com/host-org: <host>/<organization> // if you have multiple organisations
      spec:
        type: service
        # ...
---

### Useful Info

- The Azure DevOps plugin supports the permission framework for PRs, GitTags, Pipelines and Readme features.

### Useful Links

- [npm](https://www.npmjs.com/package/@backstage-community/plugin-azure-devops)
- [GitHub](https://github.com/backstage/community-plugins/tree/main/workspaces/azure-devops/plugins/azure-devops)
- [Roadie Docs]()
