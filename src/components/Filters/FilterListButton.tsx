import { StyleSheet, View } from 'react-native';
import Button from '../Button';
import { useClearRefinements } from 'react-instantsearch-core';

export default function FilterListButton({ onChange, onToggleModal }) {
  const { canRefine: canClear, refine: clear } = useClearRefinements();

  return (
    <View style={s.filterListButtonContainer}>
      <View style={s.filterListButton}>
        <Button
          title='Clear all'
          disabled={!canClear}
          onPress={() => {
            clear();
            onChange();
            onToggleModal();
          }}
        />
      </View>
      <View style={s.filterListButton}>
        <Button onPress={onToggleModal} title='See results' />
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
