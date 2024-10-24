import {TCard} from '../../types/Card';
import {TCallback} from './types/actionTypeBase';
import {
  CardActionType,
  IAddCardAction,
  IEditCardAction,
  IGetListCardAction,
  IRemoveCardAction,
  ISearchAction,
} from './types/cardActionType';

export const getListCardAction = (card: TCard): IGetListCardAction => {
  return {
    type: CardActionType.GET_LIST,
    payload: {params: {card}},
  };
};

export const searchAction = (
  word: string,
  callback: TCallback,
): ISearchAction => {
  return {
    type: CardActionType.SEARCH,
    payload: {params: {word}, callback},
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
