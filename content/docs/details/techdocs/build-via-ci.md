---
title: Build and Publish TechDocs via CI
publishedDate: '2023-09-18'
description: Build TechDocs via CI
---

You can build and publish technical documentation via your own CI pipelines so that the latest version is always ready to view in Roadie and you don't have to wait for a new build when viewing an updated version of your docs.

### Prerequisites

- Send us your AWS account id so we can set up the role to access your Roadie TechDocs S3 bucket in our infra.
- Create GitHub action to build and publish the docs. This [is documented on the Backstage website](https://backstage.io/docs/features/techdocs/configuring-ci-cd/).
- Configure your action to connect securely with the Roadie AWS S3 bucket - bucketName: `your-roadie-tenant-name`-roadie-tech-docs, region: eu-west-1

Roadie hosts TechDocs in a dedicated AWS S3 bucket. To be able to generate and publish the TechDocs yourself we can set up secured access to this bucket for you.

### Building all docs or only some docs via CI

You can choose to switch wholesale to build all your TechDocs via CI (the recommended approach as this gives the best user experience once the CI job is added).

Or you can use an annotation to only build specific docs via CI and leave the others to build on viewing.

```yaml
metadata:
  ...
  annotations:
    roadie.io/techdocs-builder: 'ci'
...
```

### Connecting to Roadie

You can generate and publish TechDocs with the techdocs-cli using one of two ways:

- (Preferred) Assuming a role on our AWS account
  - For us to grant access to you to assume this role we need you to provide the AWS account id you would be using to publish TechDocs
  - We will generate a role you can assume using your AWS credentials from the account you provided to publish TechDocs to your Roadie instance.
- (In case role assumption can't work for you) We can provide you an access key and secret
  - To get credentials you can contact support
  - Add the environment variables: `AWS_ACCESS_KEY_ID` and `AWS_SECRET_ACCESS_KEY` to your CI workflow for use by the CLI.

If you are running the CI job in your own AWS account and assuming a role in the Roadie environment, you don't need to set up the above variables.

Additionally, you need to defined the correct AWS region to be used when publishing TechDocs to Roadie. This can be done using an environment variable as well. Currently the region is eu-west-1:
`AWS_REGION=eu-west-1`

### Publishing with TechDocs CLI

The publishing procedure follows the structure of the techdocs-cli.

```bash
techdocs-cli publish --publisher-type awsS3 --storage-name <the-aws-bucket-name-we-have-provided-you> --entity default/Component/my-service --awsRoleArn <the-aws-role-arn-we-have-provided-you>
```
