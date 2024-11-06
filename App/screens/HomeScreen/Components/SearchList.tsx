import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {TCard} from '../../../types/Card';
import {useSelector} from 'react-redux';
import {getListCard} from '../../../redux/selectors/cardSelector';
import {AppText} from '../../../components';
import {colors} from '../../../themes/color';
import {TTopic} from '../../../types/Topic';
import {getListTopic} from '../../../redux/selectors';

const SearchList = () => {
  const listCard: TCard[] = useSelector(getListCard);
  const listTopic: TTopic[] = useSelector(getListTopic);
  const topicFilter = (card: TCard) => {
    const topic = listTopic.map(item => {
      if (item.id === card.idTopic) return item.title;
    });
    return topic;
  };

  const RenderItem = ({card}: {card: TCard}) => {
    const topicName = topicFilter(card);
    return (
      <View style={styles.card}>
        <View style={styles.nameBox}>
          <AppText color={colors.white}>{card.content}</AppText>
          <AppText color={colors.white}>Topic: {topicName}</AppText>
        </View>
        <AppText color={colors.white}>{card.phonetic}</AppText>
        <AppText color={colors.white}>{card.meaning}</AppText>
      </View>
    );
  };
  return (
    <View style={styles.searchBox}>
      <FlatList
        data={listCard}
        renderItem={({item}) => <RenderItem card={item} />}
      />
    </View>
  );
};

export default SearchList;

const styles = StyleSheet.create({
  searchBox: {
    backgroundColor: '#4A0E5C',
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 15,
    marginTop: 15,
    position: 'absolute',
    width: '90%',
    flex: 1,
    top: '40%',
    right: 15,
    zIndex: 1000,
  },
  card: {
    paddingHorizontal: 5,
    paddingBottom: 4,
    borderBottomColor: colors.white,
    borderBottomWidth: 1,
  },
  nameBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
