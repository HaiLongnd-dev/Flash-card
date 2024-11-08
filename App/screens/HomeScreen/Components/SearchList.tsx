import {FlatList, Keyboard, Pressable, StyleSheet, View} from 'react-native';
import React, {useEffect, useState} from 'react';
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
  const [haveKeyboard, setHaveKeyboard] = useState(true);
  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        setHaveKeyboard(false);
      },
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setHaveKeyboard(true);
      },
    );

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);
  return (
    <Pressable
      style={styles.outSideSearchBox}
      onPress={() => setAvailableSearch(false)}>
      <View
        style={haveKeyboard ? styles.searchBox : styles.searchBoxHaveKeyboard}>
        <FlatList
          data={listCard}
          renderItem={({item}) => <RenderItem card={item} />}
        />
      </View>
    </Pressable>
  );
};

export default SearchList;

const styles = StyleSheet.create({
  outSideSearchBox: {
    flex: 1,
    zIndex: -1,
    marginTop: -220,
  },

  searchBox: {
    backgroundColor: '#4A0E5C',
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 15,
    marginTop: 60,
    position: 'absolute',
    width: '90%',
    top: '40%',
    right: 15,
    zIndex: 10,
  },
  searchBoxHaveKeyboard: {
    backgroundColor: '#4A0E5C',
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 15,
    marginTop: 130,
    position: 'absolute',
    width: '90%',
    top: '40%',
    right: 15,
    zIndex: 10,
  },
});
