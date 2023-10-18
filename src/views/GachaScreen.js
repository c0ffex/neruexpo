// src/screens/GachaScreen.js
import React from 'react';
import { View, StyleSheet } from 'react-native';
import ButtonGacha from '../components/ButtonGacha';
import CoinIcon from '../components/CoinIcon';
import CoinCount from '../components/CoinCount';

const GachaScreen = () => {
    // return (
    //     <View style={styles.container}>
    //       <ButtonGacha />
    //     </View>
    //   );
  return (
    <View style={styles.container}>
      <View style={styles.gachaSection}>
        <ButtonGacha />
        <View style={styles.coinSection}>
          <CoinIcon />
          <CoinCount count={100} /> 
          {/* //100 é apenas um placeholder */}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  gachaSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  coinSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 10,
  },
});

export default GachaScreen;
