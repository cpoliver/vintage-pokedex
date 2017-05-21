import React from 'react';
import { Image } from 'react-native';

const PokemonImage = ({ image }) => (
  <Image style={styles.imageStyle} source={{uri: image}} resizeMode="contain" />
);

const styles = {
  imageStyle: {
    flex: 1,
    height: 180,
    margin: 40,
    width: null
  }
};

export default PokemonImage;
