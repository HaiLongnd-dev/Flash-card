import {useDispatch, useSelector} from 'react-redux';
import {getStudyDate} from '../redux/selectors/studySelector';
import {AppDispatch} from '../redux/store';
import {getMondayAction} from '../redux/actions/studyAction';

interface useHandlerStartDayOfWeekProps {}
export const useHandlerStartDayOfWeek = (): boolean => {
  const date = new Date(useSelector(getStudyDate));
  const today = new Date();
  const dispatch = useDispatch<AppDispatch>();
  if (date?.getDay() === today.getDay()) return false;
  else if (today.getDay() === 1) {
    dispatch(getMondayAction(today));
    return true;
  }
  return false;
};
