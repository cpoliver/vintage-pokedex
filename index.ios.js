import React from 'react';
import { AppRegistry, View } from 'react-native';

import Header from './src/components/header';
import PokemonList from './src/components/pokemon-list';

const App = () => (
  <View>
    <Header text="Pokémon" />
    <PokemonList />
  </View>
);

AppRegistry.registerComponent('vintagePokedex', () => App);
