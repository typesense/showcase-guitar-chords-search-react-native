import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
} from 'react-native';
import Button from '../Button';
import {
  useRefinementList,
  UseRefinementListProps,
} from 'react-instantsearch-core';
import STYLE_VARIABLES from '@/utils/STYLE_VARIABLES';

type _props = {
  onChange: () => void;
  searchable?: boolean;
};

export default function FacetList({
  onChange,
  searchable = false,
  ...props
}: _props & UseRefinementListProps) {
  const {
    items,
    refine,
    toggleShowMore,
    canToggleShowMore,
    isShowingMore,
    searchForItems,
  } = useRefinementList(props);

  return (
    <View>
      {searchable && (
        <TextInput
          style={s.facetSearch}
          spellCheck={false}
          maxLength={512}
          onChangeText={(value) => searchForItems(value)}
          placeholder='Search suffixes...'
        />
      )}
      {items.map((item) => (
        <TouchableOpacity
          key={item.value}
          style={s.item}
          onPress={() => {
            refine(item.value);
            onChange();
          }}
        >
          <Text
            style={{
              ...s.labelText,
              fontWeight: item.isRefined ? '800' : '400',
              color: item.isRefined ? STYLE_VARIABLES.__accent : '#000',
            }}
          >
            {item.label}
          </Text>
          <View style={s.itemCount}>
            <Text style={s.itemCountText}>{item.count}</Text>
          </View>
        </TouchableOpacity>
      ))}
      {canToggleShowMore && (
        <View style={s.showmoreBtn}>
          <Button
            onPress={toggleShowMore}
            title={isShowingMore ? 'Show less' : 'Show more'}
          />
        </View>
      )}
    </View>
  );
}
const s = StyleSheet.create({
  facetSearch: {
    borderWidth: 1,
    borderColor: STYLE_VARIABLES.__btnBg,
    borderRadius: 5,
    marginBottom: 20,
    paddingVertical: 4,
    paddingHorizontal: 10,
    minHeight: 38,
  },
  title: {
    alignItems: 'center',
  },
  titleText: {
    fontSize: 32,
  },
  item: {
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderColor: '#ececec',
    alignItems: 'center',
  },
  itemCount: {
    backgroundColor: '#252b33',
    borderRadius: 24,
    paddingVertical: 4,
    paddingHorizontal: 8,
    marginLeft: 4,
  },
  itemCountText: {
    color: '#ffffff',
    fontWeight: '800',
  },
  labelText: {
    fontSize: 16,
  },
  showmoreBtn: {
    marginTop: 20,
  },
});
