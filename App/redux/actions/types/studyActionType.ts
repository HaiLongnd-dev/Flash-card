import { TStudySession } from '../../../types/Study';
import { IActionBase } from './actionTypeBase';

export const StudyActionType = {
  START_STUDY: 'STUDY/START_STUDY',
  STOP_STUDY: 'STUDY/STOP_STUDY',
  CLEAR_ALL_RECORD: 'STUDY/CLEAR_ALL_RECORD',
} as const;
export type StudyActionType =
  (typeof StudyActionType)[keyof typeof StudyActionType];

export interface IStartStudy extends IActionBase<{}> {
  type: typeof StudyActionType.START_STUDY;
}
export interface IStopStudy extends IActionBase<{ recordId: TStudySession['id'] }> {
  type: typeof StudyActionType.STOP_STUDY;
}
export interface IClearAllRecord extends IActionBase<{}> {
  type: typeof StudyActionType.CLEAR_ALL_RECORD;
}

export type IStudyAction = IStartStudy | IStopStudy | IClearAllRecord;
