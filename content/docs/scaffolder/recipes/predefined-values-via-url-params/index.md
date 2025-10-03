---
title: Automatically filling out scaffolder form with URL params
publishedDate: '2022-10-28'
description: If you want to provide users links to scaffolder templates with already filled information you can do so with URL params
---

If you have the need to more strictly control which values template users can input into the form, you can use URL request parameters to achieve that. Additionally, this allows you to construct URLs (either via automation or manually) which produce a pre-filled scaffolder template, possibly leaving the only action needed from the user to be a click of a button.

### Structure

The full URL using query parameters in Roadie Scaffolder is as follows:

- `https://<tenant-name>.roadie.so/templates/templates/default/<template name>?formData={"title"%3A"query-param-title"}`

The query parameters `?formData={"title"%3A"Title from query params"}` in the end of the URL allow you to automatically fill in values of the form. Please see the below table for explanation of individual tokens in the query param.

| Item                | Example Value                           | Explanation                                                                                        |
| ------------------- | --------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `formData`          | `formData`                              | Key of the query param. `formData` object is used to fill out scaffolder template forms            |
| `{"key"%3A"value"}` | `{"title"%3A"Title from query params"}` | Value of the query param. A JSON object with invalid URL characters encoded. `:` encodes to `%3A`. |

### Additional information

Using automatically filled out values is handy when wanting to direct users to use scaffolder templates with known good values. This also allows automation to be constructed around the scaffolder, where the automation can provide fully constructed scaffolder URLs to the user. You can also prevent user from modifying the form values inserted from query params by making the form fields `readonly`. See below example of a minimal form which would be filled using query params defined in the above explanation.

### Example template

```yaml
---
apiVersion: scaffolder.backstage.io/v1beta3
kind: Template
metadata:
  name: query-params-template
  title: Query param values template
  description: A software template to test filling the values via URL query params into a readonly field
spec:
  owner: devops
  type: catalog

  parameters:
    - title: Repository details
      required:
        - title
      properties:
        title: # Name of this property matches the query params used
          title: Title
          ui:readonly: true # marking this field readonly, so it can't be modified via the UI
          type: string
          description: Unique title of the next chapter in the recipe book
  steps:
    - id: log-message
      name: Log Message
      action: debug:log
      input:
        message: 'Hello, ${{ parameters.title }}!'
```
