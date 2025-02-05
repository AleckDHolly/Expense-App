import { StatusBar } from "expo-status-bar";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MainScreen from "./screens/MainScreen";
import { NavigationContainer } from "@react-navigation/native";
import Ionicons from "@expo/vector-icons/Ionicons";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          animation: "fade",
        }}
      >
        <Tab.Screen
          name="main"
          component={MainScreen}
          options={{
            headerShown: false,
            tabBarIcon: () => <Ionicons name="home" />,
          }}
        />

        <Tab.Screen
          name="insight"
          component={MainScreen}
          options={{
            headerShown: false,
            tabBarIcon: () => <Ionicons name="alert" />,
          }}
        />

        <Tab.Screen
          name="action"
          component={MainScreen}
          options={{
            headerShown: false,
            tabBarIcon: () => <Ionicons name="heart" />,
          }}
        />

        <Tab.Screen
          name="card"
          component={MainScreen}
          options={{
            headerShown: false,
            tabBarIcon: () => <Ionicons name="card" />,
          }}
        />

        <Tab.Screen
          name="account"
          component={MainScreen}
          options={{
            headerShown: false,
            tabBarIcon: () => <Ionicons name="person" />,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
