import DialogManager, {
  ScaleAnimation,
} from 'react-native-dialog-component/src/index';
import {Keyboard, StyleSheet} from 'react-native';
import React from 'react';
import ConfirmDialog from '../components/dialog/ConfirmDialog';
import MessageDialog from '../components/dialog/MessageDialog';
import FailedDialog from '../components/dialog/FailedDialog';
import SuccessDialog from '../components/dialog/SuccessDialog';
import {checkPlatFormIpadTablet} from './Constant';
import {sizeWidth} from '../../res/styles/Sizes';
import {APP_COLOR} from '../../res/styles/AppStyles';

export default class DialogUtil {
  static dialogShown = false;

  static showConfirmDialog(
    title,
    content,
    confirmText,
    rejectText,
    onConfirmClick,
    onRejectClick,
    styleTitle,
    styleContent,
    disMissTouch,
  ) {
    DialogUtil.showDialog(
      styles.DialogStyle,
      checkPlatFormIpadTablet() ? sizeWidth(70) : sizeWidth(80),
      <ConfirmDialog
        title={title}
        content={content}
        confirmText={confirmText}
        rejectText={rejectText}
        styleTitle={styleTitle}
        styleContent={styleContent}
        onConfirmClick={() => {
          this.dialogShown = false;
          if (onConfirmClick) {
            onConfirmClick();
          }
        }}
        onRejectClick={() => {
          this.dialogShown = false;
          if (onRejectClick) {
            onRejectClick();
          }
        }}
      />,
      disMissTouch,
    );
  }

  static showMessageDialog(title, content, confirmText, onConfirmClick) {
    Keyboard.dismiss();
    DialogUtil.showDialog(
      styles.DialogStyle,
      checkPlatFormIpadTablet() ? sizeWidth(70) : sizeWidth(80),
      <MessageDialog
        title={title}
        content={content}
        confirmText={confirmText}
        onConfirmClick={() => {
          this.dialogShown = false;
          if (onConfirmClick) {
            onConfirmClick();
          }
        }}
      />,
      true,
    );
  }

  static showSuccessDialog(
    successContent,
    onSuccess,
    buttonText,
    styleDescription,
  ) {
    Keyboard.dismiss();
    DialogUtil.showDialog(
      styles.DialogStyle,
      checkPlatFormIpadTablet() ? sizeWidth(60) : sizeWidth(70),
      <SuccessDialog
        successContent={successContent}
        buttonText={buttonText}
        styleDescription={styleDescription}
        onSuccess={() => {
          onSuccess && onSuccess();
          this.dialogShown = false;
          this.dismiss();
        }}
      />,
      false,
    );
  }

  static showErrorDialog(errorContent, onFailed, buttonText) {
    Keyboard.dismiss();
    DialogUtil.showDialog(
      styles.DialogStyle,
      checkPlatFormIpadTablet() ? sizeWidth(60) : sizeWidth(70),
      <FailedDialog
        errorContent={errorContent}
        onFailed={() => {
          onFailed && onFailed();
          this.dialogShown = false;
          this.dismiss();
        }}
        buttonText={buttonText}
      />,
      false,
    );
  }

  static showDialog(dialogStyle, width, dialog, dismissOnTouchOutside) {
    if (this.dialogShown) {
      return;
    }
    this.dialogShown = true;
    DialogManager.show({
      animationDuration: 0,
      dismissOnTouchOutside: dismissOnTouchOutside,
      onDismissed: () => (this.dialogShown = false),
      width: width || sizeWidth(70),
      ScaleAnimation: new ScaleAnimation(),
      dialogStyle: dialogStyle || styles.DialogStyle,
      children: dialog,
    });
  }

  static dismiss() {
    DialogManager.dismiss();
  }
}

const styles = StyleSheet.create({
  DialogStyle: {
    borderRadius: sizeWidth(3),
    alignItems: 'center',
  },
  dialog: {
    borderRadius: sizeWidth(3),
    alignItems: 'center',
    backgroundColor: '#0F0F0F',
    opacity: 0.8,
  },
  dialogMarkHorse: {
    borderRadius: sizeWidth(3),
    borderWidth: 1,
    borderColor: APP_COLOR.BACKGROUND_COLOR_GRAY,
    marginLeft: sizeWidth(10),
    position: 'absolute',
    left: 40,
  },
  dialogChooseRace: {
    borderRadius: sizeWidth(3),
    borderWidth: 1,
    borderColor: APP_COLOR.BACKGROUND_COLOR_GRAY,
    marginLeft: sizeWidth(10),
    position: 'absolute',
    left: 70,
    top: 60,
  },
});
