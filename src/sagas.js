import { takeLatest } from 'redux-saga/effects';

import { fetchPeople } from './actions';
import { FETCH_STAR_WARS_REQUEST } from './types';

function* mySaga() {
  yield takeLatest(FETCH_STAR_WARS_REQUEST, fetchPeople);
}

export default mySaga;
