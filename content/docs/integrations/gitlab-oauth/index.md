---
title: Configuring GitLab OAuth in Roadie
publishedDate: '2024-12-19T10:00:00.0Z'
lastValidated: '2024-12-19T10:00:00.0Z'
description: How to configure GitLab OAuth authentication provider for Roadie

humanName: GitLab OAuth
logoImage: 'assets/logos/gitlab/gitlab-logo-100.webp'
integrationType: Authentication Provider
---

## Introduction

GitLab OAuth authentication allows users to sign in to your Roadie instance using their GitLab credentials. This provides a seamless authentication experience for teams already using GitLab.

This guide covers setting up GitLab OAuth authentication, including creating the OAuth application in GitLab, configuring secrets in Roadie, and setting up custom audience URLs for self-hosted GitLab instances.

## At a Glance
| | |
|---: | --- |
| **Prerequisites** | <ul><li>Access to your GitLab instance (GitLab.com or self-hosted)</li><li>Admin access to your Roadie instance</li><li>Your Roadie tenant URL (e.g., `https://yourcompany.roadie.so`)</li></ul> |
| **Considerations** |  |
| **Supported Environments** | ☐ Private Network via Broker <br /> ☐ Internet Accessible via IP Whitelist <br /> ☒ Cloud Hosted |

## Step 1: Create a GitLab OAuth Application

1. Navigate to your GitLab user settings at `https://gitlab.com/-/user_settings/applications`. For self-hosted gitlab, use your internal instance rather than gitlab.com.
2. Click **Add new application**
3. Fill in the application details:
   - **Name**: Enter a descriptive name like "Roadie OAuth"
   - **Redirect URI**: Enter your Roadie callback URL: `https://<your-tenant>.roadie.so/api/auth/gitlab/handler/frame`
   - **Scopes**: Select the following scopes:
     - `api` - Full read/write access to the API
     - `read_api` - Read access to the API
     - `read_user` - Read-only access to user profile
     - `read_repository` - Read-only access to repositories
     - `write_repository` - Read-write access to repositories
     - `openid` - OpenID Connect authentication
     - `profile` - Read-only access to profile data
     - `email` - Read-only access to email address

4. Click **Save application**
5. **Important**: Copy the **Application ID** and **Secret** - you'll need these for the next step

## Step 2: Configure Secrets in Roadie

1. Navigate to your Roadie secrets page: `https://<your-tenant>.roadie.so/administration/settings/secrets`

2. Locate and update the following secrets:
   - **AUTH_GITLAB_CLIENT_ID**: Click the edit icon and enter the Application ID from Step 1
   - **AUTH_GITLAB_CLIENT_ID**: Click the edit icon and enter the Secret from Step 1

3. Save each secret by clicking the save button

> **Note**: Secret updates may take a few minutes to propagate. You'll see the status change when the secret becomes available.

## Step 3: Configure Custom Host (Self-Hosted GitLab Only)

If you're using a self-hosted GitLab instance, you need to configure the hostname to use:

1. Navigate to your Roadie GitLab integration settings: `https://<your-tenant>.roadie.so/administration/settings/integrations/gitlab`

2. In the **GitLab OAuth Configuration** section, locate the **GitLab Host** field

3. Enter your GitLab instance hostname (e.g., `gitlab.yourcompany.com` domain only)

4. Click **Save** to apply the configuration

> **Note**: This step is only required for self-hosted GitLab instances. For GitLab.com, you can leave this field empty.

## Step 4: Test the Configuration

1. Sign out of your Roadie instance
2. Navigate to the sign-in page
3. You should now see a "Sign in with GitLab" option
4. Click the option and complete the OAuth flow
5. You should be redirected back to Roadie and signed in

## Troubleshooting

### Common Issues

**"Invalid redirect URI" error**
- Ensure the redirect URI in your GitLab OAuth app matches: `https://<your-tenant>.roadie.so/api/auth/gitlab/handler/frame` replacing `<your-tenant>` with your tenant name.
- Remove any trailing slashes
- Verify the tenant name is correct

**"Client ID not found" error**
- Verify the GITLAB_CLIENT_ID secret is correctly set in Roadie
- Check that the Application ID was copied correctly from GitLab

**"Invalid client secret" error**
- Verify the GITLAB_CLIENT_SECRET secret is correctly set in Roadie
- Ensure the secret was copied correctly from GitLab (it's only shown once)

**Self-hosted GitLab authentication fails**
- Verify the audience URL is correctly configured
- Ensure your self-hosted GitLab instance is accessible from your browser
- Check that the OAuth application was created in the correct GitLab instance

## References

- [GitLab OAuth Provider Documentation](https://backstage.io/docs/auth/gitlab/provider/)
- [Roadie GitLab Integration Guide](/docs/integrations/gitlab-provider/) 