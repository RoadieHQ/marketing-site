---
title: Creating a Scorecard for Test Coverage Reporting
publishedDate: '2024-07-01T15:15:00.0Z'
description: How to create a scorecard to report on test coverage
---

TODO: Add intro.

With Roadie’s Tech Insights feature, there’s an easier way. In this tutorial, we’re going to:

1. Automatically scan Components in the Backstage catalog and record which components have Codecov activated, active, and their % of coverage.
1. Create a check that can tell us which software is active and activated.
1. Create a check that can tell us which software is meeting minimum code coverage threshold of 30%.

As we go through this process, you’ll learn:

1. How to create Data Sources, Checks and Scorecards with Tech Insights.
2. How to parse files with JSONata in Roadie and extract facts from the Codecov `Repository Detail` API endpoint.
3. How to detect which catalog entities have code coverage active, activated, and their coverage %.

Let’s get started.

## Record the Codecov Reposotory Coverage

TODO: Add sentence explaining what is happening.

### Data Source

1. Visit Tech Insights, select the **Data Sources** tab, and press **ADD DATA SOURCE**.

   ![a button on a web interface](./Add_Data_Source.png)

2. Enter a descriptive **Name** and **Description**.

   ![About section input fields](./Data_About_Section.png)

3. Set the Data Provider **Type** to `HTTP`, **Proxy** to `/codecov`, **Path Extension** to `github/{{ metadata.annotations['github.com/owner'] }}/repos/{{ metadata.annotations['github.com/repo'] }}`, and **HTTP Method** to `GET`.

    Select a value for **Select Entity to test data source against** and press **TEST**.

    ![Data Provider section input fields](./Data_Provider_Section.png)

4. Test results are displayed.

    ![Data Provider test results displayed](./Data_Test_Results_Section.png)

5. Create multiple Facts:
    1. Set **Extractor** to `JSON with JSONata syntax`.
    2. Set the first Fact to:
        | Field Name | Value |
        | --- | --- |
        | Fact Name | Coverage |
        | JSONata query | `$.totals.coverage` |
        | Type | Number |
    3. Set the second Fact to:
        | Field Name | Value |
        | --- | --- |
        | Fact Name | Active |
        | JSONata query | `$.active` |
        | Type | Boolean |
    4. Set the third Fact to:
        | Field Name | Value |
        | --- | --- |
        | Fact Name | Activated |
        | JSONata query | `$.activated` |
        | Type | Boolean |

    ![Data Facts section input fields](./Data_Facts_Section.png)

6. Press **CHECK FACTS**.

    ![Data Facts results displayed](./Data_Facts_Results_Section.png)

7. Use the **Applies to** filter to target this data source at some components which you expect to have Node.js. We recommend starting with a highly targeted filter for initial experimentation and iteration. You can widen the filter later to capture more results.  

    ![About Data Source section displayed](./Applies_To_Section.png)

8. Press **SAVE**.

## Create a Check that Shows Code Coverage is Defined

We have a data source providing Active and Activated, let's create a check to report which entities are defined.

### Create a Check

1. Visit Tech Insights, select the **Checks** tab, and press **ADD CHECK**.

    ![Add Check button](./Add_Check.png)

2. Enter a descriptive **Name** and **Description**.

   ![About section input fields](./Defined_Check_About_Section.png)

3. Create a check:
    1. Set the first condition to:
        | Field Name | Value |
        | --- | --- |
        | Data Source | Codecov Repository Coverage |
        | Fact | Active |
        | Fact operator | Is True |
    1. Set the second condition to:
        | Field Name | Value |
        | --- | --- |
        | Data Source | Codecov Repository Coverage |
        | Fact | Activated |
        | Fact operator | Is True |

    ![Check Condition section fields](./Defined_Check_Conditions_Section.png)

4. Press **DRY RUN**

5. (Optional) Add a URL to documentation outlining the steps to resolve the Codecov configuration.

    ![Check Fix section displayed](./Check_Fix_Section.png)

6. Use the **Applies to** filter to target this data source at some components which you expect to have Code Coverage configured. We recommend starting with a highly targeted filter for initial experimentation and iteration. You can widen the filter later to capture more results. 

    ![About Data Source section displayed](./Applies_To_Section.png)

7. Press **SAVE**.

### Check Results

The results of this check tell us who we need to reach out to ensure Codecov is configured.

![Check Results displayed](./Defined_Check_Results_Section.png)

- The `csharp-console-teleprompter` service fails the checks.

Since we already know the owners of these components, it’s easy to reach out and ask them to configure Codecov for their catalog entity.


## Create a Check that shows Minimum Code Coverage Threshold is Met

We have a data source telling us what the coverage is, let's create a check to ensure minimum coverage is met.

### Create a Check

1. Visit Tech Insights, select the **Checks** tab, and press **ADD CHECK**.

    ![Add Check button](./Add_Check.png)

2. Enter a descriptive **Name** and **Description**.

   ![About section input fields](./Coverage_Check_About_Section.png)

3. Create a check:
    1. Set the first condition to:
        | Field Name | Value |
        | --- | --- |
        | Data Source | Codecov Repository Coverage |
        | Fact | Coverage |
        | Fact operator | Greater than inclusive |
        | Value | 30 |

    ![Check Condition section fields](./Coverage_Check_Conditions_Section.png)

4. Press **DRY RUN**

5. (Optional) Add a URL to documentation outlining the steps to resolve the Codecov configuration.

    ![Check Fix section displayed](./Check_Fix_Section.png)

6. Use the **Applies to** filter to target this data source at some components which you expect to have Code Coverage configured. We recommend starting with a highly targeted filter for initial experimentation and iteration. You can widen the filter later to capture more results. 

    ![About Data Source section displayed](./Applies_To_Section.png)

7. Press **SAVE**.

### Check Results

The results of this check tell us who we need to reach out to ensure Codecov is configured.

![Check Results displayed](./Coverage_Check_Results_Section.png)

- The `csharp-console-teleprompter` service fails the checks.

Since we already know the owners of these components, it’s easy to reach out and ask them to configure Codecov for their catalog entity.