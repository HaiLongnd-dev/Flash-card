import React from 'react';
import AddNewCardView from './view';
import {NavigationStackParamList} from '../../navigation/Stack';
import {RouteProp} from '@react-navigation/native';
import SCREEN_NAME from '../../navigation/ScreenName';
import {TCard} from '../../types/Card';
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch} from '../../redux/store';
import {addCardAction} from '../../redux/actions/cardAction';
import {getListCard} from '../../redux/selectors/cardSelector';
export type AddTopicRouteProp = RouteProp<
  NavigationStackParamList,
  typeof SCREEN_NAME.MANUAL.ADD_NEW_TOPIC
>;

type AddNewCardViewProps = {
  route: AddTopicRouteProp;
};
const AddNewCardScreen = ({route}: AddNewCardViewProps) => {
  const dispatch = useDispatch<AppDispatch>();
  const cardList: TCard[] = useSelector(getListCard);

  const addCard = (card: TCard) => {
    dispatch(addCardAction(card));
  };
  const topic = route.params;
  return <AddNewCardView topic={topic} cardList={cardList} addCard={addCard} />;
};

export default AddNewCardScreen;
