import React from 'react';
import { Text, View } from 'react-native';

const PokemonDetail = ({ name }) => (
    <View>
      <Text>{name}</Text>
    </View>
);

export default PokemonDetail;
