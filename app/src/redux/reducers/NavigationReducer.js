import {ACTION} from '../actions';

export const navigationState = {
  navigationRoute: {
    prevRoute: null,
    currentRoute: null,
  },
};

export const navigationReducer = (state = navigationState, action) => {
  if (action.type === ACTION.ON_CHANGE_NAVIGATION) {
    return {...state, navigationRoute: action.payload.navigationRoute};
  } else {
    return state;
  }
};
