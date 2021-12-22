---
title: Roadie's response to recent log4j vulnerabilities
date: '2021-12-22T16:00:00.0Z'
description: Roadie is not impacted by the log4j vulnerabilities, CVE-2021-44228 or CVE-2021-45046, also known as log4shell.
author:
  name: David Tuite
  avatar: '../../assets/team/david-tuite.jpg'
tags: ['security']
---

**Roadie is not impacted by the log4j vulnerabilities, [CVE-2021-44228](https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2021-44228) or [CVE-2021-45046](https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2021-45046), also known as log4shell.**

On December 9th, 2021 [CVE-2021-44228](https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2021-44228) was announced, impacting versions 2.x of log4j (also known as log4j2). This issue was believed to be fixed in log4j 2.15.0, however on December 14th, 2021 [CVE-2021-45046](https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2021-45046) was announced, and log4j 2.16.0 was released, fixing the additional exploitation vectors.

Roadie is written in TypeScript and JavaScript and therefore does not make use of the Java logging library, log4j or the Java Virtual Machine. There is one component in our stack, PlantUML, which is written in Java, but it [does not make use of log4j](https://forum.plantuml.net/15151/is-plantuml-affected-by-log4j-security-vulnerability).

## SaaS

Roadie’s SaaS platform was not impacted by the log4j vulnerabilities. As a TypeScript application, we do not make use of log4j directly. While thoroughly examining our cloud environment, we determined that we are not running any impacted software in a way that is publicly available. 

We have taken the following steps to ensure our infrastructure is not vulnerable:

1. Audited our cloud environment to ensure we are not running log4j in any application code directly.
2. Upgraded all AWS EC2 Node Groups to the latest AMI version provided by Amazon.
3. Audited our sub-processors to ensure they are taking steps to mitigate the vulnerability in their own software stacks.

Links to sub-processor responses:

1. [AWS](https://aws.amazon.com/blogs/security/using-aws-security-services-to-protect-against-detect-and-respond-to-the-log4j-vulnerability/) - upgrades applied
2. [Auth0](https://auth0.com/blog/auth0s-response-to-log4j/) - not vulnerable
3. [Google Analytics](https://security.googleblog.com/2021/12/apache-log4j-vulnerability.html) - not vulnerable
4. [Functional Software](https://blog.sentry.io/2021/12/15/sentrys-response-to-log4j-vulnerability-cve-2021-44228) - not vulnerable
5. [Amplitude](https://amplitude.com/blog/log4j-vulnerability) - upgrades applied
6. [Intercom](https://www.intercomstatus.com/) - upgrades applied

## Open Source

Roadie’s OSS code is not impacted by the log4j vulnerabilities. As TypeScript applications, our Open Source code does not make use of log4j directly.
