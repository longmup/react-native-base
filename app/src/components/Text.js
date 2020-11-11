import React from 'react';
import {Text, StyleSheet} from 'react-native';
import {APP_COLOR} from '../../res/styles/AppStyles';
import {checkPlatFormIpadTablet} from '../utils/Constant';
import {sizeFont} from '../../res/styles/Sizes';

const EMPTY = '';

const AppText = (props) => {
  const {
    style,
    numberOfLines,
    allowFontScaling,
    onPress,
    lineHeight,
    children,
    multiline,
  } = props;
  return (
    <Text
      numberOfLines={multiline ? numberOfLines : 1}
      ellipsizeMode="tail"
      onPress={onPress}
      allowFontScaling={allowFontScaling || false}
      lineHeight={lineHeight}
      style={[styles.Text, style]}>
      {children || EMPTY}
    </Text>
  );
};

const styles = StyleSheet.create({
  Text: {
    fontSize: checkPlatFormIpadTablet() ? sizeFont(2.8) : sizeFont(3.5),
    color: APP_COLOR.TEXT,
    backgroundColor: 'transparent',
  },
});

export default AppText;
