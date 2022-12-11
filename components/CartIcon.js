import { View, Image, StyleSheet } from 'react-native';


const CartIcon = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.tinyCart}
        source={require('../assets/3144456.png')}
      />
    </View>
  );
}

export default CartIcon;


const styles = StyleSheet.create({
    container: {
      paddingTop: 50,
    },
    tinyCart: {
      width: 50,
      height: 50,
    },
  });