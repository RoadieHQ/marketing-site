---
title: Custom docker images for Roadie Local
publishedDate: '2025-05-29T16:00:00.0Z'
description: Run Roadie Local without access to Elastic Container Registry.
---

If you're in an environment that cannot access our AWS ECR repository (internal networks,
air-gapped environments etc.), you can host the Roadie images in your own container registry.

This is also useful in cases where you need to upload Roadie images to a container scanning
service before they can be run in production.

### Step 1: Pull the images

First, pull the required images using the CLI:

```bash
export ROADIE_LICENSE=<license_key>
./roadie-local images pull
```

### Step 2: Retag and push to your registry

Re-tag the pulled images and push them to your registry:

```bash
# Example for retagging and pushing (replace with your registry URL)
docker tag 131774410247.dkr.ecr.eu-west-1.amazonaws.com/backstage-frontend-local:20250430083237 your-registry.example.com/backstage-frontend-local:20250430083237
docker push your-registry.example.com/backstage-frontend-local:20250430083237

# Repeat for all required images
```

### Step 3: Use environment variables to specify your images

When running Roadie Local, set environment variables to use your images:

```bash
export FRONTEND_IMAGE=your-registry.example.com/backstage-frontend-local
export BACKEND_IMAGE=your-registry.example.com/backstage-backend-local
export AUTH_IMAGE=your-registry.example.com/roadie-keycloak-local
export VOUCH_IMAGE=your-registry.example.com/roadie-vouch-local
export POSTGRES_IMAGE=postgres:14-alpine

# Start Roadie using your images (license check is bypassed when FRONTEND_IMAGE and BACKEND_IMAGE are set)
./roadie-local start --skipLicenseCheck
```