import {ACTION} from '../actions';

const numberState = {
  number: 0,
};

export const numberReducer = (state = numberState, action) => {
  switch (action.type) {
    case ACTION.INCREMENT:
      return {...state, number: state.number + action.number};
    // case ACTION_INCREMENT_ASYNC:
    //   return {...state, number: action.number}
    case ACTION.DECREMENT:
      return {...state, number: state.number - 1};
    default:
      return state;
  }
};
