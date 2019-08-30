import actionTypes from '../actions/actionTypes';

const initialState = {
  isAuthenticated: false
};

const reducer = (state=initialState, action) => {
  let newState;

  switch(action.type) {
    case actionTypes.USER_AUTHENTICATION:
        newState = {
          isAuthenticated: action.payload
        };
        break;               
    default:
      newState = state;
  }

  return newState;
};

export default reducer;