---
title: Allowlisting Roadie Traffic
publishedDate: '2022-03-25T08:33:00.0Z'
description: In order to access Roadie, your IT department may need to allowlist certain IPs and hostnames.
---

## Introduction

Some IT departments block incoming or outgoing TCP traffic. This may prevent Roadie working correctly.
To allow all traffic to and from Roadie, please ask your IT departments to allowlist the following IP addresses and hostnames.

## IP Addresses

In order for Roadie to access your infrastructure, perhaps for custom plugin support, you may need to allowlist our IPs.

All Roadie traffic comes from the following IPs:

```
54.228.140.202
18.203.19.58
34.248.243.70
```

## Email Servers

From time to time the Roadie application may email individual users or administrators. Each email will have the following headers.

```
from:      info@t.roadie.io
mailed-by: eu-west-1.amazonses.com
signed-by: t.roadie.io
```

Our support team may also communicate with Roadie users via the Intercom application. These emails have the following headers:

```
from:      <roadie employee name>@roadie.intercom-mail.eu
mailed-by: rp.roadie.intercom-mail.eu
signed-by: roadie.intercom-mail.eu
```

## Hostnames

If your IT department requires an allow list of domains, please use the following:

```
auth.roadie.io
<yourtenant>.roadie.so
<yourtenant>.vouch.roadie.so
<tenant-name>.broker.roadie.so
*.roadie.systems
```

We recommend also allowing the following domains so that your users will be able to contact
us for support:

```
*.intercomcdn.com
*.intercom.io
*.intercom.com
```

# Custom Scaffolder Actions

If you are running custom scaffolder actions within your infrastructure action will need to have access to the following URL:

```
roadie-scaffolder-shared-workspace.s3.eu-west-1.amazonaws.com
```
