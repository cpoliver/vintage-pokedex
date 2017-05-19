import React from 'react';
import { Text } from 'react-native';

import Card from './card';

const PokemonDetail = ({ name }) => (
  <Card>
    <Text>{name}</Text>
  </Card>
);

export default PokemonDetail;
