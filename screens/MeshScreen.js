import React from "react";
import { View, Text, StyleSheet } from "react-native";
export default function MeshScreen() {
  return (
    <View style={styles.container}>
      <Text>Hello</Text>
    </View>
  );
}

MeshScreen.navigationOptions = {
  title: "Join a Mesh Network"
};
const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
