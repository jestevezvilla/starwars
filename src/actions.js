import { FETCH_CONFIRM, FETCH_STAR_WARS_REQUEST } from './types';

export const fetchStarWarsRequest = () => ({
  type: FETCH_STAR_WARS_REQUEST,
});

export const confirmFetch = () => ({
  type: FETCH_CONFIRM,
});
