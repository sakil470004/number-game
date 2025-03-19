import { Dimensions, Image, ScrollView, StyleSheet, Text, View, useWindowDimensions } from "react-native";
import Title from "../components/ui/Title";
import colors from "../constants/colors";
import PrimaryButton from "../components/ui/PrimaryButton";

function GameOverScreen({ roundNumber, userNumber, onStartNewGame }) {
    const { width, height } = useWindowDimensions();
    let imageSize = 300;
    if (width < 380) {
        imageSize = 150;
    }
    if (height < 400) {
        imageSize = 80;
    }
    const imageStyle = {
        width: imageSize,
        height: imageSize,
        borderRadius: imageSize / 2,
    }
    return (
        <ScrollView style={{ flex: 1 }}>
            <View style={styles.screen}>
                <Title style={styles.text}>Game Over!</Title>

                <View style={[styles.imageContainer, imageStyle]}>

                    <Image style={styles.image} source={require('../assets/images/success.png')} />
                </View>
                <Text style={styles.summeryText}>Your Phone Needed <Text style={styles.highlight}>{roundNumber}</Text> round to guess the Number <Text style={styles.highlight}>{userNumber}</Text></Text>
                <PrimaryButton onPress={onStartNewGame} >New Game</PrimaryButton>
            </View>
        </ScrollView>
    );
}
export default GameOverScreen;
// const deviceWidth = Dimensions.get('window').width;

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
        // width: deviceWidth<380? 150:300,
        // height: deviceWidth<380? 150:300,
        // borderRadius: deviceWidth<380? 75:150,
        borderWidth: 3,
        borderColor: colors.steelBlue,
        overflow: 'hidden',
        margin: 36,

    },
    image: {
        width: '100%',
        height: '100%',
    },
    summeryText: {
        margin: 20,
        fontSize: 18,
        textAlign: 'center',
        fontFamily: 'open-sans',
    },
    highlight: {
        color: colors.darkRed,
        fontFamily: 'open-sans-bold',
    }
});
