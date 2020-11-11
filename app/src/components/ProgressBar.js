import React from 'react';
import {View, StyleSheet} from 'react-native';
import {APP_COLOR} from '../../res/styles/AppStyles';
import {sizeFont, sizeHeight} from '../../res/styles/Sizes';

const ProgressBar = (props) => {
  const {style, percent, color} = props;
  const backgroundColor = color || APP_COLOR.PRIMARY;
  return (
    <View style={[style, styles.container]}>
      <View style={[{width: `${percent}%`, backgroundColor}, styles.child]} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: APP_COLOR.APP_COLOR_GRAY,
    position: 'relative',
    height: sizeHeight(2),
    borderRadius: 10,
    textAlign: 'center',
  },
  child: {
    flex: 1,
    borderRadius: 10,
    textAlign: 'center',
  },
  text: {
    color: 'white',
    textAlign: 'center',
    fontSize: sizeFont(3.5),
  },
});
export default ProgressBar;
