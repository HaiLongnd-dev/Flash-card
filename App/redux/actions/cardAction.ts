import {TCard} from '../../types/Card';
import {TTopic} from '../../types/Topic';
import {TCallback} from './types/actionTypeBase';
import {
  CardActionType,
  IAddCardAction,
  IEditCardAction,
  IGetListCardAction,
  IRemoveCardAction,
  ISearchAction,
} from './types/cardActionType';

export const getListCardAction = (topic: TTopic): IGetListCardAction => {
  return {
    type: CardActionType.GET_LIST,
    payload: {params: {topic}},
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

export const addCardAction = (
  topicId: TTopic['id'],
  card: TCard,
): IAddCardAction => ({
  type: CardActionType.ADD,
  payload: {params: {card, topicId}},
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
