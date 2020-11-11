import Colors from './Colors';
import {sizeFont, sizeWidth} from './Sizes';
import {StyleSheet} from 'react-native';

export const APP_COLOR = {
  PRIMARY: Colors.green,
  BACKGROUND: Colors.grey93,
  LOADING_BACKGROUND: Colors.grey33,
  TOOL_BAR: Colors.green1,
  STATUS_BAR: Colors.green3,
  STATUS_BAR_OVERLAY: Colors.blue4,
  BOTTOM_TAB_BAR: Colors.grey85,
  ACTIVE_BOTTOM_TAB: Colors.green,
  INACTIVE_BOTTOM_TAB: Colors.grey50,
  OVERLAY: Colors.overlay,
  TEXT: Colors.black,
  TITLE: Colors.blue,
  APP_COLOR_GRAY: Colors.grey,
  BACKGROUND_COLOR_GRAY: Colors.grey,
  TEXT_COLOR_GRAY: Colors.grey,
};

export const APP_SIZE = {
  TEXT: sizeFont(3),
  TITLE: sizeFont(4),
  DIALOG_WIDTH: sizeWidth(80),
};
