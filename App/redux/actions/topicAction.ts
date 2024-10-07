import {TTopic} from '../../types/Topic';
import {
  IAddTopicAction,
  IEditTopicAction,
  IGetListTopicAction,
  IRemoveTopicAction,
  TopicActionType,
} from './types/topicActionType';

export const getListTopicAction = (): IGetListTopicAction => {
  return {
    type: TopicActionType.GET_LIST,
  };
};
export const addTopicAction = (topic: TTopic): IAddTopicAction => ({
  type: TopicActionType.ADD,
  payload: {params: {topic}},
});

export const removeTopicAction = (id: TTopic['id']): IRemoveTopicAction => ({
  type: TopicActionType.REMOVE,
  payload: {params: {id}},
});
export const editTaskAction = (
  id: TTopic['id'],
  topic: Partial<TTopic>,
): IEditTopicAction => ({
  type: TopicActionType.EDIT,
  payload: {params: {id, topic}},
});
