import { StyleSheet, Text, View, Image, TouchableNativeFeedback } from 'react-native';

// component aanmaken ipv alles voluit te schrijven
const Booktile = props => {
    return (
        <View style={styles.Booktile}>
            <View style={styles.tileDetail}>
                <Text style={styles.tileHeader}>{props.title}</Text>
                <Text style={styles.tileSub}>{props.Subtitle}</Text>
                <Text style={styles.tileText}>{props.Texttitle}</Text>
                <Text style={styles.tileISBN}>{props.ISBNtext}</Text>
                    <TouchableNativeFeedback>
                        <View>
                            <Text style={styles.button}>READ</Text>
                        </View>
                    </TouchableNativeFeedback>
            </View>
        </View>
    )
}  // => staat voor u functon en je curcly brasses zijn u argumentenlijst
// dit is een functie die een naam returnd, onze component word weergegeven.

export default Booktile;

const styles = StyleSheet.create({
    tile: {
      flexBasis: '46%',//200
      borderRadius: 5,
      borderColor: '#B4B8DA',
      borderWidth: 1,
      borderStyle: 'solid',
      marginVertical: '2%',
  
    },
    tileImage: {
      width: '100%',
      maxHeight: 110,
      overflow: 'hidden',
    },
    tileDetail: {
      padding: 10,
    },
    tileHeader: {
      fontSize: 22,
      fontWeight: '600',
    },
    tileText: {
      fontSize: 16,
      fontWeight: '500',
    }
  });