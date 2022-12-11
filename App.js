import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import Booktile from './components/Booktile.js';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.headingTitle}>
        <Text>Bookshop</Text>
        <Text>Bookshop</Text>
        <Image
        style={styles.cartIcon}
        source={require('../CHALLENGE_1/assets/cart/cartIcon.png')}
      />
      </View>
      <Booktile title="Book title 1" Subtitle="by Lorem Lorem It" Texttitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." ISBNtext="ISBN 978-8-2514-5842-1" />

      <Booktile title="Book title 2" Subtitle="by Lorem Dolor Em" Texttitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." ISBNtext="ISBN 145-1-2514-4125-2" />

      <Booktile title="Book title 3" Subtitle="by Lorem Dolor Em" Texttitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." ISBNtext="ISBN 145-1-2514-9125-3" />

      <Booktile title="Book title 4" Subtitle="by Lorem Dolor Em" Texttitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." ISBNtext="ISBN 185-9-2457-9159-4" />


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

    marginTop: 40,
    flexDirection: 'row',

    backgroundColor: '#B7E9F7',
    backgroundColor: "",
    alignItems: 'center',
    justifyContent: 'center',
    //maxHeight: '50px',
  },
  cartIcon: {
    width: '100%',
    maxHeight: 40,
  resizeMode: 'contain',
    overflow: 'hidden',
  }
});
