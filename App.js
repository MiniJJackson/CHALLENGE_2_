import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Booktile from './components/Booktile.js';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.headingTitle}>
        <Text>Bookshop</Text>
        <Text>CART</Text>
      </View>
      <Booktile title="test Title" subtitle="Subtitel Test" texttitle="" />
      <Booktile title="test TEST" subtitle="Subtitel Test" texttitle="" />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#B7E9F7',
    //alignItems: 'center',
    //justifyContent: 'center',
  },
  headingTitle: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    flexGrow: 0,
    flexShrink: 0,
    justifyContent: 'space-evenly',
    
    backgroundColor: "#fff",
    alignItems: 'center',
    justifyContent: 'center',
    maxHeight: '50px',
  },
});
