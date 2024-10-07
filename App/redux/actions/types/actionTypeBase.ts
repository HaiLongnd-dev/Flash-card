import {TopicActionType} from './topicActionType';

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
  type: TopicActionType;
  payload?: {params?: T; callback?: TCallback};
}
