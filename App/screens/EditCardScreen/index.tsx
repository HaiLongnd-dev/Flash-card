import React, {useState} from 'react';
import EditCardScreenView from './view';

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

  const checkWord = (word: string, dataCallback: (data) => void) => {
    const callback: TCallback = ({success, data}) => {
      dataCallback(data);
      setAvailable(success);
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
      available={available}
      checkWord={checkWord}
      card={card}
      editCard={editCard}
    />
  );
};

export default EditCardScreen;
