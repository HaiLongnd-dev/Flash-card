import React from 'react';
import EditCardScreenView from './view';

import SCREEN_NAME from '../../navigation/ScreenName';
import {RouteProp} from '@react-navigation/native';
import {NavigationStackParamList} from '../../navigation/Stack';
import {useDispatch} from 'react-redux';
import {AppDispatch} from '../../redux/store';
import {TCard} from '../../types/Card';
import {editCardAction} from '../../redux/actions/cardAction';

export type EditCardScreenRouteProp = RouteProp<
  NavigationStackParamList,
  typeof SCREEN_NAME.MANUAL.EDIT_CARD
>;
interface EditCardScreenProps {
  route: EditCardScreenRouteProp;
}
const EditCardScreen = ({route}: EditCardScreenProps) => {
  const {card} = route.params;
  const dispatch = useDispatch<AppDispatch>();
  const editCard = (id: TCard['id'], card: Partial<TCard>) => {
    dispatch(editCardAction(id, card));
  };
  return <EditCardScreenView card={card} editCard={editCard} />;
};

export default EditCardScreen;
