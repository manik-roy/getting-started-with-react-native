import React from "react";

import { Text, View, Button, TouchableOpacity, StyleSheet } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.text}>Programming hero cool  Support Team</Text>
      <View style={styles.buttonStyle}>
        <Button
          onPress={() => navigation.navigate("Component")} title="Go Components Screen" />
      </View>
      <View style={styles.buttonStyle}>
        <Button
          onPress={() => navigation.navigate("List")} title="Go to friends list" />
      </View>
      <View style={styles.buttonStyle}>
        <Button
          onPress={() => navigation.navigate("Image")} title="Go to Image" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
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

export default HomeScreen;
