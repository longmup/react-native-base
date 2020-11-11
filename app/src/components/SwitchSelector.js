import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {APP_COLOR} from '../../res/styles/AppStyles';
import AppText from './Text';
import {checkPlatFormIpadTablet} from '../utils/Constant';
import {sizeFont, sizeWidth} from '../../res/styles/Sizes';

const SwitchSelector = (props) => {
  const {
    data,
    style,
    buttonStyle,
    textStyle,
    value,
    onPress,
    styleButtonInActive,
  } = props;
  return (
    <View style={[styles.container, style]}>
      {data &&
        data.length > 0 &&
        data.map((item, index) => {
          const buttonInActive = [styles.button, styleButtonInActive];
          const styleButton =
            value === index ? styles.buttonActive : buttonInActive;
          const styleText = value === index ? styles.textActive : styles.text;
          return (
            <TouchableOpacity
              key={index}
              onPress={() => onPress && onPress(item)}
              style={[styleButton, buttonStyle]}>
              <AppText style={[styleText, textStyle]}>{item.label}</AppText>
            </TouchableOpacity>
          );
        })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: sizeWidth(6),
    padding: 1,
    height: sizeWidth(12),
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonActive: {
    backgroundColor: APP_COLOR.PRIMARY,
    borderRadius: sizeWidth(7),
    flex: 1,
    textAlign: 'center',
    height: '100%',
    justifyContent: 'center',
  },
  button: {
    flex: 1,
    backgroundColor: 'white',
    textAlign: 'center',
    borderRadius: sizeWidth(7),
    height: '100%',
    justifyContent: 'center',
  },
  text: {
    color: '#7C7C7C',
    fontSize: checkPlatFormIpadTablet() ? sizeFont(3) : sizeFont(5),
    textAlign: 'center',
  },
  textActive: {
    color: 'white',
    fontSize: checkPlatFormIpadTablet() ? sizeFont(3) : sizeFont(5),
    textAlign: 'center',
  },
});

export default SwitchSelector;
