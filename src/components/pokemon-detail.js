import React from 'react';
import { Image, Text, View } from 'react-native';

import Card from './card';
import CardSection from './card-section';

const PokemonDetail = ({ name }) => {
  const { headerContentStyle, iconStyle, titleStyle, imageStyle } = styles;

  return (
    <Card>
      <CardSection>
        <View style={headerContentStyle}>
          <Image source={require('../../res/pokeball.png')} style={iconStyle} />
          <Text style={titleStyle}>{name}</Text>
        </View>
      </CardSection>

      <CardSection>
        <Image source={require(`../../res/img/${name}.png`)} style={imageStyle} />
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
  imageStyle: {
    height: 200,
    width: 200
  },
  titleStyle: {
    fontSize: 18,
    fontWeight: 'bold'
  }
};

export default PokemonDetail;
