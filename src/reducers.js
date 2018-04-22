import { combineReducers } from "redux";

import { FETCH_STAR_WARS_SUCCESS } from "./types";

const initialState = {
  people: []
};

const peopleSuccess = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_STAR_WARS_SUCCESS:
      return {
        ...state,
        people: action.data
      };

    default:
      return state;
  }
};

export default combineReducers({ peopleSuccess });
