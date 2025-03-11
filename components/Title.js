import { StyleSheet, Text } from "react-native";

function Title({ children }) {
  return <Text style={styles.title}>{children}</Text>;
}
export default Title;
const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    marginVertical: 10,
    fontWeight: 'bold',
    color: '#f5f5f5',
    textAlign: 'center',
    borderBottomWidth: 2,
    borderRadius: 10,
    borderColor: '#e7e7e7',
    padding: 5,
  }
});