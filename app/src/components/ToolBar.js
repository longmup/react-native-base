import React from 'react';
import {View, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import {APP_COLOR} from '../../res/styles/AppStyles';
import {sizeHeight} from '../../res/styles/Sizes';
import AppText from './Text';

const ToolBar = (props) => {
  const {
    LeftComponent,
    CenterComponent,
    RightComponent,
    title,
    center,
    right,
  } = props;
  if (title) {
    return (
      <View style={styles.toolBarContainer}>
        <Title title={title} />
      </View>
    );
  }
  return (
    <View style={styles.toolBarContainer}>
      <View style={styles.leftToolBar}>{LeftComponent}</View>
      <View style={styles.centerToolBar}>
        {center ? <Title title={center} /> : CenterComponent}
      </View>
      <View style={styles.rightToolBar}>
        {right ? <Title title={center} /> : RightComponent}
      </View>
    </View>
  );
};

const Title = (props) => <AppText>{props.title}</AppText>;

ToolBar.propTypes = {
  LeftComponent: PropTypes.element,
  CenterComponent: PropTypes.element,
  RightComponent: PropTypes.element,
  title: PropTypes.string,
  center: PropTypes.string,
  right: PropTypes.string,
};

const styles = StyleSheet.create({
  toolBarContainer: {
    height: sizeHeight(8),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: APP_COLOR.TOOL_BAR,
  },
  leftToolBar: {
    width: '15%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  rightToolBar: {
    width: '15%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  centerToolBar: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ToolBar;
