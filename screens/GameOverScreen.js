import { Image, StyleSheet, Text, View } from "react-native";
import Title from "../components/ui/Title";
import colors from "../constants/colors";

function GameOverScreen() {
    return(
    <View style={styles.screen}>
        <Title style={styles.text}>Game Over!</Title>
        
        <View style={styles.imageContainer}>

        <Image style={styles.image} source={require('../assets/images/success.png')} />
        </View>
    </View>
    );
}
export default GameOverScreen;
const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 12,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 24,
        marginVertical: 10,
        fontWeight: 'bold',
        color: 'red',
        textAlign: 'center',
        borderBottomWidth: 2,
        borderRadius: 10,
        borderColor: 'black',
        padding: 5,
    },
    imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: colors.steelBlue,
    overflow: 'hidden',
    margin:36,

    },
    image: {
        width: '100%',
        height: '100%',
    }

});
