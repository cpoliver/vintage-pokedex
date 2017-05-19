import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';

import PokemonDetail from './pokemon-detail';

class PokemonList extends Component {
  state = { pokemon: [] };

  componentWillMount() {
    axios.get('https://api.myjson.com/bins/spn2d')
      .then(response => this.setState({ pokemon: response.data }));
  }

  renderPokemon() {
    return this.state.pokemon.map(pokemon =>
      <PokemonDetail {...pokemon} key={pokemon.name} />
    );
  }

  render() {
    const { pokemon } = this.state;

    return (
      <ScrollView>
        {this.renderPokemon()}
      </ScrollView>
    );
  }
};

export default PokemonList;
