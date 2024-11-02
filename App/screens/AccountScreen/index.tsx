import React from 'react';
import AccountScreenView from './view';
import {IGlobalState} from '../../redux/reducers';
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch} from '../../redux/store';
import {
  clearAllRecordAction,
  countTotalStudiedTimeAction,
} from '../../redux/actions/studyAction';

const AccountScreen = () => {
  const selectAllCards = (state: IGlobalState) => state.card;
  const {cards} = useSelector(selectAllCards);
  const cardAdded = cards.length;

  const dispatch = useDispatch<AppDispatch>();
  const getTotalStudiedTime = () => {
    dispatch(countTotalStudiedTimeAction);
  };
  const selectAllStudySession = (state: IGlobalState) => state.study;
  const {totalStudyTime} = useSelector(selectAllStudySession);

  const selectStudySessionByWeek = (state: IGlobalState) => state.study;
  const {studySession} = useSelector(selectStudySessionByWeek);
  const hasNewWeekStarted = date => {
    const today = new Date(date);

    const firstDayOfWeek = new Date(today);
    firstDayOfWeek.setDate(
      today.getDate() - (today.getDay() === 0 ? 6 : today.getDay() - 1),
    );

    return today >= firstDayOfWeek;
  };

  const checkDate = new Date();
  if (hasNewWeekStarted(checkDate)) {
    const clearAllRecord = () => {
      dispatch(clearAllRecordAction);
    };
    clearAllRecord();
  }
  return (
    <AccountScreenView
      cardAdded={cardAdded}
      totalStudyTime={totalStudyTime}
      getTotalStudiedTime={getTotalStudiedTime}
    />
  );
};

export default AccountScreen;
