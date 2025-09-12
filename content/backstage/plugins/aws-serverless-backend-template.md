---
humanName: 'Serverless Backend Scaffolder Template'
heading: 'Backstage Scaffolder Task to create an AWS Serverless Backend'
# Keep it short
lead: 'Create AWS Serverless Backend'
npmjsPackage: "@roadiehq/scaffolder-backend-module-aws"
codeLocation: "https://github.com/RoadieHQ/roadie-backstage-plugins/tree/main/plugins/scaffolder-actions/scaffolder-backend-module-aws"
attribution:
  text: Roadie
  href: https://github.com/roadie-demo/scaffolder-examples

seo:
  # Don't forget to end with "| Roadie"
  title: 'Scaffolder Tasks - AWS API using Lambda | Roadie'
  description: |
    Backstage scaffolder template to create an AWS Serverless Backend.

logoImage: '../../assets/logos/scaffolder-templates/sst.webp'

---

### Getting Started

The template can be found here https://github.com/roadie-demo/scaffolder-examples/blob/main/create-aws-serverless-backend/template.yaml

To Use the template
  1. Create the following secrets in your GitHub Organizations secrets AWS_ACCESS_KEY_ID and AWS_SECRET_ACCESS_KEY ![AWS Credentials](aws-credentials.webp)
    
  2. Load the template into Backstage. ![Load Template](./load-scaffolder-template.webp)
    
  3. Run the template by clicking choose on the Create Component Page ![Run the Template](create-serverless-backend.webp)
