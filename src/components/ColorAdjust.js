import React from 'react';
import { View, Button, Text, StyleSheet } from 'react-native';

const ColorAdjust = ({ color, onIncrease, onDecrease }) => {
  return (
    <View>
      <Text style={style.text}>{color}</Text>
      <View style={style.buttonStyle}>
        <Button onPress={() => onIncrease()} title={`Increase ${color}`} />
      </View>
      <View style={style.buttonStyle}>
        <Button onPress={() => onDecrease()} title={`Decrease ${color}`} />
      </View>
    </View>
  );
};


const style = StyleSheet.create({
  text: {
    textAlign: 'center',
    fontWeight: "800",
    fontStyle: "italic",
    fontSize: 35

  },
  buttonStyle: {
    width: '60%',
    textAlign: 'center',
    marginHorizontal: '20%',
    marginVertical: 5,
  }
})

export default ColorAdjust;