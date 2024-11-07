import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {AppText} from '../../../components';
import {colors} from '../../../themes/color';
import {TCard} from '../../../types/Card';
import {TTopic} from '../../../types/Topic';
import {useSelector} from 'react-redux';
import {getListTopic} from '../../../redux/selectors';
import Navigator from '../../../navigation/NavigationService';
import SCREEN_NAME from '../../../navigation/ScreenName';
interface RenderItemProps {
  card: TCard;
}
export const RenderItem = ({card}: RenderItemProps) => {
  const listTopic: TTopic[] = useSelector(getListTopic);
  const topicFilter = (card: TCard) => {
    const topic = listTopic.find(item => {
      if (item.id === card.idTopic) return item;
    });
    return topic;
  };
  const topic = topicFilter(card);
  const showFlashcardList = () => {
    Navigator.navigateTo(SCREEN_NAME.MANUAL.FLASHCARD_LIST, {topic});
  };
  return (
    <TouchableOpacity onPress={showFlashcardList}>
      <View style={styles.card}>
        <View style={styles.nameBox}>
          <AppText color={colors.white}>{card.content}</AppText>
          <AppText color={colors.white}>Topic: {topic.title}</AppText>
        </View>
        <AppText color={colors.white}>{card.phonetic}</AppText>
        <AppText color={colors.white}>{card.meaning}</AppText>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  searchBox: {
    backgroundColor: '#4A0E5C',
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 15,
    marginTop: 15,
    position: 'absolute',
    width: '90%',
    flex: 1,
    top: '40%',
    right: 15,
    zIndex: 1000,
  },
  card: {
    paddingHorizontal: 5,
    paddingBottom: 4,
    borderBottomColor: colors.white,
    borderBottomWidth: 1,
  },
  nameBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
