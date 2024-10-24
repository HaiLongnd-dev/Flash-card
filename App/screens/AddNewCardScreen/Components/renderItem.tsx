import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {TCard} from '../../../types/Card';
import {AppText} from '../../../components';
interface renderItemProps {
  item: TCard;
}
const RenderItem = ({item}: renderItemProps) => {
  return (
    <View style={styles.listContent}>
      <View style={[styles.center, styles.wordColumn]}>
        <AppText fontSize={18}>Word</AppText>
        <AppText style={styles.card} fontSize={18}>
          {item.content}
        </AppText>
      </View>
      <View style={[styles.center, styles.phoneticColumn]}>
        <AppText fontSize={18}>Phonetic</AppText>
        <AppText style={styles.card} fontSize={18}>
          {item.phonetic}
        </AppText>
      </View>
      <View style={[styles.center, styles.meaningColumn]}>
        <AppText fontSize={18}>Meaning</AppText>
        <AppText style={styles.card} fontSize={18}>
          {item.meaning}
        </AppText>
      </View>
    </View>
  );
};

export default RenderItem;

const styles = StyleSheet.create({
  card: {marginHorizontal: 10},

  listContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
  },
  center: {justifyContent: 'center', alignItems: 'center'},
  wordColumn: {width: '20%'},
  phoneticColumn: {
    width: '30%',
  },
  meaningColumn: {
    width: '50%',
    justifyContent: 'flex-start',
  },
});
