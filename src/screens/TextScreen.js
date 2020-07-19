import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Text } from 'react-native';

const TextScreen = () => {
  const [name, setName] = useState('')
  return (
    <View>
      <Text style={styles.text}>Enter your name</Text>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        value={name}
        onChangeText={(updateValue) => setName(updateValue)}
        autoCorrect={false} />
      <Text style={styles.text}>Your name {name.toUpperCase()}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  input: {
    margin: 10,
    borderRadius: 10,
    borderWidth: 2,
    paddingLeft: 15,
    fontSize: 20,
    textAlign: "center",
  },
  text: {
    textAlign: "center",
    fontSize: 25
  }
});
export default TextScreen;