---
humanName: AWS Lambda
heading: 'Backstage AWS Lambda Plugin'
lead: 'See AWS Lambda functions for your components in Backstage'
npmjsPackage: "@roadiehq/backstage-plugin-aws-lambda"
attribution:
  text: Roadie
  href: https://roadie.io

seo:
  # Don't forget to end with "| Roadie"
  title: 'Backstage AWS Lambda Plugin | Roadie'
  description: |
    AWS Lambda Backstage plugin to see AWS Lambda functions for your components in Backstage.

logoImage: '../../assets/logos/aws-lambda/logo-lambda.webp'

coverImage: '../../assets/lambda-widget.webp'
coverImageAlt: 'A screenshot of the AWS Lambda. It is showing a AWS Lambda function details for a sample component.'

gettingStarted:
  # What will this step accomplish?
  - intro: Before you start please make sure that you installed @roadiehq/backstage-plugin-aws-auth plugin first.
  - intro: Install the plugin into Backstage.
    language: bash
    code: 'yarn add @roadiehq/backstage-plugin-aws-lambda'
  - intro: Add Card to your Backstage catalog pages.
    language: typescript
    code: |
      // packages/app/src/components/catalog/EntityPage.tsx
      import {
        EntityAWSLambdaOverviewCard,
        isAWSLambdaAvailable,
      } from '@roadiehq/backstage-plugin-aws-lambda';
      // ...
      const OverviewContent = ({ entity }: { entity: Entity }) => (
        <Grid container spacing={3} alignItems="stretch">
          <EntitySwitch>
            <EntitySwitch.Case if={isAWSLambdaAvailable}>
              <Grid item md={6}>
                <EntityAWSLambdaOverviewCard />
              </Grid>
            </EntitySwitch.Case>
            {/*...*/}
          </EntitySwitch>
          {/*...*/}
        </Grid>
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
