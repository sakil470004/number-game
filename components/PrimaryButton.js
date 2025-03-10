import { View ,Text} from "react-native";

function PrimaryButton({ children }) {
  return (
    <View className="">
      <Text>{children}</Text>
    </View>
  );
}
export default PrimaryButton;