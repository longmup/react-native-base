import {ACTION} from '../actions';

export const loadingState = {
  loading: false,
};

export const loadingReducer = (state = loadingState, action) => {
  switch (action.type) {
    case ACTION.SHOW_LOADING:
      return {...state, loading: true};
    case ACTION.HIDE_LOADING:
      return {...state, loading: false};
    default:
      return state;
  }
};
