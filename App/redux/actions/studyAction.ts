import {TStudySession} from '../../types/Study';
import {TCallback} from './types/actionTypeBase';
import {
  IClearAllRecord,
  ICountTotalStudiedTime,
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
export const countTotalStudiedTimeAction = (): ICountTotalStudiedTime => {
  return {
    type: StudyActionType.COUNT_TOTAL_STUDIED_TIME,
  };
};
export const clearAllRecordAction = (): IClearAllRecord => {
  return {
    type: StudyActionType.CLEAR_ALL_RECORD,
  };
};
