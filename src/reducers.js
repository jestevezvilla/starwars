import { combineReducers } from 'redux';

const initialState = {
  people: [],
};

const peopleSuccess = (state = initialState, action) => {
  console.log(1, state);
  return {
    ...state,
    people: action.data,
  };
};

export default combineReducers({ peopleSuccess });
