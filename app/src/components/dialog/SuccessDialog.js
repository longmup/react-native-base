import React from 'react';
import {StyleSheet, View, Image, TouchableOpacity} from 'react-native';
import {sizeFont, sizeHeight, sizeWidth} from '../../../res/styles/Sizes';
import {APP_COLOR} from '../../../res/styles/AppStyles';
import ImageConstant from '../../../res/styles/Images';
import AppText from '../Text';
import {checkPlatFormIpadTablet} from '../../utils/Constant';

const SuccessDialog = (props) => {
  const {successContent, onSuccess, buttonText, styleDescription} = props;
  return (
    <View style={styles.container}>
      <Image source={ImageConstant.ic_success} style={styles.image} />
      <AppText multiline style={[styles.titleText, styleDescription]}>
        {successContent || 'SUCCESS'}
      </AppText>
      <TouchableOpacity
        onPress={() => onSuccess && onSuccess()}
        style={styles.button}>
        <AppText style={styles.textButton}>{buttonText || 'CANCEL'}</AppText>
      </TouchableOpacity>
    </View>
  );
};

export default SuccessDialog;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    margin: sizeWidth(3.2),
  },
  titleText: {
    color: APP_COLOR.TEXT,
    fontSize: sizeFont(4),
    marginVertical: sizeWidth(4),
  },
  image: {
    width: checkPlatFormIpadTablet() ? sizeWidth(18) : sizeWidth(24),
    height: checkPlatFormIpadTablet() ? sizeWidth(18) : sizeWidth(24),
  },
  button: {
    backgroundColor: APP_COLOR.PRIMARY,
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
