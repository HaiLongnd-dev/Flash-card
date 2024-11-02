import {TStudySession} from '../../../types/Study';
import {IActionBase} from './actionTypeBase';

export const StudyActionType = {
  START_STUDY: 'STUDY/START_STUDY',
  STOP_STUDY: 'STUDY/STOP_STUDY',
  COUNT_TOTAL_STUDIED_TIME: 'STUDY/COUNT_TOTAL_STUDIED_TIME',
  CLEAR_ALL_RECORD: 'APP/CLEAR_ALL_RECORD',
  GET_MONDAY_DATE: 'GET_MONDAY_DATE',
} as const;
export type StudyActionType =
  (typeof StudyActionType)[keyof typeof StudyActionType];

export interface IStartStudy extends IActionBase<{}> {
  type: typeof StudyActionType.START_STUDY;
}
export interface IStopStudy
  extends IActionBase<{recordId: TStudySession['id']}> {
  type: typeof StudyActionType.STOP_STUDY;
}
export interface ICountTotalStudiedTime extends IActionBase<{}> {
  type: typeof StudyActionType.COUNT_TOTAL_STUDIED_TIME;
}
export interface IGetMondayDate extends IActionBase<{date: Date}> {
  type: typeof StudyActionType.GET_MONDAY_DATE;
}
export interface IClearAllRecord extends IActionBase<{}> {
  type: typeof StudyActionType.CLEAR_ALL_RECORD;
}

export type IStudyAction =
  | IStartStudy
  | IStopStudy
  | ICountTotalStudiedTime
  | IClearAllRecord
  | IGetMondayDate;
