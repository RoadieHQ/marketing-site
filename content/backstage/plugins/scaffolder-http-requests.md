---
humanName: 'Scaffolder: HTTP Requests'
heading: 'Backstage HTTP request scaffolder actions'
# Keep it short
lead: 'Create HTTP requests with the scaffolder'
attribution:
  text: Roadie
  href: https://github.com/RoadieHQ/roadie-backstage-plugins

seo:
  # Don't forget to end with "| Roadie"
  title: 'Backstage HTTP request scaffolder actions plugin | Roadie'
  description: |
    The Backstage HTTP request scaffolder actions plugin integrates with the pre existing scaffolder actions. It extends them and allows you to send arbitary http requests to an given endpoint.
    It also allows you to issue requests against your backstage instance.

logoImage: '../../assets/logos/scaffolder-http/http.png'

gettingStarted:
  - intro: Install the plugin into Backstage.
    language: bash
    code: |
      cd packages/backend
      yarn add @roadiehq/scaffolder-backend-module-http-request
  - intro: 'Add http request actions to your scaffolder backend'
    language: typescript
    code: | 
        // packages/backend/src/plugins/scaffolder.ts

        const actions = [
            createHttpAction(),
            createHttpBackstageAction({ config }),
            ...createBuiltInActions({
                containerRunner,
                integrations,
                config,
                catalogClient,
                reader,
            }),
        ];

        return await createRouter({
            containerRunner,
            logger,
            config,
            database,
            catalogClient,
            reader,
            actions,
        });
  - intro: Create template with http actions
    language: yaml
    code: |
      ...
       - id: get_request
         name: Get request
         action: http:request
         input:
            method: 'GET'
            url: 'https://example.com'
            headers:
                test: 'hello'
                foo: 'bar'
            params:
                name: 'test'
                bar: 'foo'

        - id: backstage_request
          name: backstage request
          action: http:backstage:request
          input:
            method: 'POST'
            path: '/api/proxy/snyk/org/org/project/project-id/aggregated-issues'
            headers:
                test: 'hello'
                foo: 'bar'
            body:
                name: 'test'
                bar: 'foo'
        
         - id: backstage_request_with_input
           name: backstage request
           action: http:backstage:request
           input:
            method: 'POST'
            path: "/api/proxy/snyk/org/org/project/project-id/aggregated-issues/get/some/job{{ steps.backstage_request.output.body.number }}"'
            headers:
                test: 'hello'
                foo: 'bar'
            body:
                name: 'test'
                bar: 'foo'
      ...
      output:
        getResponse: '{{ steps.get_request.output.body }}'
        getCode: '{{ steps.get_request.output.code }}'
        getHeaders: '{{ steps.get_request.output.headers }}'
        proxyResponse: '{{ steps.backstage_request_with_input.output.body }}'
        proxyCode: '{{ steps.backstage_request_with_input.output.code }}'
        proxyHeaders: '{{ steps.backstage_request_with_input.output.headers }}'
      ...
---
