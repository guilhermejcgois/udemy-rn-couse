import React from "react";
import { StyleSheet, Text } from 'react-native';

const mainText = props => (
  <Text style={styles.mainText}>{props.children}</Text>
);

const styles = StyleSheet.create({
  mainText: {
    backgroundColor: "transparent",
    color: "black"
  }
});

export default mainText;
