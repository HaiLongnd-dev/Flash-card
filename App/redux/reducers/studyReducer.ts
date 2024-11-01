import {TStudySession} from '../../types/Study';
import * as actions from '../actions/types/studyActionType';
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
  },
  {
    id: 1,
    records: [],
    date: 'Tuesday',
  },
  {
    id: 2,
    records: [],
    date: 'Wednesday',
  },
  {
    id: 3,

    records: [],
    date: 'Thursday',
  },
  {
    id: 4,
    records: [],
    date: 'Friday',
  },
  {
    id: 5,
    records: [],
    date: 'Saturday',
  },
  {
    id: 6,
    records: [],
    date: 'Sunday',
  },
];

const initState: IStudyState = {
  studySession: initAllDayOfWeek,
  totalStudyTime: 0,
};
export default function studyReducer(
  state: IStudyState = initState,
  action: actions.IStudyAction,
): IStudyState {
  switch (action.type) {
    case actions.StudyActionType.START_STUDY:
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
    case actions.StudyActionType.STOP_STUDY:
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
        // totalStudyTime: getFinalStudyTime(state.studySession)
      };
      return state;

    default:
      return state;
  }
}
