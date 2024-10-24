import {all} from 'redux-saga/effects';
import flashCardSaga from './flashCardSaga';

export default function* rootSaga() {
  yield all([flashCardSaga()]);
}
