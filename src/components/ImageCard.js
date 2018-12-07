import React from 'react';
import { Text, Image, View, StyleSheet } from 'react-native';
import { w } from '../../constants';

const ImageCard = props => {
  const { cardContainer, imageContainer, h1, cover } = styles;
  return (
    <View style={cardContainer}>
      <View style={imageContainer}>
        <Image
          style={cover}
          source={{
            uri: props.uri
          }}
        />
      </View>
      <Text style={h1}>{props.text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    width: w / 2.2
  },
  imageContainer: {
    padding: 10,
    shadowColor: '#000',
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.5
  },
  h1: {
    fontSize: 18,
    alignSelf: 'center',
    textAlign: 'center',
    width: w / 2.5
  },
  cover: {
    width: w / 2.4,
    height: w * 0.63,
    borderRadius: 10
  }
});

export default ImageCard;
