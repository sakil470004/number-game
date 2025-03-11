import { View, Text, Pressable, StyleSheet } from "react-native";
import colors from "../constants/colors";

function PrimaryButton({ children ,onPress}) {
 
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable style={({pressed})=>pressed?[styles.buttonInnerContainer,styles.pressed] : styles.buttonInnerContainer} onPress={onPress} android_ripple={{ color: colors.darkRed }}>
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
}
export default PrimaryButton;

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: 'hidden',
  },
  buttonInnerContainer: {
    backgroundColor: colors.primary,
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,// shadow on android

  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  pressed:{// shadow on ios
    opacity:0.75,
  }
});
