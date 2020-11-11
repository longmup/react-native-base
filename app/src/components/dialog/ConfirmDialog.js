import React from 'react';
import {View, StyleSheet, TouchableOpacity, Image} from 'react-native';
import Text from '../Text';
import ImageConstant from '../../../res/styles/Images';
import PropTypes from 'prop-types';
import DialogManager from 'react-native-dialog-component/src/index';
import {APP_COLOR} from '../../../res/styles/AppStyles';
import {checkPlatFormIpadTablet, HIT_SLOP} from '../../utils/Constant';
import {sizeFont, sizeHeight, sizeWidth} from '../../../res/styles/Sizes';

const ConfirmDialog = (props) => {
  const {
    confirmText,
    rejectText,
    title,
    content,
    styleTitle,
    styleContent,
    onConfirmClick,
    onRejectClick,
  } = props;

  const onHandleButtonConfirm = () => {
    DialogManager.dismiss();
    if (onConfirmClick) {
      onConfirmClick();
    }
  };

  const onHandleButtonReject = () => {
    DialogManager.dismiss();
    if (onRejectClick) {
      onRejectClick();
    }
  };

  return (
    <View style={styles.Container}>
      <Image source={ImageConstant.ic_warning} style={styles.image} />
      <View style={styles.viewContent}>
        <Text style={[styles.TitleText, styleTitle]}>{title}</Text>
        <Text multiline style={[styles.ContentText, styleContent]}>
          {content}
        </Text>
      </View>
      <View style={styles.ActionContainer}>
        <TouchableOpacity
          hitSlop={HIT_SLOP}
          onPress={() => onHandleButtonConfirm()}
          style={[
            styles.ActionWrapper,
            // eslint-disable-next-line react-native/no-inline-styles
            {marginLeft: sizeWidth(2), backgroundColor: '#FFAA00'},
          ]}>
          <Text style={styles.ActionText}>{confirmText}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.ActionWrapper,
            {
              backgroundColor: APP_COLOR.BACKGROUND_COLOR_GRAY,
              marginRight: sizeWidth(2),
            },
          ]}
          onPress={() => onHandleButtonReject()}>
          <Text
            style={[
              styles.ActionText,
              {color: APP_COLOR.BACKGROUND_COLOR_GRAY},
            ]}>
            {rejectText}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

ConfirmDialog.propTypes = {
  confirmText: PropTypes.string.isRequired,
  rejectText: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  onConfirmClick: PropTypes.func,
  onRejectClick: PropTypes.func,
  styleTitle: PropTypes.object,
  styleContent: PropTypes.object,
};

export default ConfirmDialog;

const styles = StyleSheet.create({
  Container: {
    alignItems: 'center',
    overflow: 'hidden',
    width: checkPlatFormIpadTablet() ? sizeWidth(70) : sizeWidth(80),
  },
  image: {
    width: checkPlatFormIpadTablet() ? sizeWidth(14) : sizeWidth(20),
    height: checkPlatFormIpadTablet() ? sizeWidth(14) : sizeWidth(20),
    marginTop: sizeHeight(3),
  },
  viewContent: {
    marginHorizontal: sizeWidth(3.2),
    marginTop: sizeWidth(3),
    marginBottom: sizeWidth(2),
    alignItems: 'center',
  },
  TitleText: {
    fontSize: checkPlatFormIpadTablet() ? sizeFont(4.6) : sizeFont(6),
    fontWeight: 'bold',
    marginBottom: 4,
    color: '#000000',
    textAlign: 'center',
  },
  ContentText: {
    fontSize: checkPlatFormIpadTablet() ? sizeFont(3) : sizeFont(4),
    color: APP_COLOR.TEXT_COLOR_GRAY,
    paddingBottom: sizeWidth(1),
  },
  ActionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: sizeHeight(2),
  },
  ActionWrapper: {
    flex: 1,
    padding: sizeWidth(3),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E2574C',
    marginHorizontal: sizeWidth(1),
    marginVertical: sizeWidth(3),
    borderRadius: sizeWidth(3),
  },
  ActionText: {
    color: 'white',
    fontSize: checkPlatFormIpadTablet() ? sizeFont(3) : sizeFont(3.8),
  },
});
