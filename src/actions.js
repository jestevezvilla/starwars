import { call, put, take } from "redux-saga/effects";

import {
  FETCH_CONFIRM,
  FETCH_STAR_WARS_REQUEST,
  FETCH_STAR_WARS_SUCCESS
} from "./types";

import api from "./api";

export const fetchStarWarsRequest = () => ({
  type: FETCH_STAR_WARS_REQUEST
});

export const confirmFetch = () => ({
  type: FETCH_CONFIRM
});

export function* fetchPeople(action) {
  try {
    yield take(FETCH_CONFIRM);
    const person = yield call(api, "https://swapi.co/api/people");
    yield put({ type: FETCH_STAR_WARS_SUCCESS, data: person.results });
  } catch (error) {
    console.log(error);
  }
}
