import {CardActionType} from './cardActionType';
import {StudyActionType} from './studyActionType';
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
  type: TopicActionType | CardActionType | StudyActionType;
  payload?: {params?: T; callback?: TCallback};
}
