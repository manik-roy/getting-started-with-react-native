import React from 'react';
import { View, StyleSheet } from 'react-native';
import ImageDetail from '../components/ImageDetail';


const ImageScreen = () => {
  return (
    <View>
      <ImageDetail title="Forest" src={require('../../assets/forest.jpg')} />
      <ImageDetail title="Beach" src={require('../../assets/beach.jpg')} />
      <ImageDetail title="Mountain" src={require('../../assets/mountain.jpg')} />
    </View>
  );
};

const styles = StyleSheet.create({

})

export default ImageScreen;