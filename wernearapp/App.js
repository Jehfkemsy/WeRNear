import React from "react";
import { View, SafeAreaView } from "react-native";
import AppNavigator from "./navigation/AppNavigator";

export default function App(props) {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <AppNavigator />
    </SafeAreaView>
  );
}
