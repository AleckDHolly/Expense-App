import { View, StyleSheet, Text } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import Card from "../components/Card";

const MainScreen = () => {
  return (
    <View style={styles.screenContainer}>
      <View style={styles.userDashCont}>
        <View style={styles.dashInnerCont}>
          <Text style={styles.welcomeText}>Good Morning</Text>
          <Text>Jordy & Aleck</Text>
          <View style={styles.iconContainer}></View>
          <Ionicons name="notifications" size={24} color={"black"} />
        </View>
      </View>
      <View style={styles.cardView}>
        <Card />
      </View>
      <View style={styles.upcomingCont}>
        <Text style={styles.textHeader}>Upcoming payments</Text>
        <Text
          style={{ color: "blue" }}
          onPress={() => console.log("View all!")}
        >
          View all
        </Text>
      </View>
    </View>
  );
};

export default MainScreen;

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  userDashCont: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  dashInnerCont: {
    height: "auto",
    width: "auto",
  },
  welcomeCont: {
    height: 200,
    width: "100%",
    backgroundColor: "white",
  },
  welcomeText: {
    fontWeight: "bold",
  },
  iconContainer: {
    margin: 5,
  },
  upcomingCont: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  textHeader: {
    fontWeight: "bold",
    fontSize: 20,
    fontStyle: "italic",
  },
  cardView: {
    width: "95%",
    borderRadius: 10,
    backgroundColor: "gray",
    height: 350,
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  expenseItemCont: {},
});
