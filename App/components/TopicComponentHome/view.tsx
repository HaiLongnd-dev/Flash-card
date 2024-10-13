import {Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Navigator from '../../navigation/NavigationService';
import styles from './style';
import {TTopic} from '../../types/Topic';
import SvgComponent from '../../assets/svg';
import SCREEN_NAME from '../../navigation/ScreenName';

interface TopicComponentHomeViewProps {
  topic: TTopic;
}

const showTopicListCard = (topic: TTopic) => {
  Navigator.navigateTo(SCREEN_NAME.MANUAL.FLASHCARD_LIST, {topic});
};
const TopicComponentHomeView = ({topic}: TopicComponentHomeViewProps) => {
  return (
    <View>
      <TouchableOpacity
        style={styles.container}
        onPress={() => showTopicListCard(topic)}>
        <View style={styles.icon}>
          <SvgComponent name={topic.icon} />
        </View>
        <View style={styles.title}>
          <Text>{topic.title}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default TopicComponentHomeView;
