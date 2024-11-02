import {useDispatch, useSelector} from 'react-redux';
import {IGlobalState} from '../redux/reducers';
import {getStudyDate} from '../redux/selectors/studySelector';
import {AppDispatch} from '../redux/store';
import {getMondayAction} from '../redux/actions/studyAction';

interface useHandlerStartDayOfWeekProps {}
export const useHandlerStartDayOfWeek = (): boolean => {
  const date = useSelector(getStudyDate);
  const today = new Date();

  if (date === today) return false;

  if (date.getDate() === 1) {
    const dispatch = useDispatch<AppDispatch>();
    dispatch(getMondayAction(today));
    return true;
  }
};
