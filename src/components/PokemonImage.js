import React, { Component } from 'react';
import { Image, View } from 'react-native';

import { Spinner } from './common';

class PokemonImage extends Component {
  state = { loading: true };

  renderSpinner() {
    const { overlayStyle } = styles;

    return (
      <View style={overlayStyle}>
        <Spinner />
      </View>
    );
  }

  render() {
    const { containerStyle, imageStyle } = styles;
    const { image } = this.props;
    const { loading } = this.state;

    return (
      <View style={containerStyle}>
        <Image
          style={imageStyle}
          source={{uri: image}}
          resizeMode="contain"
          onLoad={() => this.setState({ loading: false })}
          onLoadStart={() => this.setState({ loading: true })}
        />
        {loading && this.renderSpinner()}
      </View>
    );
  }
}

const styles = {
  containerStyle: {
    flex: 1
  },
  imageStyle: {
    flex: 1,
    height: 180,
    margin: 20,
    width: null
  },
  overlayStyle: {
    backgroundColor: '#fff',
    bottom: 0,
    flex: 1,
    left: 0,
    position: 'absolute',
    right: 0,
    top: 0
  }
};

export default PokemonImage;
