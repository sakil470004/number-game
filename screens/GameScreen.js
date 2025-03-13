import { Alert, StyleSheet, Text, View } from "react-native";
import Title from "../components/ui/Title";
import { useEffect, useState } from "react";
import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/ui/PrimaryButton";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";

function generateRandomBetween(min, max, exclude) {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
}
let minBoundary = 1;
let maxBoundary = 100;
function GameScreen(props) {

  const initialGuess = generateRandomBetween(1, 100, props.userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);

  useEffect(() => {
    if (currentGuess === props.userNumber) {
      props.onGameOver();
    }
  }, [currentGuess, props.userNumber,props.onGameOver]);
  function nextGuessHandler(direction) {
    if((direction === 'lower' && currentGuess < props.userNumber) || (direction === 'greater' && currentGuess > props.userNumber)){
      Alert.alert('Don\'t lie!', 'You know that this is wrong...', [{ text: 'Sorry!', style: 'cancel' }]);
      return;
    }

    if (direction === 'lower') {
      maxBoundary = currentGuess;
    } else {
      minBoundary = currentGuess + 1;

    }
    let newRndNumber = generateRandomBetween(minBoundary, maxBoundary, currentGuess);
    setCurrentGuess(newRndNumber);
  }

  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card>
        <InstructionText>Higher Or Lower</InstructionText>
        <View >
          <PrimaryButton onPress={nextGuessHandler.bind(this,'lower')}>-</PrimaryButton>
          <PrimaryButton onPress={ nextGuessHandler.bind(this,'greater')}>+</PrimaryButton>
        </View>
      </Card>
      {/* <View>LOG ROUNDS</View> */}
    </View>
  );
}
export default GameScreen;
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 12,
  },

});