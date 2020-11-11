import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';
import {checkPlatFormIpadTablet} from '../utils/Constant';
import {APP_COLOR} from '../../res/styles/AppStyles';
import {sizeFont, sizeHeight, sizeWidth} from '../../res/styles/Sizes';
import AppText from './Text';

const Button = (props) => {
  const {children, style, textStyle, onPress, disabled} = props;
  const backgroundColor = disabled
    ? '#cfcfcf'
    : APP_COLOR.BACKGROUND_COLOR_GRAY;
  const styleButton = [
    styles.styleButton,
    {
      borderColor: backgroundColor,
      backgroundColor: backgroundColor,
    },
    style,
  ];
  return (
    <TouchableOpacity style={styleButton} onPress={onPress} disabled={disabled}>
      <AppText style={[styles.textInside, textStyle]}>{children}</AppText>
    </TouchableOpacity>
  );
};

Button.propTypes = {
  children: PropTypes.string,
  style: PropTypes.object,
  textStyle: PropTypes.object,
  disabled: PropTypes.bool,
  onPress: PropTypes.func,
};

const styles = StyleSheet.create({
  styleButton: {
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: sizeWidth(3),
    paddingHorizontal: sizeWidth(2),
    justifyContent: 'center',
    alignItems: 'center',
    height: checkPlatFormIpadTablet() ? sizeHeight(7) : sizeHeight(8),
    textAlign: 'center',
    fontSize: sizeFont(4.42),
  },
  textInside: {
    textAlign: 'center',
    color: 'white',
    fontSize: checkPlatFormIpadTablet() ? sizeFont(3.16) : sizeFont(4.16),
  },
});

export default Button;
