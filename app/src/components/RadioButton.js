import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import {APP_COLOR} from '../../res/styles/AppStyles';
import {checkPlatFormIpadTablet} from '../utils/Constant';

const RadioButton = (props) => {
  const {
    active,
    style,
    onPress,
    disabled,
    colorActive,
    colorInactive,
    colorDisabled,
  } = props;
  const _size = checkPlatFormIpadTablet() ? 30 : 25;
  const color = disabled
    ? colorDisabled || '#cfcfcf'
    : active
    ? colorActive || APP_COLOR.PRIMARY
    : colorInactive || '#CAD2C9';
  return (
    <TouchableOpacity onPress={() => onPress && onPress()} disabled={disabled}>
      <View
        style={Object.assign(
          {
            width: _size,
            height: _size,
            borderColor: color,
            borderStyle: 'solid',
            borderRadius: _size / 2,
            borderWidth: 2,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          },
          style,
        )}>
        <View
          style={{
            width: _size - 10,
            height: _size - 10,
            borderRadius: (_size - 10) / 2,
            padding: (_size - 10) / 4,
            backgroundColor: color,
            borderColor: color,
            borderStyle: 'solid',
          }}
        />
      </View>
    </TouchableOpacity>
  );
};

export default RadioButton;
