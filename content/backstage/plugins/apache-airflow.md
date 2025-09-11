---
humanName: Apache Airflow
heading: 'Backstage Apache Airflow Plugin'
lead: 'See Apache Airflow DAGs in Backstage'
npmjsUrl: https://www.npmjs.com/package/@backstage-community/plugin-apache-airflow
attribution:
  text: Spotify
  href: https://spotify.com

seo:
  title: 'Backstage Apache Airflow Plugin | Roadie'
  description: |
    The Apache Airflow Backstage plugin is as frontend to the REST API exposed by Apache Airflow. It show
    Apache Airflow's information inside Backstage.

logoImage: '../../assets/logos/apache-airflow/apache-airflow-logo.webp'

coverImage: '../../assets/apache-airflow-plugin.pmg'
coverImageAlt: 'A list of DAGs in a table along with instance versioning and status.'

availableOnRoadie: true
roadieDocsPath: /integrations/apache-airflow/

gettingStarted:
  # What will this step accomplish?
  - intro: Install the plugin
    language: bash
    code: yarn add @backstage/plugin-apache-airflow

  - intro: Import it into your Backstage application
    language: typescript
    code: |
      // packages/app/src/App.tsx
      import { ApacheAirflowPage } from '@backstage/plugin-apache-airflow';

  - intro: 'Add the plugin page as a route'
    language: typescript
    code: |
      // packages/app/src/App.tsx
          ...
          <Route path="/settings" element={<UserSettingsPage />} />
      +    <Route path="/apache-airflow" element={<ApacheAirflowPage />} />
      </FlatRoutes>
      
  - intro: 'Or, if you want, embed the DAGs into an existing page'
    language: typescript
    code: |
        import { ApacheAirflowDagTable } from '@backstage/plugin-apache-airflow';

        export function SomeEntityPage(): JSX.Element {
        return (
            <Grid item md={6} xs={12}>
            <ApacheAirflowDagTable
                dagIds={[
                'example_bash_operator',
                'example_branch_datetime_operator_2',
                'example_branch_labels',
                ]}
            />
            </Grid>
        );
        }

  - intro: 'Add proxy configuration'
    language: yaml
    code: |
      # app-config.yaml
      proxy:
        '/airflow':
            target: https://your.airflow.instance.com/api/v1
            headers:
                Authorization: Basic ${APACHE_AIRFLOW_BASIC_AUTH_TOKEN}

  - intro: 'Get and provide a APACHE_AIRFLOW_BASIC_AUTH_TOKEN as an environment variable. Where the basic authorization token is the base64 encoding of the username and password of your instance.'
    language: bash
    code: |
        echo -n "airflow:airflow" | base64 -w0

---
