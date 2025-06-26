---
title: Roadie Local
publishedDate: '2025-05-29T16:00:00.0Z'
description: How to run Roadie locally
---

## Prerequisites

1. You must have the `roadie-local` minimum 0.1.1 CLI installed.
2. Ensure your docker compose version is at least `2.23.1`. If not, please update to the latest version [using the official docs](https://docs.docker.com/compose/).


## Getting Started


1. Initialize the environment and enter your license key

```bash
./roadie-local start
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
