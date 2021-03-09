/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';

import AppRouter from './src/router/AppRouter';
import {NavigationContainer} from '@react-navigation/native';
import {APP_COLOR} from './res/styles/AppStyles';
import {Provider} from 'react-redux';
import {store} from './src/redux';
import LoadingView from './src/components/LoadingView';
import NavigationService from "./src/redux/NavigationService";

const App = () => {
  return (
    <NavigationContainer
      ref={NavigationService.setTopLevelNavigator.bind(this)}
    >
      <Provider store={store}>
        <SafeAreaView
          style={{backgroundColor: APP_COLOR.PRIMARY}}
          forceInset={{top: 'never'}}
        />
        <StatusBar
          barStyle="light-content"
          backgroundColor={APP_COLOR.PRIMARY}
          translucent={false}
        />
        <AppRouter />
        <LoadingView />
      </Provider>
    </NavigationContainer>
  );
};

export default App;
