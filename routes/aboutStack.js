import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import About from "../screens/about";

const Stack = createStackNavigator();

export const AboutStack = () => (
  <Stack.Navigator
    initialRouteName="About"
    screenOptions={{
      headerStyle: {
        backgroundColor: "#eee",
        height: 60,
      },
      headerTintColor: "#444",
    }}
  >
    <Stack.Screen
      name="About"
      component={About}
      options={{
        title: "About GameZone",
      }}
    />
  </Stack.Navigator>
);
