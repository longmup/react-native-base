import {
  StackActions,
  useNavigation,
  CommonActions,
} from '@react-navigation/native';

export const navigateToPage = (pageName, data) => {
  return CommonActions.navigate({
    name: pageName,
    params: data,
  });
};
export const goBack = () => {
  return CommonActions.goBack();
};

export const resetPage = (page, data) => {
  return CommonActions.reset({
    index: 0,
    routes: [
      {
        name: page,
        params: data,
      },
    ],
  });
};

export const pushScreen = (screen, params) => {
  return StackActions.push({
    name: screen,
    params,
  });
};

export const popScreen = (index = 1) => {
  return StackActions.pop({
    n: index,
  });
};
