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

  return (
    <AccountScreenView cardAdded={cardAdded} totalStudyTime={totalStudyTime} />
  );
};

export default AccountScreen;
