import React from 'react';
import { AppRegistry, View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import reducers from './reducers';
import { Header } from './components/common';
import PokemonList from './components/PokemonList';

const App = () => (
  <Provider store={createStore(reducers)}>
    <View style={{ flex: 1 }}>
      <Header text="Pokédex Demo" />
      <PokemonList />
    </View>
  </Provider>
);

export default App;
