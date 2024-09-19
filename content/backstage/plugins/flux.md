---
humanName: Flux
heading: 'Backstage Flux Plugin'
# Keep it short
lead: 'Views of Flux resources available in Kubernetes clusters'
attribution:
  text: Weaveworks

seo:
  # Don't forget to end with "| Roadie"
  title: 'Backstage Flux Plugin | Roadie'
  description: |
    The Backstage Flux plugin provides context-rich views of Flux resources.

logoImage: '../../assets/logos/flux/flux_color_logo.webp'

availableOnRoadie: true
roadieDocsPath: /flux/

gettingStarted:
  - intro: The base configuration for the Flux plugin is handled by the Kubernetes plugins, namely @backstage/plugin-kubernetes and @backstage/plugin-kubernetes-backend. Both need to be installed and configured by following the installation and configuration guides for those plugins. After installation make sure to import the frontend for the Kubernetes plugin. Further details on configuration options can be found on the Flux plugin github page.
    language: typescript
    code: |
      // In packages/app/src/components/catalog/EntityPage.tsx
      import { EntityKubernetesContent } from '@backstage/plugin-kubernetes';

      // You can add the tab to any number of pages, the service page is shown as an example here
      const serviceEntityPage = (
        <EntityLayout>
          {/* other tabs... */}
          <EntityLayout.Route path="/kubernetes" title="Kubernetes">
            <EntityKubernetesContent refreshIntervalMs={30000} />
          </EntityLayout.Route>
        </EntityLayout>
      );

  - intro: Install the Flux plugin into Backstage.
    language: bash
    code: |
      yarn add --cwd packages/app @weaveworksoss/backstage-plugin-flux

  - intro: Install the Flux plugin into Backstage.
    language: bash
    code: |
      yarn add --cwd packages/app @weaveworksoss/backstage-plugin-flux

  - title: Configuring the plugin

  - intro: In addition, the Flux plugin also needs additional permissions to be able to query the correct resources from within the Kubernetes cluster. A view role
    language: yaml
    code: |
      rules:
      - apiGroups:
          - notification.toolkit.fluxcd.io
          - source.toolkit.fluxcd.io
          - helm.toolkit.fluxcd.io
          - image.toolkit.fluxcd.io
          - kustomize.toolkit.fluxcd.io
        resources:
          - "*"
        verbs:
          - get
          - list
          - watch
    
  - intro: Add the EntityFluxHelmReleasesCard to the EntityPage.
    language: typescript
    code: |
      // In packages/app/src/components/catalog/EntityPage.tsx
      import { EntityFluxHelmReleasesCard } from '@weaveworksoss/backstage-plugin-flux';

      // You can add the tab to any number of pages, the service page is shown as an
      // example here
      const overviewContent = (
        <Grid container spacing={3} alignItems="stretch">
          // ...
          <Grid item md={4} xs={12}>
            <EntityFluxHelmReleasesCard />
          </Grid>
          // ...
        </Grid>
      );

  - intro: Add props to override default values (optional).
    language: typescript
    code: |
      // Additionally, props can be passed into the card to override card defaults.
      <Grid item md={4} xs={12}>
        <EntityFluxHelmReleasesCard many={false} />
      </Grid>

  - intro: Add a page to your entity pages.
    language: typescript
    code: |
      // In packages/app/src/components/catalog/EntityPage.tsx
      import {
        EntityFluxHelmReleasesCard,
        EntityFluxGitRepositoriesCard,
        EntityFluxOCIRepositoriesCard,
        EntityFluxHelmRepositoriesCard,
      } from '@weaveworksoss/backstage-plugin-flux';

      const serviceEntityPage = (
        <EntityLayout>
          // ...
          <Grid container spacing={3} alignItems="stretch">
            <Grid item md={12}>
              <EntityFluxHelmReleasesCard />
            </Grid>
            <Grid item md={12}>
              <EntityFluxHelmRepositoriesCard />
            </Grid>
            <Grid item md={12}>
              <EntityFluxGitRepositoriesCard />
            </Grid>
            <Grid item md={12}>
              <EntityFluxOCIRepositoriesCard />
            </Grid>
          </Grid>
          // ...
        </EntityLayout>
      );

  - title: Align your catalog-info.yaml and Helm charts with the values the Flux plugin expects
  - intro: Include kubernetes-id values.
    language: yaml
    code: |
      apiVersion: backstage.io/v1alpha1
      kind: Component
      metadata:
        name: carts-service
        description: A microservices-demo service that provides shopping carts for users
        tags:
          - java
        annotations:
          backstage.io/kubernetes-id: carts-service
      spec:
        type: service
        lifecycle: production
        owner: sockshop-team
        system: carts

  - intro: Then label your Flux HelmRelease.
    language: yaml
    code: |
      apiVersion: helm.toolkit.fluxcd.io/v2beta1
      kind: HelmRelease
      metadata:
        name: carts-nginx
        namespace: carts
        labels:
          backstage.io/kubernetes-id: carts-service
      spec:
        chart:
          spec:
            chart: nginx
            reconcileStrategy: ChartVersion
            sourceRef:
              kind: HelmRepository
              name: podinfo
        interval: 1m0s

---

### Useful links

- [GitHub repo](https://github.com/weaveworks/weaveworks-backstage)
