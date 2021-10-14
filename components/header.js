import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import InputField from './InputField';

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.textView}>My App</Text>
      <View>
        <InputField></InputField>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 48,
    padding: 12,
    textAlign: 'center',
    backgroundColor: '#f46673',
  },
  textView: {
    fontWeight: 'bold',
    color: 'white',
  },
});

export default Header;
