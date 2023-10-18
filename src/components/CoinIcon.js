import React from 'react';
import { Text, StyleSheet } from 'react-native';

const CoinIcon = () => {
  return <Text style={styles.icon}>💰</Text>;
}

const styles = StyleSheet.create({
  icon: {
    fontSize: 40,  // Ajuste este valor conforme necessário
  },
});

export default CoinIcon;
