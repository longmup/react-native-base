import React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import PropTypes from 'prop-types';
import {APP_COLOR} from '../../res/styles/AppStyles';
import {checkPlatFormIpadTablet} from '../utils/Constant';
import {sizeFont, sizeWidth} from '../../res/styles/Sizes';

const BottomTabItem = ({icon, active, text}) => {
  let style = active ? styles.IconActive : styles.Icon;
  let styleText = !active ? styles.text : styles.textActive;

  return (
    <View style={{alignItems: 'center'}}>
      <Image resizeMode={'contain'} style={style} source={icon} />
      <Text style={styleText} children={text} />
    </View>
  );
};

BottomTabItem.propTypes = {
  icon: PropTypes.any,
  active: PropTypes.bool,
  text: PropTypes.string,
  styleContainer: PropTypes.object,
};

const styles = StyleSheet.create({
  Icon: {
    width: checkPlatFormIpadTablet() ? sizeWidth(4.3) : sizeWidth(5.3),
    height: checkPlatFormIpadTablet() ? sizeWidth(4.3) : sizeWidth(5.3),
    tintColor: APP_COLOR.BACKGROUND_COLOR_GRAY,
  },
  IconActive: {
    width: checkPlatFormIpadTablet() ? sizeWidth(4.3) : sizeWidth(5.3),
    height: checkPlatFormIpadTablet() ? sizeWidth(4.3) : sizeWidth(5.3),
    tintColor: APP_COLOR.PRIMARY,
  },
  text: {
    fontSize: checkPlatFormIpadTablet() ? sizeFont(2.4) : sizeFont(3),
    marginTop: sizeWidth(1),
    color: APP_COLOR.BACKGROUND_COLOR_GRAY,
  },
  textActive: {
    fontSize: checkPlatFormIpadTablet() ? sizeFont(2.4) : sizeFont(3),
    marginTop: sizeWidth(1),
    color: APP_COLOR.PRIMARY,
  },
});

export default BottomTabItem;
