import {TStudySession} from '../../types/Study';
import * as studyActions from '../actions/types/studyActionType';
import * as appActions from '../actions/types/appActionType';
import {
  getFinalStudyTime,
  getTotalStudiedTimeByDay,
  handlerStopSession,
  handlerStudyTime,
} from '../helper/handlerStudyTime';
import {useHandlerStartDayOfWeek} from '../../hooks/useHandlerStartDayOfWeek';
export interface IStudyState {
  studySession: TStudySession[];
  totalStudyTime: number;
  date: Date;
}

const initAllDayOfWeek: TStudySession[] = [
  {
    id: 0,
    records: [],
    date: 'Mon',
    totalStudiedTimeByDay: 0,
  },
  {
    id: 1,
    records: [],
    date: 'Tue',
    totalStudiedTimeByDay: 0,
  },
  {
    id: 2,
    records: [],
    date: 'Wed',
    totalStudiedTimeByDay: 0,
  },
  {
    id: 3,
    records: [],
    date: 'Thu',
    totalStudiedTimeByDay: 0,
  },
  {
    id: 4,
    records: [],
    date: 'Fri',
    totalStudiedTimeByDay: 0,
  },
  {
    id: 5,
    records: [],
    date: 'Sat',
    totalStudiedTimeByDay: 0,
  },
  {
    id: 6,
    records: [],
    date: 'Sun',
    totalStudiedTimeByDay: 0,
  },
];

const initState: IStudyState = {
  studySession: initAllDayOfWeek,
  totalStudyTime: 0,
  date: null,
};
export default function studyReducer(
  state: IStudyState = initState,
  action: studyActions.IStudyAction | appActions.IAppAction,
): IStudyState {
  switch (action.type) {
    case studyActions.StudyActionType.START_STUDY:
      const newSession = handlerStudyTime(state.studySession);
      action.payload.callback({
        success: true,
        data: {recordId: newSession['id']},
      });

      const sessionRecord = newSession['records'];
      const sessionDayRecord = state.studySession.find(
        session => session.id === newSession['id'],
      );
      if (sessionDayRecord) {
        const updatedStudySession = state.studySession.map(session =>
          session.id === sessionDayRecord.id
            ? {...session, records: [...session.records, sessionRecord[0]]}
            : session,
        );

        return {...state, studySession: updatedStudySession};
      }
      return state;
    case studyActions.StudyActionType.STOP_STUDY:
      let shouldStopStudyEntity = state.studySession.filter(
        session => session.id === action.payload.params.recordId,
      )[0];
      const shouldStopStudy = handlerStopSession(shouldStopStudyEntity);
      const countTotalTimeByDay = getTotalStudiedTimeByDay(
        shouldStopStudy.records,
      );
      return {
        ...state,
        studySession: state.studySession.map(session =>
          session.id === action.payload.params.recordId
            ? shouldStopStudy
            : session,
        ),
      };
    case studyActions.StudyActionType.COUNT_TOTAL_STUDIED_TIME:
      return {
        ...state,
        totalStudyTime: getFinalStudyTime(state.studySession),
      };
    case studyActions.StudyActionType.GET_MONDAY_DATE:
      if (useHandlerStartDayOfWeek) {
        return {
          ...state,
          date: action.payload.params.date,
        };
      }
    case studyActions.StudyActionType.CLEAR_ALL_RECORD:
      return {
        ...state,
        studySession: initAllDayOfWeek,
      };
    case appActions.AppActionType.CLEAR_ALL_DATA:
      return initState;
    default:
      return state;
  }
}
