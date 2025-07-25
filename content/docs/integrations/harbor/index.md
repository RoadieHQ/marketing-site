---
title: Configuring Harbor
publishedDate: '2025-07-25T11:06:00.0Z'
description: How to configure the Harbor plugin to display Docker image information from Harbor in Roadie.
humanName: Harbor
logoImage: '../../../assets/logos/backstage/mark-negative.svg'
integrationType: OSS plugin
---

## Introduction

The Harbor plugin allows you to view information about your Docker images stored in Harbor directly within Backstage. This plugin provides both a dedicated Harbor tab and a widget that can be displayed on entity overview pages, giving you quick access to container image details, vulnerabilities, and other Harbor-specific information.

Harbor is an open-source container image registry that secures images with policies and role-based access control, ensures images are scanned and free from vulnerabilities, and signs images as trusted.

## At a Glance

| | |
|---: | --- |
| **Prerequisites** | **Configuration Data:** <ul><li>Harbor Base URL</li><li>Harbor Username</li><li>Harbor Password</li></ul> **Component Annotations:** <ul><li>Repository Slug</li></ul> |
| **Considerations** | Supports multiple Harbor instances. Both single instance and multi-instance configurations are supported. |
| **Supported Environments** | ☒ Private Network via Broker <br /> ☒ Internet Accessible via IP Whitelist <br /> ☒ Cloud Hosted |

## Harbor Entity Configuration

### Step 1: Add the Harbor Tab and Widget

The Harbor plugin is available as both a tab and widget on entity pages in Roadie. Contact your Roadie administrator to enable this plugin if it's not already available.

### Step 2: Annotate your entities

Add the following annotation to entities to link Harbor repositories to the entity:

```yaml
metadata:
  annotations:
    goharbor.io/repository-slug: [PROJECT]/[REPOSITORY]
```

The value for `goharbor.io/repository-slug` should be in the format `project/repository` where:
- `project` is your Harbor project name
- `repository` is your repository name within that project

For example:
```yaml
metadata:
  annotations:
    goharbor.io/repository-slug: my-project/my-app
```

### Multi-instance Configuration

If you have multiple Harbor instances configured, you can specify which instance to use by including the hostname:

```yaml
metadata:
  annotations:
    # Use a specific Harbor instance
    goharbor.io/repository-slug: harbor.yourdomain.com/project/repository
```

You can also specify multiple repositories from different instances:

```yaml
metadata:
  annotations:
    # Multiple repositories from different instances
    goharbor.io/repository-slug: project/repository, harbor.yourdomain.com/project/repository
```

## Connection Configuration Steps

### Step 1: Configure Harbor Connection

Visit `https://<tenant-name>.roadie.so/administration/harbor` to configure your Harbor connection.

#### Single Instance Configuration

For a single Harbor instance, configure the following:

- **Base URL**: The URL of your Harbor instance (e.g., `https://harbor.yourdomain.com`)
- **Username**: Harbor username with appropriate permissions
- **Password**: Harbor password or access token

#### Multi-Instance Configuration

For multiple Harbor instances, you can configure additional instances with unique names. Each additional instance requires:

- **Instance Name**: A unique identifier for the Harbor instance
- **Host**: The hostname of the Harbor instance
- **Base URL**: The full URL of the Harbor instance
- **Username**: Harbor username for this instance
- **Password**: Harbor password or access token for this instance

### Step 2: Set Environment Variables (Alternative)

Alternatively, you can configure Harbor using environment variables in your app-config.yaml:

```yaml
harbor:
  # Single instance configuration
  baseUrl: https://harbor.yourdomain.com
  username: ${HARBOR_USERNAME}
  password: ${HARBOR_PASSWORD}
  
  # Multi-instance configuration
  instances:
    - host: harbor2.yourdomain.com
      baseUrl: https://harbor2.yourdomain.com
      username: ${HARBOR_USERNAME_2}
      password: ${HARBOR_PASSWORD_2}
```

### Step 3: (Optional, for brokered connections) Setup Broker client configuration

If you are accessing Harbor via a brokered connection for private networks, you need to configure the broker client. Contact your Roadie administrator for specific broker configuration requirements for Harbor.

## Features

The Harbor plugin provides the following features:

- **Image Information**: View detailed information about your container images
- **Vulnerability Scanning**: Display security scan results and vulnerabilities
- **Image Tags**: List all available tags for your repositories
- **Artifact Details**: Show artifact metadata and properties
- **Multi-Repository Support**: Display information from multiple Harbor repositories

## Troubleshooting

### Harbor information not appearing

1. Verify that the `goharbor.io/repository-slug` annotation is correctly set on your entity
2. Ensure the project and repository names match exactly with those in Harbor
3. Check that your Harbor connection configuration is correct
4. Verify that the Harbor user has appropriate permissions to access the specified project and repository

### Authentication issues

1. Confirm that the Harbor username and password are correct
2. Ensure the Harbor user has the necessary permissions (at minimum, read access to the project)
3. Check if the Harbor instance requires specific authentication methods
4. Verify that the Harbor API is accessible from Roadie

### Multi-instance configuration issues

1. Ensure each Harbor instance has a unique name in the configuration
2. Verify that the hostname in the annotation matches the configured instance host
3. Check that each instance has its own valid credentials

## References

- [Harbor Plugin Frontend on npm](https://www.npmjs.com/package/@bestsellerit/backstage-plugin-harbor)
- [Harbor Plugin Backend on npm](https://www.npmjs.com/package/@bestsellerit/backstage-plugin-harbor-backend)
- [Harbor Plugin GitHub Repository](https://github.com/container-registry/backstage-plugin-harbor)
- [Harbor Plugin Backend GitHub Repository](https://github.com/container-registry/backstage-plugin-harbor-backend)
- [Harbor Documentation](https://goharbor.io/docs/)