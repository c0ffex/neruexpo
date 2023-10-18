
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import ButtonGacha from '../components/ButtonGacha';
import GachaScreen from '../views/GachaScreen';

// Importe suas telas aqui
// import HomeScreen from '../screens/HomeScreen';
// import SettingsScreen from '../screens/SettingsScreen';

const Tab = createBottomTabNavigator();

function AppNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        {/* Exemplo de duas abas. Adicione mais abas conforme necessário */}
        <Tab.Screen name="Home" component={GachaScreen} />
        {/* <Tab.Screen name="Settings" component={ButtonGacha} /> */}
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
