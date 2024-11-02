import React from 'react';
import AccountScreenView from './view';
import {IGlobalState} from '../../redux/reducers';
import {useSelector} from 'react-redux';

const AccountScreen = () => {
  const selectAllCards = (state: IGlobalState) => state.card;
  const {cards} = useSelector(selectAllCards);
  const cardAdded = cards.length;

  const selectAllStudySession = (state: IGlobalState) => state.study;
  const {totalStudyTime} = useSelector(selectAllStudySession);

  const selectStudySessionByWeek = (state: IGlobalState) => state.study;
  const {studySession} = useSelector(selectStudySessionByWeek);
  const studyRecord = studySession.find(item => item.date === 'Friday');
  console.log('studySession===', studySession);
  console.log('studyRecord====', studyRecord.records);
  return (
    <AccountScreenView cardAdded={cardAdded} totalStudyTime={totalStudyTime} />
  );
};

export default AccountScreen;
