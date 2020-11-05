---
name: aws-lambda
---

## Authentication

In order to perform requests to AWS lambda plugin you must install [**@roadiehq/backstage-plugin-aws-auth**](https://github.com/RoadieHQ/backstage-plugin-aws-auth) backend plugin.

Then ask backend for temporary credentials via /api/aws/credentials.

You can select what functions will be shown in the table using your yaml config file:

```yaml
metadata:
  annotations:
    aws.com/lambda-function-name: HelloWorld
    aws.com/lambda-region: us-east-1
```
