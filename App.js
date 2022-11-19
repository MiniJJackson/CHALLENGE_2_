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
      <Booktile title="Book title 1" Subtitle="by Lorem Lorem It" Texttitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquam vestibulum morbi blandit cursus risus at. Leo a diam sollicitudin tempor id eu nisl nunc mi." ISBNtext=""/>
      

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
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

    backgroundColor: '#B7E9F7',
    backgroundColor: "",
    alignItems: 'center',
    justifyContent: 'center',
    //maxHeight: '50px',
  },
});
