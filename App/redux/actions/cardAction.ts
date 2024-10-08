import {TCard} from '../../types/Card';
import {
  CardActionType,
  IAddCardAction,
  IEditCardAction,
  IGetListCardAction,
  IRemoveCardAction,
} from './types/cardActionType';

export const getListCardAction = (): IGetListCardAction => {
  return {
    type: CardActionType.GET_LIST,
  };
};
export const addCardAction = (card: TCard): IAddCardAction => ({
  type: CardActionType.ADD,
  payload: {params: {card}},
});

export const removeTopicAction = (id: TCard['id']): IRemoveCardAction => ({
  type: CardActionType.REMOVE,
  payload: {params: {id}},
});
export const editTaskAction = (
  id: TCard['id'],
  card: TCard,
): IEditCardAction => ({
  type: CardActionType.EDIT,
  payload: {params: {id, card}},
});
