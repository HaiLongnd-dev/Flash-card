import {useDispatch, useSelector} from 'react-redux';
import {getStudyDate} from '../redux/selectors/studySelector';
import {AppDispatch} from '../redux/store';
import {getMondayAction} from '../redux/actions/studyAction';

interface useHandlerStartDayOfWeekProps {}
export const useHandlerStartDayOfWeek = (): boolean => {
  const date = useSelector(getStudyDate);
  const today = new Date();
  const dispatch = useDispatch<AppDispatch>();

  if (date?.toString() === today?.toString()) return false;

  if (today.getDate() === 1) {
    dispatch(getMondayAction(today));
    return true;
  }
  return false;
};
