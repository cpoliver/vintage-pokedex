import React from 'react';
import { FlatList, Image, Text, View } from 'react-native';

const renderItem = ({ item }) => {
  const { itemContainerStyle, pokeballContainerStyle, pokeballStyle, textContainerStyle, textStyle } = styles;

  return (
    <View style={itemContainerStyle}>
      <View style={pokeballContainerStyle}>
        <Image source={require('../../img/pokeball.png')} style={pokeballStyle} />
      </View>
      <View style={textContainerStyle}>
        <Text style={textStyle}>{item}</Text>
      </View>
    </View>
  );
};

const Pokedex = ({ pokedexEntries }) => {

  return (
    <FlatList
      data={pokedexEntries}
      renderItem={renderItem}
    />
  );
};

const styles = {
  itemContainerStyle: {
    alignItems: 'center',
    flexDirection: 'row'
  },
  pokeballContainerStyle: {
    flex: 0.5
  },
  pokeballStyle: {
    height: 24,
    width: 24
  },
  textContainerStyle: {
    flex: 6
  },
  textStyle: {
    margin: 5
  },
};

export default Pokedex;
