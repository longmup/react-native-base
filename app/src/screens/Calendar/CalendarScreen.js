import React from 'react';
import {StyleSheet, View} from 'react-native';
import AppText from '../../components/Text';

const CalendarScreen = (props) => {
  return (
    <View style={styles.container}>
      <AppText>Calendar Screen </AppText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default CalendarScreen;
