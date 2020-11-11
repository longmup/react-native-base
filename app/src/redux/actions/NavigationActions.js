import {ACTION} from './index';

export const onChangeNavigation = (navigationRoute) => {
  return {
    type: ACTION.ON_CHANGE_NAVIGATION,
    payload: {
      navigationRoute,
    },
  };
};
