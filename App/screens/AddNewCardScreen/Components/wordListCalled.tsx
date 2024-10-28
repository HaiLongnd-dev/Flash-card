import {StyleSheet, Text, View} from 'react-native';
import React, {forwardRef, useImperativeHandle, useState} from 'react';
import {AppText} from '../../../components';
import {colors} from '../../../themes/color';
export interface wordListRef {
  setNewDataForList: (data) => void;
}
const WordListCalled = forwardRef<wordListRef>((props, ref) => {
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
          {data?.word}
        </AppText>
        <AppText fontSize={15} color={colors.white}>
          {data?.phonetic}
        </AppText>
        <AppText fontSize={15} color={colors.white}>
          {data?.meaning}
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
