import { StyleSheet, TextInput, View, Alert } from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";
import { useState } from "react";
import colors from "../constants/colors";

function StartGameScreen({ onPickNumber }) {
    const [enteredNumber, setEnteredNumber] = useState('');
    function numberInputHandler(enterText) {
        setEnteredNumber(enterText);
    }
    function resetInputHandler() {
        setEnteredNumber('');
    }
    function confirmInputHandler() {
        const chosenNumber = parseInt(enteredNumber);
        if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
            Alert.alert('Invalid Number!', 'Number has to be a number between 1 and 99.', [{ text: 'Okay', style: 'destructive', onPress: () => { resetInputHandler( ) } }]);
            return;
        }
        onPickNumber(chosenNumber);
    }
    return (
        <View style={styles.inputContainer}>
            <TextInput style={styles.numberInput} maxLength={2} keyboardType="number-pad"
                autoCapitalize="none" autoCorrect={false} value={enteredNumber} onChangeText={numberInputHandler} />
            <View style={styles.buttonsContainer}>
                <View style={styles.buttonContainer}>

                    <PrimaryButton onPress={resetInputHandler} >Reset</PrimaryButton>
                </View>
                <View style={styles.buttonContainer}>
                    <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
                </View>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    inputContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        marginTop: 100,
        marginHorizontal: 24,
        backgroundColor: colors.primaryDeep,
        borderRadius: 8,
        elevation: 4, // shadow on android,
        shadowColor: 'black', // shadow on ios
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.26,
        shadowRadius: 8,
    },
    numberInput: {
        height: 50,
        width: 50,
        fontSize: 32,
        borderBottomColor: colors.secondary,
        borderBottomWidth: 2,
        color: colors.secondary,
        marginVertical: 8,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    buttonsContainer: {
        flexDirection: 'row',
    },
    buttonContainer: {
        flex: 1,
    }
});
export default StartGameScreen;