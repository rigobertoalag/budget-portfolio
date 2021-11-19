import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialIcons } from "@expo/vector-icons";

import IndexBudget from "./budget/IndexBudget.jsx";
import SavingDetails from "./budget/SavingDetails.jsx";
import Profile from "./users/Profile.jsx";
import WithDrawDetails from "./budget/WithdrawDetails.jsx";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;

            if (route.name === "Inicio") {
              iconName = "home-filled";
            } else if (route.name === "Ahorros") {
              iconName = "attach-money";
            } else if (route.name === "Gastos") {
              iconName = "money-off";
            } else if (route.name === "Perfil") {
              iconName = "person";
            } else if (route.name === "Añadir") {
              iconName = "add-circle";
            }

            // You can return any component that you like here!
            return <MaterialIcons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "#5624D0",
          tabBarInactiveTintColor: "gray",
          headerShown: false,
        })}
      >
        <Tab.Screen name="Inicio" component={IndexBudget} />
        <Tab.Screen name="Ahorros" component={SavingDetails} />
        <Tab.Screen name="Añadir" component={SavingDetails} />
        <Tab.Screen name="Gastos" component={WithDrawDetails} />
        <Tab.Screen name="Perfil" component={Profile} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
