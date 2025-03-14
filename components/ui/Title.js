import { StyleSheet, Text } from "react-native";
import colors from "../../constants/colors";

function Title({ children,style }) {
  return <Text style={[styles.title,style]}>{children}</Text>;
}
export default Title;
const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontFamily: 'open-sans-bold',
    marginVertical: 10,
    // fontWeight: 'bold',
    color: colors.lightCyan,
    textAlign: 'center',
    borderBottomWidth: 2,
    borderRadius: 10,
    borderColor: colors.transparentWhite,
    padding: 5,
  }
});