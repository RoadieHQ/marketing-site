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

If you are using AWS CloudFormation, there is a linked CloudFormation template on the AWS Resources Configuration page which can be used to generate the needed assumable role.


##  Step 3: Configure your Roadie instance to use the new role

![AWS Resources config](aws-resources-config.png)

On the AWS Resources settings page `Administration > Settings > AWS Resources` in Roadie click `Add Item`. 
Here you can select the type of resource you want to be ingested. The possible options are listed in the table at the bottom of the page.

After choosing a resource, you need to define the role (created in step 2 above) to be used to ingest these resources, as well as the AWS region to use and the optional External ID configured for the role 

After the role configuration is done, you can click the 'Test Role' button to check if the role is assumable by Roadie.


## Resources and needed permissions

The table below lists the permissions required of the assumable role in order for the Catalog to ingest those resource types.

| Resource             | Description                               | AWS Policy Action(s)                            |
|----------------------|-------------------------------------------|-------------------------------------------------|
| lambda-function      | AWS Lambda Functions                      | `lambda:ListFunctions`                          |
| eks-cluster          | AWS Elastic Kubernetes Service Clusters   | `eks:ListClusters`, `eks:DescribeCluster`       |
| s3-bucket            | AWS Simple Storage Service Buckets        | `s3:ListBucket`, `s3:ListAllMyBuckets`          |
| dynamodb-table       | AWS DynamoDB tables                       | `dynamodb:ListTables`, `dynamodb:DescribeTable` |
| ec2-instance         | AWS Elastic Compute Cloud instances       | `ec2:DescribeInstances`                         |
| rds-db-instance      | AWS Relational Database Service instances | `rds:DescribeDBInstances`                       |
| organization-account | AWS Organization Accounts                 | `organizations:ListAccounts`                    |


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
