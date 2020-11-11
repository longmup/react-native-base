import {ACTION} from './index';

export const increaseNumber = (number) => ({
  type: ACTION.INCREMENT_ASYNC,
  number,
});

export const decreaseNumber = () => ({
  type: ACTION.DECREMENT,
});
