import React, { Component } from 'react';
import { Text, View } from 'react-native';

import { CardSection } from './common';

class PokemonListItem extends Component {
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
    const { id, name, type } = this.props;
    const { containerStyle, nameTextStyle, numberTextStyle } = styles;

    return (
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

export default PokemonListItem;
