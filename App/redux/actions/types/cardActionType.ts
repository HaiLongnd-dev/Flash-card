import {TCard} from '../../../types/Card';
import {TTopic} from '../../../types/Topic';
import {IActionBase} from './actionTypeBase';

export const CardActionType = {
  ADD: 'CARD/ADD',
  EDIT: 'CARD/EDIT',
  REMOVE: 'CARD/REMOVE',
  GET_LIST: 'CARD/GET_LIST',
} as const;
export type CardActionType =
  (typeof CardActionType)[keyof typeof CardActionType];

export interface IAddCardAction extends IActionBase<{card: TCard}> {
  type: typeof CardActionType.ADD;
}
export interface IEditCardAction
  extends IActionBase<{id: TCard['id']; card: Partial<TCard>}> {
  type: typeof CardActionType.EDIT;
}
export interface IRemoveCardAction extends IActionBase<{id: TCard['id']}> {
  type: typeof CardActionType.REMOVE;
}
export interface IGetListCardAction extends IActionBase<{card: TCard}> {
  type: typeof CardActionType.GET_LIST;
}

export type ICardAction =
  | IAddCardAction
  | IEditCardAction
  | IRemoveCardAction
  | IGetListCardAction;
