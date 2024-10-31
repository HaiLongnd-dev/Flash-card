import { TStudySession } from '../../types/Study';
import * as actions from '../actions/types/studyActionType';
import { getFinalStudyTime, handlerStudyTime } from '../helper/handlerStudyTime';
export interface IStudyState {
  studySession: TStudySession[];
  totalStudyTime: number
}

const initState: IStudyState = {
  studySession: [],
  totalStudyTime: 0
};
export default function studyReducer(
  state: IStudyState = initState,
  action: actions.IStudyAction,
): IStudyState {
  switch (action.type) {
    case actions.StudyActionType.START_STUDY:
      const newSession = handlerStudyTime()
      action.payload.callback({ success: true, data: { recordId: newSession['id'] } })

      return {
        ...state,
        studySession: [...state.studySession, newSession],
      };

    case actions.StudyActionType.STOP_STUDY:
      let shouldStopStudyEntity = state.studySession.filter(
        session => session.id === action.payload.params.recordId,
      )[0]
      shouldStopStudyEntity.record.endTime = new Date()

      console.log("shouldStopStudyEntity", shouldStopStudyEntity);
      console.log("current study time", state.totalStudyTime);
      console.log("new total study time", state.totalStudyTime + getFinalStudyTime(shouldStopStudyEntity));

      return {
        ...state,
        studySession: state.studySession.map(session =>
          session.id === action.payload.params.recordId
            ? shouldStopStudyEntity
            : session,
        ),
        totalStudyTime: state.totalStudyTime + getFinalStudyTime(shouldStopStudyEntity)
      }
      return state;

    default:
      return state;
  }
}
