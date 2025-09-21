---
humanName: Argo CD
heading: 'Backstage Argo CD Plugin'
# Keep it short
lead: 'See Argo CD status in Backstage'
npmjsPackage: "@roadiehq/backstage-plugin-argo-cd"
codeLocation: "https://github.com/RoadieHQ/roadie-backstage-plugins/tree/main/plugins/frontend/backstage-plugin-argo-cd"
attribution:
  text: Roadie, in collaboration with American Airlines
intro: |
    [Argo CD](https://argoproj.github.io/cd/) is a declarative, GitOps continuous delivery tool for Kubernetes that has graduated from the Cloud Native Computing Foundation (CNCF). It automates application deployment and lifecycle management by continuously monitoring your Git repositories and synchronizing the desired application state with what's running in your Kubernetes clusters.
    
    As a software engineer managing Kubernetes deployments, you understand the complexity of tracking application states across multiple environments. Argo CD simplifies this by providing a single source of truth through Git, where your application configurations are stored declaratively. It continuously monitors these repositories and automatically detects drift between the desired state (in Git) and the live state (in Kubernetes), providing powerful synchronization capabilities.
    
    **The Argo CD Backstage plugin bridges this GitOps workflow directly into your developer portal**, eliminating the need to switch between multiple tools to understand your deployment status. Originally developed through a collaboration between Roadie and American Airlines, this plugin has become an essential tool for teams practicing GitOps with Kubernetes.
    
    ## What the plugin provides
    
    The plugin integrates seamlessly with your existing Argo CD instances to surface critical deployment information directly in Backstage:
    
    - **Real-time sync and health status** - See at a glance whether your applications are synced with Git and running healthily
    - **Deployment history and rollback capabilities** - Track changes over time and quickly identify when issues were introduced
    - **Multi-instance support** - Connect to multiple Argo CD instances across different environments or teams
    - **Deep-linking to Argo CD UI** - Jump directly to the full Argo CD interface when you need more detailed information
    
    ## Why use this plugin
    
    Instead of maintaining separate workflows for checking deployment status in Argo CD's native interface, your developers can view this information directly alongside service documentation, dependencies, and other metadata in Backstage. This reduces context switching and provides a unified view of your service's entire lifecycle.
    
    The plugin is particularly valuable for:
    - **Platform teams** who want to provide developers with deployment visibility without requiring deep Argo CD expertise
    - **Development teams** practicing GitOps who need quick access to deployment status during development and debugging
    - **Organizations with multiple Argo CD instances** who want centralized visibility across environments
    
    This guide covers installation using the new Backstage backend system, configuration for single and multiple Argo CD instances, and usage examples to help you get started quickly.

seo:
  # Don't forget to end with "| Roadie"
  title: 'Backstage Argo CD Plugin | Roadie'
  description: |
    The Backstage Argo CD plugin integrates with your Argo CD instance api to show kubernetes status
    information inside Backstage where it can be associated with your project.

logoImage: 'assets/logos/argo-cd/argo-cd-logo.webp'

coverImage: 'assets/argo-cd-plugin.webp'
coverImageAlt: 'A preview of Argo CD overview widget including kubernetes pod status.'

availableOnRoadie: true
roadieDocsPath: /integrations/argocd/

gettingStarted:
  - intro: Install the frontend plugin package.
    language: bash
    code: |
      yarn --cwd packages/app  add @roadiehq/backstage-plugin-argo-cd
  - intro: Install the backend plugin package.
    language: bash
    code: |
      yarn --cwd packages/backend add @roadiehq/backstage-plugin-argo-cd-backend
  - intro: Add the backend plugin to your backend using the new backend system.
    language: typescript
    code: |
      // packages/backend/src/index.ts
      import { createBackend } from '@backstage/backend-defaults';
      
      const backend = createBackend();
      
      // Add the Argo CD backend plugin
      backend.add(import('@roadiehq/backstage-plugin-argo-cd-backend'));
      
      backend.start();
  - intro: Configure your Argo CD instances in app-config.yaml
    language: yaml
    code: |
      argocd:
        username: ${ARGOCD_USERNAME}
        password: ${ARGOCD_PASSWORD}
        appLocatorMethods:
          - type: 'config'
            instances:
              - name: argoInstance1
                url: https://<your-argocd-instance>
                token: ${ARGOCD_AUTH_TOKEN}
  - intro: 'Add argoCD widget to your overview page'
    language: typescript
    code: | 
      // packages/app/src/components/catalog/EntityPage.tsx
      import {
        EntityArgoCDOverviewCard,
        isArgocdAvailable
      } from '@roadiehq/backstage-plugin-argo-cd';
    
      const overviewContent = (
        <Grid container spacing={3} alignItems="stretch">
        ...
          <EntitySwitch>
            <EntitySwitch.Case if={e => Boolean(isArgocdAvailable(e))}>
              <Grid item sm={4}>
                <EntityArgoCDOverviewCard />
              </Grid>
            </EntitySwitch.Case>
          </EntitySwitch>
        ...
        </Grid>
      );
  - intro: Add annotation to the yaml config file of a component
    language: yaml
    sectionId: 'add-annotations'
    code: |
      metadata:
        annotations:
          argocd/app-name: <your-app-name>
  - intro: Set up your environment variables with your Argo CD credentials
    language: bash
    code: |
      # Option 1: Using username/password
      export ARGOCD_USERNAME=your-username
      export ARGOCD_PASSWORD=your-password
      
      # Option 2: Using session token (alternative)
      export ARGOCD_AUTH_TOKEN='argocd.token=<your-session-token>'
---
