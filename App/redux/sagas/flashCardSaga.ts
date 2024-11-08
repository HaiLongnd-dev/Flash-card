import {all, call, takeEvery, takeLatest} from 'redux-saga/effects';

import {checkWordApi} from '../../services/Apis/FlashCardApi';
import {CardActionType, ISearchAction} from '../actions/types/cardActionType';

function* checkWordSaga(action: ISearchAction) {
  try {
    const response = yield call(checkWordApi, action.payload.params.word);
    let word = response?.data[0]?.word || null;
    let phonetic = response?.data[0]?.phonetics[1]?.text || null;
    let meaning =
      response?.data[0]?.meanings[0]?.definitions[0]?.definition || null;
    let audio = response?.data[0]?.phonetics[0]?.audio || null;

    if (typeof phonetic === `string`) {
      action.payload.callback({
        success: true,
        data: {phonetic, meaning, word, audio},
      });
    } else {
      action.payload.callback({success: false});
    }
  } catch (error) {
    console.log('ERROR SAGA', error);
    action.payload.callback({success: false});
  }
}
function* watchCheckWordSaga() {
  yield takeEvery(CardActionType.SEARCH, checkWordSaga);
}
export default function* taskSagas() {
  yield all([watchCheckWordSaga()]);
}
