import {
  StackActions,
  useNavigation,
  CommonActions,
} from '@react-navigation/native'

let _navigator

function setTopLevelNavigator(navigatorRef) {
  _navigator = navigatorRef
}

const navigate = (pageName, data) => {
  _navigator.dispatch(
    CommonActions.navigate({
      name: pageName,
      params: data,
    }),
  )
}
const back = () => {
  _navigator.dispatch({
    ...CommonActions.goBack(),
  })
}

const reset = (page, data) => {
  _navigator.dispatch(
    CommonActions.reset({
      index: 0,
      routes: [{name: page, params: data}],
    }),
  )
}

const pushScreen = (screen, params) => {
  return StackActions.push({
    name: screen,
    params,
  })
}

const popScreen = (index = 1) => {
  return StackActions.pop({
    n: index,
  })
}

export default {
  navigate,
  pushScreen,
  back,
  reset,
  popScreen,
  setTopLevelNavigator,
}
