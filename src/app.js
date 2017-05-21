import React from 'react';
import { AppRegistry, View } from 'react-native';

import { Header } from './components/common';
import PokemonList from './components/PokemonList';

const App = () => (
  <View>
    <Header text="Pokédex Demo" />
    <PokemonList />
  </View>
);

export default App;
