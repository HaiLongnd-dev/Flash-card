import {TCard} from '../../../types/Card';
import {IActionBase} from './actionTypeBase';

export const AppActionType = {
  CLEAR_ALL_DATA: 'APP/CLEAR_ALL_DATA',
} as const;
export type AppActionType = (typeof AppActionType)[keyof typeof AppActionType];

export interface ICLearAllData extends IActionBase<{}> {
  type: typeof AppActionType.CLEAR_ALL_DATA;
}

export type IAppAction = ICLearAllData;
