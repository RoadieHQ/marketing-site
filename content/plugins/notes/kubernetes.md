---
name: kubernetes
---

The Backstage Kubernetes plugin has two separate components:

-   **frontend**: it will take care of displaying the information to the user.
-   **backend**: it will take care of connecting to the Kubernetes clusters and sending the information to the frontend.

After installing the plugins, you have to configure them in two steps:

1. Allow the backend to collect objects from your Kubernetes cluster(s).
2. Surfacing your Kubernetes objects in catalog entities

## Configuring Kubernetes Clusters

Here is a complete example of a configuration entry:

```yaml
# app-config.yaml
kubernetes:
    serviceLocatorMethod: 'multiTenant'
    clusterLocatorMethods:
        - 'config'
    clusters:
        - url: http://127.0.0.1:9999
          name: minikube
          authProvider: 'serviceAccount'
          serviceAccountToken:
              $env: K8S_MINIKUBE_TOKEN
        - url: http://127.0.0.2:9999
          name: gke-cluster-1
          authProvider: 'google'
```

You can find the complete list of fields in the [the official Backstage documentation](https://backstage.io/docs/features/kubernetes/configuration).

### Using RBAC Authorization

The current RBAC permissions required are read-only cluster wide, for the
following objects:

-   pods
-   services
-   configmaps
-   deployments
-   replicasets
-   horizontalpodautoscalers
-   ingresses

An example of a Role to grant read access to pods:

```yaml
apiVersion: rbac.authorization.k8s.io/v1
kind: Role
metadata:
    namespace: default
    name: pod-reader
rules:
    - apiGroups: ['']
      resources: ['pods']
      verbs: ['get', 'watch', 'list']
```

## Surfacing your Kubernetes components as part of an entity

There are two ways to surface your Kubernetes components as part of an entity.  
**NOTE:** The label selector takes precedence over the annotation/service id.

### Common `backstage.io/kubernetes-id` label

1. #### Adding the metadata annotation

The following annotation must be added so that Backstage can detect that an entity has Kubernetes components.

```yaml
# catalog-info.yaml
metadata:
    annotations:
        'backstage.io/kubernetes-id': <ENTITY_NAME>
    ...
```

2. #### Labeling your Kubernetes components

In order for your Kubernetes components to show up in the service catalog as a part
of an entity, your Kubernetes components themselves can have the following label:

```json
"metadata": {
  "labels": {
    "backstage.io/kubernetes-id": <ENTITY_NAME>
    ...
  }
}
```

### Label selector query annotation

Via a label selector, the user can identify a set of objects.  
You can write your own custom label selector query that Backstage will use to
lookup the objects. You can read
[Labels and Selectors documentation](https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/)
for more info.

```yaml
# catalog-info.yaml
annotations:
    'backstage.io/kubernetes-label-selector': 'app=my-app,component=front-end'
```

## Example of steps to follow

1. Get the Kubernetes master base url `kubectl cluster-info`
2. Get the service account token

    ```bash
    kubectl get secret $(kubectl get sa <SERVICE_ACCOUNT_NAME> -o=json \
    | jq -r '.secrets[0].name') -o=json \
    | jq -r '.data["token"]' \
    | base64 --decode \
    | pbcopy
    ```

3. Register existing component in Backstage

    ```yaml
    # catalog-info.yaml
    apiVersion: backstage.io/v1alpha1
    kind: Component
    metadata:
        name: <ENTITY_NAME>
        annotations:
            'backstage.io/kubernetes-id': <ENTITY_NAME>
    spec:
        type: service
        lifecycle: production
        owner: guest
    ```

4. Add or update `app-config.local.yaml` with the following:

    ```yaml
    # app-config.local.yaml
    kubernetes:
        serviceLocatorMethod: 'multiTenant'
        clusterLocatorMethods:
            - 'config'
        clusters:
            - url: <KUBERNETES_MASTER_BASE_URL_FROM_STEP_1>
              name: minikube
              serviceAccountToken: <TOKEN_FROM_STEP_2>
              authProvider: 'serviceAccount'
    ```
