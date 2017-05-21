import React from 'react';
import { Image, Linking, Text, View } from 'react-native';

import { Button, CardSection } from './common';
import PokemonImage from './PokemonImage';
import Stat from './Stat';

const PokemonDetail = ({ name, species, type, height, weight, image }) => {
  const { headerContentStyle, titleStyle, statContainerStyle } = styles;

  const wikiaUrl = `http://pokemon.wikia.com/wiki/${name}`;

  return (
    <View>
      <CardSection>
        <PokemonImage image={image} />
      </CardSection>

      <CardSection>
        <View style={statContainerStyle}>
          <Stat label="Species" value={species} />
          <Stat label="Height" value={height} />
          <Stat label="Weight" value={weight} />
        </View>
      </CardSection>

      <CardSection>
        <Button onPress={() => Linking.openURL(wikiaUrl)}>View on Wikia</Button>
      </CardSection>
    </View>
  );
};

const styles = {
  centerStatStyle: {
    marginLeft: 10,
    marginRight: 10
  },
  headerContentStyle: {
    alignItems: 'center',
    flexDirection: 'row'
  },
  statContainerStyle: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  titleStyle: {
    fontSize: 18,
    fontWeight: 'bold'
  }
};

export default PokemonDetail;
