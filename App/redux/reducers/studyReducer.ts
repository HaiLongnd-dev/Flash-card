import {TStudy} from '../../types/Study';
import * as actions from '../actions/types/studyActionType';
export interface IStudyState {
  studyState: TStudy[];
}

const initState: IStudyState = {studyState: []};
export default function studyReducer(
  state: IStudyState = initState,
  action: actions.IStudyAction,
): IStudyState {
  switch (action.type) {
    case actions.StudyActionType.START_STUDY:
      return {
        ...state,
        studyState: [
          ...state.studyState,
          {
            id: action.payload.params.id,
            startTime: action.payload.params.startTime,
            isStudying: true,
          },
        ],
      };

    case actions.StudyActionType.STOP_STUDY:
      if (
        state.studyState.some(session => session.id === action.payload.params)
      ) {
        const studySession = state.studyState.find(
          session => session.id === action.payload.params,
        );
        const endTime = Date.now();
        const studyTime = (endTime - studySession.startTime) / 1000;

        const today = new Date();
        const formatDate = `${today.getDate()}/${
          today.getMonth() + 1
        }/${today.getFullYear()}`;

        const updatedHistory = [
          ...(studySession.studyHistory || []),
          {
            date: formatDate,
            time: studyTime,
          },
        ];

        return {
          ...state,
          studyState: state.studyState.map(session =>
            session.id === action.payload.params
              ? {...session, isStudying: false, studyHistory: updatedHistory}
              : session,
          ),
        };
      }
      return state;

    default:
      return state;
  }
}
