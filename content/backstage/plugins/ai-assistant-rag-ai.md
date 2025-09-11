---
humanName: AI Assistant
heading: 'Backstage AI Assistant - RAG AI Plugin'
lead: 'A RAG AI plugin to contextualize your entities, TechDocs, openAPI specs and tech insights data for LLM consumption.'
attribution:
  text: RoadieHQ
  href: https://roadie.io/
intro: |
  This plugin and its modules are a reference implementation provided for demonstration and educational purposes.
  It was orignally created to understand how retrieval-augmented generation (RAG) could be combined with Backstage
  to improve discoverability. It's not officially supported by Roadie (Roadie has much more powerful AI-powered
  discoverability tools built-in 😉).

  This plugin enables you to surface richer answers from your entities, TechDocs, OpenAPI specs, and tech insights
  data by using retrieval-augmented generation (RAG). With this plugin, your Backstage users can ask questions
  in natural language and get responses grounded in your own documentation and metadata.
  
  This plugin comprises both frontend and backend components. It can be configured
  to store and retrieve embeddings, index internal content, and connect to the large language model (LLM) 
  of your choice. Whether you use AWS Bedrock, OpenAI, or another embedding and model provider, the plugin 
  offers flexible configuration and storage backends (including PostgreSQL with the pgvector extension) so you 
  can tailor it to your environment.
  
  Below you’ll find key setup steps, configuration options, and architectural considerations to help you get 
  up and running—so you can focus on building great features rather than wrestling with infrastructure.

seo:
  # Don't forget to end with "| Roadie"
  title: 'Backstage AI Assistant - RAG AI | Roadie'
  description: |
    A RAG AI Backstage plugin to contextualize entities, TechDocs, openAPI specs and Tech Insights data for LLM consumption.

logoImage: '../../assets/logos/rag/roadie-racks-ai.webp'

coverImage: '../../assets/rag-ai-api-spec-query.webp'
coverImageAlt: 'A screenshot of the AI Assistant query window. It is showing a response from an LLM using the contextual data provided by the plugin.'

availableOnRoadie: false

# Instructions for someone who wants to use this plugin.
# languages used here must be listed in the .babelrc
gettingStarted:
  - intro: |
      This plugin can be added to any Backstage application. The frontend side of the plugin depends on the backend and expects specific configuration patterns to be done on the backend plugin side.
    language: bash
    code: 'yarn add @roadiehq/rag-ai'
  - intro: 'Add the AI Assistant query modal to the app frontend:'
    language: typescript
    code: |
      // In packages/app/src/App.tsx
      import { RagModal } from '@roadiehq/rag-ai';
    
      const App = () => (
        <AppProvider>
          <AlertDisplay />
          <OAuthRequestDialog />
          <AppRouter>
            <RagModal />
            <Root>{routes}</Root>
          </AppRouter>
        </AppProvider>
      );
  - intro: |
      Install the wanted backend packages. 
    language: bash
    code: 'yarn add @roadiehq/rag-ai-backend && yarn add @roadiehq/rag-ai-backend-retrieval-augmenter && yarn add @roadiehq/rag-ai-storage-pgvector && yarn add @roadiehq/rag-ai-backend-embeddings-aws'      
  - intro: 'Add the AI Assistant backend plugin to the backend:'
    language: typescript
    code: |
      // './plugins/ai.ts'
      import { createApiRoutes as initializeRagAiBackend } from '@roadiehq/rag-ai-backend';
      import { PluginEnvironment } from '../types';
      import { initializeBedrockEmbeddings } from '@roadiehq/rag-ai-backend-embeddings-aws';
      import { createRoadiePgVectorStore } from '@roadiehq/rag-ai-storage-pgvector';
      import { createDefaultRetrievalPipeline } from '@roadiehq/rag-ai-backend-retrieval-augmenter';
      import { Bedrock } from '@langchain/community/llms/bedrock/web';
      import { CatalogClient } from '@backstage/catalog-client';
      import { DefaultAwsCredentialsManager } from '@backstage/integration-aws-node';
    
      export default async function createPlugin({
        logger,
        database,
        discovery,
        config,
      }: PluginEnvironment) {
        const catalogApi = new CatalogClient({
          discoveryApi: discovery,
        });
    
        const vectorStore = await createRoadiePgVectorStore({ logger, database });
        const awsCredentialsManager = DefaultAwsCredentialsManager.fromConfig(config);
        const credProvider = await awsCredentialsManager.getCredentialProvider();
    
        const augmentationIndexer = await initializeBedrockEmbeddings({
          logger,
          catalogApi,
          vectorStore,
          discovery,
          config,
          options: {
            credentials: credProvider.sdkCredentialProvider,
            region: 'eu-central-1',
          },
        });
    
        const model = new Bedrock({
          maxTokens: 4096,
          model: 'anthropic.claude-instant-v1', // 'amazon.titan-text-express-v1', 'anthropic.claude-v2', 'mistral-xx'
          region: 'eu-central-1',
          credentials: credProvider.sdkCredentialProvider,
        });
    
        const ragAi = await initializeRagAiBackend({
          logger,
          augmentationIndexer,
          retrievalPipeline: createDefaultRetrievalPipeline({
            discovery,
            logger,
            vectorStore: augmentationIndexer.vectorStore,
          }),
          model,
          config,
        });
    
        return ragAi.router;
      }
  
  - intro: 'Configure AI Assistant router to expose query endpoints'
    language: typescript
    code: |
      import ai from './plugins/ai';
      // ...
      async function main() {
        // ...
        const aiEnv = useHotMemoize(module, () => createEnv('ai'));
        const apiRouter = Router();
        apiRouter.use('/rag-ai', await ai(aiEnv));
        // ...
      }
---

## Data storage

The plugin provides a vector storage option to use the Backstage PostgreSQL database with a support of `pgVector` database extension. This extension should be installable by default on most Postgres instance installation methods, including AWS RDS installations. 

## More information

The AI Assistant plugin can be used with or without embeddings information that are stored and retrieved from a PostgreSQL database. To extend the plugin to support other LLMs, it is recommended to use the provided base class `DefaultVectorAugmentationIndexer.ts` from `@roadiehq/rag-ai-backend-retrieval-augmenter` package. Note that in most cases the embeddings that are created need to be using the same models as the actual queries that are run. 

See more information about configuration and extension options from the plugin [FE GitHub repository](https://github.com/RoadieHQ/roadie-backstage-plugins/tree/main/plugins/frontend/rag-ai) and the plugin [BE GitHub repository](https://github.com/RoadieHQ/roadie-backstage-plugins/tree/main/plugins/backend/rag-ai-backend).

## Configuration options 

The plugin enables extensive configuration options to modify your prompts, embedding chunk sizes, large language model identifiers that can be used as well as the actual sources of data that is used to construct, retrieve and process for the eventual context sent to the LLM. 

See full configuration options below.

```yaml
# Roadie RAG AI configuration
ai:
  # (Optional) Supported sources to query information from using RAG. This can be used to omit unnecessary sources from being retrievable. Defaults to [catalog]
  supportedSources: ['catalog']

  # (Optional) Texts to inject to the prompts when querying the LLM. Defaults to hardcoded prompts within the codebase.
  prompts:
    # (Optional) Prefix prompt to add to the query. This prompt is always succeeded by a text blob of embeddings retrieved by the RAG engine.
    prefix: 'you are an LLM designed to do this and that... based on... Use the following documents to...'

    # Suffix prompt to add to the query. This prompt is always succeeded by text query user has input.
    suffix: 'Begin! \n Question: \n'

  storage:
    pgvector:
      # (Optional) The size of the chunk to flush when storing embeddings to the DB. Defaults to 500
      chunksize: 500

  # Embeddings engine configuration options
  embeddings:
    # Generic embeddings options
    # (Optional) The chunk size of an embedding. Determines how big or small the individual pieces of context stored alongside the vectors and sent to the LLM are. Defaults to 1000
    chunkSize: 1000

    # (Optional) The overlap between adjacent chunks of embeddings. The bigger the number, the more overlap. Defaults to 200
    chunkOverlap: 200

    # AWS Bedrock Embeddings configuration
    awsBedrock:
      # (Required) Name of the Bedrock model to use to create Embeddings.
      modelName: 'amazon.titan-embed-text-v1'

      ## AWS Bedrock uses integration-aws-node package to configure credentials. See the package README for more info.

    # OpenAI Embeddings configuration
    openai:
      # (Optional) The API key for accessing OpenAI services. Defaults to process.env.OPENAI_API_KEY
      openAIApiKey: 'sk-123...'

      # (Optional) Name of the OpenAI model to use to create Embeddings. Defaults to text-embedding-3-small
      modelName: 'text-embedding-3-small'

      # (Optional) The size of the batch to use when creating embeddings. Defaults to 512, max is 2048
      batchSize: 512

      # (Optional) The number of dimensions to generate. Defaults to use the default value from the chosen model
      embeddingsDimensions: 1536
```

<details><summary>Example minimal configuration</summary>

```yaml
aws:
  mainAccount:
    accessKeyId: ${BEDROCK_AWS_ACCESS_KEY_ID}
    secretAccessKey: ${BEDROCK_AWS_SECRET_ACCESS_KEY}

ai:
  embeddings:
    bedrock:
      modelName: 'amazon.titan-embed-text-v1'
```

</details>


## Data Flow

The plugin exposes two main paths to enable retrieval-augmented generation assisted LLM questioning. 

![data-flow-diagram.webp](../../assets/data-flow-diagram.webp)

### Indexing

The `@roadiehq/rag-ai-backend` plugin does not automatically generate Embeddings or index contexts of catalog items, instead it exposes an endpoint that allows you to configure either a periodical or event based embedding generation. This approach is taken to minimize the financial impact when calling potentially expensive third party LLM endpoints. Creating embeddings from large catalog items or TechDocs maybe produce large amounts of data and make multiple calls to generate embeddings.

The ideal option to manage embeddings creation is to make them event based. They should be triggered when new information has been added into the system.

> If you don't want to create embeddings and don't want to provide contextual information to your queries, you can configure the plugin prompt templates to not refer to embedded contextual information, thus providing you an interface to ask generic questions from configured LLMs.  

### Querying

The querying path provides a sane set of defaults to enable initial RAG querying with a backing vector database and a similarity search based on the vector embeddings. The functionality can be extended to provide other data sources like knowledge graphs or plain text search functionality. The processing of the retrieved augmentation data can be enhanced, reranked, filtered and modified using post processor that can provide more accurate information related to the queries users are asking.

![question-flow.webp](../../assets/question-flow.webp)
