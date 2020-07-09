import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ComponentScreen = () => {
  const name = 'Manik Roy';
  return (
    <View>
      <Text style={styles.textStyle}>
        Programming hero cool - Support Team.
      </Text>
      <Text style={styles.nameStyle}>My nam is  {name} </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
    textAlign: 'center'
  },
  nameStyle: {
    fontWeight: '800',
    textAlign: 'center'
  }
})

export default ComponentScreen;