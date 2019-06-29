import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

export default function MessageScreen() {
  return (
    <View>
      <Text> heloo</Text>
    </View>
  );
}

MessageScreen.navigationOptions = {
  title: "Message nearby Meshs"
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: "#fff"
  }
});
