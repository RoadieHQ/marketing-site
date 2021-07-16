---
title: Adding a Kubernetes cluster
lastUpdated: '2021-07-15T21:00:00.0Z'
description: How to add a Kubernetes cluster for the Kubernetes plugin.
---

![Full active cluster on roadie](./active.png)

> ⚠️ Note, the Kubernetes plugin is only supported with AWS clusters. GKE support is coming soon.⚠️

# AWS

## Introduction

In order to use the Kubernetes plugin, Roadie needs:
 * An Assumed Role to fetch the resources from your cluster
 * The name of your cluster
 * URL of your Kubernetes API Server endpoint


These are set within Roadie at the following url:

```text
https://<tenant-name>.roadie.so/administration/settings/kubernetes
```

This page describes how to create and set up the API token.

## Steps

In this section we will create an AWS role that will grant Roadie read-only access to your Kubernetes cluster’s resources.

We will use the approach which is recommended by AWS for providing this type of access. To learn more about the AWS concepts used below, you can read the following AWS documentation pages:

 * Assuming Role [learn more](https://docs.aws.amazon.com/STS/latest/APIReference/API_AssumeRole.html)
 * Cross Account Federation [learn more](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_common-scenarios_third-party.html)
 * Kubernetes RBAC [learn more](https://kubernetes.io/docs/reference/access-authn-authz/rbac/)
 * Trust relationship [learn more](https://aws.amazon.com/en/blogs/security/how-to-use-trust-policies-with-iam-roles/)

### Step 1: Creating the cross account federation role

1. Sign into your AWS console and navigate to the [IAM service](https://console.aws.amazon.com/iam/home#/home).

2. Click on ”Role” link (this should be on the left handside of your screen).

3. Click on the ”Create Role” button.

4. Click on ”Another AWS Account” and add the account number on on the Kubernetes configuration page (in Roadie) and then click on ”Next: permissions”.

![Another AWS Account](./role-creation.png)

5. Ignore attached policies and click on ”Next: tags” (Roadie does not need to read your AWS resources, only access to your Kubernetes cluster).

Optional: Add a tag, Key: `3rdPartyIntegration` Value: `Roadie`

6. Click ”Next Review”

7. For the ”Role Name” enter suggested name: ”YOUR-COMPANY-NAME-backstage-backend-role-kubernetes”
8. For the ”Role description” enter suggested description

```
This is a role that will be assumed by roadie to gather information on our Kubernetes clusters.
```
It should look like this

![role-confirmation](./role-confirmation.png)

9. Click ”Create role”. Your cross federation role is now created.

### Step 2: Modifying trust relationships to only include the new role

1. Search for IAM in the services box and then click on ”Roles” on the left handside tab.

2. Search for your newly created role: ”YOUR-COMPANY-NAME-backstage-backend-role-kubernetes” and click on it.

You should see a page like this

![role-page](./role-page.png)

3. Click on ”Trust Relationships”, then ”Edit relationship” and add the text below:

``` json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Principal": {
        "AWS": "ROLE FROM CONFIGURATION PAGE"
      },
      "Action": "sts:AssumeRole"
    }
  ]
}
```
 > In the Json fragment above, replace the "ROLE FROM CONFIGURATION PAGE" with the role that is provided to you on the Kubernetes configuration page (See below)


![AWS roadie role](./role-roadie.png)

4. Save the changes.

### Step 3: Set RBAC for new role

1. Edit your Kubernetes aws-auth Configmap as per: https://docs.aws.amazon.com/eks/latest/userguide/add-user-role.html

This is a suggested method using eks:
```bash
eksctl create iamidentitymapping --region <your-cluster-region-here>  \
  --arn <role-from-step-2> \
  --group system:authenticated \
  --username roadie \
  --cluster <your-cluster-name-here>
```

> In the bash snippet above, replace role-from-step-2 with the role you created in Step 2. In this example, it would be "arn::sts::iam:role:1234567890/YOUR-COMPANY-NAME-backstage-backend-role-kubernetes". For your-cluster-name-here, replace with your cluster id.


2. Create an RBAC for this user:

``` yaml
---
apiVersion: rbac.authorization.k8s.io/v1
kind: ClusterRole
metadata:
  name: roadie-assume-role
rules:
  - apiGroups: [""]
    resources:
      - pods
      - configmaps
      - services
      - deployments
      - replicasets
      - horizontalpodautoscalers
      - ingresses
    verbs: 
      - "get"
      - "list"
      - "watch"
  - apiGroups: ["extensions", "apps", "autoscaling", "networking.k8s.io"]
    resources: ["deployments", "ingresses", "replicasets", "horizontalpodautoscalers"]
    verbs: 
      - "get"
      - "list"
      - "watch"
---
apiVersion: rbac.authorization.k8s.io/v1
kind: ClusterRoleBinding
metadata:
  name: roadie-assume-role-binding
roleRef:
  apiGroup: rbac.authorization.k8s.io
  kind: ClusterRole
  name: roadie-assume-role
subjects:
  - kind: User
    name: roadie
```

3. Add this to your cluster and you should now be good to go!

>  ℹ️ Note you can reuse the Role if you have multiple clusters. You will have to configure the RBAC though. ℹ️

### Step 4: Adding a cluster to roadie

1. Navigate to ”https://<tenant-name>.roadie.so/administration/settings/kubernetes” and click on add item.
2. Add the load balancer url, role arn and name of cluster.
3. Click save and exit!

> You will need to annotate your entities (catalog-info.yaml) with the following if you want to see data: ”backstage.io/kubernetes-label-selector: 'app=my-app,component=frontend'”
> For more details please vist [here](https://backstage.io/docs/features/kubernetes/configuration#common-backstageiokubernetes-id-label)
