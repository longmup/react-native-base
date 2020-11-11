import React, {Component} from 'react';
import {StyleSheet, View, Image, TouchableOpacity} from 'react-native';
import {APP_COLOR} from '../../../res/styles/AppStyles';
import ImageConstant from '../../../res/styles/Images';
import AppText from '../Text';
import {checkPlatFormIpadTablet} from '../../utils/Constant';
import {sizeFont, sizeHeight, sizeWidth} from '../../../res/styles/Sizes';

class SuccessConfirmDialog extends Component {
  render() {
    const {
      successContent,
      onSuccessOptionRight,
      onSuccessOptionLeft,
      buttonTextOptionRight,
      buttonTextOptionLeft,
    } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.contentWrapper}>
          <Image source={ImageConstant.ic_success} style={styles.image} />
          <AppText multiline style={styles.titleText}>
            {successContent || 'SUCCESS'}
          </AppText>
          <View style={styles.viewButton}>
            <TouchableOpacity
              onPress={() => onSuccessOptionLeft && onSuccessOptionLeft()}
              style={[styles.button, {marginRight: sizeWidth(2)}]}>
              <AppText style={styles.textButton}>
                {buttonTextOptionLeft || 'CONFIRM 1'}
              </AppText>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => onSuccessOptionRight && onSuccessOptionRight()}
              style={[styles.button, {marginLeft: sizeWidth(2)}]}>
              <AppText style={styles.textButton}>
                {buttonTextOptionRight || 'CONFIRM 2'}
              </AppText>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

export default SuccessConfirmDialog;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    overflow: 'hidden',
    position: 'relative',
  },
  contentWrapper: {
    paddingHorizontal: sizeWidth(3.2),
    paddingVertical: sizeWidth(3),
    alignItems: 'center',
  },
  titleText: {
    color: APP_COLOR.TEXT,
    fontSize: checkPlatFormIpadTablet() ? sizeFont(3) : sizeFont(4.5),
    marginTop: sizeWidth(2),
    marginBottom: sizeWidth(4),
  },
  image: {
    width: sizeWidth(40),
    height: sizeWidth(40),
  },
  viewButton: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginBottom: sizeWidth(3),
  },
  button: {
    backgroundColor: APP_COLOR.PRIMARY,
    fontSize: checkPlatFormIpadTablet() ? sizeFont(3) : sizeFont(4.42),
    borderRadius: 15,
    width: sizeWidth(30),
    height: sizeHeight(5),
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  textButton: {
    color: 'white',
    textAlign: 'center',
  },
});
