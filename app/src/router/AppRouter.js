import {createStackNavigator} from '@react-navigation/stack';
import {APP_COLOR} from '../../res/styles/AppStyles';
import {BottomTabRouter} from './BottomTabRouter';
import React from 'react';
import {routeName} from '../utils/Constant';

const Stack = createStackNavigator();

const AppRouter = () => {
  return (
    <Stack.Navigator
      initialRouteName="Main"
      headerMode="none"
      cardStyle={{backgroundColor: APP_COLOR.BACKGROUND}}>
      <Stack.Screen name={routeName.MAIN} component={BottomTabRouter} />
    </Stack.Navigator>
  );
};

export default AppRouter;
