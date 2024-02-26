import {
  StyleSheet,
  SafeAreaView,
  Modal,
  Text,
  ScrollView,
} from 'react-native';
import { useRefinementList } from 'react-instantsearch-core';
import FacetList from '../Facet';

import ToggleFiltersButton from './ToggleFiltersButton';
import FilterListButton from './FilterListButton';

const VirtualRefinementList = ({ attribute }) => {
  useRefinementList({ attribute });
  return null;
};

export default function Filters({ isModalOpen, onToggleModal, onChange }) {
  return (
    <>
      {/* Workaround since refinement list states are lost when we close the modal */}
      {/* https://github.com/algolia/react-instantsearch/issues/2989 */}
      <VirtualRefinementList attribute='key' />
      <VirtualRefinementList attribute='suffix' />
      <VirtualRefinementList attribute='positions.capo' />
      <ToggleFiltersButton onToggleModal={onToggleModal} />

      <Modal animationType='slide' visible={isModalOpen}>
        <ScrollView>
          <SafeAreaView style={s.Filters}>
            <Text style={s.h2}>Key</Text>
            <FacetList attribute='key' sortBy={['name']} onChange={onChange} />
            <Text style={s.h2}>Suffix</Text>
            <FacetList
              attribute='suffix'
              limit={8}
              showMore
              showMoreLimit={100}
              onChange={onChange}
              searchable
            />
            <Text style={s.h2}>Capo</Text>
            <FacetList attribute='positions.capo' onChange={onChange} />
            <FilterListButton
              onChange={onChange}
              onToggleModal={onToggleModal}
            />
          </SafeAreaView>
        </ScrollView>
      </Modal>
    </>
  );
}

const s = StyleSheet.create({
  Filters: {
    display: 'flex',
    gap: 16,
    padding: '5%',
    zIndex: 100,
    width: '100%',
  },

  h2: {
    fontSize: 24,
    fontWeight: '500',
  },
});
