import { StyleSheet, Text, View } from "react-native";
import colors from "../../constants/colors";

function NumberContainer(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.number}>{props.children}</Text>
    </View>
  );
}
export default NumberContainer;
const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: colors.steelBlue,
    padding: 10,
    borderRadius: 10,
    marginVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  number: {
    color: colors.primaryDeep,
    fontSize: 36,
    fontWeight: 'bold',
  },
});