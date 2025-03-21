import { Alert, Dimensions, FlatList, ScrollView, StyleSheet, Text, View, useWindowDimensions } from "react-native";
import Title from "../components/ui/Title";
import { useEffect, useState } from "react";
import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/ui/PrimaryButton";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";
import { Ionicons } from '@expo/vector-icons';

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
  const [guessRounds, setGuessRounds] = useState([initialGuess]);
  const { width, height } = useWindowDimensions();

  useEffect(() => {
    if (currentGuess === props.userNumber) {
      props.onGameOver(guessRounds.length);
    }
  }, [currentGuess, props.userNumber, props.onGameOver]);
  useEffect(() => {
    minBoundary = 1;
    maxBoundary = 100;
  }, []);
  function nextGuessHandler(direction) {
    if ((direction === 'lower' && currentGuess < props.userNumber) || (direction === 'greater' && currentGuess > props.userNumber)) {
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
    setGuessRounds((prevGuessRounds) => [newRndNumber, ...prevGuessRounds]);
  }
  let content = <>
    <NumberContainer>{currentGuess}</NumberContainer>
    <Card>
     <View style={styles.buttonsContainer} >
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')}>
            <Ionicons name="remove" size={24} color="white" />
          </PrimaryButton>
        </View>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={nextGuessHandler.bind(this, 'greater')}>
            <Ionicons name="add" size={24} color="white" />
          </PrimaryButton>
        </View>
      </View>
    </Card>
  </>
  if (width > 500) {
    content = <>
      <InstructionText style={styles.instructionText}>Higher Or Lower</InstructionText>
      <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center',gap:40 }}>
         <View style={{flex:1}}>

         <PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')}>
            <Ionicons name="remove" size={24} color="white" />
          </PrimaryButton>
         </View>
        <NumberContainer>{currentGuess}</NumberContainer>
        <View style={{flex:1}}>

          <PrimaryButton onPress={nextGuessHandler.bind(this, 'greater')}>
            <Ionicons name="add" size={24} color="white" />
          </PrimaryButton>
        </View>
         </View>
    </>
  }
  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      {content}
      <View style={{ flex: 1, marginTop: 12 }}>

        <FlatList data={guessRounds} keyExtractor={item => item.toString()} renderItem={({ item, index }) => (
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 8, borderBottomColor: 'black', borderBottomWidth: 1, padding: 8, marginHorizontal: 8 }}>
            <Text style={{ textAlign: 'center' }}>#{guessRounds.length - index}.</Text>
            <Text style={{ textAlign: 'center' }}>{item}</Text>
          </View>
        )} />
      </View>
    </View>
  );
}
export default GameScreen;
const deviceWidth = Dimensions.get('window').width;
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 12,
  },
  instructionText: {
    marginBottom: deviceWidth < 380 ? 12 : 24,
  },
  buttonsContainer: {
    flexDirection: 'row',
  },
  buttonContainer: {
    flex: 1,
  }

});