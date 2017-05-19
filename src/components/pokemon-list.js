import React, { Component } from 'react';
import { Text, View } from 'react-native';
import axios from 'axios';

class PokemonList extends Component {
  state = { pokemon: [] };

  componentWillMount() {
    axios.get('https://api.myjson.com/bins/spn2d')
      .then(response => this.setState({ pokemon: response.data }));
  }

  renderPokemon() {
    return this.state.pokemon.map(pokemon =>
      <Text key={pokemon.name}>{pokemon.name}</Text>
    );
  }

  render() {
    const { pokemon } = this.state;

    return (
      <View>
        {this.renderPokemon()}
      </View>
    );
  }
};

export default PokemonList;
