import {TouchableOpacity, View} from 'react-native';
import React from 'react';
import styles from './style';
import {AppText} from '../core/AppText';
import SvgComponent, {SvgName} from '../../assets/svg';

interface languageCategoryViewProps {
  icon: SvgName;
  title: string;
}
const languageCategoryView = ({ title}: languageCategoryViewProps) => {
  return (
    <View>
      <TouchableOpacity style={styles.container}>
        <View style={styles.icon}>
          <SvgComponent name={'ENGLISH'} />
        </View>
        <View style={styles.title}>
          <AppText fontSize={20}>{title}</AppText>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default languageCategoryView;
