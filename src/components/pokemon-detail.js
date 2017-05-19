import React from 'react';
import { Image, Text, View } from 'react-native';

import Card from './card';
import CardSection from './card-section';
import PokemonImage from './pokemon-image';

const PokemonDetail = ({ name }) => {
  const { headerContentStyle, iconStyle, titleStyle } = styles;

  return (
    <Card>
      <CardSection>
        <View style={headerContentStyle}>
          <Image source={require('../../img/pokeball.png')} style={iconStyle} />
          <Text style={titleStyle}>{name}</Text>
        </View>
      </CardSection>

      <CardSection>
        <PokemonImage name={name} />
      </CardSection>
    </Card>
  );
};

const styles = {
  headerContentStyle: {
    alignItems: 'center',
    flexDirection: 'row'
  },
  iconStyle: {
    height: 24,
    marginRight: 10,
    width: 24
  },
  titleStyle: {
    fontSize: 18,
    fontWeight: 'bold'
  }
};

export default PokemonDetail;
