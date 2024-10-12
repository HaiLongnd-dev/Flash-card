import {Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Navigator from '../../navigation/NavigationService';
import styles from './style';
import {TTopic} from '../../types/Topic';
import SvgComponent from '../../assets/svg';

interface TopicComponentHomeViewProps {
  icon: TTopic['icon'];
  title: TTopic['title'];
  topic?: string;
}
const TopicComponentHomeView = ({
  icon,
  title,
  topic,
}: TopicComponentHomeViewProps) => {
  return (
    <View>
      <TouchableOpacity
        style={styles.container}
        onPress={() => {
          Navigator.navigateTo(topic);
        }}>
        <View style={styles.icon}>
          <SvgComponent name={icon} />
        </View>
        <View style={styles.title}>
          <Text>{title}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default TopicComponentHomeView;
