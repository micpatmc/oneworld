import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Map from './components/Map';
import Header from './components/Header';
import AddButton from './components/AddButton';

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <Map />
      <AddButton />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});