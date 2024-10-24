import {all, call, put, takeEvery, takeLatest} from 'redux-saga/effects';

import {checkWordApi} from '../../services/Apis/FlashCardApi';
import {ICheckWordAction} from '../actions/types/wordActionType';
import {CardActionType, ISearchAction} from '../actions/types/cardActionType';

function* checkWordSaga(action: ISearchAction) {
  const response = yield call(checkWordApi, action.payload.params.word);
  console.log('response====', response);

  if (Array.isArray(response.data)) {
    action.payload.callback({success: true, data: response.data});
  } else {
    action.payload.callback({success: false});
  }
}
function* watchCheckWordSaga() {
  yield takeLatest(CardActionType.SEARCH, checkWordSaga);
}
export default function* taskSagas() {
  yield all([watchCheckWordSaga()]);
}
