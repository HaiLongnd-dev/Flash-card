import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {AppText} from '../../../components';

const ColumnHeader = () => (
  <View style={styles.listContent}>
    <View style={[styles.center, styles.wordColumn]}>
      <AppText align="center" fontSize={18}>
        Word
      </AppText>
    </View>
    <View style={[styles.center, styles.phoneticColumn]}>
      <AppText align="center" fontSize={18}>
        Phonetic
      </AppText>
    </View>
  </View>
);
export default ColumnHeader;

const styles = StyleSheet.create({
  listContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  center: {justifyContent: 'center', alignItems: 'center'},
  wordColumn: {width: '50%'},
  phoneticColumn: {
    width: '50%',
  },
});
