import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ButtonGacha from './src/components/ButtonGacha';
import AppNavigator from './src/navigation/AppNavigator';

export default function App() {
  return (
    
   <AppNavigator />
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
