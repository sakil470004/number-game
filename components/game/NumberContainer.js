import { StyleSheet, Text, View,Dimensions } from "react-native";
import colors from "../../constants/colors";

function NumberContainer(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.number}>{props.children}</Text>
    </View>
  );
}
export default NumberContainer;
const deviceWidth = Dimensions.get('window').width;
const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: colors.steelBlue,
    padding: deviceWidth<380? 12:24,
    borderRadius: 10,
    marginVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  number: {
    color: colors.primaryDeep,
    fontSize: deviceWidth<380? 24:36,
    fontWeight: 'bold',
  },
});