import React, { useState } from 'react';
import { Text, View, FlatList, StyleSheet, Button } from 'react-native';
const ColorScreen = () => {
  const [colors, setColors] = useState([]);
  return (
    <View>
      <View style={styles.buttonStyle}>
        <Button title="Add color" onPress={() => setColors([...colors, randomColor()])} />
      </View>
      <FlatList
        keyExtractor={color => color}
        data={colors}
        renderItem={({ item }) => {
          return <View style={
            {
              width: '60%',
              height: 100,
              backgroundColor: item,
              marginHorizontal: '20%',
              marginVertical:5
            }}></View>
        }}
      />
    </View>
  );
};

const randomColor = () => {
  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);
  return `rgb(${red}, ${green}, ${blue})`
}

const styles = StyleSheet.create({
  buttonStyle: {
    width: '60%',
    textAlign: 'center',
    marginHorizontal: '20%',
    marginVertical: 5,
  }
});

export default ColorScreen;