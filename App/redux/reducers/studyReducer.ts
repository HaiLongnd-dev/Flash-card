import {TStudyHistory, TStudySession} from '../../types/Study';
import * as actions from '../actions/types/studyActionType';
export interface IStudyState {
  studySession: TStudySession[];
  studyHistory: TStudyHistory;
}

const initState: IStudyState = {
  studySession: [],
  studyHistory: {
    totalStudyTime: 0,
    studyRecord: [],
  },
};
export default function studyReducer(
  state: IStudyState = initState,
  action: actions.IStudyAction,
): IStudyState {
  switch (action.type) {
    case actions.StudyActionType.START_STUDY:
      return {
        ...state,
        studySession: [...state.studySession, action.payload.params.session],
      };

    case actions.StudyActionType.STOP_STUDY:
      if (
        state.studySession.some(
          session => session.id === action.payload.params.session.id,
        )
      ) {
        const studySession = state.studySession.find(
          session => session.id === action.payload.params.session.id,
        );
        const endTime = Date.now();
        const timeStudied = Math.floor(
          (endTime - studySession.startTime) / 1000 / 3600,
        );
        const totalStudied = state.studyHistory.studyRecord.reduce(
          (acc, session) => acc + (session.timeStudied || 0),
          0,
        );

        const updatedStudyRecord = state.studyHistory.studyRecord.map(record =>
          record.date === studySession.date
            ? {...record, timeStudied: record.timeStudied + timeStudied}
            : record,
        );

        if (
          !updatedStudyRecord.some(record => record.date === studySession.date)
        ) {
          updatedStudyRecord.push({
            date: studySession.date,
            timeStudied: timeStudied,
          });
        }

        return {
          ...state,
          studySession: state.studySession.map(session =>
            session.id === action.payload.params.session.id
              ? {...session, isStudying: false}
              : session,
          ),
          studyHistory: {
            totalStudyTime: totalStudied,
            studyRecord: updatedStudyRecord,
          },
        };
      }
      return state;

    default:
      return state;
  }
}
