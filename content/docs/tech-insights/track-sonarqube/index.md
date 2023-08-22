---
title: Track On-prem Sonarqube metrics
publishedDate: '2023-08-04T15:15:00.0Z'
description: How to track and visualize a Sonarqube metrics with Roadie
---

One of the most advantageous steps a platform team can take to support application developers (app devs) is to offer them a reliable and secure platform for enhancing code quality. This is often achieved by incorporating SonarCloud into the development process, enabling teams to identify and rectify code-related issues effectively.

By tracking issues and hotspots reported by Sonarqube across your organization allows you to highlight and to proactively address potential pitfalls, enhance code integrity, and bolster application security. This practice not only fosters a culture of continuous improvement but also ensures that software projects evolve with a heightened focus on robustness and reliability.

With Roadie’s Tech Insights feature, you can monitor issues and hotspots right within your software catalog:

1. Automatically scan Components in the Backstage catalog and record the number of issues and hotspots reported by Sonarqube
2. Visualise the projects which are doing well, and also the worst offenders.
3. Create a check that can tell us which software is not adhering to standards set by the organization.

As we go through this process, you’ll learn:

1. How to configure a component in Roadie with its Sonarqube project key
2. How to configure and run the Roadie Sonarqube broker application to connect Sonarqube with Roadie
4. How to create an HTTP Datasource to collect data from Sonarqube
5. How to create a Check with Tech Insights
6. How to create a Scorecard that brings together the Checks with have created in this tutorial

Let’s get started.

## Configure a Component with its Sonarqube project key

1. First identify the project key for the catalog Component.
You can find this in the Sonarqube dashboard. Find the project, click Administration -> Update key and copy the "Project Key"
2. Next edit the catalog YAML file for the Component 
The easiest way to do this is to find the component in the Roadie catalog and click the edit pencil in the top right hand side of the About Card.
3. Edit and save the YAML file to include the `sonarqube.org/project-key` annotation.
e.g.
```yaml
---
apiVersion: backstage.io/v1alpha1
kind: Component
metadata:
  name: test-react-app
  annotations:
    sonarqube.org/project-key: punkle_test-react-app
```

## How to configure and run the Roadie Sonarqube broker application to connect Sonarqube with Roadie

1. First generate a new token in the Sonarqube dashboard
Click on your profile in the top right of the application, click My Account. Then click Security. Enter a token name and click "Generate Token". Copy the token value.
2. Run the Roadie broker client application to connect Sonarqube with backstage.
```shell
docker run \
  --env SONARQUBE_INSTANCE_URL=https://<sonarqube_address> \
  --env BROKER_TOKEN=sonarqube \
  --env BROKER_SERVER_URL=https://<tenant_name>.broker.roadie.so \
  --env SONARQUBE_TOKEN=<sonarqube_token> \
  roadiehq/broker:5691884253.43.1-sonarqube
```
3. Determine the IP address from where the broker client is running and set this IP in the broker allow list in Roadie.
You can determine the IP address locally by running the following command. This command assumes you are running the docker container locally. When you production
```bash
curl 'https://api.ipify.org'
```
4. To set the IP allow list go to Administration > Settings > Broker enter the IP address and subnet mask using CIDR notation.
5. Confirm that the broker client by looking at the docker container logs. You should see the following text:
```text
successfully established a websocket connection to the broker server
```

## Create an HTTP Data Source to collect data from Sonarqube

1. Within Roadie, click on Tech Insights -> Data Sources and click "Add Datasource"
2. Set the name to "Sonarqube", and set the description if you prefer.
3. Select the HTTP Data Provider, then select the proxy we created earlier.
4. In the Path Extension enter `sonarqube/api/measures/component?component={{metadata.annotations["sonarqube.org/project-key"]}}&metricKeys=bugs,security_rating,duplicated_lines_density,security_hotspots`
5. Next select an entity that you know has been configured with the Sonarcloud annotation so that we can test the data extraction in the next step.
6. Click view. You should see the result of a successful HTTP response from Sonarqube.
7. Next you can select the fields to extract from the API.
In the Field extraction section select the "JSON with JSONata syntax" extractor. Then enter "bugs" as the fact name, `$.component.measures[metric = "bugs"].value` as the JSONata query, and select "Integer" type. Add a second fact by clicking "Add Fact", enter "security_hotspots", `$.component.measures[metric = "security_hotspots"].value` and select "Integer" again.
8. Test the Data Source fact extraction by clicking "Check Facts". You should see something like the following.
![field-extraction.png](field-extraction.png)

9. In the Applies to selection, set the "Has Annotation" field to "sonarqube.org/project-key"
10. Click Save.
11. In the Data Source page, click "Actions" and "Run" to trigger an initial run of the Data Source

## Create checks with the data from the Sonarcloud Data Sources

1. Go to the Checks tab in tech insights and click "Add Check"
2. Enter the name "No Sonarqube Bugs"
3. Select the "Sonarqube" Data Source and the "bugs" fact.
4. Select the "Less than" operator and enter the value "1".
5. Click "Dry run"
6. Select the component you configured in the earlier step.
7. You should see it's check result.
8. In the Applies to selection, set the "Has Annotation" field to "sonarqube.org/project-key"
9. Click Save
10. Create another check for "Security Hotspots"

## Create a Data Source to check the presence of the Entity metadata

1. Go to the Checks tab in tech insights and click "Add Check"
2. Enter the name "Has Sonarcloud Annotation"
3. Select the "Entity Metadata" Data Source and the "Annotation Keys" fact
4. Use the contains operator and "sonarqube.org/project-key" as the value.
![Annotation Check](annotation-check.png)
5. Select the list of "Applies to" filter to match the list of entities you want to comply with your Sonarcloud checks.
6. Click Save and then "Reload Check Data"

## Create a Scorecard to check the quality of your check compliance across your organization

1. In Tech Insights click Scorecards and "Add Scorecard"
2. Name the scorecard "Sonarqube Compliance"
3. Add the checks we created earlier
4. In the "Applies to" filter, select the items that you want to comply to this Scorecard
5. Select an owner and optionally an Executive sponsor
6. Click Save.
7. In the Scorecard that appears, click the three dots under "Actions" and click "Refresh Scorecard Results"

## Add the Scorecard to the entity page

1. In Tech Insights, click Scorecards, and click the three dots below "Actions" and click "Add to catalog"
2. Select "Type: service, Layout title: Overview" to add it to the Overview tab for every service in the catalog.
3. Click "Add to entity page"
4. Navigate to the entity we configured with the Sonarqube annotation earlier.
5. You should see the Scorecard on the page.
