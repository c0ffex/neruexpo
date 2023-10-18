import React from 'react';
import { Text, StyleSheet } from 'react-native';

const CoinCount = ({ count }) => {
  return <Text style={styles.countText}>{count}</Text>;
}

const styles = StyleSheet.create({
  countText: {
    fontSize: 35,  // Ajuste este valor conforme necessário
  },
});

export default CoinCount;
