import React from 'react';
import { AppRegistry, View } from 'react-native';

import Header from './src/components/Header';
import PokemonList from './src/components/PokemonList';

const App = () => (
  <View>
    <Header text="Pokédex Demo" />
    <PokemonList />
  </View>
);

AppRegistry.registerComponent('vintagePokedex', () => App);
