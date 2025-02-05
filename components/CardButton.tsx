import { StyleProp, StyleSheet, Text, View, ViewStyle } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

interface CardButtonProps {
  text: string;
  icon: keyof typeof Ionicons.glyphMap;
  size: number;
  style: StyleProp<ViewStyle>;
}

const CardButton = ({ text, icon, size, style }: CardButtonProps) => {
  return (
    <View style={[styles.cardButtonView, style]}>
      <Text>{text}</Text>
      <Ionicons name={icon} size={size} color={"black"} />
    </View>
  );
};

export default CardButton;

const styles = StyleSheet.create({
  cardButtonView: {
    backgroundColor: "white",
    padding: 10,
    marginHorizontal: 5,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
});
