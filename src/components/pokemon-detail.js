import React from 'react';
import { Image, Linking, Text, View } from 'react-native';

import Button from './button';
import Card from './card';
import CardSection from './card-section';
import PokemonImage from './pokemon-image';
import Stat from './stat';

const PokemonDetail = ({ name, species, type, height, weight }) => {
  const { headerContentStyle, iconStyle, titleStyle, statColumnStyle } = styles;

  const wikiaUrl = `http://pokemon.wikia.com/wiki/${name}`;

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

      <CardSection>
        <View style={statColumnStyle}>
          <Stat label="Type" value={type} />
          <Stat label="Species" value={species} />
        </View>
        <View style={statColumnStyle}>
          <Stat label="Height" value={height} />
          <Stat label="Weight" value={weight} />
        </View>
      </CardSection>

      <CardSection>
        <Button onPress={() => Linking.openURL(wikiaUrl)}>View on Wikia</Button>
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
  statColumnStyle: {
    flex: 1,
    justifyContent: 'space-around'
  },
  titleStyle: {
    fontSize: 18,
    fontWeight: 'bold'
  }
};

export default PokemonDetail;
