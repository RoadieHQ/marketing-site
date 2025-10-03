---
title: Installing Custom Plugins
publishedDate: '2021-03-17T12:11:00.0Z'
description: How to add a custom Backstage plugin to Roadie
---

---

⚠️ We are soon deprecating legacy custom plugins pipeline. Take a look [at the documentation for current custom plugin method](/docs/custom-plugins/overview/) instead

---

## Introduction

Custom plugins are a feature of the [Growth Plan](/pricing/).

Your plugins can be published via npm or yarn, like publishing a normal package. We will provide you a unique scope for
your plugins, and we host a dedicated npm registry which you can publish to.

## Prerequisites

Contact us to get added to our private and secure plugin artefact repository.

## Pushing the plugin to Roadie

### Step 1. Get credentials

Get your credentials for the npm registry.

Follow [this link][forgot-password] and click "Forgot password?" to reset your password. The username is
`<your-company>-roadie`. This will send a reset link to the email we have associated with your account. You can
change this email as you wish.

When you follow the link in this email you will be asked to enter the new password. Then you will be asked to configure
MFA. This is only required using the web interface. While the Artifactory UI suggests you must use Google Authenticator
other applications are accepted. We have tested with 1Password for example.

### Step 2. Configure NPM

To configure NPM there are two options:

- Interactively using npm login. Suitable for a developer testing the process.
  <pre style="overflow:auto">
  npm config set @<b>&lt;your-company&gt;</b>-roadie:registry https://roadiehq.jfrog.io/artifactory/api/npm/<b>&lt;your-company&gt;</b>-roadie/
  npm login --scope=@<b>&lt;your-company&gt;</b>-roadie 
  # This will prompt for your username, password and email
  </pre>

- For a CI/CD engironment you can write a local `.npmrc` file. Start by creating the authentication token by applying
  base64 to the username and password. Example:
  <pre style="overflow:auto">
  printf "%s:%s" <username> <password> | base64 --wrap 0
  </pre>
  Then create the `.npmrc` file like in the following example:
  <pre style="overflow:auto">
  @<b>&lt;your-company&gt;</b>-roadie:registry=&lt;https://roadiehq.jfrog.io/artifactory/api/npm/<b>&lt;your-company&gt;</b>-roadie/&gt;
  #_auth = base64(username:password)
  _auth = ${NPM_AUTH} # You can also use an environment variable
  email = <b>your-artifactory-account-email-address</b>
  always-auth = true
  </pre>

### Step 3. Publishing

Once you're ready to publish your plugin these are the steps you'll need to follow:

1. Ensure your package is scoped correctly in package.json. The name field should follow this pattern
   `@<your-company>-roadie/<package-name>`
2. Select a new package version to publish. You can't overwrite a version once published (e.g. `npm version patch`)
3. Build your plugin (e.g. `yarn && yarn tsc && yarn build`)
4. Publish your plugin `npm publish`
5. (Optional) Check the registry `npm info @<your-company>-roadie/<package-name>`

We will notify you via Slack once the plugin is ready in your Roadie Backstage instance. Further updates to the npm
package will be picked up and released automatically and you can expect the changes to appear in Backstage after 15-20
minutes.

## Conclusion

Once the steps above have been completed successfully and you have been notified that your plugin is ready to use, you
should be able to log into your Backstage instance and use the plugin just like any other plugin.

You can update your plugin at will and modify its versions if needed in the [custom plugin configuration page](/docs/custom-plugins/legacy/configuring/). Using the version keyword `latest` will always update plugins automatically with the latest version when new plugin is published to Artifactory.

[forgot-password]: https://roadiehq.jfrog.io/ui/login/forgot-password
[form]: https://docs.google.com/forms/d/e/1FAIpQLSdSNr4Ps_RpKEx0V2QbxWaKLb3-DKi0W7U09Wth0SXHQoPyXQ/viewform
