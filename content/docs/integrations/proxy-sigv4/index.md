---
title: Proxy Sigv4 Plugin
publishedDate: '2024-06-08T12:00:00.0Z'
lastValidated: '2024-06-08T12:00:00.0Z'
description: How to configure Roadie to use AWS Signature Version 4 for proxying requests to and from AWS services

humanName: Proxy AWS Sigv4
logoImage: '../../../assets/logos/aws/Amazon_Web_Services_Logo.webp'
integrationType: OSS plugin
---

## Introduction

The Proxy Sigv4 plugin is essential for securely signing requests to AWS services using the Sigv4 signing process.

This guide explains how to set up and configure the Proxy Sigv4 plugin in your Backstage environment to ensure your requests to AWS services are properly authenticated.

## At a Glance

|                            |                                                                                                  |
| -------------------------: | ------------------------------------------------------------------------------------------------ |
|          **Prerequisites** |                                                                                                  |
|         **Considerations** |                                                                                                  |
| **Supported Environments** | ☐ Private Network via Broker <br /> ☐ Internet Accessible via IP Whitelist <br /> ☒ Cloud Hosted |

## Step 1: Get the roadie IAM details

Navigate to `Administration > Settings > Plugins > Proxy (Sigv4)` and make a note of the Roadie backend role ARN and account ID. This is mentioned on the Role Arn field of the Proxy Sigv4 plugin settings page.

## Step 2: Create a federated role in your account for Roadie

Follow the steps [here](/docs/details/accessing-aws-resources) to create the role.

The role needs to follow this naming convention `arn:aws:iam::*:role/<tenant-name>-roadie-<your-role-name>` where <tenant-name> matches your organisation's name used in the url of your Roadie instance.

You'll need to set a trusted relantionship in your new role so that Roadie can assume it. And then attach any permission policy that you need to the role.

<details>

<summary>Trusted relantionships in your new role</summary>

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Principal": {
        "AWS": "arn:aws:iam::<roadie-account-id>:root"
      },
      "Action": "sts:AssumeRole",
      "Condition": {}
    }
  ]
}
```

</details>

## Step 3: Configure your Roadie instance to use the new role

On the AWS S3 settings page `Administration > Settings > Plugins > Proxy (Sigv4)` in Roadie click `Add Item` and enter the newly created
role ARN, the `path` you want the proxy to be available on and the `target` for your AWS resource.

example: `/s3`
will be available on `https://<your-roadie-url>/api/proxy-sigv4/s3`

After the role configuration is done, you can click the 'Test Role' button to check if integration configuration has succeeded.

Please ensure there is a trusted relationship with allows the created role to be assumed.
For more information please visit: [Accessing AWS Resources](/docs/details/accessing-aws-resources)
