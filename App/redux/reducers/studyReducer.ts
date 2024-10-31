import { TStudySession } from '../../types/Study';
import * as actions from '../actions/types/studyActionType';
import { getFinalStudyTime, handlerStopSesstion, handlerStudyTime } from '../helper/handlerStudyTime';
export interface IStudyState {
  studySession: TStudySession[];
  totalStudyTime: number
}

const initAllDayOfWeek: TStudySession[] = [{
  id: 0,
  records: [],
  date: "Monday"
}, {
  id: 1,
  records: [],
  date: "Tuesday"
},
{
  id: 2,
  records: [],
  date: "Wednesday"
},
{
  id: 3,

  records: [],
  date: "Thursday"
},
{
  id: 4,
  records: [],
  date: "Friday"
},
{
  id: 5,
  records: [],
  date: "Saturday"
},
{
  id: 6,
  records: [],
  date: 'Sunday'
}
]

const initState: IStudyState = {
  studySession: initAllDayOfWeek,
  totalStudyTime: 0
};
export default function studyReducer(
  state: IStudyState = initState,
  action: actions.IStudyAction,
): IStudyState {
  switch (action.type) {
    case actions.StudyActionType.START_STUDY:
      const newSession = handlerStudyTime(state.studySession)
      action.payload.callback({ success: true, data: { recordId: newSession['id'] } })

      return {
        ...state,
        studySession: [...state.studySession, newSession],
      };

    case actions.StudyActionType.STOP_STUDY:
      let shouldStopStudyEntity = state.studySession.filter(
        session => session.id === action.payload.params.recordId,
      )[0]

      const shouldStopStudy = handlerStopSesstion(shouldStopStudyEntity)

      console.log("shouldStopStudyEntity", shouldStopStudyEntity);
      console.log("current study time", state.totalStudyTime);
      console.log("new total study time", state.totalStudyTime + getFinalStudyTime(state.studySession));

      return {
        ...state,
        studySession: state.studySession.map(session =>
          session.id === action.payload.params.recordId
            ? shouldStopStudy
            : session,
        ),
        totalStudyTime: getFinalStudyTime(state.studySession)
      }
      return state;

    default:
      return state;
  }
}
