import React from 'react';
import { Text } from 'react-native';

import Card from './card';
import CardSection from './card-section';

const PokemonDetail = ({ name }) => (
  <Card>
    <CardSection>
      <Text>{name}</Text>
    </CardSection>
  </Card>
);

export default PokemonDetail;
