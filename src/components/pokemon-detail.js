import React from 'react';
import { Image, Text, View } from 'react-native';

import Card from './card';
import CardSection from './card-section';

const PokemonDetail = ({ name }) => (
  <Card>
    <CardSection>
      <View style={styles.headerContentStyle}>
        <Image source={require('../../res/pokeball.png')} style={styles.iconStyle} />
        <Text style={styles.titleStyle}>{name}</Text>
      </View>
    </CardSection>
  </Card>
);

const styles = {
  headerContentStyle: {
    alignItems: 'center',
    flexDirection: 'row'
  },
  iconStyle: {
    height: 24,
    marginRight: 10,
    width: 24
  },
  titleStyle: {
    fontSize: 18,
    fontWeight: 'bold'
  }
};

export default PokemonDetail;
