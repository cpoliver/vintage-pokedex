import React from 'react';
import { Text, View } from 'react-native';

const Stat = ({ label, value }) => (
  <View style={styles.containerStyle}>
    <Text style={styles.labelStyle}>{label}: </Text>
    <Text style={styles.valueStyle}>{value}</Text>
  </View>
);

const styles = {
  containerStyle: {
    flexDirection: 'row',
    justifyContent: 'flex-start'
  },
  labelStyle: {
    fontWeight: 'bold',
    fontSize: 14
  },
  valueStyle: {
    fontSize: 14
  }
};

export default Stat;
