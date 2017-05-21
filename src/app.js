import React from 'react';
import { AppRegistry, View } from 'react-native';

import { Header } from './components/common';
import PokemonList from './components/PokemonList';

const App = () => (
  <View style={{ flex: 1 }}>
    <Header text="Pokédex Demo" />
    <PokemonList />
  </View>
);

export default App;
