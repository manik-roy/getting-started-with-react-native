import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import ColorAdjust from '../components/ColorAdjust';

const ColorAdjustScreen = () => {

  const [red, setRed] = useState(15);
  const [green, setGreen] = useState(15);
  const [blue, setBlue] = useState(15);

  const setColor = (color, change) => {
    switch (color) {
      case 'red':
        red + change > 255 || red + change < 0 ? null : setRed(red + change);
        return;

      case 'green':
        green + change > 255 || green + change < 0 ? null : setGreen(green + change);
        return;

      case 'blue':
        blue + change > 255 || blue + change < 0 ? null : setBlue(blue + change);
        return;

      default:
        return;
    }
  }

  return (
    <View>
      <ColorAdjust
        color="Red"
        onIncrease={() => setColor('red', 15)}
        onDecrease={() => setColor('red', -15)}
      />
      <ColorAdjust
        color="Green"
        onIncrease={() => setColor('green', 15)}
        onDecrease={() => setColor('green', -15)}
      />
      <ColorAdjust
        color="Blue"
        onIncrease={() => setColor('blue', 15)}
        onDecrease={() => setColor('blue', -15)}
      />
      <View style={{ ...style.color, backgroundColor: `rgb(${red}, ${green}, ${blue})` }} />
    </View>
  );
};

const style = StyleSheet.create({
  color: {
    width: '60%', height: 250, marginHorizontal: '20%'
  }
})

export default ColorAdjustScreen;