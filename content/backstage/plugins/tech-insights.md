---
humanName: Tech Insights
heading: 'Backstage Tech Insights Plugin'
lead: |
  Visualize, understand and optimize your team's tech health.
npmjsPackage: "@backstage-community/plugin-tech-insights"
codeLocation: "https://github.com/backstage/community-plugins/tree/main/workspaces/tech-insights"

intro: |
  The Tech Insights plugin provides a comprehensive framework for evaluating and tracking the technical health of your software components. The concept of Tech Insights was part of the original Backstage vision showcased in the first [Introduction to Backstage demo video](https://youtu.be/1XtJ5FAOjPk?si=RShCqZf1Vies756y&t=779). The open-spource version was [originally developed by Roadie](/blog/tech-insights-for-roadie-backstage/) and is now maintained as a community plugin, Tech Insights enables engineering teams to define measurable standards and automatically assess compliance across their service catalog.

  At its core, the plugin operates on two key concepts: **Facts** and **Checks**. Facts are data points about your entities collected from various sources, while Checks are rules that evaluate these facts to determine compliance with your engineering standards. This approach allows you to create automated scorecards that provide visibility into technical debt, security compliance, documentation quality, and operational readiness.

  The plugin excels in several key areas:

    * **Automated compliance tracking** - Set up rules to automatically evaluate your services against engineering best practices
    * **Technical debt visibility** - Identify components that need attention based on configurable criteria
    * **Standards enforcement** - Encourage adoption of organizational standards through transparent scoring
    * **Historical tracking** - Monitor improvements over time with built-in data retention and lifecycle management
    * **Flexible data sources** - Integrate with any external API or service to collect relevant metrics

  Whether you're tracking security vulnerabilities, documentation coverage, test automation, or custom organizational standards, Tech Insights provides the foundation for data-driven engineering excellence.

attribution:
  text: Roadie
  href: https://github.com/backstage/community-plugins

seo:
  title: 'Backstage Tech Insights Plugin | Roadie'
  description: |
    Visualize, understand and optimize your team's tech health.

logoImage: '../../assets/tech-insights/tech_insights.webp'
coverImage: '../../assets/tech-insights/tech_insights_scorecard.webp'
coverImageAlt: "Visualize, understand and optimize your team's tech health."

availableOnRoadie: true
roadieDocsPath: /tech-insights/introduction/

gettingStarted:
  - intro: 'Install the Tech Insights backend plugin'
    language: 'bash'
    code: |
        yarn --cwd packages/backend add @backstage-community/plugin-tech-insights-backend
  
  - intro: 'Install the JSON Rules Engine Fact Checker module'
    language: 'bash'
    code: |
        yarn --cwd packages/backend add @backstage-community/plugin-tech-insights-backend-module-jsonfc
        
  - intro: 'Install the frontend plugin'
    language: 'bash'
    code: |
        yarn --cwd packages/app add @backstage-community/plugin-tech-insights
  
  - intro: 'Add the backend plugin to your Backstage instance'
    language: typescript
    code: |
      // packages/backend/src/index.ts
      backend.add(import('@backstage-community/plugin-tech-insights-backend'));
      backend.add(import('@backstage-community/plugin-tech-insights-backend-module-jsonfc'));
  
  - intro: 'Configure fact retrievers in your app-config.yaml'
    language: yaml
    code: |
      techInsights:
        factRetrievers:
          entityMetadataFactRetriever:
            cadence: '*/15 * * * *'  # Every 15 minutes
            lifecycle: 
              timeToLive: { weeks: 2 }
          entityOwnershipFactRetriever:
            cadence: '0 2 * * *'     # Daily at 2 AM
            lifecycle: 
              maxItems: 10
          techdocsFactRetriever:
            cadence: '0 */6 * * *'   # Every 6 hours
            lifecycle:
              timeToLive: { days: 30 }

  - intro: 'Configure fact checker rules in your app-config.yaml'
    language: yaml
    code: |
      techInsights:
        factChecker:
          checks:
            groupOwnerCheck:
              type: json-rules-engine
              name: 'Group Owner Check'
              description: 'Verifies that a component has a group owner'
              factIds:
                - entityOwnershipFactRetriever
              rule:
                conditions:
                  all:
                    - fact: hasGroupOwner
                      operator: equal
                      value: true
            titleCheck:
              type: json-rules-engine
              name: 'Entity Title Check'
              description: 'Verifies that entities have descriptive titles'
              factIds:
                - entityMetadataFactRetriever
              rule:
                conditions:
                  all:
                    - fact: hasTitle
                      operator: equal
                      value: true
                    - fact: hasDescription
                      operator: equal
                      value: true

  - intro: 'Add the Scorecards page to entity pages'
    language: typescript
    code: |
        // packages/app/src/components/catalog/EntityPage.tsx
        import { EntityTechInsightsScorecardContent } from '@backstage-community/plugin-tech-insights';

        const serviceEntityPage = (
          <EntityLayout>
            <EntityLayout.Route path="/tech-insights" title="Scorecards">
              <EntityTechInsightsScorecardContent
                title="Tech Insights"
                description="Track your component's compliance with engineering standards"
              />
            </EntityLayout.Route>
          </EntityLayout>
        );      

  - intro: 'Add the global Scorecards page'
    language: typescript
    code: |
        // packages/app/src/App.tsx
        import { TechInsightsScorecardPage } from '@backstage-community/plugin-tech-insights';

        <Route path="/tech-insights" element={<TechInsightsScorecardPage />} />

  - intro: 'Add navigation menu item'
    language: typescript
    code: |
        // packages/app/src/components/Root/Root.tsx
        import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects';

        <SidebarItem 
          icon={EmojiObjectsIcon} 
          to="tech-insights" 
          text="Tech Insights" 
        />
---


### What are Facts and Fact Retrievers?

Facts are individual data points about entities in your Backstage catalog. A Fact Retriever is responsible for collecting and providing these facts to the Tech Insights system. The plugin comes with three built-in fact retrievers:

* **entityMetadataFactRetriever** - Extracts facts from entity metadata like title, description, and labels
* **entityOwnershipFactRetriever** - Provides ownership information including individual and group owners  
* **techdocsFactRetriever** - Collects TechDocs related information such as documentation presence

### Creating Custom Fact Retrievers

You can create custom fact retrievers to collect data from any external system. Here's an example that checks GitHub repository information:

```typescript
import { FactRetriever } from '@backstage-community/plugin-tech-insights-node';
import { CatalogClient } from '@backstage/catalog-client';

const githubFactRetriever: FactRetriever = {
  id: 'github-repository-factretriever',
  version: '1.0.0',
  entityFilter: [{ kind: 'component' }],
  schema: {
    hasReadme: {
      type: 'boolean',
      description: 'Repository has a README file',
    },
    hasLicense: {
      type: 'boolean', 
      description: 'Repository has a license file',
    },
    openIssuesCount: {
      type: 'integer',
      description: 'Number of open issues',
    },
    starCount: {
      type: 'integer',
      description: 'Number of GitHub stars',
    },
  },
  handler: async ctx => {
    const { discovery, logger } = ctx;
    const catalogClient = new CatalogClient({ discoveryApi: discovery });
    
    const entities = await catalogClient.getEntities({
      filter: [{ kind: 'component' }],
    });

    const results = await Promise.all(
      entities.items.map(async entity => {
        // Extract GitHub repo URL from annotations
        const repoUrl = entity.metadata.annotations?.['github.com/project-slug'];
        if (!repoUrl) {
          return null;
        }

        // Fetch data from GitHub API
        const repoData = await fetchGitHubRepoData(repoUrl);
        
        return {
          entity: {
            namespace: entity.metadata.namespace,
            kind: entity.kind,
            name: entity.metadata.name,
          },
          facts: {
            hasReadme: repoData.hasReadme,
            hasLicense: repoData.hasLicense,
            openIssuesCount: repoData.openIssues,
            starCount: repoData.stargazersCount,
          },
        };
      })
    );

    return results.filter(Boolean);
  },
};
```

### How do I configure Fact Checkers?

Fact Checkers evaluate facts against defined rules to determine compliance. The JSON Rules Engine Fact Checker is the most commonly used implementation, allowing you to define complex rules using JSON configuration.

#### Basic Check Configuration

```yaml
techInsights:
  factChecker:
    checks:
      repositoryQualityCheck:
        type: json-rules-engine
        name: 'Repository Quality Standards'
        description: 'Ensures repositories meet basic quality standards'
        factIds:
          - github-repository-factretriever
        rule:
          conditions:
            all:
              - fact: hasReadme
                operator: equal
                value: true
              - fact: hasLicense  
                operator: equal
                value: true
              - fact: openIssuesCount
                operator: lessThan
                value: 50
```

#### Advanced Rules with Multiple Conditions

You can create sophisticated rules using `all`, `any`, and nested conditions:

```yaml
techInsights:
  factChecker:
    checks:
      productionReadinessCheck:
        type: json-rules-engine
        name: 'Production Readiness'
        description: 'Comprehensive check for production-ready services'
        factIds:
          - entityMetadataFactRetriever
          - entityOwnershipFactRetriever
          - github-repository-factretriever
        rule:
          conditions:
            all:
              - fact: hasTitle
                operator: equal
                value: true
              - fact: hasDescription
                operator: equal
                value: true  
              - fact: hasGroupOwner
                operator: equal
                value: true
              - conditions:
                  any:
                    - fact: hasReadme
                      operator: equal
                      value: true
                    - fact: hasTechDocs
                      operator: equal
                      value: true
```

#### Available Operators

The JSON Rules Engine supports various operators for different data types:

* **Equality**: `equal`, `notEqual`
* **Numerical**: `lessThan`, `lessThanInclusive`, `greaterThan`, `greaterThanInclusive`
* **Array**: `in`, `notIn`, `contains`, `doesNotContain`
* **String**: `regex` (for pattern matching)

### How do I configure lifecycle and data retention?

Tech Insights allows you to configure data retention policies to prevent your database from being overwhelmed with historical fact data. You can configure retention based on either maximum item count or time-to-live.

#### Time-based Retention

```yaml
techInsights:
  factRetrievers:
    myFactRetriever:
      cadence: '0 */6 * * *'  # Every 6 hours
      lifecycle:
        timeToLive: { weeks: 4 }  # Keep data for 4 weeks
```

#### Item Count-based Retention

```yaml  
techInsights:
  factRetrievers:
    myFactRetriever:
      cadence: '0 2 * * *'     # Daily at 2 AM
      lifecycle:
        maxItems: 30           # Keep only the 30 most recent facts per entity
```

#### Cadence Configuration

Cadence uses cron syntax to define when fact retrieval should occur:

* `'*/15 * * * *'` - Every 15 minutes
* `'0 */6 * * *'` - Every 6 hours  
* `'0 2 * * *'` - Daily at 2 AM
* `'0 0 * * 0'` - Weekly on Sunday at midnight
* `'0 0 1 * *'` - Monthly on the 1st at midnight

### How do I create custom operators?

While the built-in operators cover most use cases, you can extend the JSON Rules Engine with custom operators for specialized logic:

```typescript
import { 
  JsonRulesEngineFactCheckerFactory 
} from '@backstage-community/plugin-tech-insights-backend-module-jsonfc';

// Custom operator to check semantic version compliance  
const customOperators = [
  {
    name: 'semverGreaterThan',
    operator: (factValue: string, jsonValue: string) => {
      return semver.gt(factValue, jsonValue);
    },
  },
  {
    name: 'isValidEmail',
    operator: (factValue: string) => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(factValue);
    },
  },
];

const factCheckerFactory = new JsonRulesEngineFactCheckerFactory({
  logger: env.logger,
  checks: [...], // your checks
  operators: customOperators,
});
```

### How do I configure additional data stores?

By default, Tech Insights uses your Backstage database to store facts. For high-volume fact collection or specialized storage requirements, you can configure additional data stores:

```typescript
import { 
  DatabaseFactRetrieverRepository,
  DatabaseFactCheckerRepository
} from '@backstage-community/plugin-tech-insights-backend';

// Custom storage implementation
class CustomFactRepository implements FactRepository {
  // Implement required methods for your storage backend
  async insertFacts(facts: Facts[]): Promise<void> {
    // Store facts in your preferred storage system
  }
  
  async getLatestFacts(entity: EntityRef, factIds: string[]): Promise<Facts> {
    // Retrieve latest facts from your storage system  
  }
  
  // ... other required methods
}

// Configure the backend to use your custom repository
const builder = buildTechInsightsContext({
  logger: env.logger,
  config: env.config,
  database: env.database,
  discovery: env.discovery,
  factRepository: new CustomFactRepository(),
  factRetrieverRepository: new CustomFactRetrieverRepository(),
});
```

### How do I retrieve and visualize fact data?

Tech Insights exposes REST APIs that allow you to query fact data for custom visualizations and reporting:

#### Retrieving Latest Facts

```bash
curl "https://your-backstage-instance/api/tech-insights/facts/latest?entity=component:default/my-service&ids[]=github-repository-factretriever"
```

#### Retrieving Historical Data

```bash  
curl "https://your-backstage-instance/api/tech-insights/facts/range?entity=component:default/my-service&ids[]=github-repository-factretriever&startDatetime=2024-01-01T00:00:00Z&endDatetime=2024-02-01T00:00:00Z"
```

#### Creating Custom Dashboards

You can build custom React components that consume this API data:

```typescript
import { techInsightsApiRef } from '@backstage-community/plugin-tech-insights';
import { useApi } from '@backstage/core-plugin-api';

export const CustomTechInsightsDashboard = () => {
  const techInsightsApi = useApi(techInsightsApiRef);
  
  const [facts, setFacts] = useState([]);
  
  useEffect(() => {
    techInsightsApi
      .getFacts('component:default/my-service', ['my-fact-retriever'])
      .then(setFacts);
  }, []);
  
  return (
    <div>
      {/* Render your custom visualization */}
    </div>
  );
};
```

### How do I create custom fact retrievers for my own data sources?

Tech Insights uses Fact Retrievers to collect data from any external system or API. The examples above show how to create custom fact retrievers, but here are some additional patterns and best practices:

#### Integrating with External APIs

```typescript
const sonarQubeFactRetriever: FactRetriever = {
  id: 'sonarqube-quality-factretriever',
  version: '1.0.0',
  entityFilter: [{ kind: 'component' }],
  schema: {
    codeSmells: { type: 'integer', description: 'Number of code smells' },
    coverage: { type: 'number', description: 'Test coverage percentage' },
    securityHotspots: { type: 'integer', description: 'Security hotspots count' },
    qualityGate: { type: 'string', description: 'Quality gate status' },
  },
  handler: async ctx => {
    const { logger } = ctx;
    const catalogClient = new CatalogClient({ discoveryApi: ctx.discovery });
    
    const entities = await catalogClient.getEntities({
      filter: [{ kind: 'component' }],
    });

    return Promise.all(entities.items.map(async entity => {
      const sonarProject = entity.metadata.annotations?.['sonarqube.org/project-key'];
      if (!sonarProject) return null;

      try {
        const metrics = await fetchSonarQubeMetrics(sonarProject);
        return {
          entity: {
            namespace: entity.metadata.namespace,
            kind: entity.kind,
            name: entity.metadata.name,
          },
          facts: {
            codeSmells: metrics.code_smells,
            coverage: parseFloat(metrics.coverage),
            securityHotspots: metrics.security_hotspots,
            qualityGate: metrics.alert_status,
          },
        };
      } catch (error) {
        logger.warn(`Failed to fetch SonarQube data for ${entity.metadata.name}: ${error}`);
        return null;
      }
    })).then(results => results.filter(Boolean));
  },
};
```

#### Error Handling and Resilience

Always implement proper error handling in your fact retrievers to ensure system stability:

```typescript
handler: async ctx => {
  const { logger } = ctx;
  const results = [];

  try {
    // Your fact collection logic
    const entities = await catalogClient.getEntities({
      filter: [{ kind: 'component' }],
    });

    for (const entity of entities.items) {
      try {
        const facts = await collectFactsForEntity(entity);
        results.push({ entity: entityRef(entity), facts });
      } catch (entityError) {
        logger.warn(`Failed to collect facts for ${entity.metadata.name}:`, entityError);
        // Continue processing other entities
      }
    }
  } catch (criticalError) {
    logger.error('Critical error in fact retriever:', criticalError);
    throw criticalError;
  }

  return results;
},
```

### How do I create non-boolean checks?

While many checks result in pass/fail (boolean) outcomes, you can create checks that evaluate to different result types by implementing custom `FactCheckerFactory` classes:

```typescript
import { FactCheckerFactory, FactChecker } from '@backstage-community/plugin-tech-insights-node';

class ScoreBasedFactCheckerFactory implements FactCheckerFactory {
  async createFactChecker(): Promise<FactChecker> {
    return {
      async runChecks(entity, facts) {
        const checks = [
          {
            id: 'code-quality-score',
            type: 'score-based',
            name: 'Code Quality Score',
            description: 'Composite score based on multiple metrics',
            result: this.calculateQualityScore(facts),
            facts,
          }
        ];
        
        return { entity, checks };
      }
    };
  }

  private calculateQualityScore(facts: any): { score: number; level: string } {
    let score = 100;
    
    // Deduct points for code smells
    score -= Math.min(facts.codeSmells * 2, 30);
    
    // Deduct points for low coverage
    if (facts.coverage < 80) {
      score -= (80 - facts.coverage);
    }
    
    // Determine quality level
    let level = 'excellent';
    if (score < 90) level = 'good';
    if (score < 70) level = 'needs-improvement';
    if (score < 50) level = 'poor';
    
    return { score, level };
  }
}
```

### Frontend Customization and Visualization Options

The Tech Insights plugin provides several visualization components that you can customize:

#### Scorecard Views

```typescript
// Badge view for compact display
<EntityTechInsightsScorecardContent 
  title="Quick Status"
  description="At-a-glance compliance status"
  checkType="badge"
/>

// Gauge view for score-based metrics  
<EntityTechInsightsScorecardContent
  title="Quality Metrics" 
  description="Detailed quality measurements"
  checkType="gauge"
/>

// Linear view for detailed breakdowns
<EntityTechInsightsScorecardContent
  title="Compliance Checklist"
  description="Complete compliance status" 
  checkType="linear"
/>
```

#### Filtering and Customization

```typescript
<EntityTechInsightsScorecardContent
  title="Security Compliance"
  description="Security-focused checks only"
  checksId="security.*"           // Regex pattern to filter checks
  showOnlyFailedChecks={true}     // Show only failing checks
  showDescription={false}         // Hide check descriptions
/>
```

### How do I manage database performance?

For production deployments with high-volume fact collection, consider these performance optimizations:

#### Database Indexing

Ensure your database has appropriate indexes for Tech Insights queries:

```sql
-- Indexes for common query patterns
CREATE INDEX idx_ti_facts_entity ON ti_facts(entity_id);
CREATE INDEX idx_ti_facts_timestamp ON ti_facts(timestamp);
CREATE INDEX idx_ti_facts_fact_retriever ON ti_facts(fact_retriever_id);
CREATE INDEX idx_ti_facts_composite ON ti_facts(entity_id, fact_retriever_id, timestamp);
```

#### Batch Processing

For fact retrievers that process many entities, consider batch processing:

```typescript
handler: async ctx => {
  const entities = await catalogClient.getEntities({
    filter: [{ kind: 'component' }],
  });

  // Process in batches of 50
  const batchSize = 50;
  const results = [];
  
  for (let i = 0; i < entities.items.length; i += batchSize) {
    const batch = entities.items.slice(i, i + batchSize);
    const batchResults = await Promise.allSettled(
      batch.map(entity => collectFactsForEntity(entity))
    );
    
    results.push(...batchResults
      .filter(result => result.status === 'fulfilled')
      .map(result => result.value)
    );
  }

  return results;
},
```

### More information

For detailed technical documentation and advanced configuration options, refer to these resources:

* [Tech Insights Backend Plugin Documentation](https://github.com/backstage/community-plugins/blob/main/workspaces/tech-insights/plugins/tech-insights-backend/README.md)
* [Tech Insights Frontend Plugin Documentation](https://github.com/backstage/community-plugins/blob/main/workspaces/tech-insights/plugins/tech-insights/README.md)
* [JSON Rules Engine Fact Checker Documentation](https://github.com/backstage/community-plugins/blob/main/workspaces/tech-insights/plugins/tech-insights-backend-module-jsonfc/README.md)
* [Tech Insights Node Utilities Documentation](https://github.com/backstage/community-plugins/blob/main/workspaces/tech-insights/plugins/tech-insights-node/README.md)
* [Community Plugins Workspace](https://github.com/backstage/community-plugins/tree/main/workspaces/tech-insights)
