---
name: aws-lambda
---

## Authentication

In order to perform requests to AWS lambda plugin first asks backend for temporary credentials via /api/aws/credentials.
(it uses [**@roadiehq/backstage-plugin-aws-auth**](https://github.com/RoadieHQ/backstage-plugin-aws-auth) backend plugin)
Regardless of what auth method you use - you can also decide what functions to show in the table
(what functions particular service uses) by annotating backstage.yaml with name of the functions separated by comma, like:

```yaml
metadata:
  annotations:
    aws.com/lambda-function-name: HelloWorld
    aws.com/lambda-region: us-east-1
```
