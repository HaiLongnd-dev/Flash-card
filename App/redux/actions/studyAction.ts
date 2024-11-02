import {TStudySession} from '../../types/Study';
import {TCallback} from './types/actionTypeBase';
import {
  IStartStudy,
  IStopStudy,
  StudyActionType,
} from './types/studyActionType';

export const startStudyAction = (callback: TCallback): IStartStudy => {
  return {
    type: StudyActionType.START_STUDY,
    payload: {callback},
  };
};

export const stopStudyAction = (recordId: TStudySession['id']): IStopStudy => {
  return {
    type: StudyActionType.STOP_STUDY,
    payload: {params: {recordId}},
  };
};
