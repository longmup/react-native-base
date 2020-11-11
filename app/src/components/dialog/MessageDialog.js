import React from 'react';
import {View, StyleSheet, TouchableOpacity, Image} from 'react-native';
import Text from '../Text';
import ImageConstant from '../../../res/styles/Images';
import PropTypes from 'prop-types';
import DialogManager from 'react-native-dialog-component/src/index';
import {sizeFont, sizeHeight, sizeWidth} from '../../../res/styles/Sizes';
import {APP_COLOR} from '../../../res/styles/AppStyles';
import {checkPlatFormIpadTablet} from '../../utils/Constant';

const MessageDialog = (props) => {
  const {
    confirmText,
    title,
    content,
    styleTitle,
    styleContent,
    onConfirmClick,
  } = props;

  const onButtonConfirm = () => {
    DialogManager.dismiss();
    if (onConfirmClick) {
      onConfirmClick();
    }
  };

  return (
    <View style={styles.Container}>
      <Image source={ImageConstant.ic_warning} style={styles.image} />
      <View style={styles.viewContent}>
        {title ? (
          <Text style={[styles.TitleText, styleTitle]}>{title}</Text>
        ) : (
          <></>
        )}
        <Text multiline style={[styles.ContentText, styleContent]}>
          {content}
        </Text>
      </View>
      <View style={styles.ActionContainer}>
        <TouchableOpacity
          style={styles.ActionWrapper}
          onPress={() => onButtonConfirm()}>
          <Text style={styles.ActionText}>{confirmText || 'OK'}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

MessageDialog.propTypes = {
  confirmText: PropTypes.string.isRequired,
  title: PropTypes.string,
  content: PropTypes.string.isRequired,
  onConfirmClick: PropTypes.func,
  onRejectClick: PropTypes.func,
  styleTitle: PropTypes.object,
  styleContent: PropTypes.object,
};

export default MessageDialog;

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
    marginVertical: sizeWidth(3),
    alignItems: 'center',
    justifyContent: 'center',
  },
  TitleText: {
    fontSize: checkPlatFormIpadTablet() ? sizeFont(4.6) : sizeFont(6),
    fontWeight: 'bold',
    marginBottom: sizeWidth(3),
    color: '#000000',
    textAlign: 'center',
  },
  ContentText: {
    fontSize: checkPlatFormIpadTablet() ? sizeFont(3) : sizeFont(3.5),
    color: APP_COLOR.TEXT_COLOR_GRAY,
    paddingBottom: sizeWidth(1),
    textAlign: 'center',
  },
  ActionContainer: {
    flexDirection: 'row',
    marginBottom: sizeHeight(2),
  },
  VerticalSeparator: {
    height: 1,
    width: sizeWidth(70) - 8,
    backgroundColor: '#DDDDDD',
  },
  HorizontalSeparator: {
    width: 1,
    backgroundColor: '#DDDDDD',
  },
  ActionWrapper: {
    flex: 1,
    padding: sizeWidth(3),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFAA00',
    marginHorizontal: sizeWidth(10),
    marginVertical: sizeWidth(3),
    borderRadius: sizeWidth(3),
  },
  ActionText: {
    color: 'white',
    textAlign: 'center',
    fontSize: checkPlatFormIpadTablet() ? sizeFont(3) : sizeFont(3.8),
  },
});
