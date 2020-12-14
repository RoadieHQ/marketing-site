---
name: jira
---

## Get and provide `JIRA_TOKEN` as env variable.

1. Obtain you personal token from jira - https://id.atlassian.com/manage-profile/security/api-tokens
2. Create a base64-encoded string by converting a string in format

   "&lt;your-atlassian-account-mail>:&lt;your-jira-token>"

   for example:

   ```
   jira-mail@example.com:hTBgqVcrcxRYpT5TCzTA9C0F
   ```

   converts to base64

   ```
   amlyYS1tYWlsQGV4YW1wbGUuY29tOmhUQmdxVmNyY3hSWXBUNVRDelRBOUMwRg==
   ```

3. Save it as the environmental variable `JIRA_TOKEN` with `Basic` prefix, for example:

   ```
   JIRA_TOKEN='Basic amlyYS1tYWlsQGV4YW1wbGUuY29tOmhUQmdxVmNyY3hSWXBUNVRDelRBOUMwRg=='
   ```
