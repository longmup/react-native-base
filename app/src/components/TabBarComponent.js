import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  ScrollView,
} from 'react-native';
import React from 'react';
// import {connect} from 'react-redux';
import {getBottomSpace} from 'react-native-iphone-x-helper';
import {checkPlatFormIpadTablet} from '../utils/Constant';
import {sizeHeight, sizeWidth} from '../../res/styles/Sizes';

const TabBarComponent = (props) => {
  const {
    renderIcon,
    activeTintColor,
    inactiveTintColor,
    onTabPress,
    onTabLongPress,
    getAccessibilityLabel,
    navigation,
  } = props;
  const {routes, index: activeRouteIndex} = navigation.state;
  return (
    <View style={[styles.container]}>
      <ScrollView
        horizontal={true}
        style={{flex: 1, width: '100%'}}
        scrollEnabled={false}>
        {routes.map((route, routeIndex) => {
          const isRouteActive = routeIndex === activeRouteIndex;
          const tintColor = isRouteActive ? activeTintColor : inactiveTintColor;
          return (
            <TouchableWithoutFeedback
              key={routeIndex}
              onPress={() => {
                onTabPress({route});
              }}
              onLongPress={() => {
                onTabLongPress({route});
              }}
              accessibilityLabel={getAccessibilityLabel({route})}>
              <View style={styles.tabButton}>
                {renderIcon({route, focused: isRouteActive, tintColor})}
              </View>
            </TouchableWithoutFeedback>
          );
        })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: checkPlatFormIpadTablet() ? sizeHeight(10) : sizeHeight(8),
    paddingBottom: getBottomSpace(),
    paddingTop: sizeWidth(1),
    borderTopWidth: 1,
    borderTopColor: '#f0f0f0',
  },
  tabButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: sizeWidth(20),
  },
});

function mapStateToProps(state) {
  return {};
}

export default TabBarComponent;
// export default connect(mapStateToProps, {})(TabBarComponent);
