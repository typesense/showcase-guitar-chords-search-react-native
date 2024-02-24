import { Button, StyleSheet, View } from 'react-native';
import { useClearRefinements } from 'react-instantsearch-core';

import STYLE_VARIABLES from '@/utils/STYLE_VARIABLES';

export default function FilterListButton({ onChange, onToggleModal }) {
  const { canRefine: canClear, refine: clear } = useClearRefinements();

  return (
    <View style={s.filterListButtonContainer}>
      <View style={s.filterListButton}>
        <Button
          title='Clear all'
          color={STYLE_VARIABLES.__btnBg}
          disabled={!canClear}
          onPress={() => {
            clear();
            onChange();
            onToggleModal();
          }}
        />
      </View>
      <View style={s.filterListButton}>
        <Button onPress={onToggleModal} title='See results' color='#252b33' />
      </View>
    </View>
  );
}
const s = StyleSheet.create({
  filterListButtonContainer: {
    flexDirection: 'row',
  },
  filterListButton: {
    flex: 1,
    alignItems: 'center',
    marginTop: 18,
  },
});
