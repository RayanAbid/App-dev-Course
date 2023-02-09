import { StatusBar } from "expo-status-bar";
import { useState } from "react";

import { NavigationContainer } from "@react-navigation/native";
import MyForm from "./src/Pages/MyForm";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./src/Pages/Homescreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen
          name="Form"
          options={{ title: "Overview" }}
          component={MyForm}
        />
      </Stack.Navigator>

      {/* <MyForm />
      <StatusBar style="auto" /> */}
    </NavigationContainer>
  );
}
