import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import BottomTabItem from '../components/BottomTabItem';
import React from 'react';
import HomeScreen from '../screens/Home/HomeScreen';
import CalendarScreen from '../screens/Calendar/CalendarScreen';
import FileScreen from '../screens/File/FileScreen';
import TabBarComponent from '../components/TabBarComponent';
import SettingScreen from '../screens/Setting/SettingScreen';
import {strings} from '../utils/Locales';
import {ImageConstant, routeName} from '../utils/Constant';

const BottomTab = createBottomTabNavigator();

export const BottomTabRouter = () => {
  return (
    <BottomTab.Navigator
      initialRouteName={routeName.HOME}
      backBehavior={'none'}
      tabBarPosition={'bottom'}
      swipeEnabled={true}
      screenOptions={({route}) => ({
        tabBarIcon: ({focused}) => {
          return (
            <BottomTabItem
              icon={getIconAndName(route.name).icon}
              text={getIconAndName(route.name).name}
              active={focused}
            />
          );
        },
      })}
      tabBarOptions={{
        style: {backgroundColor: 'transparent'},
        showLabel: false,
      }}>
      <BottomTab.Screen name={routeName.HOME} component={HomeScreen} />
      <BottomTab.Screen name={routeName.CALENDAR} component={CalendarScreen} />
      <BottomTab.Screen name={routeName.FILE} component={FileScreen} />
      <BottomTab.Screen name={routeName.SETTING} component={SettingScreen} />
    </BottomTab.Navigator>
  );
};

const getIconAndName = (name) => {
  switch (name) {
    case routeName.HOME: {
      return {
        icon: ImageConstant.ic_home_bottom,
        name: strings('tab_bar.home'),
      };
    }
    case routeName.FILE: {
      return {
        icon: ImageConstant.ic_home_bottom,
        name: strings('tab_bar.file'),
      };
    }
    case routeName.SETTING: {
      return {
        icon: ImageConstant.ic_home_bottom,
        name: strings('tab_bar.setting'),
      };
    }
    case routeName.CALENDAR: {
      return {
        icon: ImageConstant.ic_calendar_bottom,
        name: strings('tab_bar.calendar'),
      };
    }
  }
};
