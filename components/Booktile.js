import { StyleSheet, Text, View, Image, TouchableNativeFeedback } from 'react-native';

// component aanmaken ipv alles voluit te schrijven
const Booktile = props => {
    return (
        <View style={styles.Booktile}>
            <View style={styles.tileDetail}>
                <Text style={styles.tileHeader}>{props.title}</Text>
                <Text style={styles.tileSub}>{props.Subtitle}</Text>
                <Text style={styles.tileText}>{props.Texttitle}</Text>
                <View style={styles.tileISBN}>

                    <Text> {props.ISBNtext}</Text>
                    <TouchableNativeFeedback>
                        <View>
                            <Text style={styles.button}>READ</Text>
                        </View>
                    </TouchableNativeFeedback>
                </View>

            </View>
        </View>
    )
}  // => staat voor u functon en je curcly brasses zijn u argumentenlijst
// dit is een functie die een naam returnd, onze component word weergegeven.