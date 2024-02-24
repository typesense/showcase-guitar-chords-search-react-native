import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useCurrentRefinements } from 'react-instantsearch-core';
import { FilterIcon } from '../icons';
import useStyleUnit from '@/hooks/useStyleUnit';
import STYLE_VARIABLES from '@/utils/STYLE_VARIABLES';

export default function ToggleFiltersButton({ onToggleModal }) {
  const { items: currentRefinements } = useCurrentRefinements();
  const totalRefinements = currentRefinements.reduce(
    (acc, { refinements }) => acc + refinements.length,
    0
  );
  const { vw, vh } = useStyleUnit();

  return (
    <TouchableOpacity
      style={{ ...s.filtersButton, marginRight: vw(4), top: vh(18) }}
      onPress={onToggleModal}
    >
      <View style={s.relative}>
        {totalRefinements > 0 && (
          <View style={s.facetCounts}>
            <Text style={s.facetCountsText}>{totalRefinements}</Text>
          </View>
        )}
        <FilterIcon style={s.filterIcon} />
      </View>
    </TouchableOpacity>
  );
}

const s = StyleSheet.create({
  filtersButton: {
    position: 'absolute',
    right: 0,
    paddingVertical: 18,
  },
  relative: { position: 'relative' },
  facetCounts: {
    position: 'absolute',
    bottom: 0,
    left: -5,
    backgroundColor: STYLE_VARIABLES.__accent,
    borderRadius: 24,
    paddingVertical: 2,
    paddingHorizontal: 6,
    marginLeft: 4,
    zIndex: 2,
  },
  facetCountsText: {
    fontSize: 10,
    color: '#ffffff',
    fontWeight: '800',
  },
  filterIcon: {
    width: 32,
    aspectRatio: 1 / 1,
  },
});
