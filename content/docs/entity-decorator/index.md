---
title: Introduction
publishedDate: '2023-09-05'
description: An introduction about Entity Decorator.
---

Catalog is built around the concept of metadata YAML files, therefore, any change you wish to make to your entities, needs to be done via editing those files. However, as YAML files can grow in complexity, they can become challenging to read and maintain. Furthermore, editing those files, can sometimes be a long process, especially if ownership is shared accross the teams in your organization.

Entity Decorator provides an easy way to enhance readability and usability for different entities used in your organization, through specifically designated Entity Decorator.

By using our Entity Decorator, you can add new properties to your entities, through UI, without a need to manually edit YAML files in your version control system.

All of the changes are kept and displayed in your Backstage instance, but YAML files in version control system remain intact.

![Decorate entity form](./fragments_form.png)

## Benefits of using Entity Decorator

Using Entity Decorator has numerous advantages such as:

### Simplicity: 
This approach abstract the complexities of YAML syntax, allowing you to focus on the content rather than formatting.

### Visual Aid:
It provides a visual representation of the YAML structure, in Existing Entity section of the page,  making it easier to grasp the hierarchy and relationships between fields.

### Error Prevention:
Page provides fields validation, which, reduces the risk of syntax errors.

### Team Collaboration: 
With Entity Decorator, team members, including those not familiar with YAML, can easily edit and understand configuration files.

## Entity Decorator 

In order to decorate the entity, navigate to entity page and select 'Decorate entity' from kebab menu at top right corner:

![Decorate entity](./decorate-entity.png)

This will lead to Entity Decorator page in which you can easily add new properties and enrich your entities. 

For now you can add links and annotations, but we will be adding more options in the future. 





