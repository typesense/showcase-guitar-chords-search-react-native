import TypesenseInstantSearchAdapter from 'typesense-instantsearch-adapter';

export const typesenseInstantsearchAdapter = new TypesenseInstantSearchAdapter({
  server: {
    apiKey: process.env.EXPO_PUBLIC_TYPESENSE_SEARCH_ONLY_API_KEY,
    nodes: [
      {
        host: process.env.EXPO_PUBLIC_TYPESENSE_HOST,
        port: parseInt(process.env.EXPO_PUBLIC_TYPESENSE_PORT),
        protocol: process.env.EXPO_PUBLIC_TYPESENSE_PROTOCOL,
      },
    ],
  },
  additionalSearchParameters: {
    query_by: 'key,suffix',
    num_typos: 0,
  },
});
