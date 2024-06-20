---
title: Configuring AWS Resources Autodiscovery
publishedDate: '2022-03-29T21:00:00.0Z'
description: How to configure Roadie to read AWS resources

humanName: AWS Resources
logoImage: '../../../assets/logos/aws/Amazon_Web_Services_Logo.png'
integrationType: Catalog data source
---

## Introduction

Roadie has the capability to automatically ingest resources from AWS. This is done by automatic discovery and currently ingests all configured resource types per AWS region.

This guide describes how to set up Roadie to access your specific AWS resources and automatically ingest them.


##  Step 1: Get the roadie IAM details

Navigate to `Administration > Settings > AWS Resources` and make a note of the Roadie backend role ARN and account ID. This is mentioned on the title text of the AWS Resources integration settings page.

##  Step 2: Create a federated role in your account for Roadie

Follow the steps [here](/docs/details/accessing-aws-resources) to create the role. 

The role needs to follow this naming convention `arn:aws:iam::*:role/<your-tenant-name>-roadie-read-only-role` where <your-tenant-name> matches your organisation's name used in the url of your Roadie instance.

You'll need to attach policies to the role to be able to retrieve information about the resources you want ingested. The supported resources and their needed policies are listed in a table at the end of this page. You can use the same role for multiple resource types as long as the needed permissions are granted to it.

For quick experimentation, you can use `AWS<ResourceType>ReadOnlyAccess` policies provided by AWS, but the best practice is to allow only specific needed operations.


##  Step 3: Configure your Roadie instance to use the new role

![AWS Resources config](aws-resources-config.png)

On the AWS Resources settings page `Administration > Settings > AWS Resources` in Roadie click `Add Item`. 
Here you can define the role (created in step 2 above) to be used to ingest these resources, as well as the AWS region to use and the optional External ID configured for the role.

After the role configuration is done, you can click the 'Test Role' button to check if the role is assumable by Roadie. Finally,  you can select the types of resources you want to be ingested. The possible options are listed in the table at the bottom of the page.

You can add multiple integrations towards multiple AWS accounts or regions.

## Resources and needed permissions

The table below lists the permissions required of the assumable role in order for the Catalog to ingest those resource types.

| Resource             | Description                               | AWS Policy Action(s)                                                           |
|----------------------|-------------------------------------------|--------------------------------------------------------------------------------|
| lambda-function      | AWS Lambda Functions                      | `lambda:ListFunctions`, `lambda:ListTags`                                      |
| eks-cluster          | AWS Elastic Kubernetes Service Clusters   | `eks:ListClusters`, `eks:DescribeCluster`                                      |
| s3-bucket            | AWS Simple Storage Service Buckets        | `s3:ListBucket`, `s3:ListAllMyBuckets`, `s3:GetBucketTagging`                  |
| dynamodb-table       | AWS DynamoDB tables                       | `dynamodb:ListTables`, `dynamodb:DescribeTable`, `dynamodb:ListTagsOfResource` |
| ec2-instance         | AWS Elastic Compute Cloud instances       | `ec2:DescribeInstances`                                                        |
| rds-db-instance      | AWS Relational Database Service instances | `rds:DescribeDBInstances`                                                      |
| organization-account | AWS Organization Accounts                 | `organizations:ListAccounts`, `organizations:ListTagsForResource`              |



You can expand the code snippet below to show an example policy document for the AWS role. You can add additional statement blocks into the policy document where multiple role policy actions are required.

<details>

<summary>Needed minimal policy</summary>

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "RoadieAllowPolicy",
      "Effect": "Allow",
      "Action": [
        "lambda:ListFunctions"
      ],
      "Resource": "*"
    }
  ]
}
```
</details>


## Additional information

The resource providers enhance their functionality to allow additional metadata inclusion to the provided entities. This is done by using tags within the AWS resource. 
The tagging functionality of AWS is used to determine the owner of each resource. By default, Roadie uses tag with a key `owner` to determine what value to use for the owner field of the generated entity.

You can additionally use the following tags to indicate relationships within the catalog:
`system` -> To indicate that this AWS resources is part of a system (expected value: fully qualified name)
`domain` -> To indicate that this AWS resources is part of a domain (expected value: fully qualified name)
`dependsOn`  -> To indicate that the resource depends on something (expected value: comma separated list of fully qualified names)
`dependencyOf` -> To indicate that the resource is a dependency of something  (expected value: comma separated list of fully qualified names)

See more information about relationships in [Backstage docs](https://backstage.io/docs/features/software-catalog/well-known-relations).
