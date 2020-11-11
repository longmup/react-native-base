import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import AppText from '../../components/Text';
import {connect} from 'react-redux';
import Button from '../../components/Button';
import {hideLoading, showLoading} from '../../redux/actions/LoadingActions';
import Input from '../../components/Input';
import {sizeWidth} from '../../../res/styles/Sizes';
import RadioButton from '../../components/RadioButton';
import DialogUtil from '../../utils/DialogUtil';
import Checkbox from '../../components/Checkbox';
import DatePicker from '../../components/DatePicker';
import moment from 'moment';
import SwitchSelector from '../../components/SwitchSelector';
import ProgressBar from '../../components/ProgressBar';

const HomeScreen = ({showLoading, hideLoading}) => {
  const [radioActive, setRadioActive] = useState(false);
  const [checkBoxActive, setCheckBoxActive] = useState(false);
  const [startDate, setStartDate] = useState(
    moment(new Date()).format('YYYY-MM-DD'),
  );
  const [indexSwitchSelector, setIndexSwitchSelector] = useState(0);

  const onShowLoadingView = () => {
    showLoading();
    setTimeout(() => {
      hideLoading();
    }, 5000);
  };
  const onShowDialogSuccess = () => {
    DialogUtil.showSuccessDialog();
  };

  const listData = [{label: 'DEV'}, {label: 'STG'}, {label: 'PRO'}];
  return (
    <View style={styles.container}>
      <AppText>HomeScreen </AppText>
      <Button
        children={'Show Loading View'}
        onPress={() => onShowLoadingView()}
      />
      <Input style={{width: sizeWidth(50)}} />
      <RadioButton
        active={radioActive}
        onPress={() => setRadioActive(!radioActive)}
      />
      <Button children={'Show Dialog'} onPress={() => onShowDialogSuccess()} />
      <Checkbox
        active={checkBoxActive}
        onPress={() => setCheckBoxActive(!checkBoxActive)}
      />
      <DatePicker
        value={startDate}
        label={'Choose Date'}
        onSelectDate={(value) => setStartDate(value)}
        maximumDate={new Date()}
        styleTextDate={{marginLeft: sizeWidth(3)}}
      />
      <SwitchSelector
        data={listData}
        value={indexSwitchSelector}
        onPress={(item) =>
          setIndexSwitchSelector(
            listData.findIndex((a) => a.label === item.label),
          )
        }
      />
      <ProgressBar
        percent={70}
        style={{width: sizeWidth(80), marginTop: sizeWidth(2)}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default connect(null, {showLoading, hideLoading})(HomeScreen);
