import React, { Component } from 'react';
import { ListView } from 'react-native';
import { connect } from 'react-redux';
import axios from 'axios';

import { Spinner } from './common';
import PokemonListItem from './PokemonListItem';

class PokemonList extends Component {
  componentWillMount() {
    const dataSource = new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2
    });

    this.dataSource = dataSource.cloneWithRows(this.props.pokemon);
  }

  renderRow(pokemon) {
    return <PokemonListItem {...pokemon} />;
  }

  render() {
    return (
      <ListView
        dataSource={this.dataSource}
        renderRow={this.renderRow}
      />
    );
  }
};

const mapStateToProps = ({ pokemon }) => ({ pokemon });

export default connect(mapStateToProps)(PokemonList);
