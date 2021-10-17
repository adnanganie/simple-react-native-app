import React, {Component} from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MyStack from './navigations/MyStack';

class App extends Component {
  render() {
    return <MyStack></MyStack>;
  }
}
export default App;
