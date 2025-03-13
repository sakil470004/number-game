import { ImageBackground, SafeAreaView, StyleSheet } from 'react-native';
import StartGameScreen from './screens/StartGameScreen';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import GameScreen from './screens/GameScreen';
import colors from './constants/colors';

export default function App() {
  const [userNumber, setUserNumber] = useState();
  function pickedNumberHandler(selectedNumber) {
    setUserNumber(selectedNumber);
  }
  let screen = <StartGameScreen onPickNumber={pickedNumberHandler}/>
  if (userNumber) {
    screen = <GameScreen userNumber={userNumber}/>;
  }
  return (
    <LinearGradient colors={[colors.secondary, colors.transparentLightGray, colors.lightSkyBlue]} style={styles.rootScreen}>
      <ImageBackground source={require('./assets/images/background.png')} resizeMode="cover"
        style={styles.rootScreen}
        imageStyle={{ opacity: 0.35 }}>

        <SafeAreaView style={styles.rootScreen}>
        {screen}
        </SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  }
});