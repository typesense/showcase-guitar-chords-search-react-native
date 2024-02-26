import TypesenseInstantSearchAdapter from 'typesense-instantsearch-adapter';
import Constants from 'expo-constants';

const {
  expoConfig: { hostUri },
} = Constants;

const localhost = hostUri.split(`:`).shift();

export const typesenseInstantsearchAdapter = new TypesenseInstantSearchAdapter({
  server: {
    apiKey: process.env.EXPO_PUBLIC_TYPESENSE_SEARCH_ONLY_API_KEY || 'xyz',
    nodes: [
      {
        host: process.env.EXPO_PUBLIC_TYPESENSE_HOST || localhost,
        port: parseInt(process.env.EXPO_PUBLIC_TYPESENSE_PORT || '8108'),
        protocol: process.env.EXPO_PUBLIC_TYPESENSE_PROTOCOL || 'http',
      },
    ],
  },
  additionalSearchParameters: {
    query_by: 'key,suffix',
    num_typos: 0,
  },
});
