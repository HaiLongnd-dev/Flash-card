import {StyleSheet, Text, View} from 'react-native';
import React, {forwardRef, useImperativeHandle, useState} from 'react';
import {AppText} from '../../../components';
import {colors} from '../../../themes/color';
import {TCard} from '../../../types/Card';
export interface wordListRef {
  setNewDataForList: (data) => void;
}
export interface wordListProps {
  card?: TCard;
}
const WordListCalled = forwardRef<wordListRef, wordListProps>(({card}, ref) => {
  const [data, setData] = useState(null);
  useImperativeHandle(ref, () => ({
    setNewDataForList: data => {
      setData(data);
    },
  }));
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <AppText fontSize={20} color={colors.white}>
          {data?.word || card?.content}
        </AppText>
        <AppText fontSize={15} color={colors.white}>
          {data?.phonetic || card?.phonetic}
        </AppText>
        <AppText fontSize={15} color={colors.white}>
          {data?.meaning || card?.meaning}
        </AppText>
      </View>
    </View>
  );
});

export default WordListCalled;

const styles = StyleSheet.create({
  container: {
    zIndex: 1,
    borderWidth: 1,
    backgroundColor: '#4A0E5C',
    marginTop: 2,
    paddingHorizontal: 10,
    borderRadius: 5,
    borderColor: colors.white,
    paddingVertical: 5,
  },
  content: {
    borderWidth: 1,
    backgroundColor: '#4A0E5C',
    paddingHorizontal: 10,
    borderRadius: 5,
    borderColor: colors.white,
    paddingVertical: 5,
  },
});
