import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { connect } from 'react-redux';
import axios from 'axios';

import { Spinner } from './common';
import PokemonListItem from './PokemonListItem';

class PokemonList extends Component {
  renderItem(pokemon) {
    return <PokemonListItem {...pokemon} />;
  }

  render() {
    return (
      <FlatList
        data={this.props.pokemon}
        renderItem={this.renderItem}
      />
    );
  }
};

const mapStateToProps = ({ pokemon }) => ({ pokemon });

export default connect(mapStateToProps)(PokemonList);
