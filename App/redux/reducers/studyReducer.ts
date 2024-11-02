import {TStudySession} from '../../types/Study';
import * as studyActions from '../actions/types/studyActionType';
import * as appActions from '../actions/types/appActionType';
import {
  getFinalStudyTime,
  handlerStopSession,
  handlerStudyTime,
} from '../helper/handlerStudyTime';
export interface IStudyState {
  studySession: TStudySession[];
  totalStudyTime: number;
}

const initAllDayOfWeek: TStudySession[] = [
  {
    id: 0,
    records: [],
    date: 'Monday',
    totalStudyByDate: 0,
  },
  {
    id: 1,
    records: [],
    date: 'Tuesday',
    totalStudyByDate: 0,
  },
  {
    id: 2,
    records: [],
    date: 'Wednesday',
    totalStudyByDate: 0,
  },
  {
    id: 3,
    records: [],
    date: 'Thursday',
    totalStudyByDate: 0,
  },
  {
    id: 4,
    records: [],
    date: 'Friday',
    totalStudyByDate: 0,
  },
  {
    id: 5,
    records: [],
    date: 'Saturday',
    totalStudyByDate: 0,
  },
  {
    id: 6,
    records: [],
    date: 'Sunday',
    totalStudyByDate: 0,
  },
];

const initState: IStudyState = {
  studySession: initAllDayOfWeek,
  totalStudyTime: 0,
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
      console.log('action.payload.params===', action.payload.params);
      const shouldStopStudy = handlerStopSession(shouldStopStudyEntity);

      console.log('shouldStopStudy', shouldStopStudy);
      console.log('current study time', state.totalStudyTime);
      // console.log("new total study time", state.totalStudyTime + getFinalStudyTime(state.studySession));

      return {
        ...state,
        studySession: state.studySession.map(session =>
          session.id === action.payload.params.recordId
            ? shouldStopStudy
            : session,
        ),
        // totalStudyTime: getFinalStudyTime(state.studySession),
      };
    case appActions.AppActionType.CLEAR_ALL_DATA:
      return initState;
    default:
      return state;
  }
}
