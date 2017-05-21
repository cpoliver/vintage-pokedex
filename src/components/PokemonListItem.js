import React, { Component } from 'react';
import { LayoutAnimation, Text, TouchableWithoutFeedback, View } from 'react-native';
import { connect } from 'react-redux';

import { selectPokemon } from '../actions';
import { CardSection } from './common';
import PokemonDetail from './PokemonDetail';

class PokemonListItem extends Component {
  componentWillUpdate() {
    LayoutAnimation.easeInEaseOut();
  }

  renderDetail() {
    const { expanded } = this.props;

    if (expanded) {
      return <PokemonDetail {...this.props.item} />;
    }
  }

  renderType(type) {
    const { typeTextStyle } = styles;

    return <Text key={type} style={typeTextStyle}>{type.toUpperCase()}</Text>;
  }

  renderTypes(types) {
    const { typeContainerStyle } = styles;

    return (
      <View style={typeContainerStyle}>
        {types.map(this.renderType)}
      </View>
    );
  }

  render() {
    const { id, name, type } = this.props.item;
    const { containerStyle, nameTextStyle, numberTextStyle } = styles;

    return (
      <TouchableWithoutFeedback onPress={() => this.props.selectPokemon(id)}>
        <View>
          <CardSection style={containerStyle}>
            <View style={{ alignSelf: 'center', flex: 0.75 }}>
              <Text style={numberTextStyle}>#{id}</Text>
            </View>
            <View style={{ alignSelf: 'center', flex: 2 }}>
              <Text style={nameTextStyle}>{name}</Text>
            </View>
            <View style={{ alignSelf: 'center', flex: 2 }}>
              {this.renderTypes(type)}
            </View>
          </CardSection>
          {this.renderDetail()}
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = {
  containerStyle: {
    alignItems: 'center'
  },
  nameTextStyle: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  numberTextStyle: {
    color: '#c82b1d'
  },
  typeContainerStyle: {
    flexDirection: 'row'
  },
  typeTextStyle: {
    borderColor: '#aaa',
    borderWidth: 1,
    borderRadius: 8,
    color: '#aaa',
    fontSize: 9,
    fontWeight: 'bold',
    marginRight: 10,
    padding: 3,
    paddingLeft: 5
  }
};

const mapStateToProps = ({ selectedPokemonId }, { item }) => ({
  expanded: selectedPokemonId === item.id
});

export default connect(mapStateToProps, { selectPokemon })(PokemonListItem);
