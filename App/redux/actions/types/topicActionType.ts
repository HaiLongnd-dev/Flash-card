import {TTopic} from '../../../types/Topic';
import {IActionBase} from './actionTypeBase';

export const TopicActionType = {
  ADD: 'TOPIC/ADD',
  EDIT: 'TOPIC/EDIT',
  REMOVE: 'TOPIC/REMOVE',
  GET_LIST: 'TOPIC/GET_LIST',
} as const;
export type TopicActionType =
  (typeof TopicActionType)[keyof typeof TopicActionType];

export interface IAddTopicAction extends IActionBase<{topic: TTopic}> {
  type: typeof TopicActionType.ADD;
}
export interface IEditTopicAction
  extends IActionBase<{id: TTopic['id']; topic: Partial<TTopic>}> {
  type: typeof TopicActionType.EDIT;
}
export interface IRemoveTopicAction extends IActionBase<{id: TTopic['id']}> {
  type: typeof TopicActionType.REMOVE;
}
export interface IGetListTopicAction extends IActionBase<{}> {
  type: typeof TopicActionType.GET_LIST;
}

export type ITopicAction =
  | IAddTopicAction
  | IEditTopicAction
  | IRemoveTopicAction
  | IGetListTopicAction;
