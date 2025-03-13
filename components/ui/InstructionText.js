import { StyleSheet, Text } from "react-native";
import colors from "../../constants/colors";

function InstructionText({children}) {
  return (
                <Text style={styles.textInstruction}>{children}</Text>
  );

}
export default InstructionText;
const styles = StyleSheet.create({
textInstruction: {
        fontSize: 18,
        color: colors.secondary,
        fontWeight: 'bold',
        marginBottom: 12,
    },
});