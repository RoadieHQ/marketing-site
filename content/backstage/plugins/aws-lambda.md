---
humanName: AWS Lambda
heading: 'Backstage AWS Lambda Plugin'
lead: 'See AWS Lambda functions for your components in Backstage'
attribution:
  text: Roadie
  href: https://roadie.io

seo:
  # Don't forget to end with "| Roadie"
  title: 'Backstage AWS Lambda Plugin | Roadie'
  description: |
    See AWS Lambda functions for your components in Backstage.

logoImage: '../../assets/logos/aws-lambda/logo-lambda.png'

coverImage: '../../assets/lambda-widget.png'
coverImageAlt: 'A screenshot of the AWS Lambda. It is showing a AWS Lambda function details for a sample component.'

gettingStarted:
  # What will this step accomplish?
  - intro: Before you start please make sure that you installed @roadiehq/backstage-plugin-aws-auth plugin first.
  - intro: Install the plugin into Backstage.
    language: bash
    code: 'yarn add @roadiehq/backstage-plugin-aws-lambda'
  - intro: Add plugin to the list of plugins.
    language: typescript
    code: |
      // packages/app/src/plugins.ts
      export { plugin as AWSLambdaWidget } from '@roadiehq/backstage-plugin-aws-lambda';
  - intro: Add Widget API to your Backstage instance.
    language: typescript
    code: |
      // packages/app/src/components/catalog/EntityPage.tsx
      import {
        AWSLambdaOverviewWidget,
        isPluginApplicableToEntity as isLambdaWidgetAvailable,
      } from '@roadiehq/backstage-plugin-aws-lambda';

        const OverviewContent = ({ entity }: { entity: Entity }) => (
          &lt;Grid container spacing={3} alignItems="stretch">
            ...
            {isLambdaWidgetAvailable(entity) && (
              &lt;Grid item md={6}>
                &lt;AWSLambdaOverviewWidget entity={entity} />
              &lt;/Grid>
            )}
          &lt;/Grid>
        );
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
