import React, { useState } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
const CounterScreen = () => {
  const [count, setCount] = useState(0);
  return (
    <View>
      <View style={styles.buttonStyle}>
        <Button
          title="Increase" onPress={() => setCount(count + 1)} />
      </View>
      <View style={styles.buttonStyle}>
        <Button
          title="Decrease" onPress={() => setCount(count - 1)} />
      </View>
      <Text style={styles.text} > Counter value : {count} </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 40,
    textAlign: "center",
    padding: 10
  },
  buttonStyle: {
    width: '60%',
    textAlign: 'center',
    marginHorizontal: '20%',
    marginVertical: 5,
  }
});
export default CounterScreen;