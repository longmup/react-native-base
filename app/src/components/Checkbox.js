import React from 'react';
import {TouchableOpacity, StyleSheet, Image} from 'react-native';
import {APP_COLOR} from '../../res/styles/AppStyles';
import PropTypes from 'prop-types';
import {checkPlatFormIpadTablet, ImageConstant} from '../utils/Constant';
import {sizeWidth} from '../../res/styles/Sizes';

const Checkbox = (props) => {
  const {
    active,
    style,
    onPress,
    disabled,
    isCheckBox = true,
    colorInactive,
    colorBorder,
  } = props;
  const color = disabled
    ? '#cfcfcf'
    : active
    ? colorInactive || APP_COLOR.PRIMARY
    : colorBorder || '#8FAA97';
  const backgroundColor = disabled
    ? '#cfcfcf'
    : active
    ? colorInactive || APP_COLOR.PRIMARY
    : 'white';
  let styleContainer = Object.assign(
    {borderColor: color, backgroundColor},
    styles.container,
  );
  styleContainer = [styleContainer, style];
  return isCheckBox ? (
    <TouchableOpacity
      style={styleContainer}
      onPress={() => onPress && onPress()}
      disabled={disabled}
    />
  ) : (
    <TouchableOpacity
      style={styleContainer}
      onPress={() => onPress && onPress()}
      disabled={disabled}>
      {active ? (
        <Image
          resizeMode={'contain'}
          style={{
            width: checkPlatFormIpadTablet() ? 40 : 20,
            height: checkPlatFormIpadTablet() ? 40 : 20,
          }}
          source={ImageConstant.ic_checkbox}
        />
      ) : null}
    </TouchableOpacity>
  );
};

Checkbox.propTypes = {
  active: PropTypes.bool,
  disabled: PropTypes.bool,
  style: PropTypes.object,
  onPress: PropTypes.func,
};

const styles = StyleSheet.create({
  container: {
    width: checkPlatFormIpadTablet() ? sizeWidth(3) : sizeWidth(6),
    height: checkPlatFormIpadTablet() ? sizeWidth(3) : sizeWidth(6),
    borderRadius: 2,
    borderStyle: 'solid',
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Checkbox;
