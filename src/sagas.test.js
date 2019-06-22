import { call, put } from 'redux-saga/effects';

import { FETCH_STAR_WARS_SUCCESS } from './types';
import { fetchPeople } from './sagas';
import api from './api';

describe('fetchPeople generator', () => {
  const peopleGen = fetchPeople();

  it('Call api to fetch ', () => {
    expect(peopleGen.next().value).toEqual(
      call(api, 'https://swapi.co/api/people'),
    );
  });

  it('should return values from fetch', () => {
    const people = { results: [] };
    expect(peopleGen.next(people).value).toEqual(
      put({ type: FETCH_STAR_WARS_SUCCESS, data: people.results }),
    );
  });
});
