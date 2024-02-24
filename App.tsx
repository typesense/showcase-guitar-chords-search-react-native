import { typesenseInstantsearchAdapter } from '@/utils/typesense';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, ScrollView, View } from 'react-native';
import { Configure, InstantSearch } from 'react-instantsearch-core';
import { InfiniteHits } from '@/components/InfiniteHits';
import HitItem from './src/components/HitItem';
import Heading from '@/components/Heading';
import Filters from '@/components/Filters/Filters';
import { useState } from 'react';
import useStyleUnit from '@/hooks/useStyleUnit';
import GithubLink from '@/components/GithubLink';

export default function App() {
  const [isModalOpen, setModalOpen] = useState(false);
  const { vw, vh } = useStyleUnit();

  const scrollToTop = () => {};

  return (
    <>
      <StatusBar style='auto' />
      <InstantSearch
        searchClient={typesenseInstantsearchAdapter.searchClient}
        indexName='guitar-chords'
        future={{ preserveSharedStateOnUnmount: true }}
      >
        <Configure hitsPerPage={12} />
        <ScrollView>
          <View
            style={{
              ...s.app,
              paddingHorizontal: vw(4),
              paddingVertical: vh(8),
            }}
          >
            <Heading />
            <InfiniteHits hitComponent={HitItem} />
          </View>
        </ScrollView>
        <GithubLink />
        <Filters
          isModalOpen={isModalOpen}
          onToggleModal={() => setModalOpen((isOpen) => !isOpen)}
          onChange={scrollToTop}
        />
      </InstantSearch>
    </>
  );
}

const s = StyleSheet.create({
  app: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  h1: {
    fontSize: 32,
    fontWeight: 'bold',
  },
});
