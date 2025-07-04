---
title: Roadie Local
publishedDate: '2025-05-29T16:00:00.0Z'
description: How to run Roadie locally
---

## Prerequisites

1. Ensure your docker compose version is at least `2.23.1`. If not, please update to the latest version [using the official docs](https://docs.docker.com/compose/).
2. You'll also need to make sure your Docker client version is higher than the required minimum version 28.0.4. If not, please update to the latest version [using the official docs](https://docs.docker.com/engine/install/).
3. Ensure docker is running.

## Installing

We provide 4 builds of the Roadie Local CLI. Please choose the build that best suits your system.

Linux (ARM)

```bash
curl -o roadie-local "https://roadie.io/downloads/roadie-local/roadie-local-cli-latest-linux-arm64" && chmod +x ./roadie-local
```

Linux (AMD)

```bash
curl -o roadie-local "https://roadie.io/downloads/roadie-local/roadie-local-cli-latest-linux-amd64" && chmod +x ./roadie-local
```

Mac Apple Silicon (ARM)

```bash
curl -o roadie-local "https://roadie.io/downloads/roadie-local/roadie-local-cli-latest-darwin-arm64" && chmod +x ./roadie-local
```

Mac Intel Chip

```bash
curl -o roadie-local "https://roadie.io/downloads/roadie-local/roadie-local-cli-latest-darwin-amd64" && chmod +x ./roadie-local
```

NB: For Mac users, a warning may trigger to indicate Apple cannot validate the installation for malicious software. We're working with Apple to resolve this. In the meantime, you can find a way to resolve the error here: https://support.apple.com/en-ie/guide/mac-help/mchleab3a043/mac or by using the command `xattr -d com.apple.quarantine /usr/local/bin/roadie-local `.

To test the installation, ensure this command displays help text.

```bash
./roadie-local -h
```

## Getting Started


1. Initialize the environment and enter your license key

```bash
./roadie-local init
Enter your license key: <redacted>
✔ Validating license
```

2. Run Roadie Local

The following command will start Roadie on a URL. Open the URL in your browser.

```bash
roadie-local start
✔ Validating license
✔ Starting up Roadie from ~/.roadie/versions/docker-compose-v0.4.0.yaml

Roadie is available to access at http://localhost:8080
```

3. Log in

The following users are hard-coded to get you started.

| Username   | Password |
|------------|----------|
| admin      | roadie   |
| maintainer | roadie   |
| reader     | roadie   |

4. To restart Roadie Local

```bash
./roadie-local restart
```

5. To stop Roadie Local

```bash
./roadie-local stop
```

## More command line options

### Global Command Line Options

```
Flags:
      --debug                          Enable debug output. (default: false)
  -f, --dockerComposeFilePath string   Specify a custom docker-compose file path
  -h, --help                           help for roadie-local
  -k, --license string                 Roadie license key
  -s, --skipLicenseCheck               Skip the license check.
```

#### Debugging

In addition to command-specific options, the CLI supports a global `--debug` flag, which will
print full command execution logs.

```bash
./roadie-local --debug start
```

The debug flag is especially helpful when troubleshooting deployment issues on different
environments like EC2 instances, as it shows the complete Docker Compose command execution output.

### Update the version of Roadie Local

```bash
./roadie-local version list
./roadie-local version use <version>
./roadie-local restart
```
