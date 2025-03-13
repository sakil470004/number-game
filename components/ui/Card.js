import { StyleSheet, View } from "react-native";
import colors from "../../constants/colors";

function Card({ children }) {
  return (
    <View style={styles.card}>
      {children}
    </View>
  );
}
export default Card;
const styles = StyleSheet.create({
    card: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        marginTop: 36,
        marginHorizontal: 24,
        backgroundColor: colors.primaryDeep,
        borderRadius: 8,
        elevation: 4, // shadow on android,
        shadowColor: 'black', // shadow on ios
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.26,
        shadowRadius: 8,
    },
    });