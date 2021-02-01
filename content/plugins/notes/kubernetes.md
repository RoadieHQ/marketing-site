---
name: kubernetes
---

You have added the two Kubernetes plugins to your Backstage application:

-   **frontend**: it will take care of displaying the information to the user.
-   **backend**: it will take care of connecting to the Kubernetes clusters and sending the information to the frontend.

After installing the plugings, you have to configure them in two steps:

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

Here is the list of fields in detail:

-   `serviceLocatorMethod`

    Configures how to determine which clusters a component is running in.

    **Valid values:**

    -   `multiTenant` - This configuration assumes that all components run on all the
        provided clusters.

-   `clusterLocatorMethods`

    An array used to determine where to retrieve **cluster configuration** from.

    **Valid values:**

    -   `config` - This will read cluster information from your app-config.

-   `clusters`

    Used by the `config` cluster locator method to construct Kubernetes clients.

    -   `url`

        The **base URL** to the Kubernetes control plane.

        You can find it using the `kubectl cluster-info` command and taking the "Kubernetes master" value.  
        The output should be similar to this:

        ```
        Kubernetes master is running at ...
        ```

    -   `name`

        A name to **represent this cluster**, this must be unique within the `clusters`
        array. This value will be displayed to the final User in the Service Catalog Kubernetes plugin.

    -   `authProvider`

        Determines how the Kubernetes client authenticates with the Kubernetes
        cluster.

        **Valid values:**

        -   `serviceAccount` - Use of a Kubernetes [service account](https://kubernetes.io/docs/reference/access-authn-authz/service-accounts-admin/) to access the Kubernetes API.  
            **NOTE:** when this is used the `serviceAccountToken` field should also be set (see bellow).

        -   `google` - Use of a user's Google auth token from the [Google auth plugin](https://backstage.io/docs/auth/) to access the Kubernetes API.

    -   `serviceAccountToken` - _optional_

        The Kubernetes service account token to be used when `authProvider` is set to `serviceAccount`.

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
