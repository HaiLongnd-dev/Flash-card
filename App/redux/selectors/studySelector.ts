import {createSelector} from 'reselect';
import {IGlobalState} from '../reducers';

const getStudySession = (state: IGlobalState) => state.study;
export const getTotalStudiedTime = createSelector(
  [getStudySession],
  state => state.totalStudyTime,
);
export const getTotalStudiedTimeByWeek = createSelector(
  [getStudySession],
  state => state.studySession,
);
export const getStudyDate = createSelector(
  [getStudySession],
  state => state.date,
);
