---
title: Checks
publishedDate: '2022-11-15'
description: Managing Checks.
---

## Defining **Checks**

A Check is a rule which a service either does or does not satisfy. Checks are defined by evaluating a Fact from a Data Source against a logical operation, such as checking if services have less than 4 Low Severity Issues from Snyk.

To manage Checks, go do Tech Insights → Checks page. In this page you can view and edit existing ones, as well as adding new Checks.

![                                                                   Overview of all checks ](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/c488a7d4-88e8-4095-ac65-acb4f16c23a1/Screenshot_2022-11-07_at_22.44.10.png)

                                                                   Overview of all checks

![                                                                              Edit check](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/e892419b-c84a-4fe8-aef0-3545f2f6011b/Screenshot_2022-11-08_at_09.45.20.png)

                                                                              Edit check

Clicking a specific Check title will show you the results check results for all components.

![Screenshot 2022-11-07 at 22.45.39.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/3f9dd83a-6d07-4a04-b339-96ceb6c8ef4d/Screenshot_2022-11-07_at_22.45.39.png)

### Adding a new check

After navigating to Tech Insights→ Checks page and clicking ‘Add check’ button, you’ll be asked to describe your Check as below:

![Screenshot 2022-11-07 at 23.01.57.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/151dc907-b79e-49d2-a57e-41781dfab411/Screenshot_2022-11-07_at_23.01.57.png)

1 - After filling in the Name and Description, select the Data Source that you want to use for this Check.

2 - Select the Fact that you want to use. Note that the list of Facts come from the selected Data Source.

3 - Select a Fact operator and specify a target value. Json-rules-engine supports a limited [number of built-in operators](https://github.com/CacheControl/json-rules-engine/blob/master/docs/rules.md#operators) that can be used in conditions.

Checks are constructed using `[json-rules-engine` compatible JSON rules](https://github.com/CacheControl/json-rules-engine/blob/master/docs/rules.md#conditions) so you will make sure facts, operators and value align to those rules .

4 - You can try out your Check with the Dry Run button.

![Screenshot 2022-11-07 at 23.02.21.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/88f0c2b8-ea7d-484a-87bc-818b72941ed5/Screenshot_2022-11-07_at_23.02.21.png)

After you have added the check, make sure to refresh check results so it is taken into calculation from that moment on.
