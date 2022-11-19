import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Booktile from './components/Booktile.js';

export default function App() {
  return (
    <View style={styles.container}>
      <Booktile title="test Title" subtitle="Subtitel Test" texttitle="" />
      <Booktile title="Ontwerpen 2" subtitle="YP0629" />
      <Booktile title="Communicatie 3" subtitle="YP0535" />
      <Booktile title="Communicatie 3" subtitle="YP0535" />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
