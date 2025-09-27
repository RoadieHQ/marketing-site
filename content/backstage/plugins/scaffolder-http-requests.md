---
humanName: 'Scaffolder: HTTP Requests'
heading: 'Backstage HTTP request scaffolder actions'
# Keep it short
lead: 'Create HTTP requests with the scaffolder'
npmjsPackage: "@roadiehq/scaffolder-backend-module-http-request"
codeLocation: "https://github.com/RoadieHQ/roadie-backstage-plugins/tree/main/plugins/scaffolder-actions/scaffolder-backend-module-http-request"
attribution:
  text: Roadie
  href: https://github.com/RoadieHQ/roadie-backstage-plugins

seo:
  # Don't forget to end with "| Roadie"
  title: 'Backstage Scaffolder Actions - HTTP Requests Plugin | Roadie'
  description: |
    Send arbitrary HTTP requests from the Backstage scaffolder.

intro: |
  The Backstage HTTP request scaffolder actions plugin integrates with the pre-existing scaffolder actions. It extends them and allows you to send arbitrary http requests to your Backstage instance.

  The http:backstage:request action allows the task to call any of the backstage APIs available to the user that triggers it. The action takes care of passing the authentication token of the user to the task execution so that the action can perform actions on behalf of the user that triggers it.

logoImage: '../../assets/logos/scaffolder-http/http.webp'

gettingStarted:
  - intro: Install the plugin into your scaffolded Backstage application.
    language: bash
    code: |
      cd packages/backend
      yarn add @roadiehq/scaffolder-backend-module-http-request
  - intro: 'Add http request actions to your scaffolder backend'
    language: typescript
    code: | 
        // packages/backend/src/plugins/scaffolder.ts

        const actions = [
          createHttpBackstageAction({ config }),
          ...createBuiltinActions({
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
        steps:
          - id: backstage_request
            name: backstage request
            action: http:backstage:request
            input:
              method: 'GET'
              path: '/proxy/snyk/org/<some-org>/project/<some-project-id>/aggregated-issues'
              headers:
                test: 'hello'
                foo: 'bar'
              params:
                name: 'test'
                bar: 'foo'

          - id: backstage_request_with_input
            name: backstage request
            action: http:backstage:request
            input:
              method: 'POST'
              path: '/proxy/snyk/org/<some-org>/project/<some-project-id>/aggregated-issues/get/some/job{{ steps["backstage_request"].output.body.number }}'
              headers:
                  test: 'hello'
                  foo: 'bar'
              body:
                  name: 'test'
                  bar: 'foo'

        output:
          getResponse: '{{ steps["backstage_request_with_input"].output.body }}'
          getCode: '{{ steps["backstage_request_with_input"].output.code }}'
          getHeaders: '{{ steps["backstage_request_with_input"].output.headers }}'
      ...
---

This scaffolder action is meant to be used in a scaffolded Backstage application created by Backstage CLI. If you are using it in a Backstage monorepo, you need to modify the build process to transpile node_modules also.

NB: The path should always point to a proxy entry with the following format: `proxy/<proxy-path>/<external-api-path>`. i.e.: `/proxy/snyk/org/<some-org>/projects` or `/proxy/circleci/api/projects` (the CircleCI proxy path is `circleci/api/` but Snyk is just `snyk/`)

