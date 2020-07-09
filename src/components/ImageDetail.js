import React from 'react';
import { Text, Image, View, StyleSheet } from 'react-native';
const ImageDetail = ({ title, src }) => {
  return (
    <View style={styles.imageStyle}>
      <Image source={src} />
      <Text style={{ textAlign: 'center', marginVertical: 5 }}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  imageStyle: {
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
  }
})
export default ImageDetail;