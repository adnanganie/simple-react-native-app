import React, {Component} from 'react';
import {View, Image, StyleSheet, Text} from 'react-native';

class Splash extends Component {
  constructor() {
    super(this.props);
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
        <Text style={styles.text}>My App</Text>
        <Button
          title="Go to Login"
          onPress={() => this.navigation.navigate('Login')}
        />
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
