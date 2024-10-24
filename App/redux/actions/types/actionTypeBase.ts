import {CardActionType} from './cardActionType';
import {TopicActionType} from './topicActionType';
import {WordActionType} from './wordActionType';

export type TCallback = ({
  success,
  data,
  message,
}: {
  success: boolean;
  data?: any;
  message?: string;
}) => void;

export interface IActionBase<T> {
  type: TopicActionType | CardActionType | WordActionType;
  payload?: {params?: T; callback?: TCallback};
}
