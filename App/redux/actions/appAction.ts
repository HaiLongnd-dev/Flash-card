import {AppActionType, ICLearAllData} from './types/appActionType';

export const clearAllDataAction = (): ICLearAllData => {
  console.log('cleared');
  return {
    type: AppActionType.CLEAR_ALL_DATA,
  };
};
