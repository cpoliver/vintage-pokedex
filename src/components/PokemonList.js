import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';

import { Spinner } from './common';
import PokemonDetail from './PokemonDetail';

class PokemonList extends Component {
  state = {
    loading: true,
    pokemon: []
  };

  componentWillMount() {
    axios.get('https://api.myjson.com/bins/spn2d')
         .then(response => this.setState({
           loading: false,
           pokemon: response.data
         }));
  }

  renderPokemon() {
    if (this.state.loading) {
      return <Spinner />
    }

    return this.state.pokemon.map(pokemon =>
      <PokemonDetail {...pokemon} key={pokemon.name} />
    );
  }

  render() {
    const { loading, pokemon } = this.state;
    const style = loading ? { flex: 1 } : {};

    return (
      <ScrollView contentContainerStyle={style}>
        {this.renderPokemon()}
      </ScrollView>
    );
  }
};

export default PokemonList;
