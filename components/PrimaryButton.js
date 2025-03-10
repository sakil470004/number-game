import { View ,Text} from "react-native";

function PrimaryButton({ children }) {
  return (
    <View className="primary-button">
      {children}
    </View>
  );
}