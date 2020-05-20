import { combineReducers } from 'redux';

const INITIAL_STATE = {
  prop: null
};

const appReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'ACTION':
      return {
        ...state
      };
    default:
      return state;
  }
};

export default combineReducers({
  app: appReducer,
});
