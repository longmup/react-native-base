import React from 'react';
import {StyleSheet, View, Image} from 'react-native';
import {sizeHeight, sizeWidth} from '../../res/styles/Sizes';
import {connect} from 'react-redux';
import {checkPlatFormIpadTablet, ImageConstant} from '../utils/Constant';

const LoadingView = ({loading}) => {
  if (loading) {
    return (
      <View style={styles.Loading}>
        <Image
          style={styles.image}
          resizeMode={'contain'}
          alt={''}
          source={ImageConstant.ic_loading}
        />
      </View>
    );
  }
  return <View />;
};

const styles = StyleSheet.create({
  Loading: {
    position: 'absolute',
    width: sizeWidth(100),
    height: sizeHeight(100),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00000033',
  },
  image: {
    width: checkPlatFormIpadTablet() ? sizeWidth(16) : sizeWidth(20),
    height: checkPlatFormIpadTablet() ? sizeWidth(16) : sizeWidth(20),
  },
});

const mapStateToProps = (state) => {
  return {
    loading: state.loadingState.loading,
  };
};
export default connect(mapStateToProps)(LoadingView);
