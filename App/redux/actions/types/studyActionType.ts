import {TStudy} from '../../../types/Study';
import {IActionBase} from './actionTypeBase';

export const StudyActionType = {
  START_STUDY: 'STUDY/START_STUDY',
  STOP_STUDY: 'STUDY/STOP_STUDY',
} as const;
export type StudyActionType =
  (typeof StudyActionType)[keyof typeof StudyActionType];

export interface IStartStudy extends IActionBase<TStudy> {
  type: typeof StudyActionType.START_STUDY;
}
export interface IStopStudy extends IActionBase<TStudy['id']> {
  type: typeof StudyActionType.STOP_STUDY;
}

export type IStudyAction = IStartStudy | IStopStudy;
