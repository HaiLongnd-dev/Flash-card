import {TCard} from '../../types/Card';
import {TTopic} from '../../types/Topic';
import {
  CardActionType,
  IAddCardAction,
  IEditCardAction,
  IGetListCardAction,
  IRemoveCardAction,
} from './types/cardActionType';

export const getListCardAction = (card: TCard): IGetListCardAction => {
  return {
    type: CardActionType.GET_LIST,
    payload: {params: {card}},
  };
};
export const addCardAction = (card: TCard): IAddCardAction => ({
  type: CardActionType.ADD,
  payload: {params: {card}},
});

export const removeCardAction = (id: TCard['id']): IRemoveCardAction => ({
  type: CardActionType.REMOVE,
  payload: {params: {id}},
});
export const editCardAction = (
  id: TCard['id'],
  card: Partial<TCard>,
): IEditCardAction => ({
  type: CardActionType.EDIT,
  payload: {params: {id, card}},
});
