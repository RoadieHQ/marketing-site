---
title: AWS Resources
publishedDate: '2024-02-20T21:00:00.0Z'
description: How to configure Roadie to create resources from AWS Resources

humanName: AWS Resources
logoImage: '../../../../assets/logos/aws/Amazon_Web_Services_Logo.png'
entityKinds: [resource]
discovery: true
experimental: true
---

You can configure Roadie to ingest AWS RDS instances, Lambda functions, S3 buckets, EC2 instances or DynamoDB tables as resources into the Roadie catalog.

To configure this provider, you can visit Administration > Settings > AWS Resources.

Click Add Item, then select the type of AWS Resource you would like Roadie to load into the catalog. You will need to create a role in AWS that allows Roadie to access the resources in AWS. Then you can configure that role in the administration settings. When that is done you can save the settings.

In a few moments you should see the resources appear in the catalog list.
