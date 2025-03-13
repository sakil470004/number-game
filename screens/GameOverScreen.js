import { StyleSheet, Text, View } from "react-native";

function GameOverScreen() {
    return(
    <View style={styles.screen}>
        <Text style={styles.text}>Game Over</Text>
    </View>
    );
}
export default GameOverScreen;
const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 12,
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
    }
});
