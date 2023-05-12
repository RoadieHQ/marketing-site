---
title: Checks
publishedDate: '2022-11-15'
description: Managing Checks.
---

## Introduction

A Check is a rule which a service either does or does not satisfy. Checks are defined by evaluating a Fact from a Data Source against a logical operation, such as checking if services have less than 4 Low Severity Issues from Snyk.

To manage Checks, go to Tech Insights → Checks page. In this page you can view and edit or duplicate existing Checks, as well as adding a new one.

![Overview of all checks](./checks-overview-page.png)

Clicking a specific Check title will show you details and results of the Check for all components. Please not that if you select a wider scope of components in entity filter when creating a check, than the scope for Data Source which Check is based on, you will be seeing components without any result as well. In these cases default value will be taken into consideration and result of the check will be calculated based on those.

![Check result](./check-result.png)