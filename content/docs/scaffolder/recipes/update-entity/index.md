---
title: Add Pagerduty annotation to an entity
publishedDate: '2025-09-19'
description: An example template for immediately adding an annotation to an existing entity using Roadie fragments rather than a PR
---

## Template

## Actions used

- [`debug:log`](/docs/scaffolder/scaffolder-actions-directory/#debuglog)
- [`http:backstage:request`](/docs/scaffolder/scaffolder-actions-directory/#httpbackstagerequest)
You can check the available actions if you visit `/create/actions`.

### Example Template

```yaml
apiVersion: scaffolder.backstage.io/v1beta3
kind: Template
metadata:
  name: add-pagerduty-annotation-example
  title: Add PagerDuty Service Annotation
  description: Adds a PagerDuty service-id annotation to an existing entity
  tags:
    - pagerduty
spec:
  owner: platform-team
  type: annotation

  parameters:
    - title: Entity Selection
      required:
        - entity
      properties:
        entity:
          title: Select Entity
          type: string
          description: Choose the entity to add the PagerDuty annotation to
          ui:field: EntityPicker
          ui:options:
            allowKinds:
              - Component
              - API
              - Resource

    - title: PagerDuty Configuration
      required:
        - pagerduty_service
      properties:
        pagerduty_service:
          title: PagerDuty Service
          type: string
          description: Select the PagerDuty service to associate with this entity
          ui:field: SelectFieldFromApi
          ui:options:
            path: proxy/pagerduty/services
            arraySelector: services
            valueSelector: id
            labelTemplate: '{{ item.name }} ({{ item.summary }})'

  steps:
    - id: parse-entity-ref
      name: Parse Entity Reference
      action: debug:log
      input:
        message: 'Adding PagerDuty service ${{ parameters.pagerduty_service }} to entity ${{ parameters.entity }}'

    - id: create-catalog-fragment
      name: Create Catalog Fragment with PagerDuty Annotation
      action: http:backstage:request
      input:
        method: POST
        path: catalog/fragments
        headers:
          'content-type': 'application/json'
        body:
          decorator:
            entityRef: ${{ parameters.entity }}
            fragment:
              metadata:
                annotations:
                  pagerduty.com/service-id: ${{ parameters.pagerduty_service }}
              spec:
            source: 'scaffolder'

  output:
    links:
      - title: View Entity in Catalog
        url: ${{ steps['create-catalog-fragment'].output.body.fragment.metadata.annotations['backstage.io/view-url'] or '/catalog/' + parameters.entity }}
      - title: PagerDuty Service Dashboard
        url: 'https://your-org.pagerduty.com/services/${{ parameters.pagerduty_service }}'
```
