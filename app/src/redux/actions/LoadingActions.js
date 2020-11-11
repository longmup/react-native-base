import {ACTION} from './index';

export const showLoading = () => {
  return {type: ACTION.SHOW_LOADING};
};

export const hideLoading = () => {
  return {type: ACTION.HIDE_LOADING};
};
