---
title: Tracking Dependency versions
publishedDate: '2024-01-08T15:15:00.0Z'
description: How to track and visualize the dependency versions of your software with Roadie Tech Insights
---

Tracking the dependency version is critical for ensuring your software is secure and compliant. It can be difficult to track which of your software is using a supported version, and which are using an End of Life version.

With Roadie’s Tech Insights feature, there’s an easier way. In this tutorial, we’re going to:

1. Automatically scan Components in the Backstage catalog and record which React version they’re using.
2. Visualise the distribution of React versions being used.
3. Create a check that can tell us which software is not using the supported version.

As we go through this process, you’ll learn:

1. How to create Data Sources, Checks and Scorecards with Tech Insights.
2. How to parse files with Regex in Roadie and extract facts from those files.
3. How to detect which repositories contain certain files like the package.json with Tech Insights.
4. How to use the “Satisfies semantic version” operator to do comparisons.

Let’s get started.

## Record the React version automatically

In order to track the React versions used in the catalog, we are going to create a Data Source In Roadie Tech Insights. It will be setup to run on a scheduled basis and extract the React version specified in the Package.json file.

### Package.json Data Source

1. Visit Tech Insights, select the **Data Sources** tab, and press **ADD DATA SOURCE**.

   ![a button on a web interface](./Add_Data_Source.png)

2. Enter a descriptive **Name** and **Description**.

   ![About section input fields](./Data_About_Section.png)

3. Set the Data Provider **Type** to `Component Repository File`, **Location** to `package.json`. Select a value for **Select Entity to test data source against** and press **TEST**.

    ![Data Provider section input fields](./Data_Provider_Section.png)

4. Test results are displayed.

    ![Data Provider test results displayed](./Data_Test_Results_Section.png)

5. Create multiple Facts:
    1. Set **Parser** to `JSON with JSONata syntax`.
    2. Set the first Fact to:
        | Field Name | Value |
        | --- | --- |
        | Fact Name | React version |
        | JSONata query | $exists(resolutions."@types/react") ? resolutions."@types/react" : $exists(dependencies.react) ? dependencies.react : "" |
        | Type | String |

    3. Press **ADD FACT** and set the first Fact to:
        | Field Name | Value |
        | --- | --- |
        | Fact Name | Has React dependency |
        | JSONata query | $exists(resolutions."@types/react") ? $boolean(resolutions."@types/react") : $exists(dependencies.react) ? $boolean(dependencies.react) : false |
        | Type | Boolean | 

    ![Data Facts section input fields](./Data_Facts_Section.png)

6. Press **CHECK FACTS**.

    ![Data Facts results displayed](./Data_Facts_Results_Section.png)

7. Use the **Applies to** filter to target this data source at some components which you expect to have React versions. We recommend starting with a highly targeted filter for initial experimentation and iteration. You can widen the filter later to capture more results. 

    ![About Data Source section displayed](./Applies_To_Section.png)

8. Press **SAVE**.

## Visualise the distribution of React versions being used
Data Source comes with a built-in visualisation panel which lets us get an overview of the Dockerfile base image versions being used. When viewing a Data Source, expand the “Facts visualization” section to see it.

![Data Visualisation results displayed](./Data_Visualization_Section.png)

This chart tells us:

1. 17% of the Components that this Data Source targets are using version `17.0.59`.
2. 17% are using version `15.4.0`.
3. 67% of Components do not have a React version at all. This is the **Empty Results** section.

In the next section, we will create a Check which can show a pass or fail result to app dev teams to tell them if they need to upgrade their React version.

## Create a check that shows which software is not using a supported React version

We have a data source telling us what React version is present in our repositories, but is also including non-React components. Let's omit the non-React components from the results by creating a check.

### Create a check

The builtin "Repository Files Data Source" gives us all the file paths of a component's repository. We can use this to determine which components are using React. We can also now extract the React version from those files.

Let’s write a check to combine both of these properties.

1. Visit Tech Insights, select the **Checks** tab, and press **ADD CHECK**.

    ![Add Check button](./Add_Check.png)

2. Enter a descriptive **Name** and **Description**.

   ![About section input fields](./Check_About_Section.png)

3. Create a compound check:
    1. Set **Type** to `Or`.
    2. Set the first condition to:
        | Field Name | Value |
        | --- | --- |
        | Data Source | GitHub repository file list |
        | Fact | List of files |
        | Fact operator | Does not contain |
        | Value | package.json |

    2. Press **+ADD CONDITION** and set the second condition to:
        | Field Name | Value |
        | --- | --- |
        | Data Source | Package JSON information |
        | Fact | React version |
        | Fact operator | Greater than semantic version |
        | Value | 16.0.0 |
    3. Press **+ADD CONDITION** and set the third condition to:
        | Field Name | Value |
        | --- | --- |
        | Data Source | Package JSON information |
        | Fact | Has React dependency |
        | Fact operator | Is False |

    ![Check Condition section fields](./Check_Condition_Section.png)

4. Press **DRY RUN**

5. (Optional) Add a URL to documentation outlining the steps to update the React version in the component.

    ![Check Fix section displayed](./Check_Fix_Section.png)

6. Use the **Applies to** filter to target this data source at some components which you expect to have React versions. We recommend starting with a highly targeted filter for initial experimentation and iteration. You can widen the filter later to capture more results. 

    ![About Data Source section displayed](./Applies_To_Section.png)

7. Press **SAVE**.

### Check Results

The results of this check tell us who we need to reach out to to ask for a React version upgrade.

![Check Results displayed](./Check_Results_Section.png)

- The backstage-demo component passes the check with the version `17.0.59`.
- The react-native-sample-app component fails the check with the version `15.4.0`
- The other components passes the check due to not having a React dependency.

Since we already know the owners of these components, it’s easy to reach out and ask them to upgrade their React version.