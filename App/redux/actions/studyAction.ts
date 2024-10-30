import {TStudy} from '../../types/Study';
import {
  IStartStudy,
  IStopStudy,
  StudyActionType,
} from './types/studyActionType';

export const startStudyAction = (
  startTime: TStudy['startTime'],
  id: TStudy['id'],
): IStartStudy => {
  return {
    type: StudyActionType.START_STUDY,
    payload: {params: {startTime, id}},
  };
};
export const stopStudyAction = (idSession: TStudy['id']): IStopStudy => {
  return {
    type: StudyActionType.STOP_STUDY,
    payload: {params: idSession},
  };
};
