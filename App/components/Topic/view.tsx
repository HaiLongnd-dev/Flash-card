import {TouchableOpacity, View} from 'react-native';
import React from 'react';
import styles from './style';
import {AppText} from '../Core/AppText';
import SvgComponent, {SvgName} from '../../assets/svg';
import {colors} from '../../themes/color';
import {TTopic} from '../../types/Topic';
import Navigator from '../../navigation/NavigationService';
import SCREEN_NAME from '../../navigation/ScreenName';

interface TopicViewProps {
  topic: TTopic;
  editTopicOpt?: boolean;
  handleDelete?: (id: TTopic['id']) => void;
  handleEdit?: (id: TTopic['id']) => void;
}
const showTopicListCard = (topic: TTopic) => {
  Navigator.navigateTo(SCREEN_NAME.MANUAL.FLASHCARD_LIST, {topic});
};
const TopicView = ({
  topic,
  editTopicOpt,
  handleEdit,
  handleDelete,
}: TopicViewProps) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => showTopicListCard(topic)}>
      <View style={styles.leftContainer}>
        <View style={styles.icon}>
          <SvgComponent
            name={topic.icon}
            color={
              topic.iconColor === '#FFFFFF' ? colors.black : topic.iconColor
            }
          />
        </View>
        <View style={styles.title}>
          <AppText fontSize={20}>{topic.title}</AppText>
        </View>
      </View>
      {editTopicOpt ? (
        <View style={styles.rightContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleEdit(topic.id)}>
            <SvgComponent name="EDIT" color={colors.black} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleDelete(topic.id)}>
            <SvgComponent name="DELETE" color={colors.black} />
          </TouchableOpacity>
        </View>
      ) : (
        <></>
      )}
    </TouchableOpacity>
  );
};

export default TopicView;
