import React from 'react';
import { StyleSheet, Text } from 'react-native';

const headingText = props => (
  <Text {...props} style={[styles.textHeading, props.style]}>{props.children}</Text>
);

const styles = StyleSheet.create({
  textHeading: {
    fontWeight: "bold",
    fontSize: 28
  }
});

export default headingText;
