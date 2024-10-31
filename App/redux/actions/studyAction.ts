import {TStudySession} from '../../types/Study';
import {
  IStartStudy,
  IStopStudy,
  StudyActionType,
} from './types/studyActionType';

export const startStudyAction = (session: TStudySession): IStartStudy => {
  console.log('4');
  return {
    type: StudyActionType.START_STUDY,
    payload: {params: {session}},
  };
};
export const stopStudyAction = (session: TStudySession): IStopStudy => {
  return {
    type: StudyActionType.STOP_STUDY,
    payload: {params: {session}},
  };
};
