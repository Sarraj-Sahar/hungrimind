import { algoliasearch } from 'algoliasearch';

// Instantiate the client
const client = algoliasearch('<YOUR_APP_ID>', '<YOUR_API_KEY>');

// Add a new record to your Algolia index
const { taskID } = await client.saveObject({
  indexName: '<YOUR_INDEX_NAME>',
  body: {
    title: 'My Algolia Object',
  },
});

// Poll the task status to know when it has been indexed
await client.waitForTask({ indexName: '<YOUR_INDEX_NAME>', taskID });

// Fetch search results
const { results } = await client.search({
  requests: [
    {
      indexName: '<YOUR_INDEX_NAME>',
      // You can make typos, we handle it
      query: 'my aloglia ojbect',
      hitsPerPage: 50,
    },
  ],
});

console.log('[Results]', results);