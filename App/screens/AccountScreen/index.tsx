import React from 'react';
import AccountScreenView from './view';
import {IGlobalState} from '../../redux/reducers';
import {useSelector} from 'react-redux';

const AccountScreen = () => {
  const selectAllCards = (state: IGlobalState) => state.card;
  const {cards} = useSelector(selectAllCards);
  const cardAdded = cards.length;

  const selectAllStudySession = (state: IGlobalState) =>
    state.study.studyHistory;
  const {studyRecord} = useSelector(selectAllStudySession);
  console.log('studyRecord======', studyRecord);
  // const studySession = studyState.map(item => item.studyHistory);

  return <AccountScreenView cardAdded={cardAdded} />;
};

export default AccountScreen;
