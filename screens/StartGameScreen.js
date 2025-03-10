import { StyleSheet, TextInput, View } from "react-native";
import PrimaryButton from "../components/PrimaryButton";

function StartGameScreen() {
    return (
        <View style={styles.inputContainer}>
            <TextInput />
            <PrimaryButton>Reset</PrimaryButton>
            <PrimaryButton>Confirm</PrimaryButton>
        </View>
    )
}
const styles = StyleSheet.create({
  inputContainer:{
    padding:16,
    marginTop:100,
    marginHorizontal:24,
    backgroundColor:'#72063C',
    borderRadius:8,
    elevation:4, // shadow on android,
    shadowColor:'black', // shadow on ios
    shadowOffset:{width:0,height:2},
    shadowOpacity:0.26,
    shadowRadius:8,

  }
});
export default StartGameScreen;