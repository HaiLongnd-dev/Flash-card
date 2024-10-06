import {Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Navigator from '../../navigation/NavigationService';
import styles from './style';

interface categoryComponentViewProps {
  icon: React.ReactNode;
  title: string;
  categoryScreen: string;
}
const categoryComponentView = ({
  icon,
  title,
  categoryScreen,
}: categoryComponentViewProps) => {
  return (
    <View>
      <TouchableOpacity
        style={styles.container}
        onPress={() => {
          Navigator.navigateTo(categoryScreen);
        }}>
        <View style={styles.icon}>{icon}</View>
        <View style={styles.title}>
          <Text>{title}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default categoryComponentView;
