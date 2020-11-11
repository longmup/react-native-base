import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import AppText from '../../components/Text';

const SettingScreen = (props) => {
  return <AppText style={styles.container}>SettingScreen</AppText>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default SettingScreen;
