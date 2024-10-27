import React, {useEffect, useRef, useState} from 'react';
import AddNewCardView, {AddNewCardViewRef} from './view';
import {NavigationStackParamList} from '../../navigation/Stack';
import {RouteProp} from '@react-navigation/native';
import SCREEN_NAME from '../../navigation/ScreenName';
import {TCard} from '../../types/Card';
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch} from '../../redux/store';
import {addCardAction, searchAction} from '../../redux/actions/cardAction';
import {getListCardByIdTopic} from '../../redux/selectors/cardSelector';
import {TCallback} from '../../redux/actions/types/actionTypeBase';
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
  const AddNewCardViewRef = useRef<AddNewCardViewRef>(null);
  const checkWord = (word: string) => {
    AddNewCardViewRef.current.setLoadingStatus(true);
    AddNewCardViewRef.current.setStatusError(false);

    const callback: TCallback = ({success, data}) => {
      if (success) {
        AddNewCardViewRef.current.setNewDataFromIndex(data);
      } else {
        AddNewCardViewRef.current.setStatusError(true);
      }
      AddNewCardViewRef.current.setLoadingStatus(false);
    };

    dispatch(searchAction(word, callback));
  };

  return (
    <AddNewCardView
      ref={AddNewCardViewRef}
      topic={topic}
      cardList={cardList}
      addCard={addCard}
      checkWord={checkWord}
    />
  );
};

export default AddNewCardScreen;
