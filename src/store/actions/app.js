import actionTypes from './actionTypes';

export const userHasAuthenticated = (authenticated) => {
  return {
    type: actionTypes.USER_AUTHENTICATION,
    payload: authenticated
  };
}
