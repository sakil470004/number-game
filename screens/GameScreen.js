import { StyleSheet, Text, View } from "react-native";

function GameScreen() {
  return (
    <View style={styles.container}>
      <Text>Opponent's Guess</Text>
      {/* GUESS */}
      <View>
        <Text >Higher or Lower lorem100</Text>
        {/* +- */}
      </View>
      {/* <View>LOG ROUNDS</View> */}
    </View>
  );
}
export default GameScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
  },

});