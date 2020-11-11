import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

const percentHeight = height / 100;
const percentWidth = width / 100;

export const sizeWidth = (percent) => {
  return (
    percent * (percentWidth < percentHeight ? percentWidth : percentHeight)
  );
};

export const sizeHeight = (percent) => {
  return (
    percent * (percentWidth > percentHeight ? percentWidth : percentHeight)
  );
};

export const sizeFont = (percent) => {
  return (
    percent * (percentWidth < percentHeight ? percentWidth : percentHeight)
  );
};
