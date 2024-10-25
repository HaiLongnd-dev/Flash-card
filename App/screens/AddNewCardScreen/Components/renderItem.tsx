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
      <AppText align="center" style={styles.card} fontSize={18}>
        {item.content}
      </AppText>
      <AppText align="center" style={styles.card} fontSize={18}>
        {item.phonetic}
      </AppText>
    </View>
  );
};

export default RenderItem;

const styles = StyleSheet.create({
  listContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  card: {
    width: '50%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
