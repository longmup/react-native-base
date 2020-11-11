import {Platform} from 'react-native';
import DeviceInfo from 'react-native-device-info';
import ImageConstant from '../../res/styles/Images';

const checkPlatFormIpadTablet = () => {
  const isTablet = DeviceInfo.isTablet();
  return isTablet || Platform.isPad;
};

const HIT_SLOP = {top: 20, left: 20, bottom: 20, right: 20};

const EVENT_SOCKET = {
  SOCKET_CONNECT: 'SOCKET_CONNECT',
  ERROR: 'ERROR',
  UPDATE: 'UPDATE',
};

const routeName = {
  HOME: 'HOME',
  CALENDAR: 'CALENDAR',
  FILE: 'FILE',
  SETTING: 'SETTING',
  MAIN: 'MAIN',
};

const EVENT_EMIT_REGISTER = {
  NAVIGATE_SCREEN: 'NAVIGATE_SCREEN',
  LOGOUT: 'LOGOUT',
};

const ERROR_TEXT = {
  LOGIN_EMPTY: 'LOGIN_EMPTY',
  LOGIN_LENGTH: 'LOGIN_LENGTH',
  NETWORK_FAILED: 'NETWORK REQUEST FAILED',
  SERVER_FAILED: 'Unexpected token < in JSON at position 0',
  SERVER_FAILED_2: "JSON PARSE ERROR: UNRECOGNIZED TOKEN '<'",
  INVALID_TOKEN: 'INVALID_TOKEN',
  KEY_IS_LOGGING: 'KEY_IS_LOGGING',
  SYSTEM_ERROR: 'SYSTEM_ERROR',
  ACCESS_DENIED: 'ACCESS_DENIED',
};

export {
  checkPlatFormIpadTablet,
  HIT_SLOP,
  EVENT_EMIT_REGISTER,
  EVENT_SOCKET,
  ImageConstant,
  routeName,
  ERROR_TEXT,
};
