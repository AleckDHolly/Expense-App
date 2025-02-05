import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import CardButton from "./CardButton";
import Ionicons from "@expo/vector-icons/Ionicons";

const Card = () => {
  return (
    <View style={{ flex: 1, justifyContent: "space-between" }}>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Text>Total balance</Text>
        <TouchableOpacity>
          <CardButton
            style={{ flexDirection: "row" }}
            text="Main account"
            icon="chevron-down"
            size={25}
          />
        </TouchableOpacity>
      </View>

      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <View>
          <Text>$12,902.72</Text>
          <Text>**** **** **** 7263</Text>
        </View>

        <Ionicons name="eye" />
      </View>

      <View style={styles.bottomButtons}>
        <TouchableOpacity>
          <CardButton
            style={{ flexDirection: "row-reverse", flex: 2 }}
            text="Receive"
            icon="card"
            size={25}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <CardButton
            text="Send"
            style={{ flexDirection: "row-reverse", flex: 2 }}
            icon="card"
            size={25}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <CardButton
            style={{
              flexDirection: "row",
              borderRadius: 100,
              alignItems: "center",
              flex: 1,
            }}
            text=""
            icon="ellipsis-horizontal"
            size={25}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  bottomButtons: {
    flexDirection: "row",
    width: "100%",
  },
});
