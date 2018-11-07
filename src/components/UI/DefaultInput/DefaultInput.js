import React from 'react';
import { StyleSheet, TextInput } from 'react-native';

const defaultInput = props => (
  <TextInput
    underlineColorAndroid="transparent"
    {...props}
    style={[styles.input, props.style]}
  />
);

const styles = StyleSheet.create({
  input: {
    borderColor: "#eee",
    borderWidth: 1,
    padding: 5,
    margin: 8,
    width: "100%"
  }
});

export default defaultInput;
