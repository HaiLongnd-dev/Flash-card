import React, {useEffect} from 'react';
import AccountScreenView from './view';
import {IGlobalState} from '../../redux/reducers';
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch} from '../../redux/store';
import {
  clearAllRecordAction,
  countTotalStudiedTimeAction,
} from '../../redux/actions/studyAction';
import {
  getTotalStudiedTime,
  getStudySessionsByWeek,
} from '../../redux/selectors/studySelector';

const AccountScreen = () => {
  const selectAllCards = (state: IGlobalState) => state.card;
  const {cards} = useSelector(selectAllCards);
  const cardAdded = cards.length;

  const dispatch = useDispatch<AppDispatch>();
  const getTotalTimeAction = () => {
    dispatch(countTotalStudiedTimeAction);
  };
  const totalStudyTime = useSelector(getTotalStudiedTime);
  const getStudySessions = useSelector(getStudySessionsByWeek);

  return (
    <AccountScreenView
      cardAdded={cardAdded}
      totalStudyTime={totalStudyTime}
      getTotalTimeAction={getTotalTimeAction}
    />
  );
};

export default AccountScreen;
