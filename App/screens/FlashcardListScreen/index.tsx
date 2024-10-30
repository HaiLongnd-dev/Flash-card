import React, {useState} from 'react';
import FlashcardListScreenView from './view';
import {RouteProp} from '@react-navigation/native';
import SCREEN_NAME from '../../navigation/ScreenName';
import {NavigationStackParamList} from '../../navigation/Stack';
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch} from '../../redux/store';
import {getListCardByIdTopic} from '../../redux/selectors/cardSelector';
import {TCard} from '../../types/Card';
import {removeCardAction} from '../../redux/actions/cardAction';
import ConfirmModal from '../../components/Core/ConfirmModal';
import Navigator from '../../navigation/NavigationService';
import ScreenName from '../../navigation/ScreenName';
import {startStudyAction} from '../../redux/actions/studyAction';
import {TStudy} from '../../types/Study';
export type TopicFlashcardRouteProp = RouteProp<
  NavigationStackParamList,
  typeof SCREEN_NAME.MANUAL.FLASHCARD_LIST
>;

type TopicFlashcardViewProps = {
  route: TopicFlashcardRouteProp;
  handleDelete: (id: TCard['id']) => void;
  handleEdit: (id: TCard['id']) => void;
};
const FlashcardListScreen = ({route}: TopicFlashcardViewProps) => {
  const {topic} = route.params;
  const dispatch = useDispatch<AppDispatch>();
  const cardList: TCard[] = useSelector(getListCardByIdTopic(topic.id));
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedCardId, setSelectedCardId] = useState<TCard['id']>(null);
  const handleDelete = (id: TCard['id']) => {
    setModalVisible(true);
    setSelectedCardId(id);
  };

  const handleConfirm = () => {
    if (selectedCardId !== null) {
      dispatch(removeCardAction(selectedCardId));
    }
    setModalVisible(false);
    setSelectedCardId(null);
  };
  const handleCancel = () => {
    setModalVisible(false);
  };
  const handleEdit = (card: TCard) => {
    Navigator.navigateTo(ScreenName.MANUAL.EDIT_CARD, {card});
  };
  const startStudy = (startTime: TStudy['startTime'], id: TStudy['id']) => {
    dispatch(startStudyAction(startTime, id));
  };
  return (
    <>
      <FlashcardListScreenView
        cardList={cardList}
        topic={topic}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
        startStudy={startStudy}
      />
      <ConfirmModal
        message="Are you sure to delete this card?"
        onCancel={handleCancel}
        onConfirm={handleConfirm}
        visible={modalVisible}
      />
    </>
  );
};

export default FlashcardListScreen;
