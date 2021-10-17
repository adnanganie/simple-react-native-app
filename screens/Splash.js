import React, {Component} from 'react';
import {View, Image, StyleSheet, Text, Button} from 'react-native';
import { LOGIN } from '../constants/routeNames';

class Splash extends Component {
  componentDidMount() {
    console.log('Mount');
    // this._interval = setInterval(() => {
    //   this.props.navigation.navigate('Login');
    // }, 4000);
  }

  componentWillUnmount() {
    console.log('Unmount');
    // clearInterval(this._interval);
  }

  render() {
    return (
      <View style={styles.logoContainer}>
        <Image
          source={{
            uri: 'https://reactnative.dev/img/tiny_logo.png',
            cache: 'only-if-cached',
          }}
          style={{width: 90, height: 90}}
        />
        <Text
          onPress={() => {
            this.props.navigation.navigate(LOGIN);
          }}
          style={styles.text}>
          My App
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  logoContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    padding: 8,
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
  },
});
export default Splash;
