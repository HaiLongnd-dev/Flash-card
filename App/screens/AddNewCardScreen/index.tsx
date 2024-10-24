import React, {useEffect, useState} from 'react';
import AddNewCardView from './view';
import {NavigationStackParamList} from '../../navigation/Stack';
import {RouteProp} from '@react-navigation/native';
import SCREEN_NAME from '../../navigation/ScreenName';
import {TCard} from '../../types/Card';
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch} from '../../redux/store';
import {addCardAction, searchAction} from '../../redux/actions/cardAction';
import {getListCardByIdTopic} from '../../redux/selectors/cardSelector';
import {TCallback} from '../../redux/actions/types/actionTypeBase';
import {AppContainer} from '../../components/Core/AppContainer';
import ConfirmModal from '../../components/Core/ConfirmModal';
import Navigator from '../../navigation/NavigationService';
import SvgComponent from '../../assets/svg';
import {TouchableOpacity} from 'react-native';
import {colors} from '../../themes/color';

export type AddTopicRouteProp = RouteProp<
  NavigationStackParamList,
  typeof SCREEN_NAME.MANUAL.ADD_NEW_CARD
>;

type AddNewCardViewProps = {
  route: AddTopicRouteProp;
};
const AddNewCardScreen = ({route}: AddNewCardViewProps) => {
  const {topic} = route.params;
  const dispatch = useDispatch<AppDispatch>();
  const cardList: TCard[] = useSelector(getListCardByIdTopic(topic.id));
  const [available, setAvailable] = useState(false);

  const [modalVisible, setModalVisible] = useState(false);

  const handleConfirm = () => {
    Navigator.navigateTo(SCREEN_NAME.ROOT.HOME_SCREEN);
    setModalVisible(false);
  };

  const handleCancel = () => {
    setModalVisible(false);
  };
  const checkLength = (cardContent: string) => {
    if (cardContent.length > 20) return true;
  };
  const BackHome = () => {
    return (
      <TouchableOpacity
        onPress={() => {
          setModalVisible(true);
        }}>
        <SvgComponent name="CHECK" size={30} color={colors.white} />
      </TouchableOpacity>
    );
  };
  const addCard = (card: TCard) => {
    dispatch(addCardAction(card));
  };
  const checkWord = (word: string, setPhonetic: (data) => void) => {
    const callback: TCallback = ({success, data}) => {
      setPhonetic(data[0].phonetics[1].text);
    };
    dispatch(searchAction(word, callback));
  };

  return (
    <AppContainer
      backButton={true}
      haveRightButton={true}
      rightButton={<BackHome />}
      title="ADD FLASHCARD">
      <AddNewCardView
        topic={topic}
        cardList={cardList}
        addCard={addCard}
        checkWord={checkWord}
        checkLength={checkLength}
        available={available}
      />
      <ConfirmModal
        message="Are you sure you want to stop?"
        visible={modalVisible}
        onConfirm={handleConfirm}
        onCancel={handleCancel}
      />
    </AppContainer>
  );
};

export default AddNewCardScreen;
