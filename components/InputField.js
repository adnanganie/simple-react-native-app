import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';

const InputField = () => {
  return (
    <View style={styles.inputView}>
      <TextInput
        style={styles.inputText}
        placeholder="Email..."
        placeholderTextColor="#003f5c"
        onChangeText={text => this.setState({email: text})}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputView: {
    width: '80%',
    backgroundColor: '#465881',
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    justifyContent: 'center',
    padding: 20,
  },
  inputText: {
    height: 50,
    color: 'white',
  },
});

export default InputField;
