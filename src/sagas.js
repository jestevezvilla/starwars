import { call, put, takeLatest } from 'redux-saga/effects';

import api from './api';

import { FETCH_STAR_WARS_REQUEST, FETCH_STAR_WARS_SUCCESS } from './types';

export function* fetchPeople() {
  try {
    const person = yield call(api, 'https://swapi.co/api/people');
    yield put({ type: FETCH_STAR_WARS_SUCCESS, data: person.results });
  } catch (error) {
    console.log(error);
  }
}

function* mySaga() {
  yield takeLatest(FETCH_STAR_WARS_REQUEST, fetchPeople);
}

export default mySaga;
