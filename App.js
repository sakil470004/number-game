import { ImageBackground, StyleSheet } from 'react-native';
import StartGameScreen from './screens/StartGameScreen';
import { LinearGradient } from 'expo-linear-gradient';

export default function App() {
  return (
    <LinearGradient colors={['#99b52f', '#e9e9e9', '#3b5998',]} style={styles.rootScreen}>
      <ImageBackground source={require('./assets/images/background.png')} resizeMode="cover" 
      style={styles.rootScreen}
      imageStyle={{ opacity: 0.35 }}>
      
        <StartGameScreen />
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  }
});