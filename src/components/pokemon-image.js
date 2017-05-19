import React from 'react';
import { Image } from 'react-native';

import imgUrls from '../../res/img-urls.json';

const baseUrl = 'https://static.giantbomb.com/uploads/scale_small';
const normalise = str => str.toLowerCase().replace(/[^a-zA-Z0-9]/, '');

const makeUri = name => {
  const uri = `${baseUrl}${imgUrls[normalise(name)]}`;
  console.log(uri);
  return uri;
};

const PokemonImage = ({ name }) => (
  <Image style={styles.imageStyle} source={{uri: makeUri(name)}} resizeMode="contain" />
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
