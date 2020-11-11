import React from 'react';
import {StyleSheet, View, Image, TouchableOpacity} from 'react-native';
import AppText from '../Text';
import ImageConstant from '../../../res/styles/Images';
import {ERROR_TEXT, EVENT_EMIT_REGISTER} from '../../utils/Constant';
import {sizeFont, sizeHeight, sizeWidth} from '../../../res/styles/Sizes';
import EventRegister from '../../utils/EventRegister';

const _onGetTextError = (errorMessage) => {
  let result = errorMessage || 'ERROR';
  switch (errorMessage) {
    case ERROR_TEXT.NETWORK_FAILED:
      result = 'NETWORK_FAILED';
      break;
    case ERROR_TEXT.INVALID_TOKEN:
      result = 'INVALID_TOKEN';
      break;
    case ERROR_TEXT.KEY_IS_LOGGING:
      result = 'KEY_IS_LOGGING';
      break;
    case ERROR_TEXT.SYSTEM_ERROR:
      result = 'SYSTEM_ERROR';
      break;
    case ERROR_TEXT.ACCESS_DENIED:
      result = 'ACCESS_DENIED';
      break;
  }
  return result;
};

const FailedDialog = (props) => {
  const {errorContent, buttonText, onFailed} = props;

  const _handleButtonFailed = (error) => {
    try {
      if (error && error.toUpperCase() === ERROR_TEXT.INVALID_TOKEN) {
        EventRegister.emit(EVENT_EMIT_REGISTER.LOGOUT);
      }
    } catch (e) {}
    onFailed && onFailed();
  };

  return (
    <View style={styles.container}>
      <View style={styles.contentWrapper}>
        <Image source={ImageConstant.ic_error} style={styles.image} />
        <AppText multiline style={styles.titleText}>
          {_onGetTextError(errorContent && errorContent.toUpperCase())}
        </AppText>
        <TouchableOpacity
          onPress={(errorMessage) => _handleButtonFailed(errorMessage)}
          style={styles.button}>
          <AppText style={styles.textButton}>{buttonText || 'ERROR'}</AppText>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default FailedDialog;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    overflow: 'hidden',
  },
  contentWrapper: {
    paddingHorizontal: sizeWidth(3.2),
    paddingVertical: sizeWidth(3),
    alignItems: 'center',
  },
  image: {
    width: sizeWidth(20),
    height: sizeWidth(20),
  },
  titleText: {
    color: '#E2574C',
    fontSize: sizeFont(3.5),
    marginTop: sizeWidth(4),
    marginBottom: sizeWidth(4),
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#E2574C',
    fontSize: sizeFont(4.42),
    marginHorizontal: sizeWidth(14),
    borderRadius: 15,
    width: sizeWidth(40),
    height: sizeHeight(5),
    justifyContent: 'center',
    alignItems: 'center',
  },
  textButton: {
    color: 'white',
    textAlign: 'center',
  },
});
