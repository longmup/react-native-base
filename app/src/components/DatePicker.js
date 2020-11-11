import React, {useState} from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import DateTimePicker from 'react-native-modal-datetime-picker';
import moment from 'moment';
import {checkPlatFormIpadTablet} from '../utils/Constant';
import {sizeFont, sizeWidth} from '../../res/styles/Sizes';
import AppText from './Text';

const DatePicker = (props) => {
  const {
    label,
    value,
    style,
    maximumDate,
    minimumDate,
    styleTextDate,
    onSelectDate,
  } = props;

  const [isDateTimePickerVisible, setIsDateTimePickerVisible] = useState(false);

  const handleDatePicked = (date) => {
    setIsDateTimePickerVisible(false);
    onSelectDate && onSelectDate(moment(new Date(date)).format('YYYY-MM-DD'));
  };

  return (
    <View style={[styles.container, style]}>
      {label && <AppText style={styles.label} children={label} />}
      <TouchableOpacity onPress={() => setIsDateTimePickerVisible(true)}>
        <View style={[styles.viewInput, styleTextDate]}>
          <AppText children={value} />
        </View>
      </TouchableOpacity>
      <DateTimePicker
        date={new Date(value.toString())}
        isVisible={isDateTimePickerVisible}
        onConfirm={(date) => handleDatePicked(date)}
        onCancel={() => setIsDateTimePickerVisible(false)}
        maximumDate={maximumDate}
        minimumDate={minimumDate}
      />
    </View>
  );
};

DatePicker.defaultProps = {
  label: null,
  value: null,
  style: {},
};

const styles = StyleSheet.create({
  container: {
    marginTop: sizeWidth(5),
  },
  viewInput: {
    height: checkPlatFormIpadTablet() ? sizeWidth(8) : sizeWidth(10),
    fontSize: sizeFont(3),
    backgroundColor: '#F6F6F6',
    borderRadius: sizeWidth(6),
    paddingHorizontal: sizeWidth(10),
    justifyContent: 'center',
  },
  textInput: {
    height: sizeWidth(40),
    fontSize: checkPlatFormIpadTablet() ? sizeFont(2.4) : sizeFont(3),
  },
  errorMessage: {
    fontSize: checkPlatFormIpadTablet() ? sizeFont(2.4) : sizeFont(3),
    color: '#F14949',
    textAlign: 'right',
  },
  label: {
    color: '#828282',
    fontSize: checkPlatFormIpadTablet() ? sizeFont(2.4) : sizeFont(3),
    marginBottom: sizeWidth(2),
  },
});

export default DatePicker;
