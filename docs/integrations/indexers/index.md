# GraphQL Data Sources and Indexers

Blockchain developers are often faced with the challenge of obtaining data from various API and data sources. Traditional methods may involve directly interacting with each parachain's API, which can be time-consuming and complex. However, leveraging GraphQL data sources simplifies this process, enabling developers to fetch data from multiple sources seamlessly.

Feel free to use these existing GraphQL endpoints provided for the following parachains:

1. [Astar](https://astar.explorer.subsquid.io/graphql)
2. [Shiden](https://shiden.explorer.subsquid.io/graphql)
3. [Shibuya](https://shibuya.explorer.subsquid.io/graphql)

## What is GraphQL?

GraphQL is a query language for APIs and a runtime for executing those queries with your existing data. It provides an efficient and powerful alternative to REST and offers significant advantages when dealing with complex data models.

GraphQL allows clients to define the structure of the responses they receive. This means that instead of receiving a fixed data structure from a server, clients can request specific data they need, leading to more efficient data loading and a reduction in data over-fetching.

## Why Use GraphQL for Parachain Data?

Parachains in the Astar ecosystem often provide vast amounts of data. However, accessing and manipulating this data using traditional REST APIs can be challenging, particularly when you need to combine data from different parachains.

Using GraphQL, you can retrieve specific data from multiple parachains using a similar query, allowing for efficient data retrieval and manipulation. GraphQL APIs for these parachains provide a unified interface to interact with the chains, irrespective of the individual data structures used by each parachain.

## How to Query Data from Parachains using GraphQL

Below is a simple example of how to fetch data from a parachain using GraphQL. We will use a GraphQL client, such as Apollo Client or urql, to execute the query.

```javascript
import { ApolloClient, InMemoryCache, gql } from '@apollo/client';

// Replace with the GraphQL endpoint of the parachain you want to interact with
const client = new ApolloClient({
  uri: 'https://astar.explorer.subsquid.io/graphql',
  cache: new InMemoryCache()
});

client.query({
  query: gql`
    query GetParachainData {
      // Your query here
    }
  `
}).then(response => console.log(response.data))
  .catch(error => console.error(error));
```

Replace the `query GetParachainData` section with the actual GraphQL query you want to execute. The returned data will be in the structure you define in the query.

GraphQL provides a powerful tool for developers in the Astar ecosystem. By using GraphQL data sources, you can efficiently fetch and manipulate data from multiple parachains, simplifying data retrieval and potentially improving the performance of your applications.

Remember, each parachain may expose different data and operations in their GraphQL API. Always refer to the respective API Explorer to understand the data and operations available.

## Custom Indexing

Take a look at these for your own custom GraphQL indexing needs:

```mdx-code-block
import DocCardList from '@theme/DocCardList';
import {useCurrentSidebarCategory} from '@docusaurus/theme-common';

<DocCardList items={useCurrentSidebarCategory().items}/>
```
