import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const buttonWithBackground = props => (
  <TouchableOpacity onPress={props.onPress}>
    <View style=[{styles.button}, { backgroundColor: props.color }]>
      <Text>{props.children}</Text>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    borderColor: "black",
    borderRadius: 5,
    borderWidth: 1,
    margin: 5,
    padding: 10
  }
});

export default buttonWithBackground;
