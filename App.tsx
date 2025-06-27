import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./src/screens/HomeScreen";
import PostDetailsScreen from "./src/screens/PostDetailsScreen";

export type RootStackParamList = {
  Home: undefined;
  Details: { postId: number; title: string; body: string };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={PostDetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
