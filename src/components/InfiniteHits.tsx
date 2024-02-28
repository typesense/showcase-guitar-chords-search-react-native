import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import Button from './Button';
import { useInfiniteHits } from 'react-instantsearch-core';

export function InfiniteHits({ hitComponent: Hit, ...props }) {
  const { hits, isLastPage, showMore } = useInfiniteHits({
    ...props,
    escapeHTML: false,
  });

  return (
    <>
      <FlatList
        style={s.infiniteList}
        scrollEnabled={false}
        numColumns={2}
        data={hits}
        keyExtractor={(item) => item.objectID}
        renderItem={({ item }) => (
          <View style={s.item}>
            <Hit hit={item} />
          </View>
        )}
      />
      {!isLastPage && hits.length !== 0 && (
        <>
          <Button onPress={() => showMore()} title='Show more' />
        </>
      )}
    </>
  );
}

const s = StyleSheet.create({
  infiniteList: {
    width: '100%',
  },
  item: {
    flex: 0.5,
    gap: 16,
    alignItems: 'center',
  },
});
