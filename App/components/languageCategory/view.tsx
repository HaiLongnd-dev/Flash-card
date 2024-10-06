import {TouchableOpacity, View} from 'react-native';
import React from 'react';
import styles from './style';
import {AppText} from '../core/AppText';

interface languageCategoryViewProps {
  icon: React.ReactNode;
  title: string;
}
const languageCategoryView = ({icon, title}: languageCategoryViewProps) => {
  return (
    <View>
      <TouchableOpacity style={styles.container}>
        <View style={styles.icon}>{icon}</View>
        <View style={styles.title}>
          <AppText fontSize={20}>{title}</AppText>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default languageCategoryView;
