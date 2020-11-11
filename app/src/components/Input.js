import React from 'react';
import PropTypes from 'prop-types';
import {TextInput, StyleSheet} from 'react-native';
import {sizeFont, sizeHeight, sizeWidth} from '../../res/styles/Sizes';

/**
 * TextInput components
 * @name TextInput
 * @property {String} placeholder       Hint của Input
 * @property {Object} style             Style của Input
 * @property {Boolean} readOnly         Thuộc tính không cho chỉnh sửa text input
 * @property {Boolean} autoFocus        Thuộc tính tự động focus vào text input
 * @property {Boolean} multiline        Thuộc tính tự động xuống dòng trong text input
 * @property {String} secureTextEntry   Thể loại mật khẩu khi nhập text input
 * @property {String} keyboardType      Thể loại khi nhập text input
 * @property {function} onChangeText    Được gọi khi giá trị của Input thay đổi
 * @property {function} onEndEditing    Được gọi khi người dùng nhập xong text input
 * @property {function} onFocus         Được gọi khi người dùng click vào input
 * @property {String} value             Giá trị của Input khi được khởi tạo
 * @property {Number} maxLength         Số ký tự tối đa của Input
 */

const Input = (props) => {
  const {
    inputRef,
    secureTextEntry,
    placeholder,
    style,
    readOnly,
    autoFocus,
    multiline,
    value,
    defaultValue,
    keyboardType,
    maxLength,
    onChangeText,
    onEndEditing,
    onBlur,
    onFocus,
    autoCapitalize,
    onKeyPress,
  } = props;
  return (
    <TextInput
      ref={(r) => {
        inputRef && inputRef(r);
      }}
      defaultValue={defaultValue}
      value={value}
      style={[styles.styleInput, style]}
      onKeyPress={onKeyPress}
      autoFocus={autoFocus}
      multiline={multiline}
      autoCapitalize={autoCapitalize}
      placeholder={placeholder}
      placeholderTextColor={'#979797'}
      secureTextEntry={secureTextEntry}
      keyboardType={keyboardType}
      maxLength={maxLength}
      editable={!readOnly}
      onChangeText={(value) => onChangeText && onChangeText(value)}
      onBlur={() => onBlur && onBlur()}
      onEndEditing={() => {
        onEndEditing && onEndEditing();
      }}
      onFocus={() => {
        onFocus && onFocus();
      }}
    />
  );
};

const styles = StyleSheet.create({
  styleInput: {
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 28,
    padding: 7,
    paddingHorizontal: 8,
    borderColor: '#979797',
    height: sizeWidth(10),
    textAlign: 'center',
    fontSize: sizeFont(4.42),
  },
});

Input.propTypes = {
  ref: PropTypes.string,
  color: PropTypes.object,
  secureTextEntry: PropTypes.bool,
  placeholder: PropTypes.string,
  style: PropTypes.object,
  autoFocus: PropTypes.bool,
  multiline: PropTypes.bool,
  readOnly: PropTypes.bool,
  value: PropTypes.string,
  keyboardType: PropTypes.string,
  maxLength: PropTypes.number,
  onChangeText: PropTypes.func,
  onEndEditing: PropTypes.func,
  onBlur: PropTypes.func,
  onFocus: PropTypes.func,
};

export default Input;
