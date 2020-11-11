import {combineReducers} from 'redux';
import {navigationReducer} from './NavigationReducer';
import {loadingReducer} from './LoadingReducer';
import {numberReducer} from './NumberReducer';

export default combineReducers({
  navigationState: navigationReducer,
  loadingState: loadingReducer,
  numberState: numberReducer,
});
