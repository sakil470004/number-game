import { StyleSheet, Text, View } from "react-native";
import Title from "../components/Title";
import { useState } from "react";

function generateRandomBetween(min, max, exclude) {
  const rndNum=Math.floor(Math.random()*(max-min))+min;

  if(rndNum===exclude){
    return generateRandomBetween(min,max,exclude);
  }else{
    return rndNum;
  }
}

function GameScreen(props) {
  const initialGuess=generateRandomBetween(1,100,props.userChoice);
  const [currentGuess,setCurrentGuess]=useState(initialGuess);
  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
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
  screen: {
    flex: 1,
    padding: 12,
  },
  

});