import {
  FlatList,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import React from 'react';
import {TCard} from '../../../types/Card';
import {useSelector} from 'react-redux';
import {getListCard} from '../../../redux/selectors/cardSelector';
import {RenderItem} from './RenderItemSearch';

interface SearchListProps {
  cardListFiltered: TCard[];
  setAvailableSearch?: (value: boolean) => void;
}
const SearchList = ({
  cardListFiltered,
  setAvailableSearch,
}: SearchListProps) => {
  const listCard: TCard[] =
    cardListFiltered.length === 0 ? useSelector(getListCard) : cardListFiltered;
  return (
    // <TouchableWithoutFeedback onPress={() => setAvailableSearch(false)}>
      <View style={styles.searchBox}>
        <FlatList
          data={listCard}
          renderItem={({item}) => <RenderItem card={item} />}
        />
      </View>
    // </TouchableWithoutFeedback>
  );
};

export default SearchList;

const styles = StyleSheet.create({
  searchBox: {
    backgroundColor: '#4A0E5C',
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 15,
    marginTop: 20,
    position: 'absolute',
    width: '90%',
    top: '40%',
    right: 15,
    zIndex: 1,
  },
});
