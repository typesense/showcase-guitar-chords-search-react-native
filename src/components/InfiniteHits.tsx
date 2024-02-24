import React from 'react';
import { StyleSheet, View, FlatList, Button } from 'react-native';
import { useInfiniteHits } from 'react-instantsearch-core';
import STYLE_VARIABLES from '@/utils/STYLE_VARIABLES';

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
        <Button
          onPress={() => showMore()}
          title='Show more'
          color={STYLE_VARIABLES.__btnBg}
        />
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
