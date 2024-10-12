import React from 'react';
import AddNewCardView from './view';
import {NavigationStackParamList} from '../../navigation/Stack';
import {RouteProp} from '@react-navigation/native';
import SCREEN_NAME from '../../navigation/ScreenName';
import {TCard} from '../../types/Card';
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch} from '../../redux/store';
import {addCardAction} from '../../redux/actions/cardAction';
import {getListCardByIdTopic} from '../../redux/selectors/cardSelector';
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
  const addCard = (card: TCard) => {
    dispatch(addCardAction(card));
  };
  return <AddNewCardView topic={topic} cardList={cardList} addCard={addCard} />;
};

export default AddNewCardScreen;
