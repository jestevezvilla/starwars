import { call, put } from 'redux-saga/effects';

import { FETCH_STAR_WARS_REQUEST, FETCH_STAR_WARS_SUCCESS } from './types';

const api = url => fetch(url).then(response => response.json());

export const fetchStarWarsRequest = () => ({
  type: FETCH_STAR_WARS_REQUEST,
});

export function* fetchPeople(action) {
  try {
    const person = yield call(api, 'https://swapi.co/api/people');
    console.log(4444, person.results);
    yield put({ type: FETCH_STAR_WARS_SUCCESS, data: person.results });
  } catch (error) {
    console.log(error);
  }
}
