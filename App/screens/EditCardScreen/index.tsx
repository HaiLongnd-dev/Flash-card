import React, {useRef, useState} from 'react';
import EditCardScreenView, {EditCardViewRef} from './view';

import SCREEN_NAME from '../../navigation/ScreenName';
import {RouteProp} from '@react-navigation/native';
import {NavigationStackParamList} from '../../navigation/Stack';
import {useDispatch} from 'react-redux';
import {AppDispatch} from '../../redux/store';
import {TCard} from '../../types/Card';
import {editCardAction, searchAction} from '../../redux/actions/cardAction';
import {TCallback} from '../../redux/actions/types/actionTypeBase';

export type EditCardScreenRouteProp = RouteProp<
  NavigationStackParamList,
  typeof SCREEN_NAME.MANUAL.EDIT_CARD
>;
interface EditCardScreenProps {
  route: EditCardScreenRouteProp;
}

const EditCardScreen = ({route}: EditCardScreenProps) => {
  const [available, setAvailable] = useState(false);
  const EditCardViewRef = useRef<EditCardViewRef>(null);

  const checkWord = (word: string) => {
    EditCardViewRef.current.setLoadingStatus(true);
    EditCardViewRef.current.setStatusError(false);

    const callback: TCallback = ({success, data}) => {
      if (success) {
        console.log('data', data);
        EditCardViewRef.current.setNewDataFromIndex(data);
      } else {
        console.log('fail');
        EditCardViewRef.current.setStatusError(true);
      }
      EditCardViewRef.current.setLoadingStatus(false);
    };

    dispatch(searchAction(word, callback));
  };

  const {card} = route.params;
  const dispatch = useDispatch<AppDispatch>();
  const editCard = (id: TCard['id'], card: Partial<TCard>) => {
    dispatch(editCardAction(id, card));
    setAvailable(false);
  };

  return (
    <EditCardScreenView
      ref={EditCardViewRef}
      available={available}
      checkWord={checkWord}
      card={card}
      editCard={editCard}
    />
  );
};

export default EditCardScreen;
